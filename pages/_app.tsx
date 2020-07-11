import App, { AppProps } from "next/app";
import React, { FC, Fragment, CSSProperties } from "react";
import LogoSvg from "public/logo3-28.svg";
import { useGlobalEvent } from "beautiful-react-hooks";
import { IoLogoWhatsapp, IoLogoFacebook } from "react-icons/io";

import "styles/reset.css";
import "styles/typography.scss";
import "styles/theme.scss";

import { useState, useEffect } from "react";
import { Button, Loading } from "components";
import { Frame, Container, Spacer, Section } from "layouts";
import { Header, Logo, Nav, SocialNav } from "layouts/Header";

export type Props = AppProps

export const Root: FC<Props> = ({ pageProps, Component }) => {
  const [loading, setLoading] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  
  useGlobalEvent("scroll")((e) => setShowHeader(window.scrollY > 400));
  
  return (
    <>
      <style jsx>{`
        .header {
          height: 100px;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-content: space-between;
        }
      `}</style>
      <header className="header">
        <Logo href="#home" src=""><LogoSvg /></Logo>
        <Nav>
          <Nav.Item href="#about" title="About" onClick={(e) => console.log("asd")} />
          <Nav.Item href="#work" title="Work" />
          <Nav.Item href="#services" title="Services" />
          <Nav.Item href="#contact" title="Contact" style={"button"} />
        </Nav>
      </header>
      <style jsx>{`
        .contact-info, .tag-line {
          position: fixed;
          top: 50vh;
          text-transform: uppercase;
          font-size: 1.7rem;
          transform: perspective(1px) translate(-50%) rotate(-90deg) translate3d(0, 0, 0) scale(0.99);
          backface-visibility: hidden;
          left: calc(var(--frame-border) / 2);
          letter-spacing: 0.075rem;
          display: flex;
          align-items: center;
          justify-content: center;
          -webkit-font-smoothing: antialiased;

          a {
            text-decoration: none;
            margin: var(--space-2x);
            color: rgba(var(--color-text-rgb), 0.85);

            &:hover, &:focus, &:active {
              color: var(--color-accent);
            }
          }

          .contact-info__icon {
            font-size: 2.8rem;
            transform: rotate(90deg);
          }
        }

        .tag-line {
          left: unset;
          right: calc(var(--frame-border) / 2);
          transform: perspective(1px) translate(50%) rotate(90deg) translate3d(0, 0, 0) scale(0.99);
        }
      `}</style>
      <span className="contact-info">
        <a className="contact-info__icon" href="#facebook"><IoLogoFacebook /></a>
        <a className="contact-info__icon" href="#whatsapp"><IoLogoWhatsapp /></a>
        
        <a href="mailto:info@tellmann.co.za">info@tellmann.co.za</a>
        
        <a href="tel:+27760313590">076 031 3590</a>
      </span>
      <div className="tag-line"><a href="#about">Your Partners in Success</a></div>
      {/*<header>
        <div className="desktop">
          logo
          nav
            home
            About
            Work
            Services
            Contact - as button
        </div>
        <div className="mobile">
          logo
          icon
          nav
            home - hi.
            About - who we are
            Work - what we've done
            Services - what we can do
            Contact - get in touch
          line
          address
          line
          social icons
          email
          
          background graphics
          
        </div>
      </header>*/}
      <style jsx>{`
        .main {
          min-height: calc(100vh - var(--header-height));
          background-color: red;
          margin: 0 60px;
        }
      `}</style>
      <main className="main">
        <Component {...pageProps} />
      </main>
      <style jsx>{`
        .footer {
          height: var(--frame-border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 17px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.075rem;

          .footer-heart {
            color: red;
            font-size: 24px
          }
        }
      `}</style>
      <footer className="footer">Made with <span className="footer-heart">&nbsp;❤&nbsp;</span> by Tellmann</footer>
      {/*<Frame>
        <Header showHeader={showHeader}>
          <Logo href="#home" src=""><LogoSvg /></Logo>
          <Nav>
            <Nav.Item href="#services" title="Services" onClick={(e) => console.log("asd")} />
            <Nav.Item href="#work" title="Work" />
            <Nav.Item href="#process" title="Process" />
            <Nav.Item href="#contact" title="Contact" />
          </Nav>
          <SocialNav>
            <SocialNav.Item icon={`FaFacebook`} href={``} title={`Facebook`} />
            <SocialNav.Item icon={`IoLogoWhatsapp`} href={``} title={`Whatsapp`} />
          </SocialNav>
          <Button href={``} onClick={(e) => console.log("asd2")} title="Get Started" size="1.5rem" />
        </Header>
        
      </Frame>*/}
      {/*<Footer>
        <FooterNav>
          <FooterNavGroup title={`Selling Online made Easy`} responsive={["col", "col", "hidden"]}>
            <FooterNavItem href={``} onClick={``}>Who we are</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Sell online</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Shopify Features</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Ecommerce Websites</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Ecommerce Lessons</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Who we are</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Sell online</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Shopify Features</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Ecommerce Websites</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Ecommerce Lessons</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Who we are</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Sell online</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Shopify Features</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Ecommerce Websites</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Ecommerce Lessons</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Who we are</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Sell online</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Shopify Features</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Ecommerce Websites</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Ecommerce Lessons</FooterNavItem>
          </FooterNavGroup>
          <FooterNavGroup title={`Tools`} desktopOnly>
            <FooterNavItem href={``} onClick={``}>Who we are</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Sell online</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Shopify Features</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Ecommerce Websites</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Ecommerce Lessons</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Who we are</FooterNavItem>
          </FooterNavGroup>
          <FooterNavGroup title={`Support`}>
            <FooterNavItem href={``} onClick={``}>Who we are</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Sell online</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Shopify Features</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Ecommerce Websites</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Ecommerce Lessons</FooterNavItem>
          </FooterNavGroup>
          <FooterNavGroup title={`Tellmann`}>
            <FooterNavItem href={``} onClick={``}>Who we are</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Sell online</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Shopify Features</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Ecommerce Websites</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Ecommerce Lessons</FooterNavItem>
          </FooterNavGroup>
        </FooterNav>
        
        <SocialNav footer>
          <SocialNavItem icon={``} href={``} title={``} />
          <SocialNavItem icon={``} href={``} title={``} />
        </SocialNav>
        <Text small center>We limit ourselves to a small number of active projects at a time to ensure that we can give
          each
          one focused, individual attention during their respective durations. We work on a first come, first serve
          basis and can guarantee a starting date for a project only once a deposit has been received. Deposits are
          non-refundable. We reserve the right to mark a project as inactive if there is a delay of actionable feedback
          from the client for a period of at least 2 weeks. Inactive projects can be reactivated if the client comes
          back with actionable feedback within 3 months of the project going inactive. Failing that, the project will
          require a new deposit in order to be reactivated.
        </Text>
        <FooterCopyrights>{`Copyright © 2017 - ${new Date(Date.now()).getFullYear()}. All rights reserved. Tellmann.`}</FooterCopyrights>
        <FooterEndNote>
          <Logo />
        </FooterEndNote>
      </Footer>*/}
    </>
  );
};
/*
Root.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
};*/

export default Root;
import App, { AppProps } from "next/app";
import React, { FC, Fragment, CSSProperties } from "react";
import LogoSvg from "public/logo3-28.svg";
import { useGlobalEvent } from "beautiful-react-hooks";
import { IoLogoWhatsapp, IoLogoFacebook } from "react-icons/io";

import "styles/reset.scss";
import "styles/typography.scss";
import "styles/theme.scss";
import "styles/animations.scss";
import "styles/button.scss";
import "styles/responsive.scss";

import { useState, useEffect } from "react";
import { Button, Loading } from "components";
import { Frame, Container, Spacer, Section, Footer } from "layouts";
import { Header, Logo, Nav, SocialNav } from "layouts/Header";

export type Props = AppProps

export const Root: FC<Props> = ({ pageProps, Component }) => {
  const [showHeader, setShowHeader] = useState(false);
  
  useGlobalEvent("scroll")((e) => document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`));
  useGlobalEvent("resize")((e) => document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`));
  useGlobalEvent("touchmove")((e) => document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`));
  
  return (
    <>
      <style jsx>{`
        @import 'styles/mixins';
        
        .main {
          min-height: calc(100vh);
          margin: 0 0 0;
          overflow: hidden;
          @include responsive('tablet-and-up') {
            min-height: calc(100vh - var(--header-height));
            margin: var(--header-height) 0 0;
          }
          @include responsive('desktop') {
            min-height: calc(100vh - var(--header-height));
            margin: var(--header-height) var(--frame-border) 0;
          }
        }
      
      `}</style>
      <Header
        logo={{ href: "#home", src: "", alt: "Tellmann Logo" }}
        nav={[
          { href: "#home", title: "Home", alt: "Hi.", style: "hideOnDesktop" },
          { href: "#about", title: "About", alt: "Who we are" },
          { href: "#work", title: "Work", alt: `What we've done` },
          { href: "#services", title: "Services", alt: `What we can do` },
          { href: "#contact", title: "Contact", alt: `Get in touch`, style: "button" }
        ]}
        address={{ city: "Cape Town", street: "Woodstock Exchange", location: "Office 12", tel: "+27760313590" }}
        contactNav={[
          { href: "mailto:info@tellmann.co.za", title: "info@tellmann.co.za", icon: "IoIosMail", nav: true, alt: "Email Us" },
          { href: "tel: +27760313590", title: "076 031 3590", icon: "IoIosCall", alt: "Call Us", nav: true, style: "iconOnMobile" },
          { href: "#facebook", icon: "IoLogoFacebook", alt: "Facebook" },
          { href: "#whatsapp", icon: "IoLogoWhatsapp", alt: "Whatsapp" }
        ]}
      >
      </Header>
      <main className="main">
        <Component {...pageProps} />
        <Footer
          logo={{ href: "#home", src: "", alt: "Tellmann Logo" }}
          partners={[
            { src: "partners-shopify.svg", alt: "Shopify" },
            { src: "partners-shopify.svg", alt: "Shopify" },
            { src: "partners-shopify.svg", alt: "Shopify" },
            { src: "partners-shopify.svg", alt: "Shopify" },
            { src: "partners-shopify.svg", alt: "Shopify" },
          ]}
          nav={[
            {
              title: "Selling Online made Easy",
              responsive: ["col", "col", "hidden"],
              items: [
                { title: "Who we are", href: "#about" },
                { title: "Who we are", href: "#about" },
                { title: "Sell online", href: "#about" },
                { title: "Shopify Features", href: "#about" },
                { title: "Ecommerce Websites", href: "#about" },
                { title: "Ecommerce Lessons", href: "#about" },
                { title: "Who we are", href: "#about" },
                { title: "Sell online", href: "#about" },
                { title: "Shopify Features", href: "#about" },
                { title: "Ecommerce Websites", href: "#about" },
                { title: "Ecommerce Lessons", href: "#about" },
                { title: "Who we are", href: "#about" },
                { title: "Sell online", href: "#about" },
                { title: "Shopify Features", href: "#about" },
                { title: "Ecommerce Websites", href: "#about" },
                { title: "Ecommerce Lessons", href: "#about" },
                { title: "Who we are", href: "#about" },
                { title: "Sell online", href: "#about" },
                { title: "Shopify Features", href: "#about" },
                { title: "Ecommerce Websites", href: "#about" },
                { title: "Ecommerce Lessons", href: "#about" }
              ]
            },
            {
              title: "Tools",
              responsive: ["col", "col", "hidden"],
              items: [
                { title: "Who we are        ", href: "#about" },
                { title: "Sell online       ", href: "#about" },
                { title: "Shopify Features  ", href: "#about" },
                { title: "Ecommerce Websites", href: "#about" },
                { title: "Ecommerce Lessons ", href: "#about" },
                { title: "Who we are        ", href: "#about" }
              ]
            },
            {
              title: "Support",
              responsive: ["col", "col", "hidden"],
              items: [
                { title: "Who we are        ", href: "#about" },
                { title: "Sell online       ", href: "#about" },
                { title: "Shopify Features  ", href: "#about" },
                { title: "Ecommerce Websites", href: "#about" },
                { title: "Ecommerce Lessons ", href: "#about" }
              ]
            },
            {
              title: "Tellmann",
              responsive: ["col", "col", "hidden"],
              items: [
                { title: "Who we are        ", href: "#about" },
                { title: "Sell online       ", href: "#about" },
                { title: "Shopify Features  ", href: "#about" },
                { title: "Ecommerce Websites", href: "#about" },
                { title: "Ecommerce Lessons ", href: "#about" }
              ]
            }
          ]}
          contactNav={[
            { href: "mailto:info@tellmann.co.za", title: "info@tellmann.co.za", icon: "IoIosMail", nav: true, alt: "Email Us" },
            { href: "tel: +27760313590", title: "076 031 3590", icon: "IoIosCall", alt: "Call Us", nav: true, style: "iconOnMobile" },
            { href: "#facebook", icon: "IoLogoFacebook", alt: "Facebook" },
            { href: "#whatsapp", icon: "IoLogoWhatsapp", alt: "Whatsapp" }
          ]}
          copyright={`Copyright © 2017 - ${new Date(Date.now()).getFullYear()}.<br>All rights reserved. Tellmann.`}
        />
      </main>
      
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
import React, { createElement, CSSProperties, FC, MouseEventHandler, useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Container } from "layouts/Container";
import LogoSvg from "public/logo3-28.svg";
import Link from "next/link";
import { Text } from "components";
import './Header.scss';


type HeaderProps = {
  logo: { href: string, src: string, alt?: string }
  nav: { href: string, title: string, alt?: string, style?: "button" | "hideOnDesktop" }[]
  address: { city: string, street: string, location: string, tel: string }
  contactNav: { href: string, title?: string, icon?: string, alt: string, style?: "iconOnMobile", nav?: boolean }[]
  style?: CSSProperties
}

export const Header: FC<HeaderProps> = ({ logo, nav, contactNav, address, style = {} }) => {
  
  const [showMobileHeader, setShowMobileHeader] = useState(false);
  const toggleMobileNav: MouseEventHandler = () => setShowMobileHeader(window.innerWidth <= 600
                                                                       ? !showMobileHeader
                                                                       : showMobileHeader);
  
  return (
    <>
      <header className={`header ${showMobileHeader ? "active" : ""}`} style={style}>
        <Container wrapper align="center" justify="space-between" row>
          {/*================ LOGO ================*/}
          <Link href={logo.href}>
            <a className="logo">
              {logo.src.length ? <img src={logo.src} alt="Logo" /> :
               <LogoSvg style={{ maxWidth: "100%", height: `calc(var(--header-height) - var(--space-4x))`, maxHeight: `100%` }} alt={logo.alt} />}</a>
          </Link>
          {/*================ NAV ================*/}
          <nav className="nav">
            {nav.map(({ href, style, title, alt }, i) =>
              <Link key={href} href={href}>
                <a className={`nav__item${style === "button" ? " button" : (style === "hideOnDesktop"
                                                                            ? " nav__item--hidden"
                                                                            : "")}`} onClick={toggleMobileNav}>
                  <Fade top opposite when={showMobileHeader} delay={90 * (i + 1)} duration={600}>
                    <span className="nav__item__title">{title}</span>
                  </Fade>
                  <Fade when={showMobileHeader} delay={90 * (i + 1) + 350} duration={280}>
                    <span className="nav__item__line" />
                    <span className="nav__item__alt">{alt}</span>
                  </Fade>
                </a>
              </Link>
            )}
            {/*================ ADDRESS ================*/}
            <div className="address">
              <Fade left when={showMobileHeader} delay={(80 * nav.length) / (showMobileHeader ? 1 : 12)} duration={400}>
                <div className="nav__break" />
                <div className="nav__address">
                  <Text h6 noMargin weight={"normal"}>{address.city}</Text>
                  <Text h6 noMargin weight={"normal"}>{address.street}</Text>
                  <Text h6 noMargin weight={"normal"}>{address.location}</Text>
                  <Text h6 noMargin weight={"normal"}><a href={`tel:${address.tel}`}>{address.tel.replace("+27", "0")
                    .replace(/^(\d\d\d)(\d\d\d)(\d\d\d\d)$/, "$1 $2 $3")}</a></Text>
                </div>
                {/*================ CONTACT ================*/}
                <div className="nav__break" />
              </Fade>
            </div>
            <Fade bottom
                  when={showMobileHeader}
                  delay={(80 * (nav.length + 1)) / (showMobileHeader ? 1 : 12)}
                  duration={500}>
              <aside className="nav__contact">
                {contactNav.map(({ href, title = "", icon, alt, style }) =>
                  <a key={href}
                     href={href}
                     className={`nav__contact__item${icon && (style === "iconOnMobile" || title === "")
                                                     ? " nav__contact__item--icon" : " nav__contact__item--text"}`}>
                    {
                      icon && (style === "iconOnMobile" || title === "")
                      ? createElement(require(icon.substr(0, 2).toLowerCase() === "io"
                                              ? "react-icons/io"
                                              : "react-icons/fa")[icon], { alt: title || alt })
                      : title
                    }
                  </a>
                )}
              </aside>
            </Fade>
            <aside className="nav__tagline">
              <a className="nav__tagline__item" href="#about">Your Partners in Success</a>
            </aside>
          </nav>
          <div className="mobile-nav">
            {contactNav.map(({ href, nav, title, icon, alt }) =>
              
              icon && nav
              ? <a key={href} href={href} className={`mobile-nav__item`}>
                {
                  createElement(require(icon.substr(0, 2).toLowerCase() === "io"
                                        ? "react-icons/io"
                                        : "react-icons/fa")[icon], { alt: title || alt })
                }
              </a>
              : title
            )}
            <div className="nav-menu" onClick={toggleMobileNav}>
              <span className="nav-lines" />
            </div>
          </div>
        
        </Container>
      </header>
    </>
  );
};
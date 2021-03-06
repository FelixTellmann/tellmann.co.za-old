import { useGlobalEvent } from "beautiful-react-hooks";
import { ModalBackground, Text } from "components";
import { ModalContext } from "components/ModalBackground";
import { NavIcon } from "components/NavIcon";
import { Container } from "layouts/Container";
import Link from "next/link";
import LogoSvg from "public/logo3-28.svg";
import React, { CSSProperties, FC, MouseEventHandler, useContext, useState } from "react";
import Fade from "react-reveal/Fade";

type HeaderProps = {
  logo: { href: string, src: string, alt?: string }
  nav: { href: string, title: string, alt?: string, style?: "button" | "hideOnDesktop" }[]
  address: { city: string, street: string, location: string, tel: string }
  contactNav: { href: string, title?: string, icon?: JSX.Element, alt: string, style?: "iconOnMobile", nav?: boolean }[]
  style?: CSSProperties
}

export const Header: FC<HeaderProps> = ({ logo, nav, contactNav, address, style = {} }) => {
  
  const [showMobileHeader, setShowMobileHeader] = useState(false);
  const [isHeaderScrolledDown, setIsheaderScrolledDown] = useState(false);
  
  const toggleMobileNav: MouseEventHandler = () => {
    if (window.innerWidth <= 600) {
      setShowMobileHeader(!showMobileHeader);
      
    }
  };
  
  // @ts-ignore
  useGlobalEvent("scroll")((): void => {
    setIsheaderScrolledDown(window.scrollY > 0);
  });
  
  return (
    <>
      <style jsx>{`
        @import 'styles/mixins';

        .header {
          position: fixed;
          z-index: 1000;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--header-height);
          background: transparent;
          color: inherit;
          transition-delay: 0.2s;

          &.scrolled-down {
            @include responsive('small') {
              background-color: rgba(var(--color-background-rgb), 0.7);
              transition: 0.1s ease-in;
              backdrop-filter: saturate(180%) blur(2rem);
              box-shadow: 0px -1px 0px 0px inset rgba(0, 0, 0, 0.15);
            }
          }

          a {
            text-decoration: none;
          }

        }

        .logo {
          min-width: 1px;
          height: 100%;
          min-height: 100%;
          max-height: 100%;
          display: block;
          padding: var(--space-2x) 0;
          color: inherit;

          img, svg {
            max-width: 100%;
            height: calc(var(--header-height) - var(--space-4x));
            max-height: 100%;
          }
        }

        @include responsive('mobile') {
          .nav__tagline {
            display: none;
          }
          .nav {
            position: absolute;
            top: var(--header-height);
            width: 100%;
            height: 0;
            display: flex;
            overflow: hidden;
            flex-direction: column;
            justify-content: space-between;
            padding: 0;
            transition-delay: 0.4s;

            .nav__item {
              display: flex;
              align-items: flex-end;
              justify-content: space-between;
              font-size: 2rem;
              font-weight: 500;

              .nav__item__title {
                position: relative;

                &:before {
                  position: absolute;
                  content: '';
                  z-index: -1;
                  bottom: -15%;
                  left: -5%;
                  width: 0;
                  height: 100%;
                  background-image: linear-gradient(transparent calc(100% - .55em), rgba(var(--color-accent-rgb), 1) 0), linear-gradient(transparent calc(100% - .55em), rgba(var(--color-accent-rgb), 1) 0);
                  background-repeat: no-repeat;
                  background-size: 0 100%, 100% 100%;
                  color: transparent;
                  transition: var(--transition-2);
                }
              }

              &:hover, &:focus, &:active, &.active {
                outline: none;

                & .nav__item__title:before {
                  width: 110%;
                }
              }

              .nav__item__line {
                height: 100%;
                min-height: 0.2rem;
                flex: 1;
                margin: 0 0.8rem 0.2rem;
                background-image: linear-gradient(to right, rgba(var(--color-border-rgb), 0.5) 33%, rgba(255, 255, 255, 0) 0%);
                background-repeat: repeat-x;
                background-position: bottom;
                background-size: 1rem 0.1rem;
              }

              .nav__item__alt {
                font-size: 1.5rem;
                font-weight: 400;
                line-height: 1;
                letter-spacing: 0.05rem;
              }
            }

            .nav__address {
              margin-top: var(--space-8x);
              margin-bottom: var(--space-8x);
              font-size: 1.2rem;

              a {
                &:hover, &:focus, &:active {
                  color: var(--color-accent)
                }
              }
            }

            .nav__contact {
              display: flex;
              flex-direction: row-reverse;
              align-items: center;
              justify-content: space-between;

              a {
                transition: var(--transition);

                &:hover, &:focus, &:active {
                  color: var(--color-accent)
                }
              }

              .nav__contact__item--icon {
                padding: var(--space-2x);
                font-size: 2.6rem;
              }

              .nav__contact__item--text {
                margin-left: auto;
                font-size: 1.4rem;
                font-weight: 400;
                letter-spacing: 0.1rem;
              }
            }

            .nav__break {
              width: 40%;
              height: 0.2rem;
              margin: var(--space-2x) 0;
              border-radius: 0.3rem;
              background-color: var(--color-accent);
            }
          }
          .mobile-nav {
            display: flex;
            align-items: center;
            justify-items: flex-end;

            .mobile-nav__item {
              opacity: 1;
              display: flex;
              align-items: center;
              padding-right: var(--space-2x);
              padding-left: var(--space-2x);
              font-size: 3.0rem;
              transition: var(--transition);

              &:last-of-type {
                margin-right: var(--space-4x);
              }

              &:hover, &:focus, &:active {
                color: var(--color-accent)
              }
            }

          }
          .header.active {
            color: var(--color-background);

            &:before, &:after {
              bottom: -20vh;
              height: 250vh;
              transition-delay: 0s;
            }

            .nav {
              height: calc((var(--vh, 1vh) * 100) - var(--header-height));
              //noinspection CssInvalidPropertyValue
              min-height: -webkit-fill-available;
              padding-top: var(--space-16x);
              padding-bottom: var(--wrapper-padding);
              transition-delay: 0s;
            }

            .mobile-nav {
              .mobile-nav__item {
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
              }

            }
          }
        }

        @include responsive('tablet-and-up') {
          .address, .nav__item--hidden, .mobile-nav, .nav__item__line, .nav__item__alt {
            display: none !important;
          }
          /*remove later*/
          .nav__contact, .nav__tagline {
            display: none;
          }
          .nav {
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: flex-end;
            transition: var(--transition);

            .nav__item:not(.button) {
              position: relative;
              display: flex;
              align-items: center;
              margin: 0 var(--gap);
              padding: var(--space-1x);
              font-size: var(--font-size-nav);
              font-weight: var(--font-weight-nav);
              text-decoration: none;
              transition: var(--transition-2);

              &:last-of-type {
                margin: 0 0 0 var(--gap);
              }

              &:before {
                position: absolute;
                content: '';
                z-index: -1;
                bottom: 0;
                left: 0;
                width: 0;
                height: 100%;
                background-image: linear-gradient(transparent calc(100% - .55em), rgba(var(--color-accent-rgb), 1) 0), linear-gradient(transparent calc(100% - .55em), rgba(var(--color-accent-rgb), 1) 0);
                background-repeat: no-repeat;
                background-size: 0 100%, 100% 100%;
                color: transparent;
                transition: var(--transition-2);
              }

              &:hover, &:focus, &:active, &.active {
                outline: none;

                &:before {
                  width: 100%;
                }
              }
            }

            .button {
              position: relative;
              content: '';
              min-width: 130px;
              max-height: calc(var(--font-line-height) + var(--space-4x) + 0.4rem);
              display: flex;
              align-self: center;
              justify-content: center;
              padding: calc(var(--font-size-button) / 1.75) calc(var(--font-size-button) * 1.75);
              border: 2px solid var(--color-text);
              border-radius: 4px;
              cursor: pointer;
              user-select: none;
              color: var(--color-text);
              font-size: var(--font-size-button);
              font-weight: var(--font-weight-button);
              line-height: var(--font-line-height);
              text-align: center;
              text-decoration: none;
              text-transform: uppercase;
              transition: ease-in-out 0.2s;

              &:before, &:after {
                position: absolute;
                content: '';
                z-index: -1;
                width: 0.5rem;
                height: 6rem;
                opacity: 0;
                display: block;
                background: var(--color-text);
                transition: ease-in-out 0.2s;
              }

              &:before {
                top: -80px;
                left: calc(50% + 4.5px);
              }

              &:after {
                bottom: -80px;
                left: calc(50% - 4.5px);
                background: var(--color-accent);
              }

              &:hover, &:focus, &:active {
                background-color: var(--color-text);
                color: var(--color-background);

                &:before {
                  top: -7px;
                  opacity: 1;
                }

                &:after {
                  bottom: -7px;
                  opacity: 1;
                }
              }
            }

            .nav__item__title {
              opacity: 1 !important;
            }
          }
        }

        @include responsive('tablet') {
          .nav {
            .nav__item:not(.button) {
              margin: 0 var(--space-4x);

              &:last-of-type {
                margin: 0 0 0 var(--gap);
              }
            }
          }
        }

        @include responsive('desktop') {
          .header {
            padding-right: 6rem;
            padding-left: 6rem;
            background: var(--color-background);
          }
          .nav__contact, .nav__tagline {
            position: fixed;
            top: 0;
            width: var(--frame-border);
            height: 100vh;
            opacity: 1 !important;
            display: flex;
            align-items: center;
            justify-content: center;
            writing-mode: vertical-rl;

            a {
              margin: var(--space-1x);
              color: rgba(var(--color-text-rgb), 0.75);
              font-size: 1.4em;
              font-weight: 400;
              letter-spacing: 0.175rem;
              text-decoration: none;
              text-transform: uppercase;

              &.nav__contact__item--icon {
                font-size: 2.4rem;
              }

              &:hover, &:focus, &:active {
                color: var(--color-accent);
              }
            }
          }
          .nav__contact {
            left: 0;

            .nav__contact__item--text {
              margin: var(--space-2x);
              transform: rotate(180deg);
            }
          }
          .nav__tagline {
            right: 0;
          }
        }
      `}</style>
      <header className={`header ${showMobileHeader ? "active" : ""} ${!showMobileHeader && isHeaderScrolledDown
                                                                       ? "scrolled-down"
                                                                       : ""}`} style={style}>
        <ModalBackground isActive={showMobileHeader}>
          <Container wrapper align="center" justify="space-between" row style={{zIndex: 1, position: `relative`}}>
            {/*================ LOGO ================*/}
            <Link href={logo.href}>
              <a className="logo">
                {logo.src.length ? <img src={logo.src} alt="Logo" /> :
                 <LogoSvg style={{ maxWidth: "100%", height: `calc(var(--header-height) - var(--space-4x))`, maxHeight: `100%` }}
                          alt={logo.alt} />}</a>
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
                    <Text h6
                          noMargin
                          weight={"normal"}><a href={`tel:${address.tel}`}>{address.tel.replace("+27", "0").replace(/^(\d\d\d)(\d\d\d)(\d\d\d\d)$/, "$1 $2 $3")}</a></Text>
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
                                                       ? " nav__contact__item--icon"
                                                       : " nav__contact__item--text"}`}>
                      {
                        icon && (style === "iconOnMobile" || title === "") ? icon : title
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
              {contactNav.map(({ href, nav, title, icon }) =>
                icon && nav
                ? <a key={href} href={href} className={`mobile-nav__item`}>{icon}</a>
                : title
              )}
              <NavIcon isOpen={showMobileHeader} toggleMobileNav={toggleMobileNav} />
            </div>
          </Container>
        </ModalBackground>
      </header>
    </>
  );
};
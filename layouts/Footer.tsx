import React, { FC, Children } from "react";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { Button, Text } from "../components";
import { Spacer } from "./Spacer";
import { Container } from "./Container";
import { Grid } from "./Grid";
import Link from "next/link";

export type FooterProps = {
  logo: { href: string, src: string, alt?: string }
  partners?: { src: string, alt: string }[]
  nav?: {
    title: string,
    responsive: string[],
    items: {
      title: string,
      href: string
    }[]
  }[]
  contactNav: { href: string, title?: string, icon?: string, alt: string, style?: "iconOnMobile", nav?: boolean }[]
  copyright: string
}

export const Footer: FC<FooterProps> = ({ partners, children, nav }) => {
  return (
    <>
      <style jsx global>{`
        @import 'styles/mixins';

        .footer {
          position: relative;
          background: radial-gradient(70% 70% at 50% 100%, #1f1f1f 0, #111 100%);
        }

        .footer__background__item {
          border-left: solid 1px rgba(var(--color-border-rgb), 0.1);

          &:last-of-type {
            border-right: solid 1px rgba(var(--color-border-rgb), 0.1);
          }
        }

        .partners {
          position: relative;
          height: 100%;
          min-width: var(--wrapper-width);
          overflow: hidden;
          left: 50%;
          transform: translate(-50%, 0);

          .partners__space-filler {
            opacity: 0;
            pointer-events: none;
            position: relative;
            z-index: -1;
          }

          .partners__banner {
            position: absolute;
            height: 100%;
            width: 300%;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-wrap: nowrap;
          }

          @keyframes partners-slider {
            from {transform: translate(0, 0)}
            to {transform: translate(-100%, 0)}
          }

          .partners__animation {
            @include responsive-max(1350px) {
              animation: partners-slider 30s linear infinite
            }
          }

          .partners__item {
            filter: grayscale(1);
            opacity: 0.8;
            cursor: pointer;
            width: 100%;
            max-width: 100%;
            height: auto;
            max-height: 100%;

            &:hover, &:focus, &:active {
              filter: none;
            }
          }
        }

        .frame-footer {
          height: var(--frame-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(var(--color-text-rgb), 0.75);
          font-size: 1.4em;
          font-weight: 500;
          letter-spacing: 0.075rem;
          text-transform: uppercase;

          .frame-footer__heart {
            color: red;
            font-size: 24px
          }
        }

        .footer {
          .nav {
            display: flex;
            flex-direction: column;
            padding: 0 calc(var(--gap) / 2);

            .nav__heading {
              margin: calc(var(--gap) / 2) 0;
            }

            .nav__item {
              text-decoration: none;
              margin: calc(var(--gap) / 4) 0;
              opacity: 0.8;
              transition: var(--transition-2);

              &:hover, &:focus, &:active {
                opacity: 1;
                color: var(--color-accent);
              }
            }
          }
        }
      
      `}</style>
      <footer className="footer" id="footer">
        <Grid col={[2, 5, 5]}
              style={{ position: `absolute`, top: 0, left: `var(--gap)`, width: `calc(100% - var(--gap) * 2)`, height: `100%`, padding: `0 calc((100% - var(--wrapper-width)) / 2)` }}>
          <div className="footer__background__item" />
          <div className="footer__background__item" />
          <div className="footer__background__item" />
          <div className="footer__background__item" />
          <div className="footer__background__item" />
        </Grid>
        {/*================Partner Logos ================*/}
        <Section bottom={1}
                 id="partners"
                 wrapper
                 style={{ color: "var(--color-background-fixed)", overflow: "hidden" }}>
          <Container wrapper maxWidth="var(--wrapper-width-small)">
            <Text h6 noMargin weight={400} uppercase align={"center"}>Proud Technology Partners</Text>
            <hr className="section-heading__break" />
          </Container>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <div className="partners">
              <div className="partners__banner">
                <Grid col={[partners.length, partners.length, partners.length]} className="partners__animation">
                  {partners.map(({ src, alt }, i) => {
                    return <img key={"1" + src + i} className="partners__item" src={src} alt={alt} />;
                  })}
                </Grid>
                <Grid col={[partners.length, partners.length, partners.length]} className="partners__animation">
                  {partners.map(({ src, alt }, i) => {
                    return <img key={"2" + src + i} className="partners__item" src={src} alt={alt} />;
                  })}
                </Grid>
                <Grid col={[partners.length, partners.length, partners.length]} className="partners__animation">
                  {partners.map(({ src, alt }, i) => {
                    return <img key={"3" + src + i} className="partners__item" src={src} alt={alt} />;
                  })}
                </Grid>
              </div>
              <div className="partners__space-filler">
                <Grid col={[partners.length, partners.length, partners.length]}>
                  {partners.map(({ src, alt }, i) => {
                    return <img key={"4" + src + i} className="partners__item" src={src} alt={alt} />;
                  })}
                </Grid>
              </div>
            </div>
          </div>
        </Section>
        {/*================ Navigation ================*/}
        <Section spacing={2}
                 wrapper
                 id="footer_nav"
                 style={{ color: "var(--color-background-fixed)", overflow: "hidden" }}>
          <Grid col={[2, 5, 5]}>
            {nav.map(({ title, responsive, items }) => <>
                <nav className="nav">
                  <h6 className="nav__heading">{title}</h6>
                  {items.map(({ title, href }) => <>
                    <Link href={href}>
                      <a className="nav__item">{title}</a>
                    </Link>
                  </>)}
                </nav>
              </>
            )}
          </Grid>
        </Section>
        {/*================ Contact info ================*/}
        <Section spacing={2}
                 wrapper
                 id="footer_nav"
                 style={{ color: "var(--color-background-fixed)", overflow: "hidden" }}>
          <Grid col={[2, 5, 5]}>
            hello
          </Grid>
        </Section>
      </footer>
      <legend className="frame-footer">
        Made with <span className="frame-footer__heart">&nbsp;❤&nbsp;</span> by Tellmann
      </legend>
    </>
  );
};
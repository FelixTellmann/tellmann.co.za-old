import React, { FC, Children } from "react";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { Button, Text } from "../components";
import { Spacer } from "./Spacer";
import { Container } from "./Container";
import { Grid } from "./Grid";

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

export const Footer: FC<FooterProps> = ({ partners, children }) => {
  return (
    <>
      <style jsx global>{`
        @import 'styles/mixins';
        
        .footer {
          padding-left: var(--gap);
          padding-right: var(--gap);
          background: var(--color-text-fixed);
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
      `}</style>
      <footer className="footer">
        <Section id="footer"
                 wrapper
                 style={{ color: "var(--color-background-fixed)", overflow: "hidden" }}>
          <Container wrapper maxWidth="var(--wrapper-width-small)">
            <Text h6 noMargin weight={400} uppercase align={"center"}>Proud Technology Partners</Text>
            <hr className="section-heading__break" />
          </Container>
          <div className="partners">
            <div className="partners__banner">
              <Grid col={[partners.length, partners.length, partners.length]} className="partners__animation">
                {partners.map(({ src, alt }) => {
                  return <img key={src} className="partners__item" src={src} alt={alt} />;
                })}
              </Grid>
              <Grid col={[partners.length, partners.length, partners.length]} className="partners__animation">
                {partners.map(({ src, alt }) => {
                  return <img key={src} className="partners__item" src={src} alt={alt} />;
                })}
              </Grid>
              <Grid col={[partners.length, partners.length, partners.length]} className="partners__animation">
                {partners.map(({ src, alt }) => {
                  return <img key={src} className="partners__item" src={src} alt={alt} />;
                })}
              </Grid>
            </div>
            <div className="partners__space-filler">
              <Grid col={[partners.length, partners.length, partners.length]}>
                {partners.map(({ src, alt }) => {
                  return <img key={src} className="partners__item" src={src} alt={alt} />;
                })}
              </Grid>
            </div>
          </div>
        
        </Section>
      </footer>
      <legend className="frame-footer">
        Made with <span className="frame-footer__heart">&nbsp;❤&nbsp;</span> by Tellmann
      </legend>
    </>
  );
};
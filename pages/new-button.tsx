import React, { useRef } from "react";
import { Container } from "layouts/Container";
import { Section } from "layouts/Section";

export default function NewButton() {
  
  return (
    <Section spacing={15}>
      <style jsx>{`
        .button {
          position: relative;
          content: '';
          min-width: 130px;
          max-height: calc(var(--font-line-height) + var(--space-4x) + 0.4rem);
          align-self: center;
          padding: calc(var(--font-size-button) / 1.75) calc(var(--font-size-button) * 1.75);
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
          border: 2px solid var(--color-text);
          border-radius: 4px;

          &:hover, &:focus, &:active {
            background-color: var(--color-text);
            color: var(--color-background);

            &:before {
              top: 0;
              opacity: 1;
            }

            &:after {
              bottom: 0;
              opacity: 1;
            }
          }

          &:before {
            content: '';
            z-index: -1;
            display: block;
            position: absolute;
            background: var(--color-text);
            opacity: 0;
            width: 4px;
            height: 47px;
            left: calc(50% + 3px);
            top: -80px;
            transition: ease-in-out 0.2s;
          }

          &:after {
            content: '';
            z-index: -1;
            display: block;
            position: absolute;
            background: var(--color-accent);
            opacity: 0;
            width: 4px;
            height: 47px;
            left: calc(50% - 3px);
            bottom: -80px;
            transition: ease-in-out 0.2s;
          }
        }
      `}</style>
      <Container wrapper center>
        <a className="button">Get Started</a>
      </Container>
    </Section>
  );
}
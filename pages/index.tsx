import React, { FC, useState } from "react";
import { Section } from "layouts/Section";
import { Text } from "components/Text";
import { Container } from "layouts/Container";
import { Button } from "../components";

const Index: FC = (props) => {
  return (
    <>
      <Section wrapper
               wrapperHeight="100%"
               maxWidth="780px"
               height="calc(100vh - var(--header-height))"
               background="center / cover no-repeat url('hero-background.jpg')"
               zIndex={0}
               overlay="radial-gradient(70% 70% at 50% 100%,#e8e8e8 0,#fafafa 100%)">
        <Container flex={1} justify="center">
          <Text h1 highlight noMargin className="tablet-and-up-only">Hello.</Text>
          <Text h1 highlight noMargin className="mobile-only">Hi.</Text>
          <Text h5 noMargin style={{ marginLeft: "var(--space-2x)" }} weight={"normal"}>
            We are Tellmann, <br />
            a small design & development studio
            specializing in creating websites
            that drive interaction and sales.
          </Text>
          <Text p style={{ marginLeft: "var(--space-2x)" }}>
            <Button secondary title="Get in touch" href="#contact" />
          </Text>
        </Container>
      </Section>
    </>
  );
};

export default Index;
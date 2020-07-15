import React, { FC, useState } from "react";
import { Section, Container, Grid } from "layouts";
import { Text, Button, Card } from "../components";

const Index: FC = (props) => {
  return (
    <>
      <Section wrapper
               wrapperHeight="100%"
               maxWidth="var(--wrapper-width-small)"
               height="calc((var(--vh, 1vh) * 100) - var(--header-height))"
               background={{ background: "center / cover no-repeat url('hero-background.jpg')" }}
               zIndex={0}
               overlay={{ background: "radial-gradient(70% 70% at 50% 100%,#e8e8e8 0,#fafafa 100%)", style: { opacity: 0.8 } }}
               jumpTo={{ title: "what we do", href: "#what_we_do" }}>
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
      <Section wrapper
               spacing={4}
               id="what_we_do"
               background={{ background: "center / cover no-repeat url('topography.svg')", style: { opacity: 0.05 } }}
               zIndex={0}
               heading={{ title: "What we do", subheading: "As one of the top-reviewed Shopify & Shopify Plus experts, our team of skilled designers and developers bring years of experience to the table. We partner with brands to bring their stories to life through creative design, innovative thinking, and a heck of a lot of passion." }}>
        <Container flex={1} justify="center">
          <Grid col={[1, 3, 3]}>
            <Card title="Design"
                  description="A strong visual and verbal message that communicates the value of your company.  One that is recognizable, relatable, and builds trust with your customer. " />
            <Card title="Development"
                  description="A strong visual and verbal message that communicates the value of your company.  One that is recognizable, relatable, and builds trust with your customer. " />
            <Card title="Growth"
                  description="A strong visual and verbal message that communicates the value of your company.  One that is recognizable, relatable, and builds trust with your customer. " />
          </Grid>
        </Container>
      </Section>
    </>
  );
};

export default Index;
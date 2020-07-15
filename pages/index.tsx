import React, { FC, useState } from "react";
import { Section, Container, Grid, Spacer, SectionHeading, GridItem } from "layouts";
import { Text, Button, Card, ImageHover } from "../components";

const Index: FC = (props) => {
  return (
    <>
      {/*================ Hero Section ================*/}
      <Section wrapper
               wrapperHeight="100%"
               maxWidth="var(--wrapper-width-small)"
               height="calc((var(--vh, 1vh) * 100) - var(--header-height))"
               background={{ background: "center / cover no-repeat url('hero-background.jpg')" }}
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
      {/*================ What we do Section  ================*/}
      <Section wrapper
               top={4}
               bottom={0}
               id="what_we_do"
               background={{ background: "center / cover no-repeat url('topography.svg')", style: { opacity: 0.05 } }}
               heading={{ title: "What we do", subheading: "As one of the top-reviewed Shopify & Shopify Plus experts, our team of skilled designers and developers bring years of experience to the table. We partner with brands to bring their stories to life through creative design, innovative thinking, and a heck of a lot of passion." }}
               jumpTo={{ title: "Our Work", href: "#portfolio", position: ["35rem", "38rem", "40rem"] }}>
        
        <Container flex={1} justify="center">
          <Grid col={[1, 2, 3]} gap={[2, 2, 2]}>
            <Card icon={{ src: "design.svg", alt: "Design Icon" }}
                  title="Design"
                  description="A strong visual and verbal message that communicates the value of your company.  One that is recognizable, relatable, and builds trust with your customer. " />
            <Card icon={{ src: "develop.svg", alt: "Develop Icon" }}
                  title="Development"
                  description="A strong visual and verbal message that communicates the value of your company.  One that is recognizable, relatable, and builds trust with your customer. " />
            <Card icon={{ src: "branding.svg", alt: "Growth Icon" }}
                  title="Growth"
                  description="A strong visual and verbal message that communicates the value of your company.  One that is recognizable, relatable, and builds trust with your customer. "
                  className="mobile-and-desktop-only" />
          </Grid>
        </Container>
        <Spacer y={14} />
        <SectionHeading title="We specialize in Shopify"
                        subheading="Accelerating growth of Lifestyle brands with the right strategy and proven methodologies."
                        id="portfolio" />
      </Section>
      {/*================ Portfolio Section ================*/}
      <Section spacing={0}>
        <Container flex={1} justify="center">
          <Grid col={[3, 3, 3]} gap={[0, 0, 0]} row={[2, 2, 2]}>
            <GridItem aspect={4 / 3} col="1 / span 2">
              <ImageHover
                background={`center / cover no-repeat url('portfolio-kidsliving.jpg')`}
                href="#kidsliving"
                title="Kids Living"
                description="shopify - design - development - custom app - growth"
                color="var(--color-text)"
                hoverColor="#123123" />
            </GridItem>
            <GridItem aspect={2 / 3}>
              <ImageHover
                background={`center / cover no-repeat url('portfolio-bushscarf.jpg')`}
                href="#kidsliving"
                title="Kids Living"
                description="shopify - design - development - custom app - growth"
                color="var(--color-text)"
                hoverColor="#123123" />
            </GridItem>
            <GridItem aspect={1 / 1}>
              <ImageHover
                background={`center / cover no-repeat url('portfolio-turningpoint.jpg')`}
                href="#kidsliving"
                title="Kids Living"
                description="shopify - design - development - custom app - growth"
                color="var(--color-text)"
                hoverColor="#123123" />
            </GridItem>
            <GridItem aspect={2 / 1} col="span 2">
              <ImageHover
                background={`center / cover no-repeat url('portfolio-matsidiso.jpg')`}
                href="#kidsliving"
                title="Kids Living"
                description="shopify - design - development - custom app - growth"
                color="var(--color-text)"
                hoverColor="#123123" />
            </GridItem>
          </Grid>
        </Container>
      </Section>
      {/*================ Who we are Section  ================*/}
      <Section wrapper
               top={4}
               bottom={0}
               id="what_we_do"
               background={{ background: "center / cover no-repeat url('topography.svg')", style: { opacity: 0.05 } }}
               heading={{ title: "What we do", subheading: "As one of the top-reviewed Shopify & Shopify Plus experts, our team of skilled designers and developers bring years of experience to the table. We partner with brands to bring their stories to life through creative design, innovative thinking, and a heck of a lot of passion." }}
               jumpTo={{ title: "Our Work", href: "#portfolio", position: ["35rem", "38rem", "40rem"] }}>
        
        <Container flex={1} justify="center">
          <Grid col={[1, 2, 3]} gap={[2, 2, 2]}>
            <Card icon={{ src: "design.svg", alt: "Design Icon" }}
                  title="Design"
                  description="A strong visual and verbal message that communicates the value of your company.  One that is recognizable, relatable, and builds trust with your customer. " />
            <Card icon={{ src: "develop.svg", alt: "Develop Icon" }}
                  title="Development"
                  description="A strong visual and verbal message that communicates the value of your company.  One that is recognizable, relatable, and builds trust with your customer. " />
            <Card icon={{ src: "branding.svg", alt: "Growth Icon" }}
                  title="Growth"
                  description="A strong visual and verbal message that communicates the value of your company.  One that is recognizable, relatable, and builds trust with your customer. "
                  className="mobile-and-desktop-only" />
          </Grid>
        </Container>
        <Spacer y={14} />
        <SectionHeading title="We specialize in Shopify"
                        subheading="Accelerating growth of Lifestyle brands with the right strategy and proven methodologies."
                        id="portfolio" />
      </Section>
      {/*================ Testimonials ================*/}
    </>
  );
};

export default Index;
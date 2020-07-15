import { FC } from "react";
import { Container } from "./Container";
import { Text } from "../components";
import { Spacer } from "./Spacer";


export type SectionHeadingProps = {
  title: string
  subheading?: string
  id?: string
}


export const SectionHeading: FC<SectionHeadingProps> = ({ title, subheading, id = "" }) => {
  
  return <>
    <style jsx>{`
      .section-heading__break {
        width: 14rem;
        max-width: 24rem;
        height: 0.3rem;
        display: block;
        margin: var(--space-4x) auto;
        border: 0;
        background: var(--color-accent);
      }
    
    `}</style>
    <Container wrapper maxWidth="var(--wrapper-width-small)" className="section--heading" id={id}>
      <Text h2 center noMargin>{title}</Text>
      <hr className="section-heading__break" />
      {subheading ? <Text h4 weight="normal" center noMargin>{subheading}</Text> : null}
      <Spacer y={4} />
    </Container>
  </>;
};
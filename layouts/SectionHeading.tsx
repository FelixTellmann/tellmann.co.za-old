import { CSSProperties, FC } from "react";
import { Container } from "./Container";
import { Button, Text } from "../components";
import { Spacer } from "./Spacer";
import { TextAlignProperty } from "csstype";

export type SectionHeadingProps = {
  title: string
  subheading?: string
  button?: { title: string, href: string, secondary?: boolean }
  customH2?: CSSProperties
  align?: TextAlignProperty
  id?: string
  className?: string
  style?: CSSProperties
}

export const SectionHeading: FC<SectionHeadingProps> = ({ title, subheading, id = "", button, align, customH2 = {}, style = {} }) => {
  
  align ? (style["textAlign"] = align) : (style["textAlign"] = "center");
  let hrStyle: CSSProperties = {};
  switch (align) {
    case "right":
      hrStyle["margin"] = `var(--space-4x) 0 var(--space-4x) auto`;
      break;
    case "left":
      hrStyle["margin"] = `var(--space-4x) auto var(--space-4x) 0`;
      break;
    default:
      hrStyle["margin"] = `var(--space-4x) auto;`;
  }
  return <>
    <style jsx global>{`
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
    <Container wrapper maxWidth="var(--wrapper-width-small)" className="section--heading" id={id} style={style}>
      <Text h2 noMargin style={customH2}>{title}</Text>
      <hr className="section-heading__break" style={hrStyle} />
      {subheading ? <Text h4 weight="normal" noMargin>{subheading}</Text> : null}
      {button ? <Text p marginTop="var(--gap)"><Button {...button} /></Text> : null}
      <Spacer y={4} />
    </Container>
  </>;
};
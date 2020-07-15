import { createElement, CSSProperties, FC } from "react";
import convertDescriptorToString from "jest-util/build/convertDescriptorToString";
import { Text } from "./Text";
import { Container } from "../layouts";

type CardProps = {
  icon?: { src: string, alt: string }
  title: string
  description: string
  style?: CSSProperties
  id?: string
  className?: string
}

export const Card: FC<CardProps> = ({ icon, title, description, id = "", className = "", style = {} }) => {
  
  icon && (style["--card-icon-mask"] = `url('${icon.src}') no-repeat center;`);
  return (
    <>
      <style jsx>{`
        .card {
          position: relative;
          max-width: 30rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          margin: 0 auto;
          padding: var(--space-8x);
          
          &:before, &:after {
            position: absolute;
            content: '';
            top: 10px;
            left: 10px;
            width: 100%;
            height: 100%;
            background: #d6d6d6;
          }
          
          &:after {
            top: 0;
            left: 0;
            background-color: #f4f4f4;
          }
          
          .card__icon {
            background-color: var(--color-accent);
            mask: var(--card-icon-mask);
          }
        }
      `}</style>
      <div id={id} className={`card ${className}`} style={style}>
        <Container align={"center"} zIndex={1} justify={"flex-end"}>
          <div className="card__icon">
            <img src={icon.src} alt={icon.alt} style={{ opacity: 0 }} />
          </div>
          <Text h5 center>{title}</Text>
          <Text small center noMargin>{description}</Text>
        </Container>
      </div>
    </>
  );
};
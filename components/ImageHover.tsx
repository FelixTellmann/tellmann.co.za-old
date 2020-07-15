import { createElement, CSSProperties, FC } from "react";
import convertDescriptorToString from "jest-util/build/convertDescriptorToString";
import { Text } from "./Text";
import { Container } from "../layouts";
import { ColorProperty } from "csstype";
import Link from "next/link";

type ImageHoverProps = {
  background: string
  href: string
  title: string
  description: string
  color: ColorProperty
  hoverColor: ColorProperty
  style?: CSSProperties
  id?: string
  className?: string
}

export const ImageHover: FC<ImageHoverProps> = ({ background, href, color, hoverColor, title, description, id = "", className = "", style = {} }) => {
  
  background && (style["background"] = background);
  color && (style["color"] = color);
  hoverColor && (style["--image-hover-overlay-color"] = hoverColor);
  
  return (
    <>
      <style jsx>{`
        .image-hover {
          width: 100%;
          overflow: hidden;
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          will-change: transform;
          transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
          text-decoration: none;
          
          .image-hover__overlay {
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 100%;
            background-color: var(--image-hover-overlay-color);
            opacity: 0;
            will-change: transform, opacity;
            transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
            transition-delay: 0.1s;
          }
          
          .image-hover__title, .image-hover__description {
            opacity: 0;
            will-change: transform, opacity;
            transform: scale(0) translateY(0%);
            transition-delay: 0s;
            transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
          }
          
          &:hover, &:focus, &:active {
            transform: scale(1.1, 1.1);
            
            .image-hover__overlay {
              opacity: 0.9;
              transform: scale(1.1, 1.1);
              transition-delay: 0s;
            }
            
            .image-hover__title,  {
              opacity: 1;
              transform: scale(1.2) translateY(0);
              transition-delay: 0.3s;
            }
            .image-hover__description {
              opacity: 1;
              transform: scale(0.8) translateY(0);
              transition-delay: 0.38s;
            }
          }
        }
      `}</style>
      <Link href={href}>
        <a id={id} className={`image-hover ${className}`} style={style}>
          <div className="image-hover__overlay" />
          <Container center height="100%">
            <div className="image-hover__title">
              <Text center h5 noMargin>{title}</Text>
            </div>
            <div className="image-hover__description">
              <Text center h6 noMargin weight={400} uppercase>{description}</Text>
            </div>
          </Container>
        </a>
      </Link>
    </>
  );
};
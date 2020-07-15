import { createElement, CSSProperties, FC } from "react";
import convertDescriptorToString from "jest-util/build/convertDescriptorToString";
import { Text } from "./Text";
import { Container } from "../layouts";
import { ColorProperty } from "csstype";

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
          
          &:hover, &:focus, &:active {
            transform: scale(1.1, 1.1);
          }
        }
      `}</style>
      <div id={id} className={`image-hover ${className}`} style={style}>
      
      </div>
    </>
  );
};
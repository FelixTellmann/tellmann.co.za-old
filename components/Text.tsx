import { FC, createElement, StyleHTMLAttributes, CSSProperties } from "react";

type TextItemProps = {
  /*element type*/
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  p?: boolean;
  span?: boolean
  small?: boolean;
  
  /*css*/
  bold?: boolean
  color?: string
  weight?: "normal" | "bold" | "bolder" | "lighter" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  lineHeight?: number | string
  highlight?: boolean
  uppercase?: boolean
  center?: boolean
  maxWidth?: string
  noMargin?: boolean
  y?: number
  x?: number
  style?: CSSProperties
  /*attributes*/
  onClick?: Function
  id?: string
  className?: string
  /*actions*/
  
  secondary?: boolean
  
}

export const Text: FC<TextItemProps> = (props, { style = {} }) => {
  const { lineHeight, highlight, uppercase, color, weight, center, maxWidth, noMargin, secondary, x, y } = props;
  const elements = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "small"];
  let element = "";
  
  uppercase && (style["textTransform"] = "uppercase");
  color && (style["color"] = color);
  highlight && (style["fontSize"] = "var(--size-highlight)");
  lineHeight && (style["lineHeight"] = lineHeight);
  weight && (style["fontWeight"] = weight);
  center && (style["textAlign"] = "center");
  maxWidth && (style["maxWidth"] = maxWidth);
  noMargin && (style["marginTop"] = 0, style["marginBottom"] = 0);
  (y || x) && (style["padding"] = `calc(var(--gap) * var(--gap-ratio-y)) calc(var(--gap) * var(--gap-ratio-x))`, style["--gap-ratio-y"] = y || 0, style["--gap-ratio-x"] = x || 0);
  
  for (let key in props) {
    if (props.hasOwnProperty(key) && elements.includes(key)) {
      (element = key);
      break;
    }
  }
  
  return element && createElement(element, { style }, props.children);
};
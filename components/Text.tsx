import { FC, createElement, StyleHTMLAttributes, CSSProperties } from "react";
import { MarginBottomProperty, MarginTopProperty, TextAlignProperty } from "csstype";

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
  div?: boolean;
  
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
  marginBottom?: MarginBottomProperty<string>
  marginTop?: MarginTopProperty<string>
  align?: TextAlignProperty | TextAlignProperty[]
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

export const Text: FC<TextItemProps> = ({ style = {}, align = "unset", className,marginTop, marginBottom, ...props }) => {
  const { lineHeight, highlight, uppercase, color, weight, center, maxWidth, noMargin, secondary, x, y } = props;
  const elements = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "small", "div"];
  let element = "";
  
  uppercase && (style["textTransform"] = "uppercase");
  color && (style["color"] = color);
  highlight && (style["letterSpacing"] = "var(--size-highlight-letter-spacing)");
  lineHeight && (style["lineHeight"] = lineHeight);
  weight && (style["fontWeight"] = weight);
  center && (style["textAlign"] = "center");
  maxWidth && (style["maxWidth"] = maxWidth);
  noMargin && (style["marginTop"] = 0, style["marginBottom"] = 0);
  marginBottom && (style["marginBottom"] = marginBottom);
  marginTop && (style["marginTop"] = marginTop);
  (y || x) && (style["padding"] = `calc(var(--gap) * var(--gap-ratio-y)) calc(var(--gap) * var(--gap-ratio-x))`, style["--gap-ratio-y"] = y || 0, style["--gap-ratio-x"] = x || 0);
  highlight && (className = className ? className + ' highlight' : 'highlight')
  if (typeof align === "string") {
    align = [align, align, align];
    
  }
  
  align[2] != "unset" && (style["--text-align"] = align[2]);
  align[1] != "unset" && (style["--text-align-t"] = align[1]);
  align[0] != "unset" && (style["--text-align-m"] = align[0]);
  
  for (let key in props) {
    if (props.hasOwnProperty(key) && elements.includes(key)) {
      (element = key);
      break;
    }
  }
  
  return <>
    <style jsx global>{`
      @import 'styles/mixins';
      
      .text {
        @include responsive('desktop') {
          text-align: var(--text-align);
        }
        @include responsive('tablet') {
          text-align: var(--text-align-t);
        }
        @include responsive('mobile') {
          text-align: var(--text-align-m);
        }
      }
    
    `}</style>
    {element && createElement(element, { className: className ? "text " + className : "text", style }, props.children)}
  </>;
};
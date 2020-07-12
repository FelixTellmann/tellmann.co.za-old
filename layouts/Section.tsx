import { CSSProperties, FC } from "react";

import { Wrapper } from "layouts";
import { BackgroundColorProperty, BackgroundProperty, PositionProperty } from "csstype";

type SectionProps = {
  wrapper?: boolean
  wrapperHeight?: string
  height?: string
  maxWidth?: string
  top?: number
  bottom?: number
  spacing?: number
  background?: string
  zIndex?: number
  position?: PositionProperty
  id?: string
  className?: string
  overlay?: BackgroundColorProperty
  style?: CSSProperties
  line?: "start" | "full" | "end"
  lineColor?: BackgroundColorProperty
}

export const Section: FC<SectionProps> = ({ children, height, zIndex, overlay, line, wrapper, wrapperHeight, maxWidth, position, background, top = 3, bottom = 3, spacing, id = "", className = "", style = {} }) => {
  
  (spacing || spacing === 0) && (top = spacing, bottom = spacing);
  
  background && (style["background"] = background);
  position && (style["position"] = position);
  overlay && (style["--color-overlay"] = overlay);
  height && (style["height"] = height);
  zIndex && (style["zIndex"] = zIndex);
  
  return (
    <>
      <style jsx>{`
        .section {
          position: relative;
          z-index: 0;
          min-height: -webkit-fill-available;
          margin-right: auto;
          margin-left: auto;
          --gap-ratio-top: var(--gap-ratio);
          --gap-ratio-bottom: var(--gap-ratio);
        }
        
        .overlay {
          position: absolute;
          content: '';
          z-index: -1;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.8;
          background: var(--color-overlay);
        }
      
      `}</style>
      
      <style jsx>{`
      .section, .line {
          --gap-ratio-top: ${top};
          --gap-ratio-bottom: ${bottom};
        }
      `}</style>
      <section id={id} className={`section ${className}`} style={style}>
        {overlay ? <div className="overlay" /> : null}
        {line ? <div className={`line line--${line}`} /> : null}
        {wrapper
         ? <Wrapper width={maxWidth && maxWidth}
                    height={wrapperHeight && wrapperHeight}
                    style={{ position: "relative" }}>{children}</Wrapper>
         : children}
      </section>
    </>
  );
};
import { CSSProperties, FC } from "react";

import { Wrapper } from "layouts";
import { BackgroundColorProperty, BackgroundProperty, PositionProperty } from "csstype";

type SectionProps = {
  wrapper?: boolean
  maxWidth?: string
  top?: number
  bottom?: number
  spacing?: number
  background?: string
  position?: PositionProperty
  id?: string
  className?: string
  overlay?: BackgroundColorProperty
  style?: CSSProperties
  line?: "start" | "full" | "end"
  lineColor?: BackgroundColorProperty
}

export const Section: FC<SectionProps> = ({ children, overlay, line, wrapper, maxWidth, position, background, top = 3, bottom = 3, spacing, id = "", className = "", style = {} }) => {
  
  (spacing || spacing === 0) && (top = spacing, bottom = spacing);
  
  background && (style["background"] = background);
  position && (style["position"] = position);
  overlay && (style["--color-overlay"] = overlay);
  
  return (
    <>
      <style jsx>{`
        .section {
          position: relative;
          padding-top: calc(var(--gap) * var(--gap-ratio-top));
          padding-bottom: calc(var(--gap) * var(--gap-ratio-bottom));
          --gap-ratio-top: var(--gap-ratio);
          --gap-ratio-bottom: var(--gap-ratio);
        }

        .overlay {
          position: absolute;
          content: '';
          z-index: -1;
          top: 0;
          left: 0;
          width: calc(100% - (var(--gap) * 4));
          height: 100%;
          margin: calc(var(--gap) * 2);
          background-color: var(--color-overlay);

          &:before, &:after {
            position: absolute;
            content: '';
            width: var(--square-accent-size);
            height: var(--square-accent-size);
          }

          &:before {
            top: 100%;
            left: calc((100% - var(--frame-width)) / 2 + var(--gap) * (1 + (var(--grid-gap-ratio) / 1)) + (var(--frame-width) - (var(--gap) * (2 + var(--grid-gap-ratio)))) * 2 / 3);
            background-color: var(--color-overlay);
          }

          &:after {
            top: calc(100% - var(--square-accent-size));
            left: calc((100% - var(--frame-width)) / 2 + var(--gap) * (1 + (var(--grid-gap-ratio) / 1)) + (var(--frame-width) - (var(--gap) * (2 + var(--grid-gap-ratio)))) * 2 / 3 - var(--square-accent-size));
            background-color: var(--color-background);
          }
        }

        .line {
          position: absolute;
          z-index: 1;
          left: calc((100% - var(--frame-width)) / 2 + var(--gap) * (1 + (var(--grid-gap-ratio) / 2)) + (var(--frame-width) - (var(--gap) * (2 + var(--grid-gap-ratio)))) * 1 / 3 - var(--line-accent-size) / 2);
          width: var(--line-accent-size);
          background-color: var(--color-accent);

          &:before {
            position: absolute;
            content: '';
            left: calc(var(--square-accent-size) / -2 + var(--line-accent-size) / 2);
            width: var(--square-accent-size);
            height: var(--square-accent-size);
          }

          &.line--start {
            bottom: 0;
            height: calc(var(--gap) * var(--gap-ratio-bottom));

            &:before {
              background-color: var(--color-accent);
            }
          }

          &.line--full {
            top: 0;
            height: 100%;

            &:before {
              content: unset;
            }
          }

          &.line--end {
            top: 0;
            height: calc(var(--gap) * var(--gap-ratio-top));

            &:before {
              bottom: 0;
              background-color: var(--color-accent);
            }
          }
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
        {wrapper ? <Wrapper width={maxWidth && maxWidth} style={style}>{children}</Wrapper> : children}
      </section>
    </>
  );
};
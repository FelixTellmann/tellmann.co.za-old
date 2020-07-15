import { CSSProperties, FC } from "react";

import { Container, Spacer, Wrapper } from "layouts";
import { BackgroundColorProperty, BackgroundProperty, BottomProperty, PositionProperty, ZIndexProperty } from "csstype";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { type } from "os";
import { Text } from "../components";
import { SectionHeading, SectionHeadingProps } from "./SectionHeading";

type SectionProps = {
  wrapper?: boolean
  wrapperHeight?: string
  height?: string
  maxWidth?: string
  top?: number
  bottom?: number
  spacing?: number
  background?: { background: BackgroundProperty<string>, style?: CSSProperties }
  zIndex?: ZIndexProperty
  position?: PositionProperty
  id?: string
  heading?: SectionHeadingProps
  className?: string
  overlay?: { background: BackgroundProperty<string>, style?: CSSProperties }
  style?: CSSProperties
  line?: "start" | "full" | "end"
  lineColor?: BackgroundColorProperty
  jumpTo?: { title: string, href: string, position?: BottomProperty<string> | [BottomProperty<string>, BottomProperty<string>, BottomProperty<string>] }
}

export const Section: FC<SectionProps> = ({ children, jumpTo, heading, height, zIndex, overlay, line, wrapper, wrapperHeight, maxWidth, position, background, top = 3, bottom = 3, spacing, id = "", className = "", style = {} }) => {
  
  (spacing || spacing === 0) && (top = spacing, bottom = spacing);
  background?.background && (style["--section-background"] = background.background);
  position && (style["position"] = position);
  overlay?.background && (style["--section-overlay"] = overlay.background);
  height && (style["height"] = height);
  zIndex && (style["zIndex"] = zIndex);
  jumpTo && (style["--section-jump-to-position"] = jumpTo.position || 0, style["--section-jump-to-position-t"] = jumpTo.position || 0, style["--section-jump-to-position-m"] = jumpTo.position || 0);
  
  if (typeof jumpTo?.position === "object" && jumpTo.position?.length === 3) {
    style["--section-jump-to-position"] = jumpTo.position[2];
    style["--section-jump-to-position-t"] = jumpTo.position[1];
    style["--section-jump-to-position-m"] = jumpTo.position[0];
  }
  
  return (
    <>
      <style jsx>{`
        @import 'styles/mixins';
        
        .section {
          position: relative;
          //noinspection CssInvalidPropertyValue
          min-height: -webkit-fill-available;
          margin-right: auto;
          margin-left: auto;
          padding-top: calc(var(--gap) * var(--gap-ratio-top));
          padding-bottom: calc(var(--gap) * var(--gap-ratio-bottom));
          --gap-ratio-top: var(--gap-ratio);
          --gap-ratio-bottom: var(--gap-ratio);
        }
        
        .section__background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--section-background);
        }
        
        .section__overlay {
          position: absolute;
          z-index: 0;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--section-overlay);
        }
        
        .section__jump-to {
          position: absolute;
          bottom: var(--section-jump-to-position);
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
          @include responsive('desktop') {
            bottom: var(--section-jump-to-position);
          }
          @include responsive('tablet') {
            bottom: var(--section-jump-to-position-t);
          }
          @include responsive('mobile') {
            bottom: var(--section-jump-to-position-m);
          }
          
          a {
            position: relative;
            display: flex;
            align-items: flex-end;
            margin-bottom: var(--space-16x);
            color: rgba(var(--color-text-rgb), 0.7);
            text-decoration: none;
            text-transform: uppercase;
            font-size: 1.3rem;
            font-weight: 500;
            
            &:hover, &:focus {
              color: var(--color-accent)
            }
          }
          
          &:before, &:after {
            position: absolute;
            content: '';
            bottom: 0.5rem;
            left: calc(50% - 0.45rem);
            transform: translate(-50%, 50%);
            width: 0.5rem;
            height: 6rem;
            background-color: var(--color-accent);
          }
          
          &:after {
            left: calc(50% + 0.45rem);
            background-color: var(--color-text);
            bottom: -0.5rem;
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
        {background ? <div className="section__background" style={background.style} /> : null}
        {overlay ? <div className="section__overlay" style={overlay.style} /> : null}
        {line ? <div className={`line line--${line}`} /> : null}
        {jumpTo
         ? <div className="section__jump-to">
           <Link href={jumpTo.href}><a>{jumpTo.title}
             <IoIosArrowDown style={{ position: "absolute", right: "calc(-0.8  * var(--space-8x))" }} /></a></Link>
         </div>
         : null}
        {heading ? <SectionHeading {...heading} /> : null}
        {wrapper
         ? <Wrapper width={maxWidth && maxWidth}
                    height={wrapperHeight && wrapperHeight}
                    style={{ position: "relative" }}>{children}</Wrapper>
         : children}
      </section>
    </>
  );
};


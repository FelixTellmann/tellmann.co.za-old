import { CSSProperties, FC } from "react";
import { Wrapper } from "layouts";
import { ZIndexProperty } from "csstype";

type ContainerProps = {
  wrapper?: boolean | string
  maxWidth?: string
  height?: string
  id?: string
  className?: string
  direction?: ("row" | "column" | string)[]
  align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch" | string | ("flex-start" | "flex-end" | "center" | "baseline" | "stretch" | string)[]
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | string | ("flex-start" | "flex-end" | "center" | "baseline" | "stretch" | string)[]
  flex?: number | string
  center?: boolean
  vcenter?: boolean
  row?: boolean
  full?: boolean
  style?: CSSProperties
  zIndex?: ZIndexProperty
}

export const Container: FC<ContainerProps> = (
  {
    children,
    zIndex,
    maxWidth,
    height,
    wrapper,
    direction = ["column", "column", "column"],
    align = ["stretch", "stretch", "stretch"],
    justify = ["flex-start", "flex-start", "flex-start"],
    flex = "0 0 auto",
    center,
    vcenter,
    row,
    full,
    id = "",
    className = "",
    style = {}
  }) => {
  
  if (center) {
    align = "center";
    justify = "center";
    flex = 1;
  }
  
  if (vcenter) {
    justify = "center";
    flex = 1;
  }
  
  if (row) {
    direction = ["row", "row", "row"];
    flex = 1;
  }
  
  if (full) {
    flex = 1;
  }
  
  if (typeof align === "string") {
    align = [align, align, align];
  }
  if (typeof justify === "string") {
    justify = [justify, justify, justify];
  }
  
  height && (style["height"] = height);
  zIndex && (style["zIndex"] = zIndex);
  
  return (
    <>
      <style jsx>{`
        .container {
          --flex: ${flex};
          --flex-direction: ${direction[2]};
          --flex-direction-t: ${direction[1]};
          --flex-direction-m: ${direction[0]};
          --flex-align: ${align[2]};
          --flex-align-t: ${align[1]};
          --flex-align-m: ${align[0]};
          --flex-justify: ${justify[2]};
          --flex-justify-t: ${justify[1]};
          --flex-justify-m: ${justify[0]};
        }
    `}</style>
      <style jsx>{`@import 'styles/mixins';
      
      .container {
        position: relative;
        min-width: 1px;
        max-width: 100%;
        display: flex;
        flex: var(--flex);
        @include responsive('desktop') {
          flex-direction: var(--flex-direction);
          align-items: var(--flex-align);
          justify-content: var(--flex-justify);
        }
        @include responsive('tablet') {
          flex-direction: var(--flex-direction-t);
          align-items: var(--flex-align-t);
          justify-content: var(--flex-justify-t);
        }
        @include responsive('mobile') {
          flex-direction: var(--flex-direction-m);
          align-items: var(--flex-align-m);
          justify-content: var(--flex-justify-m);
        }
      }
      
      
      `}</style>
      {
        wrapper
        ? <Wrapper width={maxWidth && maxWidth} height="100%">
          <div id={id} className={`container ${className}`} style={style}>{children}</div>
        </Wrapper>
        : <div id={id} className={`container ${className}`} style={style}>{children}</div>
      }
    </>
  );
};
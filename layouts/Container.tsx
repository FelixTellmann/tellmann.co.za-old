import { CSSProperties, FC } from "react";
import { Wrapper } from "layouts";

type ContainerProps = {
  wrapper?: boolean | string
  maxWidth?: string
  height?: string
  id?: string
  className?: string
  direction?: ("row" | "column" | string)[]
  align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch" | string
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | string
  flex?: number | string
  center?: boolean
  vcenter?: boolean
  row?: boolean
  full?: boolean
  style?: CSSProperties
}

export const Container: FC<ContainerProps> = (
  {
    children,
    maxWidth,
    height,
    wrapper,
    direction = ["column", "column", "column"],
    align = "stretch",
    justify = "flex-start",
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
  
  height && (style["height"] = height);
  
  return (
    <>
      <style jsx>{`
        .container {
          --align-items: ${align};
          --flex: ${flex};
          --justify-content: ${justify};
          --flex-direction: ${direction[2]};
          --flex-direction-t: ${direction[1]};
          --flex-direction-m: ${direction[0]};
        }
    `}</style>
      <style jsx>{`
        @import 'styles/mixins';
        
        .container {
          position: relative;
          min-width: 1px;
          max-width: 100%;
          display: flex;
          align-items: var(--align-items);
          flex: var(--flex);
          justify-content: var(--justify-content);
          @include responsive('desktop') {
            flex-direction: var(--flex-direction);
          }
          @include responsive('tablet') {
            flex-direction: var(--flex-direction-t);
          }
          @include responsive('mobile') {
            flex-direction: var(--flex-direction-m);
          }
        }
      
      
      `}</style>
      {
        wrapper
        ? <Wrapper width={maxWidth && maxWidth}>
          <div id={id} className={`container ${className}`} style={style}>{children}</div>
        </Wrapper>
        : <div id={id} className={`container ${className}`} style={style}>{children}</div>
      }
    </>
  );
};
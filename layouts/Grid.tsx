import { CSSProperties, FC } from "react";
import { Wrapper } from "layouts";
import "./Container.scss";

type ContainerProps = {
  wrapper?: boolean | string
  maxWidth?: string
  height?: string
  id?: string
  className?: string
  style?: CSSProperties
}

export const Grid: FC<ContainerProps> = ({ children, maxWidth, height, wrapper, id = "", className = "", style = {} }) => {
  height && (style[`height`] = height);
  
  return (
    <>
      <style jsx>{`
        .grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(32rem, auto));
          grid-auto-columns: minmax(32rem, 1fr);
          grid-gap: var(--gap);
          ${wrapper ? `max-width: var(--frame-width);` : ""}
        }
      `}</style>
      <div id={id} className={`grid ${className}`} style={style}>{children}</div>
    
    </>
  );
};
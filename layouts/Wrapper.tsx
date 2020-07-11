import { CSSProperties, FC } from "react";

type WrapperProps = {
  width?: string
  style?: CSSProperties
  height?: string
}

export const Wrapper: FC<WrapperProps> = ({ children, width = "", height = "", style = {} }) => {
  width && (style["width"] = width);
  height && (style["height"] = height);
  
  return (
    <>
      <style jsx global>{`
        .wrapper {
          width: var(--wrapper-width);
          max-width: 100%;
          display: flex;
          margin-right: auto;
          margin-left: auto;
          padding-right: var(--wrapper-padding);
          padding-left: var(--wrapper-padding);
        }
      `}</style>
      <div className="wrapper" style={style}>{children}</div>
    </>
  );
};
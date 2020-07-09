import { CSSProperties, FC } from "react";

type WrapperProps = {
  width?: string
  style?: CSSProperties
}

export const Wrapper: FC<WrapperProps> = ({ children, width = "", style = {} }) => {
  width && (style["--frame-width"] = width);
  
  return (
    <>
      <style jsx global>{`
        .wrapper {
          width: var(--frame-width);
          max-width: 100%;
          display: flex;
          margin-right: auto;
          margin-left: auto;
          padding-right: var(--frame-padding);
          padding-left: var(--frame-padding);
        }
      `}</style>
      <div className="wrapper" style={style}>{children}</div>
    </>
  );
};
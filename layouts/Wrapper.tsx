import { CSSProperties, FC } from "react";

type WrapperProps = {
  width?: string
  noPadding?: boolean
  style?: CSSProperties
  height?: string
}

export const Wrapper: FC<WrapperProps> = ({ children, width = "", height = "",noPadding, style = {} }) => {
  width && (style["width"] = width);
  height && (style["height"] = height);
  noPadding && (style["padding"] = 0);
  return (
    <>
      <style jsx global>{`
        .wrapper {
          width: var(--wrapper-width);
          max-width: 100%;
          display: flex;
          flex-direction: column;
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
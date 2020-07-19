import { GridColumnProperty } from "csstype";
import { CSSProperties, FC } from "react";

export type GridItemProps = {
  aspect?: number
  col?: GridColumnProperty
  row?: GridColumnProperty
  style?: CSSProperties
}

export const GridItem: FC<GridItemProps> = ({ children, aspect, col, row, style = {} }) => {
  
  aspect && (style["--grid-aspect-ratio"] = aspect);
  col && (style["--grid-col"] = col);
  row && (style["--grid-row"] = row);
  
  return <>
    <style jsx>{`
      .grid__item {
        position: relative;
        width: 100%;
        grid-column: var(--grid-col);
        /*overflow: hidden;*/
        
        &:before {
          content: "";
          display: inline-block;
          width: 1px;
          height: 0;
          padding-bottom: calc(100% / (var(--grid-aspect-ratio)));
        }
      }
    `}</style>
    <div className="grid__item" style={style}>
      {children}
    </div>
  </>;
};
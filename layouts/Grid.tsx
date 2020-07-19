import { CSSProperties, FC } from "react";
import { AlignItemsProperty, JustifyContentProperty } from "csstype";

type GridProps = {
  id?: string
  className?: string
  style?: CSSProperties
  align?: AlignItemsProperty
  justify?: JustifyContentProperty
  col?: [number, number, number]
  row?: [number, number, number]
  gap?: [number, number, number]
}

export const Grid: FC<GridProps> = ({ children, col, row,align, justify, gap, id = "", className = "", style = {} }) => {
  
  if (col?.length === 3) {
    style["--grid-template-col"] = col[2];
    style["--grid-template-col-t"] = col[1];
    style["--grid-template-col-m"] = col[0];
  }
  
  if (row?.length === 3) {
    style["--grid-template-row"] = row[2];
    style["--grid-template-row-t"] = row[1];
    style["--grid-template-row-m"] = row[0];
  }
  
  if (gap?.length === 3) {
    style["--grid-gap"] = gap[2];
    style["--grid-gap-t"] = gap[1];
    style["--grid-gap-m"] = gap[0];
  }
  
  align && (style["alignItems"] = align)
  justify && (style["justifyContent"] = justify)
  
  return (
    <>
      <style jsx>{`
        @import 'styles/mixins';
        
        .grid {
          width: 100%;
          display: grid;
          @include responsive('desktop') {
            grid-template-columns: repeat(var(--grid-template-col), 1fr);
            grid-template-rows: repeat(var(--grid-template-row), auto);
            grid-gap: calc(var(--gap) * var(--grid-gap));
          }
          @include responsive('tablet') {
            grid-template-columns: repeat(var(--grid-template-col-t), 1fr);
            grid-template-rows: repeat(var(--grid-template-row-t), auto);
            grid-gap: calc(var(--gap) * var(--grid-gap-t));
          }
          @include responsive('mobile') {
            grid-template-columns: repeat(var(--grid-template-col-m), 1fr);
            grid-template-rows: repeat(var(--grid-template-row-m), auto);
            grid-gap: calc(var(--gap) * var(--grid-gap-m));
          }
        }
      `}</style>
      <div id={id} className={`grid ${className}`} style={style}>{children}</div>
    
    </>
  );
};
import { CSSProperties, FC } from "react";


type GridProps = {
  id?: string
  className?: string
  style?: CSSProperties
  col?: [number, number, number]
  row?: [number, number, number]
  gap?: [number, number, number]
}

export const Grid: FC<GridProps> = ({ children, col = [1, 1, 1], row = [1, 1, 1], gap = [1, 1, 1], id = "", className = "", style = {} }) => {
  
  style["--grid-template-col"] = col[2];
  style["--grid-template-col-t"] = col[1];
  style["--grid-template-col-m"] = col[0];
  
  style["--grid-template-row"] = row[2];
  style["--grid-template-row-t"] = row[1];
  style["--grid-template-row-m"] = row[0];
  
  style["--grid-gap"] = gap[2];
  style["--grid-gap-t"] = gap[1];
  style["--grid-gap-m"] = gap[0];
  
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
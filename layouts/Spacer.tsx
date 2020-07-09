import { FC } from "react";

type SpacerProps = {
  x?: number
  y?: number
}

export const Spacer: FC<SpacerProps> = ({ x = 1, y = 1 }) => {
  return (
    <>
      <style jsx>{`
        .spacer {
          width: 1px;
          height: 1px;
          display: block;
          padding-top: calc(var(--gap) * var(--gap-ratio-y));
          padding-left: calc(var(--gap) * var(--gap-ratio-x));
          --gap-ratio-x: var(--gap-ratio);
          --gap-ratio-y: var(--gap-ratio);
        }
      
      `}</style>
      <style jsx>{`
        .spacer {
          --gap-ratio-y: ${y};
          --gap-ratio-x: ${x};
        }
      `}</style>
      <div aria-hidden="true" className="spacer" />
    </>
  );
};
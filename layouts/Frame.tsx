import { FC } from "react";

export const Frame: FC = ({ children }) => {
  return (
    <>
      <style jsx>{`
        .frame {
          min-height: 200vh; // TODO: dev change back to 100vh once done
          position: relative;
          //padding: var(--border-width);
        }
      `}</style>
      <div className="frame">{children}</div>
    </>
  );
};
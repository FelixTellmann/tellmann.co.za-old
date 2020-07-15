import React, { FC } from "react";

export const Footer: FC = () => {
  return (
    <>
      <style jsx>{`
        .footer {
          height: var(--frame-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(var(--color-text-rgb), 0.75);
          font-size: 1.4em;
          font-weight: 500;
          letter-spacing: 0.075rem;
          text-transform: uppercase;
          
          .footer-heart {
            color: red;
            font-size: 24px
          }
        }
      `}</style>
      <footer className="footer">Made with <span className="footer-heart">&nbsp;❤&nbsp;</span> by Tellmann</footer>
    </>
  );
};
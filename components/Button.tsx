import React, { CSSProperties, FC } from "react";
import Link from "next/link";

type ButtonProps = {
  title: string
  href?: string
  onClick?: (event: React.MouseEvent) => void;
  style?: CSSProperties
  size?: string
  
}

export const Button: FC<ButtonProps> = ({ children, href = "", title, style = {}, onClick, size }) => {
  
  size && (style["--font-size-button"] = size);
  
  return (
    <>
      <style jsx>{`

        .button {
          position: relative;
          content: '';
          min-width: 130px;
          max-height: calc(var(--font-line-height) + var(--space-4x) + 0.4rem);
          align-self: center;
          margin-left: var(--gap);
          padding: calc(var(--font-size-button) / 1.75) calc(var(--font-size-button) * 1.75);
          cursor: pointer;
          user-select: none;
          color: var(--color-background);
          font-size: var(--font-size-button);
          font-weight: var(--font-weight-button); line-height: var(--font-line-height);
          text-align: center;
          text-decoration: none;
          text-transform: uppercase;
          transition: ease-in-out 0.2s;
          /*================ Border ================*/
          &:before {
            position: absolute;
            content: '';
            z-index: -1;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: var(--color-text);
          }

          /*================ Box background ================*/
          &:after {
            position: absolute;
            content: '';
            z-index: -2;
            top: 2px;
            left: 2px;
            width: calc(100% + 2px);
            height: calc(100% + 2px);
            border: 2px solid var(--color-accent);
          }

          /*================  Hover/Focus/Active ================*/
          &:hover, &:focus, &:active {
            box-shadow: 2px 3px 9px 2px rgba(0, 0, 0, 0.2);

            span {
              position: relative;
              top: 3px;
              left: 3px;
            }

            &:before {
              top: 4px;
              left: 4px;
              width: calc(100% - 2px);
              height: calc(100% - 2px);
            }
          }
        }
      
      `}</style>
      {
        href
        ? <Link href={href}><a role="button" className="button" onClick={onClick} style={style}><span>{title}</span></a></Link>
        : <a role="button" className="button" onClick={onClick} style={style}><span>{title}</span></a>
      }
    
    </>
  );
};
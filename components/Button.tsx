import React, { CSSProperties, FC } from "react";
import Link from "next/link";

type ButtonProps = {
  title: string
  href?: string
  onClick?: (event: React.MouseEvent) => void;
  style?: CSSProperties
  size?: string
  secondary?: boolean
  
}

export const Button: FC<ButtonProps> = ({ href = "", title, style = {}, onClick, size, secondary }) => {
  
  size && (style["--font-size-button"] = size);
  
  return (
    <>
      <style jsx>{`
        .button {
          position: relative;
          content: '';
          min-width: 130px;
          max-height: calc(var(--font-line-height) + var(--space-4x) + 0.4rem);
          display: inline-flex;
          align-self: center;
          justify-content: center;
          padding: calc(var(--font-size-button) / 1.75) calc(var(--font-size-button) * 1.75);
          border: 2px solid var(--color-text);
          border-radius: 4px;
          cursor: pointer;
          user-select: none;
          color: var(--color-text);
          font-size: var(--font-size-button);
          font-weight: var(--font-weight-button);
          line-height: var(--font-line-height);
          text-align: center;
          text-decoration: none;
          text-transform: uppercase;
          transition: ease-in-out 0.2s;
          
          &:before, &:after {
            position: absolute;
            content: '';
            z-index: -1;
            width: 0.5rem;
            height: 6rem;
            opacity: 0;
            display: block;
            background: var(--color-text);
            transition: ease-in-out 0.2s;
          }
          
          &:before {
            top: -80px;
            left: calc(50% + 4.5px);
          }
          
          &:after {
            bottom: -80px;
            left: calc(50% - 4.5px);
            background: var(--color-accent);
          }
          
          &:hover, &:focus, &:active {
            background-color: var(--color-text);
            color: var(--color-background);
            
            &:before {
              top: -7px;
              opacity: 1;
            }
            
            &:after {
              bottom: -7px;
              opacity: 1;
            }
          }
        }
        
        .button.secondary {
          border: 2px solid var(--color-text);
          color: var(--color-background);
          background-color: var(--color-text);
          
          &:hover, &:focus, &:active {
            background-color: var(--color-background);
            color: var(--color-text);
          }
        }
      `}</style>
      {
        href
        ? <Link href={href}><a role="button"
                               className={`button${secondary ? " secondary" : ""}`}
                               onClick={onClick}
                               style={style}><span>{title}</span></a></Link>
        : <a role="button"
             className={`button${secondary ? " secondary" : ""}`}
             onClick={onClick}
             style={style}><span>{title}</span></a>
      }
    
    </>
  );
};
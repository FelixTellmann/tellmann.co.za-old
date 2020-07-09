import { CSSProperties, FC } from "react";
import { Container } from "layouts/Container";

type HeaderProps = {
  showHeader: boolean
  style?: CSSProperties
}

export const Header: FC<HeaderProps> = ({ children, showHeader, style = {} }) => {
  
  return (
    <>
      <style jsx>{`
        .header {
          position: absolute;
          z-index: 1000;
          top: 90px;
          width: 100%;
          height: var(--header-height);
          display: flex;
          transition: background-color var(--transition);
          --color-text: rgb(var(--color-background-rgb));
          --color-background: rgb(var(--color-text-rgb));

          &.active {
            top: 0;
            position: fixed;
            background-color: rgba(var(--color-background-rgb), 0.7);
            box-shadow: var(--shadow-header);
            backdrop-filter: var(--blur);
            --color-text: rgb(var(--color-text-rgb));
            --color-background: rgb(var(--color-background-rgb));
          }
        }
      
      `}</style>
      <header className={`header ${showHeader ? "active" : ""}`} style={style}>
        <Container wrapper row justify="space-between">
          {children}
        </Container>
      </header>
    </>
  );
};
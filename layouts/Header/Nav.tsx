import { FC } from "react";
import Link from "next/link";

export const Nav: FC & { Item: FC<NavItemProps> } = ({ children }) => {
  
  return (
    <>
      <style jsx>{`
        .nav {
          display: flex;
          flex: 1;
          justify-content: flex-end;
          transition: var(--transition);
        }
      `}</style>
      <nav className="nav">{children}</nav>
    </>
  );
};

type NavItemProps = {
  href: string
  title: string
  target?: string
  onClick?: Function
}

Nav.Item = ({ title, href, onClick, target }) => {
  return (
    <>
      <style jsx>{`
        @import 'styles/mixins';

        .nav {
          display: flex;
          flex: 1;
          justify-content: flex-end;
          transition: var(--transition);
        }

        .nav__item {
          position: relative;
          display: flex;
          align-items: center;
          margin: 0 var(--gap);
          padding: var(--space-2x) var(--space-2x);
          font-size: var(--font-size-nav);
          font-weight: var(--font-weight-nav);
          text-decoration: none;
          transition: var(--transition-2);
          @include responsive('mobile') {
            margin: 0 var(--spacing-2)
          }

          &:before {
            position: absolute;
            content: '';
            bottom: 0;
            left: 0;
            width: 0;
            height: calc(var(--spacing-1) / 2);
            background-color: var(--color-accent);
            transition: var(--transition-2);
          }

          &:hover, &:focus, &:active, &.active {
            outline: none;
            color: var(--color-accent);

            &:before {
              width: 100%;
            }
          }
        }
      `}</style>
      <Link href={href}>
        <a className="nav__item" onClick={onClick && ((e) => onClick(e))} target={target}>{title}</a>
      </Link>
    </>
  );
};


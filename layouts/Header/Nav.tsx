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
          align-items: center;
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
  style?: "button"
}

const NavItem: FC<NavItemProps> = ({ title, href, onClick, target, style }) => {
  return (
    <>
      <style jsx>{`
        @import 'styles/mixins';

        .nav__item {
          position: relative;
          display: flex;
          align-items: center;
          margin: 0 var(--gap);
          padding: var(--space-1x);
          font-size: var(--font-size-nav);
          font-weight: var(--font-weight-nav);
          text-decoration: none;
          transition: var(--transition-2);
          &:last-of-type {
            margin: 0 0 0 var(--gap);
          }

          @include responsive('mobile') {
            margin: 0 var(--spacing-2)
          }

          &:before {
            position: absolute;
            content: '';
            z-index: -1;
            bottom: 0;
            left: 0;
            width: 0;
            height: 100%;
            background-image: linear-gradient(transparent calc(100% - .55em), rgba(var(--color-accent-rgb), 1) 0), linear-gradient(transparent calc(100% - .55em), rgba(var(--color-accent-rgb), 1) 0);
            background-repeat: no-repeat;
            background-size: 0 100%, 100% 100%;
            color: transparent;
            transition: var(--transition-2);
          }

          &:hover:not(.button), &:focus:not(.button), &:active:not(.button), &.active:not(.button) {
            outline: none;

            &:before {
              width: 100%;
            }
          }

          &.button {
            position: relative;
            content: '';
            min-width: 130px;
            max-height: calc(var(--font-line-height) + var(--space-4x) + 0.4rem);
            display: flex;
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
              background: var(--color-accent);
              bottom: -80px;
              left: calc(50% - 4.5px);
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
        }
      `}</style>
      <Link href={href}>
        <a className={`nav__item${style ? " button" : ""}`}
           onClick={onClick && ((e) => onClick(e))}
           target={target}>{title}</a>
      </Link>
    </>
  );
};

Nav.Item = NavItem;
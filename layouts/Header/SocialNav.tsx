import React, { FC, createElement } from "react";
import Link from "next/link";

export const SocialNav: FC & { Item: FC<SocialNavItemProps> } = ({ children }) => {
  return (
    <>
      <style jsx>{`
        .social-nav {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-left: var(--gap);
          transition: var(--transition);
        }
      `}</style>
      <nav className="social-nav">
        {children}
      </nav>
    </>
  );
};

type SocialNavItemProps = {
  icon: string
  href: string
  title: string
  target?: string
  onClick?: Function
}

SocialNav.Item = ({ icon, title, href, onClick, target }) => {
  let type = icon.substr(0, 2).toLowerCase();
  let Icon = createElement(require(type === "io" ? "react-icons/io" : "react-icons/fa")[icon], { alt: title });
  
  return (
    <>
      <style jsx>{`
        .social-nav__item {
          padding: var(--spacing-2);
          font-size: var(--font-size-nav);
          font-weight: var(--font-weight-nav);
          text-decoration: none;
          transition: color ease-in-out 0.17s;

          &:hover, &:focus, &:active, &.active {
            outline: none;
            color: var(--color-accent);
          }
        }
      `}</style>
      <Link href={href}>
        <a className="social-nav__item" onClick={onClick && ((e) => onClick(e))} target={target}>
          {Icon}
        </a>
      </Link>
    </>
  );
};
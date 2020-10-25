import NextLink from "next/link";
import { FC } from "react";
import { CSS, useStyledSystem } from "use-styled-system";

type LinkProps = {
  href: string;
  target?: string;
  nav?: boolean;
  id?: string;
  className?: string;
};

export const Link: FC<LinkProps & CSS> = ({ href, target, nav, children, className = "", ...props }) => {
  const { styleJsx, nonCssProps } = useStyledSystem(props, { All: true });
  
  if (nav) {
    className += " nav";
  }
  
  return (
    <>
      <NextLink href={href}>
        <a target={target} className={className} {...nonCssProps}>
          {children}
        </a>
      </NextLink>
      <style jsx>{`
        a {
          ${styleJsx}
        }
        .nav {
          display: flex;
          align-items: center;
          padding: 4px;
          margin: 0 16px;
          font-size: 16px;
          font-weight: 500;
          text-decoration: none;
          color: inherit;
        }
      `}</style>
    </>
  );
};

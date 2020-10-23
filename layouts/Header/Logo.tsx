import { FC } from "react";
import Link from "next/link";

type LogoProps = {
  href: string
  src?: string
}

export const Logo: FC<LogoProps> = ({ children, href, src }) => {
  return (
      <>
        <style jsx global>{`
          .logo {
            display: block;
            min-width: 1px;
            height: 100%;
            padding: var(--space-2x) 0;
            color: inherit;

            img, svg {
              max-width: 100%;
              height: 100%;
              max-height: 100%;
            }
          }
        `}</style>
        <Link href={href}>
          <a className="logo">
            {src ? <img src={src} alt="Logo" /> : children}
          </a>
        </Link>
      </>
  );
};
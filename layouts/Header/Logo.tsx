import { FC } from "react";
import Link from "next/link";


type LogoProps = {
  href: string
  src?: string
  headerActive?: boolean
}

export const Logo: FC<LogoProps> = ({ children, href, src, headerActive = true }) => {
  return (
    <>
      <style jsx global>{`
        .logo {
          display: block;
          flex: 0.5;
          padding: var(--space-2x) 0;

          img, svg {
            max-width: 100%;
            height: 100%;
            max-height: 100%;
            /*animation-name: logoAnimationReverse;
            animation-duration: 0.3s;
            animation-timing-function: ease-in-out;
            animation-delay: 0s;
            animation-fill-mode: forwards;*//**/
            --logo-left: 0;
            --logo-right: 100%;
            --logo-left-100: 30%;
            --logo-right-100: 42%;
          }

          /*&:not(.active) {
            img, svg {
              animation-name: logoAnimation
            }
          }*/
        }

        /*
        @keyframes logoAnimation {
          0% {
            clip-path: polygon(var(--logo-left) 0, var(--logo-left) 100%, var(--logo-right) 100%, var(--logo-right) 0);
          }
          100% {
            clip-path: polygon(var(--logo-left-100) 0, var(--logo-left-100) 100%, var(--logo-right-100) 100%, var(--logo-right-100) 0);
          }
        }
        
        @keyframes logoAnimationReverse {
          0% {
            clip-path: polygon(var(--logo-left-100) 0, var(--logo-left-100) 100%, var(--logo-right-100) 100%, var(--logo-right-100) 0);
          }
          100% {
            clip-path: polygon(var(--logo-left) 0, var(--logo-left) 100%, var(--logo-right) 100%, var(--logo-right) 0);
          }
        }
        */
      
      `}</style>
      <Link href={href}>
        <a className={`logo ${headerActive ? "active" : ""}`}>
          {src ? <img src={src} alt="Logo" /> : children}
        </a>
      </Link>
    </>
  );
};
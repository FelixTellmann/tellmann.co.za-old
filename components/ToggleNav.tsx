import { FC } from "react";

type ToggleNavProps = {
  toggleMobileNav: (event) => void
  toggleState: '' | 'active'
};

export const ToggleNav: FC<ToggleNavProps> = ({ toggleMobileNav, toggleState }) => {
  return <>
    <div className={`nav-menu ${toggleState}`} onClick={toggleMobileNav}>
      <span className="nav-lines" />
    </div>
    <style jsx>{`
      .nav-menu {
        position: relative;
        width: 3rem;
        height: 3rem;
        display: block;
        cursor: pointer;

        .nav-lines {
          &, &:before, &:after {
            position: absolute;
            content: '';
            width: 100%;
            height: 0.3rem;
            display: block;
            border-radius: 0.3rem;
            background-color: var(--color-text);
            pointer-events: none;
            transform: rotate(0);
          }

          & {
            top: calc(50% - 0.3rem / 2);
            transition: background-color .2s, top .2s, left .2s, transform .2s .15s;
          }

          &:before {
            bottom: 1rem;
            left: 0;
            width: 2rem;
            transition: bottom .2s .2s, left .1s, transform .2s, background-color .4s .2s;
          }

          &:after {
            top: 1rem;
            right: 0;
            width: 2rem;
            transition: top .2s .2s, right .1s, transform .2s, background-color .4s .2s;
          }
        }

        &.active {
          .nav-lines {
            & {
              background-color: transparent;
            }

            &:before {
              bottom: 0;
              left: .5rem;
              background-color: var(--color-accent);
              transition: background-color .2s, bottom .2s, left .2s, transform .2s .15s;
              transform: rotate(-45deg);
            }

            &:after {
              top: 0;
              right: .5rem;
              background-color: var(--color-accent);
              transition: background-color .2s, top .2s, right .2s, transform .2s .15s;
              transform: rotate(45deg);
            }
          }
        }
      }
    `}</style>
  </>;
};
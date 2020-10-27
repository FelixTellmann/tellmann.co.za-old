import React, { createContext, FC, useState } from "react";

type ModalBackgroundProps = {
  isActive: boolean
};
export const ModalContext = createContext([]);

export const ModalBackground: FC<ModalBackgroundProps> = ({isActive,children}) => {
  const [active, setActive] = useState([false, (input)=> {setActive([input, active[1]])}]);
 

  return <>
    <ModalContext.Provider value={active}>
      {children}
      <div className={(isActive || active[0]) ? "active" : ""}>
        <aside className="left" />
        <aside className="right" />
        <span className="closeModal" />
      </div>
      <style jsx>{`
        div {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100vw;
          height: 100vh;
          

          .left {
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 0;
            border-right: solid 1px rgba(var(--color-border-rgb), 0.1);
            background-color: var(--color-text);
            transition: height var(--transition-8);
            transition-delay: 0.35s;
            z-index: 10;
          }

          .right {
            position: absolute;
            right: 0;
            bottom: 0;
            width: calc(50% + 1px);
            height: 0;
            background-color: var(--color-text);
            transition: height var(--transition-8);
            transition-delay: 0.35s;
            z-index: 9;
          }

          &.active {
            .left, .right {
              height: 100%;
              transition-delay: 0s;
            }
          }
        }
      `}</style>
    </ModalContext.Provider>
  </>;
};
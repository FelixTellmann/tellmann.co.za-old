import React, { FC, useEffect, useRef } from "react";
import TypedJS from "typed.js";

type TypedProps = {
  content: string[]
  typeSpeed?: number
  backSpeed?: number
  startDelay?: number
  backDelay?: number
  loop?: boolean
  loopCount?: number
  showCursor?: boolean
  cursorChar?: string
  smartBackspace?: boolean
  attr?: string
  bindInputFocusEvents?: boolean
  shuffle?: boolean
  
}

export const Typed: FC<TypedProps> = ({ content, ...rest }) => {
  let typedElement = useRef();
  let seoElement = useRef();
  const options = {
    strings: content,
    ...rest
  };
  useEffect(() => {
    const typed = new TypedJS(typedElement.current, options);
    return () => {
      typed.destroy();
    };
  }, [content]);
  
  return (
    <>
      <style jsx>{`
        .typed-text {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
        }

        .typed-text__item {
          height: 100%;
          flex: 1;
          white-space: pre;
        }

        .typed-text__seo {
          width: 1px;
          height: 100%;
          overflow: hidden;
          white-space: pre;
        }
      `}</style>
      <div className="typed-text">
        <div className="typed-text__item">
          <span style={{ wordBreak: "keep-all" }} ref={typedElement} />
        </div>
        <div ref={seoElement} className="typed-text__seo">
          {content.map((string, i) => <div key={i} dangerouslySetInnerHTML={{ __html: string }} />)}
        </div>
      </div>
    </>
  );
  
};
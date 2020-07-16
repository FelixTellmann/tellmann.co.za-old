import { createElement, CSSProperties, FC, Children, useState, useEffect } from "react";

type TestimonialProps = {
  style?: CSSProperties
  id?: string
  className?: string
}

export const Testimonial: FC<TestimonialProps> = ({ id = "", className = "", style = {}, children }) => {
  let [testimonialIndex, setTestimonialIndex] = useState<[number, number, "up" | "down"]>([0, null, "down"]);
  
  let changeTestimonial = (toIndex?: number) => setTestimonialIndex((index) => {
    if (typeof toIndex === "number") {
      if (toIndex === index[0]) return [toIndex, index[1], "down"];
      if (toIndex > index[0]) return [toIndex, index[0], "down"];
      if (toIndex < index[0]) return [toIndex, index[0], "up"];
    }
    return [index[0] + 1 > Children.count(children) - 1 ? 0 : index[0] + 1, index[0], "down"];
  });
  
  useEffect(() => {
    const interval = setInterval(() => {
      changeTestimonial();
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <>
      <style jsx>{`
        @import 'styles/mixins';
        
        .testimonial {
          display: block;
          position: relative;
          
          &:before, &:after {
            position: absolute;
            content: '“';
            font-size: 25rem;
            font-weight: 700;
            color: var(--color-accent);
            opacity: 0.8;
          }
          
          &:before {
            right: 100%;
            top: -10%;
            @include responsive-max(850px) {
              right: 90%;
              top: -40%;
            }
          }
          
          &:after {
            content: '”';
            left: 100%;
            top: 80%;
            @include responsive-max(850px) {
              left: 90%;
              top: 90%;
            }
          }
          
          .testimonial__slider {
            overflow: hidden;
            width: 100%;
            height: 100%;
            position: relative;
          }
          
          .testimonial__space-filler {
            position: relative;
            height: 100%;
            width: 100%;
            z-index: -1;
            opacity: 0;
            display: flex;
            flex-wrap: nowrap;
          }
          
          .testimonial__item {
            position: absolute;
            bottom: 0;
            top: 0;
            height: 0;
            transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            
            &.activate-down {
              top: 0;
              bottom: unset;
              height: 100%;
            }
            
            &.activate-up {
              top: unset;
              bottom: 0;
              height: 100%;
              justify-content: flex-start;
            }
            
            &.deactivate-up {
              top: 0;
              bottom: unset;
              height: 0;
            }
            
            &.deactivate-down {
              top: unset;
              bottom: 0;
              height: 0;
              justify-content: flex-start;
            }
          }
          
          .testimonial__navigation {
            display: block;
            position: absolute;
            left: 110%;
            top: 50%;
            transform: translate(0, -50%);
            width: 48px;
            
            & .testimonial__navigation__item {
              width: 50%;
              padding: 12px 0;
              cursor: pointer;
              position: relative;
              opacity: 0.5;
              transition: 0.2s ease-in-out;
              
              &:before {
                position: absolute;
                content: '';
                width: 100%;
                height: 2px;
                background: var(--color-text);
              }
              
              &:hover, &:focus, &:active {
                opacity: 0.7;
                width: 100%;
              }
              
              &.active {
                width: 100%;
                opacity: 1;
                
                &:before {
                  background: var(--color-accent)
                }
              }
            }
            
            @include responsive('small') {
              left: 50%;
              top: 110%;
              transform: translate(-50%, 0);
              width: auto;
              height: 48px;
              display: flex;
              & .testimonial__navigation__item {
                width: auto;
                height: 50%;
                padding: 0 12px;
                
                &:before {
                  width: 2px;
                  height: 100%;
                }
                
                &:hover, &:focus, &:active, &.active {
                  width: 2px;
                  height: 100%;
                }
              }
            }
          }
        }
      `}</style>
      <div id={id} className={`testimonial ${className}`} style={style}>
        <div className="testimonial__slider">{
          Children.map(children, (Child, index) => {
            return <div className={"testimonial__item" +
            (testimonialIndex[0] === index ? ` activate-${testimonialIndex[2]}` : "") +
            (testimonialIndex[1] === index ? ` deactivate-${testimonialIndex[2]}` : "")}>{Child}</div>;
          })
        }
          <div className="testimonial__space-filler">{
            Children.map(children, Child => <div>{Child}</div>)
          }</div>
        </div>
        <div className="testimonial__navigation">
          {
            Children.map(children, (Child, index) => {
              return <div className={`testimonial__navigation__item ${testimonialIndex[0] === index ? "active" : ""}`}
                          onClick={() => changeTestimonial(index)} />;
            })
          }
        </div>
      
      </div>
    </>
  );
};
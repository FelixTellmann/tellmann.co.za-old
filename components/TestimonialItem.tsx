import { createElement, CSSProperties, FC } from "react";

type TestimonialItemProps = {
  style?: CSSProperties
  id?: string
  className?: string
}

export const TestimonialItem: FC<TestimonialItemProps> = ({ id = "", className = "", style = {}, children }) => {
  
  return (
    <>
      {children}
    </>
  );
};
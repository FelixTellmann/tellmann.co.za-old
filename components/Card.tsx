import { FC } from "react";
import convertDescriptorToString from "jest-util/build/convertDescriptorToString";

type SpacerProps = {
  icon?: string
  title: string
  description: string
  
}

export const Card: FC<SpacerProps> = ({ icon, title, description }) => {
  return (
    <>
      <style jsx>{`
      
      `}</style>
      <div aria-hidden="true" className="spacer" />
    </>
  );
};
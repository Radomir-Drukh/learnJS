import {FC, MouseEventHandler} from "react";

interface TabProps {
  title: string;
  isActive: boolean;
  onClick: MouseEventHandler;
}

export const Tab = ({title, isActive, onClick}: TabProps) => {
  return (
    <button onClick={onClick} disabled={isActive}>
      {title}
    </button>
  );
};

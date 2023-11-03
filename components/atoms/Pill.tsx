import classNames from "classnames";
import { useState } from "react";

interface NavProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const Pill: React.FC<NavProps> = ({ text, className, onClick }) => {
  return (
    <div className={classNames("pill", className)} onClick={onClick}>
      {text}
    </div>
  );
};

export default Pill;

import classNames from "classnames";
import { useState } from "react";

interface NavProps {
  children: React.ReactNode;  
  className?: string;
  onClick?: () => void;
}

const Pill: React.FC<NavProps> = ({ children, className, onClick }) => {
  return (
    <div className={classNames("pill", className)} onClick={onClick}>
      {children}
    </div>
  );
};

export default Pill;

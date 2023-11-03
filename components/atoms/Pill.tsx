import classNames from "classnames";
import { useState } from "react";

interface NavProps {
  text: string;
  className?: string;
}

const Pill: React.FC<NavProps> = ({ text, className }) => {
  return <div className={classNames("pill", className)}>{text}</div>;
};

export default Pill;

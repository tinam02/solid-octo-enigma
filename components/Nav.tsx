import { useState } from "react";
import Pill from "./atoms/Pill";

interface NavProps {
  hide?: boolean;
}

const Nav: React.FC<NavProps> = ({ hide = false }) => {
  return (
    <nav className="flex items-center gap-4 px-4 navx" style={{}}>
      <Pill text="Home" className="secondary" />
      <Pill text="Home" className="secondary" />
    </nav>
  );
};

export default Nav;

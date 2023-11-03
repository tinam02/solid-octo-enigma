import { useState } from "react";
import Pill from "./atoms/Pill";

interface NavProps {
  hide?: boolean;
}

const Nav: React.FC<NavProps> = ({ hide = false }) => {
  return (
    <nav className="flex items-center gap-4 m-5 p-4" style={{
      background:'blue'
    }}>
      <div>a</div>   <div>a</div>
     <Pill text="Home" className="secondary" />
     <Pill text="Home" className="secondary" />
    </nav>
  );
};

export default Nav;

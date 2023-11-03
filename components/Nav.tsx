import { useState } from "react";
import Pill from "./atoms/Pill";

interface NavProps {
  hide?: boolean;
}

const Nav: React.FC<NavProps> = ({ hide = false }) => {
  return (
    <nav className="flex items-center gap-3 px-2 navx" style={{}}>
      <Pill text="Home" className="secondary" />
      <div className="flex items-center gap-4">
        <Pill text="Home" className="primary" />
        <Pill text="Home" className="secondary" />
        <Pill text="Email" className="secondary" />
        <Pill
          text="LN"
          className="secondary"
          onClick={() => {
            window.open("https://www.linkedin.com/in/tina333/", "_blank");
          }}
        />
      </div>
    </nav>
  );
};

export default Nav;

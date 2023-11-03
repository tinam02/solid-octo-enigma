import { useState } from "react";
import Pill from "./atoms/Pill";
import { useStyle } from "@/hooks/StyleProvider";
import classNames from "classnames";
import { RandomizeFont } from "./atoms/FontRandomizer";

interface NavProps {
  hide?: boolean;
}

const Nav: React.FC<NavProps> = ({ hide = false }) => {
  const { fonts, toggleTheme } = useStyle();

  return (
    <nav className="flex items-center gap-3 px-2 navx" style={{}}>
      <Pill className={classNames("secondary", fonts.divine)}>Arch</Pill>
      <div className="flex items-center gap-4">
        <Pill className="primary">Home</Pill>
        <Pill className="secondary">Email</Pill>
        <Pill
          className="secondary"
          onClick={() => {
            window.open("https://www.linkedin.com/in/tina333/", "_blank");
          }}
        >
          <RandomizeFont text="LinkedIn" />
        </Pill>
        <Pill className="secondary"
        onClick={toggleTheme}
        >T</Pill><input></input>
      </div>
    </nav>
  );
};

export default Nav;

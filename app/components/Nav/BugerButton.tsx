"use client";

import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import NavHamburger from "./NavHamburger";

interface Params {
  loggedIn: boolean;
}

export default function BugerButton() {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const handleBugerButton = () => {
    setShowBurgerMenu((prev) => !prev);
  };
  const closeMenu = () => {
    setShowBurgerMenu(false);
  };
  return (
    <div>
      <AiOutlineMenu
        onClick={() => handleBugerButton()}
        className="self-center md:hidden mr-5 z-20"
        color={"white"}
        size={42}
      />

      <NavHamburger handleClick={closeMenu} showMenu={showBurgerMenu} />
    </div>
  );
}

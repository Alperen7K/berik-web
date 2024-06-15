import React from "react";
import logo from "../assets/logo.png";
import { LanguageSwitch } from "./LanguageSwitch";

export const Navbar = () => {
 return (
  <div className="w-full py-6 flex justify-center items-center fixed top-0 z-40 ">
   <div className="w-[90vw] sm:w-[95vw] flex justify-between items-center">
    <img src={logo} className="h-10 w-36 object-contain" />
    <LanguageSwitch />
   </div>
  </div>
 );
};

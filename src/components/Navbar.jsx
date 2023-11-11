import React, { useState } from "react";
import { ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../ShopContext/ShopContext";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("");

  const handleNavLinkClick = (to) => {
    setActiveLink(to);
  };
  const { totalItems } = useShoppingCart();

  return (
    <div className="flex bg-black shadow-md px-12 py-8 bg-opacity-0 ">
      <div className="flex gap-4 flex-grow items-center">
        <NavLink
          to="/"
          onClick={() => handleNavLinkClick("/")}
          className={`text-lg text-white font-bold hover:bg-red-500 p-1 rounded-lg ${
            activeLink === "/" ? "bg-red-500 p-1 rounded-lg" : ""
          }`}
        >
          Home
        </NavLink>
        <NavLink
          to="/store"
          onClick={() => handleNavLinkClick("/store")}
          className={`text-lg text-white font-bold hover:bg-red-500 p-1 rounded-lg ${
            activeLink === "/store" ? "bg-red-500 p-1 rounded-lg " : ""
          }`}
        >
          Store
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => handleNavLinkClick("/about")}
          className={`text-lg text-white font-bold hover:bg-red-500 p-1 rounded-lg ${
            activeLink === "/about" ? "bg-red-500 p-1 rounded-lg" : ""
          }`}
        >
          About
        </NavLink>
      </div>

      <div className="relative ">
        <NavLink to="/cart" onClick={() => handleNavLinkClick("/cart")}>
          <ShoppingCart
            size={40}
            className="bg-gray-500 text-gray-800 bg-gray-200 rounded-full p-2  hover:bg-blue-100 cursor-pointer"
          />
        </NavLink>

        <div
          className={
            totalItems() !== 0
              ? " w-3 h-3 bg-red-500 rounded-full p-3 flex justify-center items-center text-white absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4"
              : ""
          }
        >
          {totalItems() !== 0 ? totalItems() : ""}
        </div>
      </div>
    </div>
  );
}

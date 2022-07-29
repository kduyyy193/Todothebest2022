import React from "react";
import { Link } from "react-router-dom";
import Icons from "../../components/Icons";
const NavBar = () => {
  const pullLeft = () => {
    document.querySelector(".toggle")?.classList.toggle("!relative");
    document.querySelector(".toggle")?.classList.toggle("!translate-x-0");
  };
  return (
    <div className="flex items-start  ">
      <div className=" mx-4 flex justify-between  items-center p-4 text-gray-400  flex-grow">
        <div className="flex items-center">
          <div onClick={pullLeft}>
            <Icons.List className="cursor-pointer hover:bg-slate-300 hover:rounded" />
          </div>
          <div className="flex items-center ml-4 text-2xl">
            TODO
            <span className="ml-2 font-semibold  text-blue-500">D </span>
            <span className="ml-2 font-semibold  text-teal-500"> E </span>
            <span className="ml-2 font-semibold  text-orange-500"> I </span>
            <span className="ml-2 font-semibold  text-rose-600"> R</span>
          </div>
        </div>
        <Link to="/login">
          <div className="hover:bg-slate-100 p-1 cursor-pointer hover:rounded">
            <span className="cursor-pointer">Sign Out</span>
            <Icons.Logout className="ml-4" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

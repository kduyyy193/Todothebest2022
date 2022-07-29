import { Button } from "@mui/material";
import Icons from "../../components/Icons";
import Avatar from "../../components/Avatar/Avatar";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../App/hooks";
import { useState } from "react";

interface Props {
  className: string;
}
const SideBar = ({ className }: Props) => {
  const pathIMG = useAppSelector((state) => state.updateAvartar);
  return (
    <div className={className}>
      <div className="w-80  bg-blue-500 h-screen  ">
        <div className="py-8 flex items-center flex-col font-semibold text-xl text-white">
          <div className="mb-8">
            <div className="avatar-wrapper">
              <img className="profile-pic object-cover " src={pathIMG.path} />
            </div>
            <div className="text-center mt-4">
              <span>K2</span>
            </div>
          </div>
        </div>
        <div className="ml-4 text-white">
          <Link to="/dashboard">
            <div className="cursor-pointer border-r-8 mr-2 hover:opacity-75 hover:scale-105 mt-4 ">
              <Icons.Dashboard className="mr-6 " />

              <span className="tracking-widest font-semibold text-base ">
                Dashboard
              </span>
            </div>
          </Link>
          <Link to="/setting">
            <div className="cursor-pointer border-r-8 mr-2 hover:opacity-75 hover:scale-105 mt-4 ">
              <Icons.Settings className="mr-6 " />
              <span className="tracking-widest font-semibold text-base ">
                Setting
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

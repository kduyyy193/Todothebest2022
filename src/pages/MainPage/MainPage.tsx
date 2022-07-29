import React from "react";
import { Route, Routes } from "react-router";
import NavBar from "../../layouts/Navigation/NavBar";
import SideBar from "../../layouts/SideBar/SideBar";
import Setting from "../../components/Setting/Setting";
import Dashboard from "../../components/Dashboard/Dashboard";

const MainPage = ({ children }: any) => {
  return (
    <div className=" bg-gray-50 flex h-screen">
      <SideBar className="toggle absolute -translate-x-full transition duration-700 ease-out" />
      <div className="flex flex-col flex-grow ">
        <NavBar />
        {children}
      </div>
    </div>
  );
};

export default MainPage;

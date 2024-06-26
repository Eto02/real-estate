import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const Layout: React.FC = () => {
  return (
    <div className=" xl:bg-[#fff]  md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl  h-screen   mx-auto px-5">
      <Navbar />
      <div style={{ height: "calc(100vh - 100px)" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../component/Header/Header";

const Mian = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Mian;

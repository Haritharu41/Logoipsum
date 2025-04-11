import React from "react";

function Navbar() {
  return (
    <div className="Navbar flex items-center justify-between bg-bg-primary p-10  h-24  font-roboto font-medium">
      <div>
        <img src="logo.png" alt="logo" />
      </div>

      <div className="flex items-center gap-4 text-text-primary  text-lg">
        <h1>Products</h1>
        <h1>Solutions</h1>
        <h1>Help center</h1>
        <h1>Get started</h1>
      </div>

      <div className="flex  gap-4 text-button-primary ">
        <button className="p-[18px]">Login</button>
        <button className="text-base text-bg-primary p-[18px] bg-button-primary rounded-2xl outline-hidden">
          Request a demo
        </button>
      </div>
    </div>
  );
}

export default Navbar;

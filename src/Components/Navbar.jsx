import React from "react";

function Navbar() {
  return (
    <navbar className="Navbar flex items-center justify-between bg-bg-primary px-20  h-24  font-roboto font-medium">
      <div className="Logo">
        <img src="logo.png" alt="logo" />
      </div>

      <div className="Tab_bar flex items-center gap-4 text-text-primary  text-lg">
        <h1>Products</h1>
        <h1>Solutions</h1>
        <h1>Help center</h1>
        <h1>Get started</h1>
      </div>

      <div className=" Button flex items-center  gap-4 text-button-primary ">
        <button className="p-[18px]">Login</button>
        <button className="font-medium text-bg-primary px-5 py-2  max-h-10 bg-button-primary rounded-2xl outline-hidden">
          Request a demo
        </button>
      </div>
    </navbar>
  );
}

export default Navbar;

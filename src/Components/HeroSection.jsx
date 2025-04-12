import React from "react";

function HeroSection() {
  return (
    <div className="Hero_Section flex  h-[521px] gap-48 bg-brand-navey">
      <div className="Text ml-28 h-[350] w-[599px] my-[85px] flex flex-col gap-6">
        <h1 className=" font-extrabold text-7xl text-bg-primary leading-16">
          Get instant cash flow with invoice factoring
        </h1>
        <p className="font-normal text-lg text-bg-primary">
          Why wait? Get same day funding and a faster way to access cash flow.
        </p>
        <button className="p-4 text-button-primary bg-bg-primary rounded-2xl w-28 h-10 text-center flex items-center justify-center">
          Get started
        </button>

        <div className="Ellipse flex gap-1.5">
          <div className="bg-[#DF49FC] h-3.5 w-3.5 rounded-full"></div>
          <div className="bg-[#D9D9D9] h-3.5 w-3.5 rounded-full"></div>
          <div className="bg-[#D9D9D9] h-3.5 w-3.5 rounded-full"></div>
        </div>
      </div>

      <div className="Image w-[533px] h-[533px]  ">
        <img src="/screenshot.png" alt="" />
      </div>
    </div>
  );
}

export default HeroSection;

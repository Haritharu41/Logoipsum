import React from "react";

function HeroSection() {
  return (
    <div className="Hero_Section flex flex-col lg:flex-row items-center justify-between bg-brand-navey px-6 sm:px-10 lg:px-20 py-12 gap-12 lg:gap-48">
    {/* Text Content */}
    <div className="Text max-w-full lg:max-w-xl flex flex-col gap-6">
      <h1 className="font-extrabold text-3xl sm:text-5xl lg:text-7xl text-bg-primary leading-tight">
        Get instant cash flow with invoice factoring
      </h1>
      <p className="font-normal text-base sm:text-lg text-bg-primary">
        Why wait? Get same day funding and a faster way to access cash flow.
      </p>
      <button className="p-3 sm:p-4 text-button-primary bg-bg-primary rounded-2xl w-32 sm:w-36 h-10 text-center flex items-center justify-center">
        Get started
      </button>
  
      {/* Ellipses */}
      <div className="Ellipse flex gap-1.5">
        <div className="bg-[#DF49FC] h-3.5 w-3.5 rounded-full"></div>
        <div className="bg-[#D9D9D9] h-3.5 w-3.5 rounded-full"></div>
        <div className="bg-[#D9D9D9] h-3.5 w-3.5 rounded-full"></div>
      </div>
    </div>
  
    {/* Image */}
    <div className="Image w-full max-w-sm sm:max-w-md lg:max-w-[533px] h-auto">
      <img src="/screenshot.png" alt="screenshot" className="w-full h-auto" />
    </div>
  </div>
  
  );
}

export default HeroSection;

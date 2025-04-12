import React from "react";

function Feature_card({ title, description }) {
  return (
    <div className="Box1 w-[395px]  py-12 px-6 flex flex-col items-center gap-7 justify-center">
      <img src="/Shape.png" className="h-12 w-12" alt="Shape_icon" />
      <div className="Text flex flex-col  items-center gap-6">
        <h3 className="font-medium text-2xl text-text-primary leading-8">
          {title}
        </h3>
        <p className="text-text-secondary text-center">{description}</p>
      </div>
    </div>
  );
}

export default Feature_card;

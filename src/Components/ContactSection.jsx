import React from "react";

function ContactSection() {
  return (
    <div className="Contact_section mt-[106px] px-[72px] flex flex-col items-center gap-10 ">
      <div className="Headline flex flex-col items-center ">
        <h1 className="font-extrabold text-7xl leading-16 text-brand-electric-blue">
          Contact us
        </h1>
        <p className="text-lg leading-8 text-text-secondary mt-6">
          Speak with our team to see how we can help your business.
        </p>
      </div>

      <form className=" mb-16 flex flex-col items-center gap-4 p-14 ">
        <input
          type="text"
          className="border outline-none border-text-secondary rounded-2xl px-3.5 py-3 w-[729px] h-[60px]"
          placeholder="Your name"
        />
        <input
          type="email"
          className="border outline-none border-text-secondary rounded-2xl px-3.5 py-3 w-[729px] h-[60px]"
          placeholder="Email"
        />
        <input
          type="contact"
          className="border outline-none border-text-secondary rounded-2xl px-3.5 py-3 w-[729px] h-[60px]"
          placeholder="Your best contact number"
        />
        <input
          type="text"
          className="border outline-none border-text-secondary rounded-2xl px-3.5 py-3 w-[729px] h-[179px]"
          placeholder="Business or company name"
        />
        <button className="w-48 h-11  rounded-2xl text-bg-primary bg-button-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactSection;

import React from "react";

function Footer() {
  return (
    <footer className=" bg-bg-secondary">
      <div className="Uperbox  flex justify-between pt-[72px] px-[182px] pb-6  ">
        <div className="Company_description w-[537px]    ">
          <p className="Description w-[349px] h-[132px] mr-[188px] text-sm  text-text-secondary  ">
            Flip Money Pty Ltd is a cloud-based lending platform helping
            businesses with online payments and faster access to cash flow
            funding. Level 3, 55 Pyrmont Bridge Road, Pyrmont NSW 2009.
          </p>

          <div className="Social_media pt-9  flex gap-3">
            <a href="#">
              <img src="/Linkedin.png" alt="linkedin" />
            </a>
            <a href="#">
              <img src="/Email.png" alt="email" />
            </a>
          </div>
        </div>

        <div className="Links flex gap-8  ">
          <div className="Products w-[150px] ">
            <h1 className="font-medium pb-3.5 ">Products</h1>
            <ul className="text-xs flex flex-col gap-4 text-text-secondary ">
              <li>Payments</li>
              <li>Invoice Factoring</li>
              <li>Invoice finance</li>
              <li>Supplier finance</li>
              <li>Customer finance </li>
            </ul>
          </div>

          <div className="Company   w-[150px] ">
            <h1 className="font-medium pb-3.5">Company</h1>
            <ul className="text-xs flex flex-col gap-4 text-text-secondary">
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div className="Resources  w-[150px]  ">
            <h1 className="font-medium pb-3.5">Resources</h1>
            <ul className="text-xs flex flex-col gap-4 text-text-secondary">
              <li>Frequently asked questions</li>
              <li>Knowledge base</li>
              <li>API documentation</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Lowerbox flex items-center justify-between    py-6 px-[185px] text-text-secondary ">
        <div>
          <span className="mr-6">Privacy policy</span>
          <span>Contact us</span>
        </div>
        <div>
          <span className="mr-6">Site map </span>
          <span>@ebpearls</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

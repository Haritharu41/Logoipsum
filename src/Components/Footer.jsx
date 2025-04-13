import React from "react";

function Footer() {
  return (
    <footer className="bg-bg-secondary">
      <div className="Uperbox grid gap-4 lg:grid-cols-2 pt-24 px-6 md:px-12 lg:px-24 pb-6">
        <div className="Company_description max-w-full lg:max-w-[537px]">
          <p className="text-sm text-text-secondary max-w-[349px]">
            Flip Money Pty Ltd is a cloud-based lending platform helping
            businesses with online payments and faster access to cash flow
            funding. Level 3, 55 Pyrmont Bridge Road, Pyrmont NSW 2009.
          </p>

          <div className="Social_media pt-6 flex gap-3">
            <a href="#">
              <img src="/Linkedin.png" alt="linkedin" />
            </a>
            <a href="#">
              <img src="/Email.png" alt="email" />
            </a>
          </div>
        </div>

        <div className="Links grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="Products">
            <h1 className="font-medium pb-3.5">Products</h1>
            <ul className="text-xs flex flex-col gap-4 text-text-secondary">
              <li>Payments</li>
              <li>Invoice Factoring</li>
              <li>Invoice finance</li>
              <li>Supplier finance</li>
              <li>Customer finance</li>
            </ul>
          </div>

          <div className="Company">
            <h1 className="font-medium pb-3.5">Company</h1>
            <ul className="text-xs flex flex-col gap-4 text-text-secondary">
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div className="Resources">
            <h1 className="font-medium pb-3.5">Resources</h1>
            <ul className="text-xs flex flex-col gap-4 text-text-secondary">
              <li>Frequently asked questions</li>
              <li>Knowledge base</li>
              <li>API documentation</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="Lowerbox grid gap-4 sm:grid-cols-2 py-6 px-6 md:px-12 lg:px-24 text-text-secondary text-sm">
        <div className="flex gap-6 flex-wrap">
          <span>Privacy policy</span>
          <span>Contact us</span>
        </div>
        <div className="flex gap-6 flex-wrap justify-start sm:justify-end">
          <span>Site map</span>
          <span>@ebpearls</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

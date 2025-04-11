import React from "react";

function PaymentCollection() {
  return (
    <div className="PaymentCollection pt-[120px] pb-[60px] px-[72px] ">
      <div className="px-8 flex flex-col items-center gap-[46px]">
        <div className="Title  flex flex-col items-center gap-4">
          <h2 className=" font-semibold text-5xl leading-14">
            Outsource payment collection
          </h2>
          <p className=" text-text-secondary">
            Faster and flexible access to cash flow from one or all your
            invoices.
          </p>
        </div>

        <div className="Services flex flex-col gap-8">
          <div className="Row1  flex gap-6">
            <div className="Box1 w-[395px]  py-12 px-6 flex flex-col items-center gap-7 justify-center">
              <img src="/Shape.png" className="h-12 w-12" alt="Shape_icon" />
              <div className="Text flex flex-col  items-center gap-6">
                <h3 className="font-medium text-2xl text-text-primary leading-8">
                  Access up to $100,000
                </h3>
                <p className="text-text-secondary text-center">
                  We fund each invoice once approved and collect payment to
                  optimise your cash flow.*
                </p>
              </div>
            </div>

            <div className="Box2   w-[395px]  py-12 px-6 flex flex-col items-center gap-7 justify-center">
              <img src="/Shape.png" className="h-12 w-12" alt="Shape_icon" />
              <div className="Text flex flex-col  items-center gap-6">
                <h3 className="font-medium text-2xl text-text-primary leading-8">
                  You choose invoices to get paid
                </h3>
                <p className="text-text-secondary text-center">
                  Self-serve online portal available 24/7 or connect from your
                  CRM or invoicing platform.
                </p>
              </div>
            </div>

            <div className="Box3 w-[395px]  py-12 px-6 flex flex-col items-center gap-7 justify-center">
              <img src="/Shape.png" className="h-12 w-12" alt="Shape_icon" />
              <div className="Text flex flex-col  items-center gap-6">
                <h3 className="font-medium text-2xl text-text-primary leading-8">
                  Simple pricing
                </h3>
                <p className="text-text-secondary text-center">
                  Only pay for what you use, if you don't need us, there are no
                  costs.
                </p>
              </div>
            </div>
          </div>

          <div className="Row2 mt-8 flex gap-6">
            <div className="Box1  w-[395px]  py-12 px-6 flex flex-col items-center gap-7 justify-center">
              <img src="/Shape.png" className="h-12 w-12" alt="Shape_icon" />
              <div className="Text flex flex-col  items-center gap-6">
                <h3 className="font-medium text-2xl text-text-primary leading-8">
                  Click and quick
                </h3>
                <p className="text-text-secondary text-center">
                  We fund each invoice once approved and collect payment to
                  optimise your cash flow.*
                </p>
              </div>
            </div>

            <div className="Box2  w-[395px]  py-12 px-6 flex flex-col items-center gap-7 justify-center">
              <img src="/Shape.png" className="h-12 w-12" alt="Shape_icon" />
              <div className="Text flex flex-col  items-center gap-6">
                <h3 className="font-medium text-2xl text-text-primary leading-8">
                  Flexible
                </h3>
                <p className="text-text-secondary text-center">
                  Self-serve online portal available 24/7 or connect from your
                  CRM or invoicing platform.​
                </p>
              </div>
            </div>

            <div className="Box3 w-[395px]  py-12 px-6 flex flex-col items-center gap-7 justify-center">
              <img src="/Shape.png" className="h-12 w-12" alt="Shape_icon" />
              <div className="Text flex flex-col  items-center gap-6">
                <h3 className="font-medium text-2xl text-text-primary leading-8">
                  Invest in your business
                </h3>
                <p className="text-text-secondary text-center">
                  Only pay for what you use, if you don’t need us, there are no
                  costs.​
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentCollection;

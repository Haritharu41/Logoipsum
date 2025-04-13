import React from "react"
import Feature_card from "./Feature_card"

export default function OutsourceSection() {
  const features = [
    {
      title: "Access up to $100,000",
      description: "We fund each invoice once approved and collect payment to optimise your cash flow.*",
      
    },
    {
      title: "You choose invoices to get paid",
      description: "Self-serve online portal available 24/7 or connect from your CRM or invoicing platform.",
      

    },
    {
      title: "Simple pricing",
      description: "Only pay for what you use, if you don't need us, there are no costs.",
      

    },
    {
      title: "Click and quick",
      description: "We fund each invoice once approved and collect payment to optimise your cash flow.*",
      

    },
    {
      title: "Flexible",
      description: "Self-serve online portal available 24/7 or connect from your CRM or invoicing platform.",
      

    },
    {
      title: "Invest in your business",
      description: "Only pay for what you use, if you don't need us, there are no costs.",
      

    },
  ]

  return (
    <section className="py-14 px-6 md:py-40">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">Outsource payment collection</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Faster and flexible access to cash flow from one or all your invoices.
        </p>
      </div>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-15">
        {features.map((feature, index) => (
          <Feature_card key={index} title={feature.title} description={feature.description} />
        ))}
      </div>
    </div>
  </section>
  
  
  )
}

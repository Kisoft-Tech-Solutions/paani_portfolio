const Pricing = () => {
  const plans = [
    {
      name: "Plan A",
      price: "₹3,500",
      period: "/Month",
      features: [
        "FB/Insta Boost- 5$",
        "Social Media Management",
        "Social Media Contents-12 post",
        "All Festival Contents"
      ],
      isPopular: false
    },
    {
      name: "Plan B",
      price: "₹6,060",
      period: "/Month",
      features: [
        "FB/Insta boost-15$",
        "Social Media Contents-16 posts",
        "All festival contents",
        "Social media handling"
      ],
      isPopular: true
    },
    {
      name: "Plan C",
      price: "₹13,460",
      period: "/Month",
      features: [
        "16 custom social media posts",
        "All Festival Contents",
        "Social media handling",
        "Social media boost- 26$",
        "Brand video content-1"
      ],
      isPopular: false
    }
  ];

  const additionalServices = [
    { name: "Social Media management", price: "₹500 per platform/month" },
    { name: "Brand Video", price: "₹3000" },
    { name: "Digital Gateway Board", price: "₹500 - ₹6500" },
    { name: "Social Media Boosting", price: "₹165 per $" },
    { name: "Product Video", price: "₹50 per product" },
    { name: "Product Photoshoot", price: "₹20 per product" },
    { name: "Content Design", price: "₹500 per Content" },
    { name: "Portfolio Website", price: "₹10000" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Pricing</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">Choose Your Perfect Plan</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible pricing options to meet your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg p-8 relative ${
                plan.isPopular ? 'border-2 border-blue-600 scale-105' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">
                  {plan.price}
                  <span className="text-lg text-gray-600">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-4 px-8 rounded-xl font-semibold transition-colors ${
                    plan.isPopular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-blue-600 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10">Additional Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-gray-900 mb-2">{service.name}</h4>
                <p className="text-blue-600 font-medium">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
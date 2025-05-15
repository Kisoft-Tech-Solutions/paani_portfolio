const Pricing = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-16">
          Our Pricing Plans
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Plan A",
              price: "₹3500",
              features: [
                "FB/Insta Boost- 5$",
                "Social Media Management",
                "Social Media Contents-12 post",
                "All Festival Contents"
              ]
            },
            {
              name: "Plan B",
              price: "₹6060",
              features: [
                "FB/Insta boost-15$",
                "Social Media Contents-16 posts",
                "All festival contents",
                "Social media handling"
              ]
            },
            {
              name: "Plan C",
              price: "₹13460",
              features: [
                "16 custom social media posts",
                "All Festival Contents",
                "Social media handling",
                "Social media boost- 26$",
                "Brand video content-1"
              ]
            }
          ].map((plan, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">₹{plan.price}<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
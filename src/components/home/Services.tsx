const Services = () => {
  const services = [
    {
      title: "Social Media Management",
      price: "Starting from ₹500/platform",
      description: "Complete social media handling with strategic content creation and community engagement",
      features: [
        "Platform Setup & Optimization",
        "Content Calendar",
        "Regular Posting",
        "Community Management"
      ]
    },
    {
      title: "Brand Video Production",
      price: "₹3000/video",
      description: "Professional video content creation that tells your brand story effectively",
      features: [
        "Concept Development",
        "Professional Filming",
        "Expert Editing",
        "Multiple Revisions"
      ]
    },
    {
      title: "Digital Gateway Board",
      price: "₹2500 - ₹6500",
      description: "Comprehensive digital presence management for your business",
      features: [
        "Website Management",
        "SEO Optimization",
        "Analytics Tracking",
        "Regular Updates"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">Digital Marketing Solutions</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="border-b border-gray-200 pb-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <p className="text-blue-600 font-bold text-xl">{service.price}</p>
              </div>
              <ul className="space-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-8 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
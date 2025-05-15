const Services = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-16">
          Our Services
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Social Media Management",
              description: "Complete social media handling with content creation and engagement",
              price: "Starting from ₹500/platform"
            },
            {
              title: "Brand Video Production",
              description: "Professional video content creation for your brand",
              price: "₹3000/video"
            },
            {
              title: "Digital Marketing",
              description: "Comprehensive digital marketing strategies and campaigns",
              price: "Custom packages available"
            },
            {
              title: "Content Design",
              description: "Creative content design for all your marketing needs",
              price: "₹500/content"
            },
            {
              title: "Social Media Boosting",
              description: "Strategic paid promotions across platforms",
              price: "₹165 per $"
            },
            {
              title: "Product Photography",
              description: "Professional product photography and editing",
              price: "₹20 per product"
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-blue-800 font-semibold">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
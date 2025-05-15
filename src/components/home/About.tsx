import Image from 'next/image';

const About = () => {
  const features = [
    {
      icon: "📊",
      title: "Data-Driven",
      description: "We make decisions based on real data and analytics"
    },
    {
      icon: "🎯",
      title: "Result Focused",
      description: "Our strategies are designed to deliver measurable results"
    },
    {
      icon: "💡",
      title: "Innovative",
      description: "We stay ahead with the latest digital marketing trends"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900/5 to-blue-900/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Transforming Digital Marketing
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're passionate about helping businesses grow through innovative digital 
            marketing strategies and cutting-edge solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:bg-gradient-to-b hover:from-blue-50 hover:to-white border border-blue-50"
            >
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
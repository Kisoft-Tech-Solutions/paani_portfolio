const About = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900">
            We Drive Digital Success
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Empowering businesses with innovative digital solutions and strategic marketing 
            approaches that deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: "📈",
              title: "Data-Driven Strategy",
              description: "We leverage analytics and insights to create targeted campaigns that deliver measurable results."
            },
            {
              icon: "🎯",
              title: "Targeted Campaigns",
              description: "Reach your ideal audience with precision-targeted marketing campaigns."
            },
            {
              icon: "💡",
              title: "Creative Solutions",
              description: "Innovative approaches and creative content that makes your brand stand out."
            }
          ].map((item, index) => (
            <div key={index} className="group p-8 rounded-2xl transition-all hover:bg-blue-50">
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
              <div className="mt-6">
                <a href="#" className="text-blue-600 font-semibold group-hover:text-blue-700 flex items-center gap-2">
                  Learn More 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
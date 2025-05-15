import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative container mx-auto px-4 py-32 flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in">
              Transform Your <span className="text-blue-300">Digital Presence</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              We craft innovative digital solutions that drive growth, engage audiences, 
              and deliver measurable results for your business.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
                Learn More
              </button>
            </div>
            <div className="flex gap-8 pt-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold">500+</h3>
                <p className="text-blue-200">Clients</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold">1.2K+</h3>
                <p className="text-blue-200">Projects</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold">98%</h3>
                <p className="text-blue-200">Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="relative z-10 animate-float">
              <Image
                src="/marketing-dashboard.png"
                alt="Digital Marketing Dashboard"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute top-20 -right-10 bg-white p-4 rounded-lg shadow-xl animate-float-slow">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-800 font-medium">Campaign Active</span>
              </div>
            </div>
            <div className="absolute bottom-20 -left-10 bg-white p-4 rounded-lg shadow-xl animate-float-delay">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-800 font-medium">Analytics Growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
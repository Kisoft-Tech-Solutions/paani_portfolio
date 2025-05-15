import Image from 'next/image';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-blue-400/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-blue-300/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in">
              Elevate Your <span className="text-blue-300">Digital Presence</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Transform your brand with our innovative digital marketing solutions. 
              We help businesses grow their online presence and achieve measurable results.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
                View Services
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center">
                <h3 className="text-3xl font-bold">500+</h3>
                <p className="text-blue-200 text-sm">Happy Clients</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold">1.2K+</h3>
                <p className="text-blue-200 text-sm">Projects Done</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold">98%</h3>
                <p className="text-blue-200 text-sm">Success Rate</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="relative z-10 animate-float">
              <Image
                src="/logo.jpeg"
                alt="Digital Marketing Dashboard"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
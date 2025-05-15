'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-1/4 left-1/3 w-72 h-72 bg-blue-400/20 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 4,
          }}
          className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-blue-300/20 rounded-full filter blur-3xl"
        />
      </div>

      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8 max-w-xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold leading-tight"
            >
              Elevate Your <span className="text-blue-300">Digital Presence</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-blue-100 leading-relaxed"
            >
              Transform your brand with our innovative digital marketing solutions. 
              We help businesses grow their online presence and achieve measurable results.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all shadow-lg"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                View Services
              </motion.button>
            </motion.div>

            <div className="grid grid-cols-3 gap-8 pt-12">
              {[
                { number: "500+", text: "Happy Clients" },
                { number: "1.2K+", text: "Projects Done" },
                { number: "98%", text: "Success Rate" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + (index * 0.1), duration: 0.8 }}
                  className="text-center"
                >
                  <h3 className="text-3xl font-bold">{stat.number}</h3>
                  <p className="text-blue-200 text-sm">{stat.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block relative"
          >
            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <Image
                src="/logo.jpeg"
                alt="Digital Marketing Dashboard"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
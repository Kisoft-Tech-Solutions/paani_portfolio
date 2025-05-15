'use client';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Social Media Management",
      price: "Starting from NPR  500/platform",
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
      price: "NPR  3000/video",
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
      price: "NPR  2500 - NPR  6500",
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
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 relative overflow-hidden">
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

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-300 font-semibold text-sm uppercase tracking-wider"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl font-bold text-white mt-4 mb-4"
          >
            Digital Marketing Solutions
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-blue-300 mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Comprehensive digital solutions tailored to your business needs
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-400/20 hover:bg-white/20 transition-all group"
            >
              <div className="border-b border-blue-400/20 pb-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-blue-100 mb-6">{service.description}</p>
                <p className="text-blue-300 font-bold text-xl">{service.price}</p>
              </div>
              <motion.ul
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                className="space-y-4"
              >
                {service.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className="flex items-center gap-3 text-blue-100"
                  >
                    <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-8 bg-white text-blue-900 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
'use client';
import { motion } from 'framer-motion';

const Pricing = () => {
  const plans = [
    {
      name: "Plan A",
      price: "NPR 3,500",
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
      price: "NPR 6,060",
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
      price: "NPR 13,460",
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
    { name: "Social Media management", price: "NPR 500 per platform/month" },
    { name: "Brand Video", price: "NPR 3000" },
    { name: "Digital Gateway Board", price: "NPR 500 - NPR 6500" },
    { name: "Social Media Boosting", price: "NPR 165 per $" },
    { name: "Product Video", price: "NPR 50 per product" },
    { name: "Product Photoshoot", price: "NPR 20 per product" },
    { name: "Content Design", price: "NPR 500 per Content" },
    { name: "Portfolio Website", price: "NPR 10000" }
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
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-4"
          >
            Choose Your Perfect Plan
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
            className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto px-4"
          >
            Flexible pricing options to meet your business needs
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: plan.isPopular ? 1.02 : 1.05 }}
              className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 relative transition-all
                ${plan.isPopular ? 'border-2 border-blue-300 lg:scale-105' : 'border border-blue-400/20'}`}
            >
              {plan.isPopular && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <span className="bg-white text-blue-900 px-6 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                    Most Popular
                  </span>
                </motion.div>
              )}
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-6">
                  {plan.price}
                  <span className="text-base md:text-lg text-blue-200">{plan.period}</span>
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
                  className="space-y-3 md:space-y-4 mb-8 text-left"
                >
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                      className="flex items-center gap-2 text-sm md:text-base text-blue-100"
                    >
                      <svg className="w-5 h-5 text-blue-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 md:py-4 px-6 md:px-8 rounded-xl font-semibold transition-colors ${
                    plan.isPopular
                      ? 'bg-white text-blue-900 hover:bg-blue-50'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-10">Additional Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg p-4 md:p-6 rounded-xl border border-blue-400/20 hover:bg-white/20 transition-all"
              >
                <h4 className="font-semibold text-white mb-2">{service.name}</h4>
                <p className="text-blue-300 font-medium">{service.price}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
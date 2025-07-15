'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-blue-600/95 backdrop-blur-sm border-b border-blue-300/20 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="group">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="relative w-[100px] h-[65px]"
            >
              <Image
                src="/paani.jpeg"
                alt="Paani Digital Marketing"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 120px, 150px"
                quality={100}
              />
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Pricing'].map((item) => (
              <Link 
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-white hover:text-blue-200 transition-colors font-medium"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="md:hidden p-2 text-white z-50"
            aria-label="Toggle Menu"
          >
            <motion.svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={isOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 }
              }}
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                variants={{
                  closed: { d: "M4 6h16M4 12h16M4 18h16" },
                  open: { d: "M6 18L18 6M6 6l12 12" }
                }}
              />
            </motion.svg>
          </motion.button>

          {/* Mobile Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: isOpen ? 0 : '100%' }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed top-0 right-0 h-screen w-64 bg-blue-600/95 backdrop-blur-sm md:hidden z-40 shadow-xl"
          >
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="p-4 border-b border-blue-500/30">
                <h2 className="text-white font-semibold text-lg">Menu</h2>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col py-8 px-4">
                {['Home', 'About', 'Services', 'Pricing'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link 
                      href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      onClick={toggleMenu}
                      className="flex items-center space-x-2 text-white hover:bg-blue-500/20 px-4 py-3 rounded-lg transition-all duration-200"
                    >
                      <span className="text-lg font-medium">{item}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Menu Footer */}
              <div className="mt-auto p-4 border-t border-blue-500/30">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleMenu}
                  className="w-full py-2 px-4 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  Close Menu
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Backdrop */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-30"
            />
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-blue-600 text-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <div className="relative w-[120px] md:w-[150px] h-[40px] md:h-[50px]">
              <Image
                src="/logo.jpeg"
                alt="Paani Digital Marketing"
                fill
                className="object-contain mix-blend-multiply dark:mix-blend-difference"
                priority
                sizes="(max-width: 768px) 120px, 150px"
              />
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-blue-200 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-200 transition-colors font-medium">
              About
            </Link>
            <Link href="/services" className="hover:text-blue-200 transition-colors font-medium">
              Services
            </Link>
            <Link href="/pricing" className="hover:text-blue-200 transition-colors font-medium">
              Pricing
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
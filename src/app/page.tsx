import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Services from '@/components/home/Services';
import Pricing from '@/components/home/Pricing';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ChatBot from '@/chatbot/page';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <ChatBot />
      <Footer />
    </main>
  );
}

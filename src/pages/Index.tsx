
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import PhoneDemo from "@/components/PhoneDemo";
import Features from "@/components/Features";
import Demo from "@/components/Demo";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <PhoneDemo />
      <Features />
      <Demo />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

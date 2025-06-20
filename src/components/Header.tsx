
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">AI-T9</div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-black transition-colors">
            Features
          </a>
          <a href="#demo" className="text-gray-600 hover:text-black transition-colors">
            Demo
          </a>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium">
            Join Waitlist
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

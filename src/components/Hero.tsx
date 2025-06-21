
import { Button } from "@/components/ui/button";
import WaitlistDialog from "@/components/WaitlistDialog";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8 animate-fade-in">
          don't text.
          <br />
          <span className="text-gray-400">think.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
          AI-T9 predicts meaning, not just words. Write faster. Answer smarter.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <WaitlistDialog>
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg">
              👇 Join the waitlist
            </Button>
          </WaitlistDialog>
          <Button variant="outline" className="border-gray-300 px-8 py-3 text-lg">
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

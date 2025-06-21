
import { Button } from "@/components/ui/button";
import WaitlistDialog from "@/components/WaitlistDialog";

const CTA = () => {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Ready to think less,<br />
          <span className="text-gray-400">communicate more?</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Join thousands of users who've already revolutionized their messaging with AI-T9.
        </p>
        
        <WaitlistDialog>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-12 py-4 text-xl">
            👇 Join the waitlist
          </Button>
        </WaitlistDialog>
        
        <p className="text-sm text-gray-500 mt-6">
          No spam. Just updates on launch and early access.
        </p>
      </div>
    </section>
  );
};

export default CTA;

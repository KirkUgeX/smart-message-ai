
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface WaitlistDialogProps {
  children: React.ReactNode;
}

const WaitlistDialog = ({ children }: WaitlistDialogProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!email) {
    toast({
      title: "Error",
      description: "Please enter your email address",
      variant: "destructive",
    });
    return;
  }

  setIsLoading(true);

  try {
    const res = await fetch('/api/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) throw new Error('Failed to add email');

    toast({
      title: "Success!",
      description: "You've been added to the waitlist. We'll notify you when AI-T9 launches!",
    });

    setEmail("");
    setIsOpen(false);
  } catch (error) {
    toast({
      title: "Error",
      description: "Something went wrong. Please try again.",
      variant: "destructive",
    });
  } finally {
    setIsLoading(false);
  }
};

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Join the AI-T9 Waitlist
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            Be the first to know when AI-T9 launches. Get early access and exclusive updates.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium"
            disabled={isLoading}
          >
            {isLoading ? "Adding you..." : "Join Waitlist"}
          </Button>
          
          <p className="text-xs text-gray-500 text-center">
            No spam. Just updates on launch and early access.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;

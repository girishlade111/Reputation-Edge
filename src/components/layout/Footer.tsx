import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Briefcase, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
             <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl mb-4">
                <Briefcase className="h-6 w-6 text-accent" />
                <span className="font-headline">Reputation Edge</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Elevating brands through strategic public relations and reputation management.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" aria-label="Twitter"><Twitter className="h-5 w-5 hover:text-accent transition-colors" /></Link>
              <Link href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5 hover:text-accent transition-colors" /></Link>
              <Link href="#" aria-label="Instagram"><Instagram className="h-5 w-5 hover:text-accent transition-colors" /></Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#services" className="text-muted-foreground hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="#portfolio" className="text-muted-foreground hover:text-accent transition-colors">Portfolio</Link></li>
              <li><Link href="#about" className="text-muted-foreground hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-2">Subscribe to our newsletter for the latest PR insights.</p>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="bg-background" />
              <Button type="submit" variant="default">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Reputation Edge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

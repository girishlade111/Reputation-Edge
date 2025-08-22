import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center bg-background overflow-hidden">
      <div className="absolute inset-0 bg-primary/5"></div>
      <div className="container px-4 md:px-6 z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-headline font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary">
            Shaping Perceptions, Building Legacies.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We are Reputation Edge, a modern PR agency dedicated to crafting compelling narratives that resonate, engage, and inspire. Let's build your brand's future, together.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="#contact">Book a Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-accent">Featured Case Study</h3>
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl mt-2">
              TechNova: From Stealth Startup to Industry Leader
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover how our strategic PR campaign helped TechNova secure tier-1 media placements, attract venture capital funding, and establish themselves as a thought leader in the competitive AI landscape.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">200% Increase in Media Mentions</h4>
                  <p className="text-muted-foreground text-sm">Achieved within the first quarter of our campaign.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Featured in Forbes & TechCrunch</h4>
                  <p className="text-muted-foreground text-sm">Secured placements in top-tier publications.</p>
                </div>
              </div>
            </div>
            <Button size="lg" className="mt-8">Read Full Case Study</Button>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              src="https://placehold.co/800x600.png"
              alt="TechNova Case Study"
              width={800}
              height={600}
              className="rounded-lg shadow-xl"
              data-ai-hint="team collaboration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

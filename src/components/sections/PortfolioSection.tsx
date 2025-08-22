import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const portfolioItems = [
  {
    clientName: "TechNova",
    campaignTitle: "Disrupting the Future of AI",
    description: "Launched a multi-faceted campaign that positioned TechNova as an industry pioneer, securing features in major tech journals and driving investor interest.",
    image: "https://placehold.co/600x400.png",
    hint: "technology abstract"
  },
  {
    clientName: "GreenEats",
    campaignTitle: "A Sustainable Food Movement",
    description: "Crafted a narrative around sustainability and health, resulting in a 300% increase in social media engagement and partnerships with national grocery chains.",
    image: "https://placehold.co/600x400.png",
    hint: "healthy food"
  },
  {
    clientName: "FinSecure",
    campaignTitle: "Building Trust in Digital Finance",
    description: "Developed a crisis communication plan and proactive media outreach strategy that rebuilt consumer trust and solidified their market leadership.",
    image: "https://placehold.co/600x400.png",
    hint: "finance security"
  }
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Success Stories</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We measure success by the success of our clients. Explore a selection of our impactful campaigns that have delivered exceptional results and transformed brands.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden group flex flex-col">
              <div className="relative h-64 w-full">
                <Image
                  src={item.image}
                  alt={item.campaignTitle}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={item.hint}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold">{item.clientName}</h3>
                <p className="text-muted-foreground mt-2 font-semibold">{item.campaignTitle}</p>
                <p className="text-muted-foreground mt-2 text-sm flex-grow">{item.description}</p>
                 <Button variant="link" className="p-0 mt-4 h-auto text-accent hover:text-accent/80 self-start">
                  View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

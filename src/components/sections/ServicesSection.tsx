import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Megaphone, ShieldCheck, TrendingUp, Users } from "lucide-react";

const services = [
  {
    icon: <Megaphone className="h-10 w-10 text-accent" />,
    title: "PR Campaigns",
    description: "Crafting and executing strategic PR campaigns that capture media attention and public interest."
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: "Media Outreach",
    description: "Connecting your brand with key journalists, influencers, and media outlets to secure valuable coverage."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-accent" />,
    title: "Reputation Management",
    description: "Proactively building and protecting your brand's reputation across all digital platforms."
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-accent" />,
    title: "Review Campaigns",
    description: "Driving positive reviews and testimonials to build social proof and enhance credibility."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Expertise</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We offer a comprehensive suite of PR services designed to elevate your brand's presence and impact.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center flex flex-col items-center pt-8 border-t-4 border-transparent hover:border-accent hover:shadow-xl transition-all duration-300">
              <CardHeader>
                {service.icon}
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-semibold mb-2">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

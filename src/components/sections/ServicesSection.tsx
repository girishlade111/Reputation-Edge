import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Megaphone, ShieldCheck, TrendingUp, Users, PenSquare, Briefcase } from "lucide-react";

const services = [
  {
    icon: <Megaphone className="h-10 w-10 text-accent" />,
    title: "Strategic PR Campaigns",
    description: "From product launches to brand repositioning, we craft and execute strategic PR campaigns that capture media attention, engage target audiences, and drive business results."
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: "Media & Influencer Relations",
    description: "We connect your brand with key journalists, influencers, and media outlets. Our strong relationships ensure your story is heard by the right people at the right time."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-accent" />,
    title: "Reputation Management",
    description: "In a digital world, your reputation is everything. We proactively build, manage, and protect your brand's reputation across all online and offline platforms."
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-accent" />,
    title: "Online Review Campaigns",
    description: "We help you generate a steady stream of positive reviews and testimonials to build social proof, enhance credibility, and improve search engine rankings."
  },
  {
    icon: <PenSquare className="h-10 w-10 text-accent" />,
    title: "Content & Copywriting",
    description: "Our team of expert writers creates compelling press releases, blog posts, website copy, and thought leadership articles that resonate with your audience."
  },
  {
    icon: <Briefcase className="h-10 w-10 text-accent" />,
    title: "Crisis Communications",
    description: "When challenges arise, we provide expert guidance and rapid response to navigate difficult situations, minimize damage, and restore public confidence."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Expertise</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We offer a comprehensive suite of public relations and communication services designed to elevate your brand's presence, impact, and bottom line.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

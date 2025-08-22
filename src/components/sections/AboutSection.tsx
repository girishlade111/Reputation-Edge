import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  { name: "Jessica Miller", role: "Founder & CEO", avatar: "https://placehold.co/100x100.png", initials: "JM" },
  { name: "David Chen", role: "Head of Strategy", avatar: "https://placehold.co/100x100.png", initials: "DC" },
  { name: "Maria Garcia", role: "PR Director", avatar: "https://placehold.co/100x100.png", initials: "MG" }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
              The Minds Behind the Message
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Reputation Edge was founded on the principle that every brand has a powerful story to tell. We're a team of passionate strategists, storytellers, and media experts committed to helping you tell yours. Our mission is to build lasting reputations through authentic communication and measurable results.
            </p>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center lg:text-left">Meet Our Leadership</h3>
            {teamMembers.map((member, index) => (
              <div key={index} className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={member.avatar} alt={member.name} data-ai-hint="professional headshot" />
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-lg">{member.name}</h4>
                  <p className="text-accent font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

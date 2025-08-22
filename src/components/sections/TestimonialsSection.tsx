"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CEO, Innovate Inc.",
    quote: "Reputation Edge transformed our brand's narrative. Their strategic approach to media outreach landed us in publications we only dreamed of. They are true partners in growth.",
    avatar: "https://placehold.co/100x100.png",
    initials: "SJ"
  },
  {
    name: "Michael Chen",
    title: "Founder, Future Forward",
    quote: "The team's expertise in reputation management is unparalleled. They navigated a complex situation with professionalism and delivered outstanding results. Highly recommended.",
    avatar: "https://placehold.co/100x100.png",
    initials: "MC"
  },
  {
    name: "Emily Rodriguez",
    title: "CMO, Starlight Co.",
    quote: "Working with Reputation Edge was a game-changer. Our review campaigns have significantly boosted our social proof and customer trust. An essential partner for any modern brand.",
    avatar: "https://placehold.co/100x100.png",
    initials: "ER"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We are proud to have earned the trust of leading brands and visionaries.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between">
                    <CardContent className="p-6 flex flex-col items-start text-left">
                       <p className="text-foreground/80 italic mb-6">"{testimonial.quote}"</p>
                       <div className="flex items-center gap-4 mt-auto">
                         <Avatar>
                           <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person" />
                           <AvatarFallback>{testimonial.initials}</AvatarFallback>
                         </Avatar>
                         <div>
                           <p className="font-semibold">{testimonial.name}</p>
                           <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                         </div>
                       </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </div>
    </section>
  );
}

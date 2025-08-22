"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500, "Message must not exceed 500 characters."),
});

export function ContactSection() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">Let's Connect</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind or just want to learn more? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-background rounded-lg p-8 shadow-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="PR Inquiry for..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about your project..." className="min-h-[120px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" size="lg">Send Message</Button>
              </form>
            </Form>
          </div>
          <div className="flex flex-col justify-center space-y-6">
             <div className="flex items-start gap-4">
               <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <MapPin className="h-6 w-6" />
               </div>
               <div>
                  <h3 className="text-xl font-semibold">Our Office</h3>
                  <p className="text-muted-foreground">123 PR Avenue, Suite 456<br/>New York, NY 10001</p>
               </div>
             </div>
              <div className="flex items-start gap-4">
               <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <Mail className="h-6 w-6" />
               </div>
               <div>
                  <h3 className="text-xl font-semibold">Email Us</h3>
                  <p className="text-muted-foreground">hello@reputationedge.com</p>
               </div>
             </div>
             <div className="flex items-start gap-4">
               <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <Phone className="h-6 w-6" />
               </div>
               <div>
                  <h3 className="text-xl font-semibold">Call Us</h3>
                  <p className="text-muted-foreground">(123) 456-7890</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

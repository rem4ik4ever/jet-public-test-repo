import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Jet crushed our backlog—PRs landed in hours instead of weeks. The agent swarm handled our entire auth rewrite over a weekend.",
      author: "Sarah Chen",
      role: "Product Manager", 
      company: "Wealthsimple",
      avatar: "SC",
    },
    {
      quote: "From PRD to merged code in a day. Our engineering velocity increased 3x, and code quality actually improved thanks to Jet's testing.",
      author: "Marcus Rodriguez",
      role: "Engineering Lead",
      company: "Microsoft", 
      avatar: "MR",
    },
    {
      quote: "Agent swarms finally made platform rewrites feasible. We completed a 6-month project in 3 weeks with better test coverage than ever.",
      author: "Emily Watson",
      role: "CTO",
      company: "ArcMotors",
      avatar: "EW",
    },
  ];

  const logos = [
    { name: "Wealthsimple", width: "w-24" },
    { name: "Microsoft", width: "w-28" },
    { name: "ArcMotors", width: "w-20" },
    { name: "Stripe", width: "w-20" },
    { name: "Vercel", width: "w-16" },
    { name: "Linear", width: "w-20" },
  ];

  return (
    <section className="py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Customer Logos */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-white mb-2">
              Trusted by leading teams
            </h2>
            <p className="text-subtle">
              From startups to Fortune 500 companies
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-60 hover:opacity-100 transition-opacity">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className={`${logo.width} h-8 bg-muted rounded flex items-center justify-center text-xs text-subtle font-medium`}
              >
                {logo.name}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Teams Are Saying
          </h2>
          <p className="text-lg text-subtle max-w-2xl mx-auto">
            Real feedback from engineering leaders who transformed their development process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-surface border-border hover:bg-muted transition-all duration-300 hover:shadow-lg hover:shadow-brand/5">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-brand/20 mb-4" />
                <blockquote className="text-white leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-brand/20 flex items-center justify-center text-brand font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-subtle text-sm">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="mt-16 text-center">
          <p className="text-subtle mb-4">
            Join hundreds of teams shipping faster with Jet
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-sm text-subtle">
              <div className="h-2 w-2 rounded-full bg-accent-ok"></div>
              <span>500+ teams</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-subtle">
              <div className="h-2 w-2 rounded-full bg-accent-ok"></div>
              <span>50,000+ PRs generated</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-subtle">
              <div className="h-2 w-2 rounded-full bg-accent-ok"></div>
              <span>99.8% uptime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

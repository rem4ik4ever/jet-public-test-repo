import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, BarChart3 } from "lucide-react";

const ValueProps = () => {
  const valueProps = [
    {
      icon: <FileText className="h-6 w-6 text-brand" />,
      title: "PRD → Tickets",
      description: "PRDs become epics and tasks with acceptance criteria—instantly.",
    },
    {
      icon: <Users className="h-6 w-6 text-brand" />,
      title: "Fleet of Coders",
      description: "Agents branch, implement, write tests, and open PRs per task.",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-brand" />,
      title: "Observability & Control",
      description: "You approve changes; Jet learns from review feedback.",
    },
  ];

  return (
    <section className="py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How engineering teams should work
          </h2>
          <p className="text-lg text-subtle max-w-2xl mx-auto">
            From product requirements to shipped code in minutes, not weeks.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {valueProps.map((prop, index) => (
            <Card key={prop.title} className="hover:bg-muted transition-all duration-300 hover:shadow-lg hover:shadow-brand/5">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl border border-border bg-surface flex items-center justify-center mb-4 hover:scale-105 transition-transform duration-200">
                  {prop.icon}
                </div>
                <CardTitle className="text-xl">{prop.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {prop.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;

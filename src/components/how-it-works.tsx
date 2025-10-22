import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, GitBranch, Users, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: <FileText className="h-6 w-6" />,
      title: "Author PRD",
      description: "Paste PRD or sync from Docs/Notion. Jet parses requirements, acceptance criteria, and technical constraints.",
    },
    {
      number: "2", 
      icon: <GitBranch className="h-6 w-6" />,
      title: "Auto-Scoping",
      description: "Jet creates tasks with dependencies, test plans, and implementation strategies. Each task is properly scoped for completion.",
    },
    {
      number: "3",
      icon: <Users className="h-6 w-6" />,
      title: "Agent Swarm",
      description: "Hundreds of agents branch, implement, test, and open PRs. Each agent focuses on specific tasks while coordinating with others.",
    },
    {
      number: "4",
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Review & Merge",
      description: "Human review, Jet fixes CI failures, learns from feedback, and merges. Continuous improvement with every cycle.",
    },
  ];

  return (
    <section className="py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How Jet Works
          </h2>
          <p className="text-lg text-subtle max-w-2xl mx-auto">
            From product requirements to production code in four automated steps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <Card key={step.title} className="relative hover:bg-muted transition-all duration-300 hover:shadow-lg hover:shadow-brand/5">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="h-12 w-12 rounded-xl border border-border bg-surface flex items-center justify-center text-brand">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {step.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Timeline visualization */}
        <div className="mt-16 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden lg:block"></div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {["PRD", "Tasks", "Code", "Ship"].map((label, index) => (
              <div key={label} className="relative flex flex-col items-center">
                <div className="h-8 w-8 rounded-full bg-brand text-white text-sm font-bold flex items-center justify-center mb-2">
                  {index + 1}
                </div>
                <span className="text-sm text-subtle font-medium">{label}</span>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-4 left-full w-full h-0.5 bg-border -translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

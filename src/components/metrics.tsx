import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Metrics = () => {
  const metrics = [
    {
      value: "-60%",
      label: "Cycle Time",
      description: "From PRD to production",
      footnote: "Based on 6-month average across 50 teams",
    },
    {
      value: "+90%", 
      label: "Delivery Speed",
      description: "Features shipped per sprint",
      footnote: "Measured against baseline before Jet",
    },
    {
      value: "95%",
      label: "Test Coverage",
      description: "On generated modules",
      footnote: "Auto-generated unit and integration tests",
    },
  ];

  return (
    <section className="py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proven Impact
          </h2>
          <p className="text-lg text-subtle max-w-2xl mx-auto">
            Real results from engineering teams using Jet to accelerate development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <Card key={metric.label} className="relative bg-surface border-border hover:bg-muted transition-all duration-300 hover:shadow-lg hover:shadow-brand/5">
              <CardContent className="p-8 text-center">
                <div className="text-5xl md:text-6xl font-bold text-brand mb-4">
                  {metric.value}
                </div>
                <div className="text-xl font-semibold text-white mb-2">
                  {metric.label}
                </div>
                <div className="text-subtle mb-4">
                  {metric.description}
                </div>
                <div className="text-xs text-subtle/60 italic">
                  {metric.footnote}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-subtle max-w-3xl mx-auto">
            Results vary by codebase complexity, team size, and existing processes. 
            Metrics measured over minimum 3-month periods. Individual team results available in case studies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Metrics;

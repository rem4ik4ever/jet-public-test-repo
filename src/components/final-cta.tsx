"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code } from "lucide-react";
import DemoModal from "@/components/demo-modal";

const FinalCTA = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <section className="py-24 border-t border-border relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand/5 to-brand-2/5"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-brand-2/10 rounded-full blur-3xl -translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Put your backlog on
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-2">
              {" "}autopilot.
            </span>
          </h2>
          
          <p className="text-xl text-subtle mb-10 max-w-2xl mx-auto leading-relaxed">
            Stop manually breaking down requirements and managing development tasks. 
            Let Jet handle the heavy lifting while your team focuses on what matters most.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button size="lg" className="w-full sm:w-auto group" onClick={() => setIsDemoModalOpen(true)}>
              Get a Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto group">
              <Code className="mr-2 h-4 w-4" />
              See a Sample PR
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-subtle">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent-ok"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent-ok"></div>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent-ok"></div>
              <span>Setup in &lt;5 minutes</span>
            </div>
          </div>
        </div>
      </section>

      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </>
  );
};

export default FinalCTA;

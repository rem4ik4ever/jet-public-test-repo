"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import DemoModal from "@/components/demo-modal";

const Hero = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-24 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Ship 10× faster with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-2">
                  AI Engineering.
                </span>
              </h1>
              <p className="mt-6 text-lg text-subtle max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Jet turns PRDs into scoped engineering tasks and spawns hundreds of coding agents that write code and open PRs. Teams boost delivery speed by up to{" "}
                <span className="text-white font-semibold">90%</span>.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Button size="lg" className="w-full sm:w-auto" onClick={() => setIsDemoModalOpen(true)}>
                  Get a Demo
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto group">
                  See it build code
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              
              {/* Social Proof */}
              <div className="mt-10">
                <p className="text-sm text-subtle mb-6">Trusted by teams at</p>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-6 opacity-60 hover:opacity-100 transition-opacity">
                  {/* Placeholder logos - replace with actual SVG components */}
                  <div className="h-6 w-24 bg-muted rounded flex items-center justify-center text-xs text-subtle">
                    Wealthsimple
                  </div>
                  <div className="h-6 w-24 bg-muted rounded flex items-center justify-center text-xs text-subtle">
                    Microsoft
                  </div>
                  <div className="h-6 w-24 bg-muted rounded flex items-center justify-center text-xs text-subtle">
                    ArcMotors
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              <div className="rounded-2xl border border-border bg-surface p-4 md:p-6 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                {/* Code Canvas Placeholder */}
                <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-2 text-subtle text-xs">terminal</span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-accent-ok">$ jet generate --from-prd</div>
                    <div className="text-subtle">✓ Analyzing requirements...</div>
                    <div className="text-subtle">✓ Creating 47 scoped tasks...</div>
                    <div className="text-subtle">✓ Spawning agent swarm...</div>
                    <div className="text-brand">🚀 47 PRs opened in 12 minutes</div>
                  </div>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-brand/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-brand-2/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </>
  );
};

export default Hero;

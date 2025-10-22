"use client";

import { Navigation } from "../components/navigation";
import { FileText, Users, Eye, FileEdit, Target, Network, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <ValueProps />
        <HowItWorks />
        <LivePreview />
        <ImpactMetrics />
        <CustomerQuotes />
        <SecurityCompliance />
        <Integrations />
        <PricingCTA />
        <FinalCTA />
        <Footer />
      </main>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative py-24 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Ship 10× faster with AI Engineering.
          </h1>
          <p className="text-lg text-subtle max-w-xl">
            Jet turns PRDs into scoped engineering tasks and spawns hundreds of coding agents that write code and open PRs. Teams boost delivery speed by up to <span className="text-white font-semibold">90%</span>.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3 text-sm font-medium text-white hover:bg-brand/90 transition-colors"
            >
              Get a Demo
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center text-subtle hover:text-white transition-colors text-sm"
            >
              See it build code <span className="ml-1">→</span>
            </a>
          </div>
          
          {/* Social proof */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 opacity-80">
            <span className="text-sm text-subtle">Trusted by teams at:</span>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <span className="text-white opacity-60 hover:opacity-100 transition-opacity text-sm">Wealthsimple</span>
              <span className="text-white opacity-60 hover:opacity-100 transition-opacity text-sm">Microsoft</span>
              <span className="text-white opacity-60 hover:opacity-100 transition-opacity text-sm">ArcMotors</span>
            </div>
          </div>
        </motion.div>

        {/* Code canvas placeholder */}
        <motion.div 
          className="rounded-2xl border border-border bg-surface p-4 md:p-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="font-mono text-sm space-y-2 text-green-400">
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400">▶</span>
              <span>Generating tasks from PRD...</span>
            </div>
            <div>• User authentication system ✓</div>
            <div>• Payment processing integration ✓</div>
            <div>• Dashboard analytics ✓</div>
            
            <div className="text-gray-400 mt-4">Opening pull requests...</div>
            <div>PR #142: <span className="text-blue-400">feature/auth-system</span>🔗</div>
            <div>PR #143: <span className="text-blue-400">feature/payments</span>🔗</div>
            <div>PR #144: <span className="text-blue-400">feature/analytics</span>🔗</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ValueProps() {
  const props = [
    {
      icon: <FileText className="h-5 w-5 text-brand"/>,
      title: "AI PRD → Tickets",
      body: "PRDs become scoped epics & tasks with acceptance criteria."
    },
    {
      icon: <Users className="h-5 w-5 text-brand"/>,
      title: "Fleet of Coders", 
      body: "Hundreds of agents branch, implement, write tests, and open PRs per task."
    },
    {
      icon: <Eye className="h-5 w-5 text-brand"/>,
      title: "Observability & Control",
      body: "You approve changes, agents adapt from feedback."
    }
  ];

  return (
    <section id="product" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Built for Engineering Teams</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {props.map((prop, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-surface text-center p-6 hover:bg-muted transition-colors"
            >
              <div className="mb-4">{prop.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{prop.title}</h3>
              <p className="text-subtle">{prop.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>);
}

function HowItWorks() {
  const steps = [
    {
      icon: <FileEdit className="h-6 w-6 text-brand"/>,
      title: "Author PRD",
      description: "Paste PRD or sync from Docs/Notion."
    },
    {
      icon: <Target className="h-6 w-6 text-brand"/>,
      title: "Auto-Scoping", 
      description: "Jet creates tasks with dependencies and test plans."
    },
    {
      icon: <Network className="h-6 w-6 text-brand"/>,
      title: "Agent Swarm",
      description: "Agents branch, implement, test, and open PRs."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-brand"/>,
      title: "Review & Merge",
      description: "Human review, Jet fixes CI failures, merges."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">How Jet Works</h2>
          <p className="text-subtle max-w-2xl mx-auto">From PRD to merged code in four simple steps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 text-center">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand/10">{step.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-subtle text-sm">{step.description}</p>
              <div className="mt-4">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block text-muted">
                    <span className="rotate-90 inline-block">→</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Compact sequence indicator */}
        <div className="mt-16 flex items-center justify-center space-x-4">
          {[...Array(steps.length)].map((_, i) => (
            <div key={i} className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-brand/30"/>
              {i < steps.length - 1 && (
                <div className="w-12 h-px bg-border"/>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>);
}

function LivePreview() {
  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Live Demo</h2>
        </div>

        {/* Demo preview placeholder */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <div className="text-subtle text-sm mb-4">Input</div>
            <div className="font-mono text-sm text-white">
              Example: PRD Document → Task Creation
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <div className="text-subtle text-sm mb-4">Output</div>
            <div className="font-mono text-sm text-white">
              Engineering tasks with testing and code
            </div>
          </div>
        </div>

        {/* Play demo CTA */}
        <div className="text-center mt-12">
          <a
            href="#demo"
            className="inline-block rounded-xl bg-brand px-6 py-3 text-sm font-medium text-white hover:bg-brand/90 transition-colors cursor-pointer"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  );
}

// Placeholder components for remaining sections
function ImpactMetrics() {
  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-white">–60%</div>
            <div className="text-subtle">cycle time reduction</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-white">+90%</div>
            <div className="text-subtle">delivery speed increase</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-white">95%</div>
            <div className="text-subtle">test coverage target</div>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-xs text-subtle">Results may vary by codebase and process</p>
        </div>
      </div>
    </section>
  );
}

function CustomerQuotes() {
  const quotes = [
    {
      name: "Wealthsimple PM",
      quote: "Jet crushed our backlog—PRs landed in hours.",
      company: "Wealthsimple"
    },
    {
      name: "Microsoft Eng Lead", 
      quote: "From PRD to merged code in a day.",
      company: "Microsoft"
    },
    {
      name: "ArcMotors CTO",
      quote: "Agent swarms finally made platform rewrites feasible.",
      company: "ArcMotors"
    }
  ];

  return (
    <section id="customers" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Trusted by Engineering Teams</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <div key={index} className="text-center">
              <div className="bg-surface border border-border rounded-2xl p-6 text-left">
                <p className="text-white mb-4 italic">"{quote.quote}"</p>
                <div className="text-subtle text-sm">
                  {quote.name}, {quote.company}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Customer logos */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 mt-12">
          <span className="text-white opacity-60 hover:opacity-100 transition-opacity text-sm">Wealthsimple</span>
          <span className="text-white opacity-60 hover:opacity-100 transition-opacity text-sm">Microsoft</span>
          <span className="text-white opacity-60 hover:opacity-100 transition-opacity text-sm">ArcMotors</span>
        </div>
      </div>
    </section>
  );
}

function SecurityCompliance() {
  return (
    <section id="security" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Security & Compliance</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          {[
            "SSO/SAML",
            "Least-privilege Git scopes",
            "Audit logs", 
            "Encryption at rest/in transit",
            "Regional data hosting",
            "Private runners"
          ].map((item) => (
            <div key={item} className="bg-surface border border-border rounded-lg p-4 text-center">
              <div>{item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Integrations() {
  const integrations = ["GitHub", "GitLab", "Bitbucket", "Jira", "Linear", "Notion", "Google Docs", "Slack"];

  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Integrations</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 text-subtle">
          {integrations.map((integration) => (
            <div key={integration} className="opacity-60 hover:opacity-100 transition-opacity">
              {integration}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCTA() {
  return (
    <section id="pricing" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Usage-based pricing</h2>
        <p className="text-subtle mb-8">With enterprise controls</p>
        <a
          href="#demo"
          className="inline-block rounded-xl bg-brand px-6 py-3 text-sm font-medium text-white hover:bg-brand/90 transition-colors cursor-pointer"
        >
          Talk to sales
        </a>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Put your backlog on autopilot.</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#demo"
            className="inline-block rounded-xl bg-brand px-6 py-3 text-sm font-medium text-white hover:bg-brand/90 transition-colors cursor-pointer"
          >
            Get a Demo
          </a>
          <a
            href="/sample-pr"
            className="inline-block rounded-xl border border-border px-6 py-3 text-sm font-medium text-subtle hover:text-white transition-colors cursor-pointer"
          >
            See a Sample PR
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2 text-subtle">
              <li><a href="#" className="hover:text-white transition-colors">Overview</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How it works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-subtle">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-subtle">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case studies</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-subtle">
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">DPA</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-subtle text-sm">
          © 2024 Jet. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
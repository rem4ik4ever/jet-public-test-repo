"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  const footerLinks = {
    Product: [
      { name: "Overview", href: "#" },
      { name: "How it works", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Security", href: "#" },
      { name: "Docs", href: "#" },
    ],
    Company: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Blog", href: "#" },
    ],
    Resources: [
      { name: "Documentation", href: "#" },
      { name: "Changelog", href: "#" },
      { name: "Case studies", href: "#" },
      { name: "API Reference", href: "#" },
    ],
    Legal: [
      { name: "Terms", href: "#" },
      { name: "Privacy", href: "#" },
      { name: "DPA", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-border">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay updated with Jet
            </h3>
            <p className="text-subtle mb-6">
              Get the latest updates, tips, and best practices delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-border bg-background text-white placeholder-subtle focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand"
                required
              />
              <Button type="submit" className="group">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
            <p className="text-xs text-subtle/60 mt-3">
              Unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Column */}
            <div className="col-span-2 lg:col-span-2">
              <div className="mb-6">
                <span className="text-2xl font-bold text-white font-mono">JET</span>
              </div>
              <p className="text-subtle leading-relaxed mb-6 max-w-sm">
                Ship 10× faster with AI engineering. Turn PRDs into production code with agent swarms.
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="h-10 w-10 rounded-lg border border-border bg-muted flex items-center justify-center text-subtle hover:text-white hover:bg-brand/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold text-white mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-subtle hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-subtle">
              © 2024 Jet Technologies, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-subtle">
              <a href="#" className="hover:text-white transition-colors">
                Status
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

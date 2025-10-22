"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import DemoModal from "@/components/demo-modal";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const navigation = [
    { name: "Product", href: "#" },
    { name: "How it works", href: "#" },
    { name: "Customers", href: "#" },
    { name: "Security", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Docs", href: "#" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
        <nav className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-white font-mono">JET</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-subtle hover:text-text px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                Sign in
              </Button>
              <Button size="sm" onClick={() => setIsDemoModalOpen(true)}>
                Get a Demo
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-subtle hover:text-text block px-3 py-2 text-base font-medium transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="pt-4 pb-3 border-t border-border">
                <div className="px-2 space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    Sign in
                  </Button>
                  <Button className="w-full" onClick={() => setIsDemoModalOpen(true)}>
                    Get a Demo
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </>
  );
};

export default Navbar;

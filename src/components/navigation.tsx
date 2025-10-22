"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Product", href: "#product" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Customers", href: "#customers" },
    { name: "Security", href: "#security" },
    { name: "Pricing", href: "#pricing" },
    { name: "Docs", href: "#docs" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-border bg-black/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-white font-bold text-xl tracking-tight">JET</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-subtle hover:text-white transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex md:items-center md:space-x-3">
            <a
              href="mailto:demo@jet.ai?subject=Demo%20Request"
              className="inline-flex items-center justify-center rounded-xl bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand/90 transition-colors cursor-pointer"
            >
              Get a Demo
            </a>
            <Link
              href="/signin"
              className="text-subtle hover:text-white transition-colors text-sm border border-transparent hover:border-border px-3 py-2 rounded-lg"
            >
              Sign in
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-subtle hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 bg-surface border-t border-border">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-subtle hover:text-white transition-colors text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <a
                  href="mailto:demo@jet.ai?subject=Demo%20Request"
                  className="block w-full text-center rounded-xl bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand/90 transition-colors cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Demo
                </a>
                <Link
                  href="/signin"
                  className="block text-center text-subtle hover:text-white transition-colors text-sm border border-transparent hover:border-border px-3 py-2 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
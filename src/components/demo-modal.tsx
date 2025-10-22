"use client";

import { useState } from "react";
import { X, CalendarIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DemoModalProps {
  children: React.ReactNode;
}

export function DemoModal({ children }: DemoModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="text-blue-500 hover:text-blue-400 transition-colors"
      >
        {children}
      </button>
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative bg-surface border border-border rounded-2xl p-6 w-full max-w-lg shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">Get a Demo</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-subtle hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="text-subtle text-sm mb-6">
              Experience Jet - AI Engineering for your team
            </p>

            {/* Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-surface border border-border rounded-lg px-3 py-2 text-text placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-brand"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-surface border border-border rounded-lg px-3 py-2 text-text placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-brand"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Work Email"
                className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-text placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-brand"
                required
              />
              <textarea
                placeholder="Goals (optional)"
                className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-text placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-brand min-h-[100px]"
              />

              <button
                type="submit"
                className="w-full bg-brand hover:bg-brand/90 text-white rounded-lg px-4 py-2 flex items-center justify-center gap-2"
              >
                <CalendarIcon className="h-4 w-4" />
                Schedule Demo
              </button>
            </form>

            <p className="text-xs text-subtle text-center mt-4">
              We'll reach out in 1 business day
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
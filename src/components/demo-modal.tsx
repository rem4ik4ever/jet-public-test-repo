"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, CheckCircle, Calendar } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    gitProvider: "",
    goals: "",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Demo request submitted:", formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        teamSize: "",
        gitProvider: "",
        goals: "",
      });
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-surface border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span className="text-xl font-semibold">
              {isSubmitted ? "Demo Request Received!" : "Get a Demo"}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              disabled={isSubmitting}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-white placeholder-subtle focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Work Email *</Label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-white placeholder-subtle focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company">Company *</Label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-white placeholder-subtle focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand"
                  placeholder="Acme Corp"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="teamSize">Team Size *</Label>
                <select
                  id="teamSize"
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-white focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand"
                >
                  <option value="">Select team size</option>
                  <option value="1-10">1-10 engineers</option>
                  <option value="11-50">11-50 engineers</option>
                  <option value="51-200">51-200 engineers</option>
                  <option value="201+">201+ engineers</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="gitProvider">Git Provider *</Label>
              <select
                id="gitProvider"
                name="gitProvider"
                value={formData.gitProvider}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-white focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand"
              >
                <option value="">Select Git provider</option>
                <option value="github">GitHub</option>
                <option value="gitlab">GitLab</option>
                <option value="bitbucket">Bitbucket</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="goals">What are you hoping to achieve with Jet?</Label>
              <textarea
                id="goals"
                name="goals"
                value={formData.goals}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-white placeholder-subtle focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand resize-none"
                placeholder="e.g., Reduce development time, improve code quality, scale our engineering team..."
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1"
              >
                {isSubmitting ? "Submitting..." : "Request Demo"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
            </div>
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="h-16 w-16 bg-accent-ok/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-accent-ok" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Thanks for your interest!
            </h3>
            <p className="text-subtle mb-6">
              We've received your demo request and will reach out within 1 business day to schedule your personalized demo.
            </p>
            
            <Card className="bg-muted border-border mb-6">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 text-left">
                  <Calendar className="h-5 w-5 text-brand flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-white">
                      What's next?
                    </p>
                    <p className="text-xs text-subtle">
                      You'll receive a calendar invite with a Jet solutions expert tailored to your team's needs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button onClick={handleClose} className="w-full">
              Got it, thanks!
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;

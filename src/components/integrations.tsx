import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Integrations = () => {
  const integrations = [
    {
      name: "GitHub",
      category: "Git Providers",
      badge: "1-click",
      description: "Native GitHub integration with PR automation",
    },
    {
      name: "GitLab", 
      category: "Git Providers",
      badge: "1-click",
      description: "Complete GitLab CI/CD pipeline support",
    },
    {
      name: "Bitbucket",
      category: "Git Providers", 
      badge: "1-click",
      description: "Atlassian ecosystem integration",
    },
    {
      name: "Jira",
      category: "Project Management",
      badge: "read-only",
      description: "Sync requirements and update tickets automatically",
    },
    {
      name: "Linear",
      category: "Project Management",
      badge: "read-only", 
      description: "Modern issue tracking integration",
    },
    {
      name: "Notion",
      category: "Documentation",
      badge: "sync",
      description: "Import PRDs and documentation directly",
    },
    {
      name: "Google Docs",
      category: "Documentation",
      badge: "read-only",
      description: "Connect Google Docs as requirement sources",
    },
    {
      name: "Slack",
      category: "Communication",
      badge: "notifications",
      description: "Real-time updates and deployment notifications",
    },
  ];

  const categories = ["Git Providers", "Project Management", "Documentation", "Communication"];

  const badgeColors = {
    "1-click": "bg-accent-ok/20 text-accent-ok border-accent-ok/30",
    "read-only": "bg-brand/20 text-brand border-brand/30", 
    "sync": "bg-brand-2/20 text-brand-2 border-brand-2/30",
    "notifications": "bg-accent-warn/20 text-accent-warn border-accent-warn/30",
  };

  return (
    <section className="py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Integrations
          </h2>
          <p className="text-lg text-subtle max-w-2xl mx-auto">
            Jet connects seamlessly with your existing tools and workflows. 
            No disruption to your current development process.
          </p>
        </div>

        {/* Integration Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border border-border bg-surface text-subtle hover:text-white hover:bg-muted transition-all duration-300 text-sm font-medium"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((integration) => (
            <Card key={integration.name} className="bg-surface border-border hover:bg-muted transition-all duration-300 hover:shadow-lg hover:shadow-brand/5 group">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  {/* Logo Placeholder */}
                  <div className="h-16 w-16 bg-muted rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand/10 transition-colors">
                    <span className="text-xs text-subtle font-mono">
                      {integration.name.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  
                  {/* Integration Name */}
                  <h3 className="font-semibold text-white mb-1">
                    {integration.name}
                  </h3>
                  
                  {/* Category */}
                  <p className="text-xs text-subtle mb-3">
                    {integration.category}
                  </p>
                  
                  {/* Badge */}
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border mb-3 ${badgeColors[integration.badge as keyof typeof badgeColors]}`}>
                    {integration.badge}
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-subtle leading-relaxed">
                    {integration.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="h-12 w-12 bg-brand/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-brand font-bold">API</span>
            </div>
            <h3 className="font-semibold text-white mb-2">REST API</h3>
            <p className="text-sm text-subtle">
              Complete API for custom integrations and automation workflows
            </p>
          </div>
          
          <div className="text-center">
            <div className="h-12 w-12 bg-brand/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-brand font-bold">SDK</span>
            </div>
            <h3 className="font-semibold text-white mb-2">Developer SDK</h3>
            <p className="text-sm text-subtle">
              TypeScript/Python SDKs for building custom Jet extensions
            </p>
          </div>
          
          <div className="text-center">
            <div className="h-12 w-12 bg-brand/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-brand font-bold">CLI</span>
            </div>
            <h3 className="font-semibold text-white mb-2">Command Line</h3>
            <p className="text-sm text-subtle">
              Powerful CLI for local development and CI/CD integration
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-subtle mb-4">
            Don't see your integration? We're adding new tools every week.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-6 py-3 rounded-xl border border-border bg-surface text-white hover:bg-muted transition-all duration-300">
              Request Integration
            </button>
            <button className="px-6 py-3 rounded-xl border border-border bg-surface text-white hover:bg-muted transition-all duration-300">
              View API Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;

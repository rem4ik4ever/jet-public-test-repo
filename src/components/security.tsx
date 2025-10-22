import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Lock, FileText, Server, Globe, Users } from "lucide-react";

const Security = () => {
  const securityFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "SSO/SAML",
      description: "Enterprise single sign-on with your identity provider",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Least-Privilege Git Scopes", 
      description: "Granular permissions with minimal required access",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Audit Logs",
      description: "Complete traceability of all actions and changes",
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Private Runners",
      description: "Self-hosted agents in your infrastructure",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Regional Data Hosting",
      description: "Data residency in your preferred regions",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Role-Based Access",
      description: "Fine-grained permissions for team members",
    },
  ];

  const compliance = [
    "SOC 2 Type II",
    "GDPR Compliant", 
    "ISO 27001",
    "HIPAA Ready",
  ];

  return (
    <section className="py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Security & Compliance
          </h2>
          <p className="text-lg text-subtle max-w-2xl mx-auto">
            Enterprise-grade security with the controls you need to protect your code and data.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Security Features */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Security Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {securityFeatures.map((feature, index) => (
                <Card key={index} className="bg-surface border-border hover:bg-muted transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg border border-border bg-muted flex items-center justify-center text-brand">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-base">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-subtle leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Compliance & Additional Info */}
          <div className="space-y-8">
            {/* Compliance Badges */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">
                Compliance Standards
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {compliance.map((standard) => (
                  <div
                    key={standard}
                    className="bg-surface border border-border rounded-xl p-4 text-center hover:bg-muted transition-all duration-300"
                  >
                    <div className="text-brand font-semibold">{standard}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Security CTA */}
            <Card className="bg-surface border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-brand" />
                  Security Documentation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-subtle leading-relaxed">
                  Deep dive into our security architecture, data handling practices, 
                  and compliance frameworks. Our security team is available for 
                  technical reviews and questions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" className="flex-1">
                    View Security Whitepaper
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Request Security Review
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Key Security Points */}
            <div className="bg-surface border border-border rounded-xl p-6">
              <h4 className="font-semibold text-white mb-4">Key Security Points</h4>
              <ul className="space-y-2 text-sm text-subtle">
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-ok mt-2 flex-shrink-0"></div>
                  <span>End-to-end encryption for data in transit and at rest</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-ok mt-2 flex-shrink-0"></div>
                  <span>Zero-access architecture - we can't access your source code</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-ok mt-2 flex-shrink-0"></div>
                  <span>Regular third-party security audits and penetration testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-ok mt-2 flex-shrink-0"></div>
                  <span>24/7 security monitoring and incident response</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;

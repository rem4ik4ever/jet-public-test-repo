"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, FileText, GitBranch, CheckCircle } from "lucide-react";

const DemoBlock = () => {
  const [activeDemo, setActiveDemo] = useState("prd-to-tasks");

  const demoContent = {
    "prd-to-tasks": {
      title: "PRD → Tasks",
      description: "Watch Jet transform a product requirement into scoped engineering tasks",
      code: `// User PRD Input
"""
User Authentication System
- Email/password login
- Social login (Google, GitHub)
- Password reset flow
- 2FA support
- Session management
"""

// Jet Output: 47 Scoped Tasks
1. [BACKEND] Design user schema with email verification
2. [FRONTEND] Create login form component  
3. [BACKEND] Implement JWT token generation
4. [FRONTEND] Build social login buttons
5. [BACKEND] Add password reset endpoints
6. [TESTS] Write integration tests for auth flow
... (41 more tasks)`,
    },
    "tasks-to-prs": {
      title: "Tasks → PRs", 
      description: "See agents create branches, implement features, and open pull requests",
      code: `// Agent Swarm Activity
[Agent-23] Created feature/auth-user-schema
[Agent-23] ✅ Implemented user model with validation
[Agent-23] ✅ Added database migrations
[Agent-23] 📤 Opened PR #1423

[Agent-45] Created feature/auth-login-form  
[Agent-45] ✅ Built React login component
[Agent-45] ✅ Added form validation
[Agent-45] ✅ Integrated with backend API
[Agent-45] 📤 Opened PR #1424

[Agent-67] Created feature/auth-jwt-tokens
[Agent-67] ✅ Implemented JWT service
[Agent-67] ✅ Added token refresh logic
[Agent-67] 📤 Opened PR #1425

// Summary: 47 PRs opened in 12 minutes`,
    },
    "pr-review": {
      title: "PR Review",
      description: "Experience automated testing and intelligent code review",
      code: `// Pull Request #1423
✅ All tests passing (127/127)
✅ Code coverage: 94% 
✅ Security scan: No vulnerabilities
✅ Performance: No regressions
✅ Type checking: No errors

// AI Review Summary
"This PR implements a comprehensive user schema with:
• Proper email validation and normalization
• Secure password hashing with bcrypt
• Indexes for optimal query performance  
• GDPR-compliant data structure

Minor suggestions:
• Consider adding phone number field for future SMS auth
• Add audit timestamps for compliance

Recommended: ✅ Approve and merge"`,
    },
  };

  return (
    <section className="py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See Jet in Action
          </h2>
          <p className="text-lg text-subtle max-w-2xl mx-auto">
            Watch how Jet transforms requirements into production-ready code with full observability.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Demo Controls */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {Object.entries(demoContent).map(([key, demo]) => (
                <Button
                  key={key}
                  variant={activeDemo === key ? "default" : "outline"}
                  className="h-auto p-4 flex flex-col items-start"
                  onClick={() => setActiveDemo(key)}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {key === "prd-to-tasks" && <FileText className="h-4 w-4" />}
                    {key === "tasks-to-prs" && <GitBranch className="h-4 w-4" />}
                    {key === "pr-review" && <CheckCircle className="h-4 w-4" />}
                    <span className="font-medium">{demo.title}</span>
                  </div>
                  <span className="text-xs text-left opacity-80">
                    {demo.description}
                  </span>
                </Button>
              ))}
            </div>

            <Card className="bg-surface border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="h-5 w-5 text-brand" />
                  Live Demo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-subtle mb-4">
                  {demoContent[activeDemo as keyof typeof demoContent].description}
                </p>
                <Button className="w-full">
                  Play Full Demo
                </Button>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface rounded-xl p-4 border border-border">
                <div className="text-2xl font-bold text-brand">47</div>
                <div className="text-sm text-subtle">Tasks Generated</div>
              </div>
              <div className="bg-surface rounded-xl p-4 border border-border">
                <div className="text-2xl font-bold text-accent-ok">12m</div>
                <div className="text-sm text-subtle">Time to PRs</div>
              </div>
            </div>
          </div>

          {/* Code Preview */}
          <div>
            <Card className="bg-surface border-border h-full">
              <CardHeader>
                <Tabs defaultValue="code" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="code">Code</TabsTrigger>
                    <TabsTrigger value="tests">Tests</TabsTrigger>
                    <TabsTrigger value="logs">Logs</TabsTrigger>
                  </TabsList>
                  <TabsContent value="code" className="mt-4">
                    <CardTitle className="text-lg">
                      {demoContent[activeDemo as keyof typeof demoContent].title}
                    </CardTitle>
                  </TabsContent>
                  <TabsContent value="tests" className="mt-4">
                    <CardTitle className="text-lg">Test Results</CardTitle>
                  </TabsContent>
                  <TabsContent value="logs" className="mt-4">
                    <CardTitle className="text-lg">Agent Logs</CardTitle>
                  </TabsContent>
                </Tabs>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre className="whitespace-pre-wrap text-subtle">
                    {demoContent[activeDemo as keyof typeof demoContent].code}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoBlock;

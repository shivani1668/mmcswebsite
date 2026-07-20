import React from "react";
import { FileText, Download, Search, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TCPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Page Header */}
      <section className="bg-primary py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Transfer Certificate</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Search and download student Transfer Certificates as per CBSE/State Board compliance.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          {/* Search Card */}
          <Card className="shadow-xl border-t-4 border-t-secondary">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                <Search className="text-secondary" />
                Search Certificate
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-foreground/70">
                To download a Transfer Certificate, please enter the Student's Admission Number or TC Number.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input placeholder="Enter Admission Number (e.g. MMCS/2023/045)" className="h-12" />
                <Button className="h-12 px-8 bg-primary hover:bg-primary/90 font-bold">Search TC</Button>
              </div>
            </CardContent>
          </Card>

          {/* Guidelines */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                <Info className="text-secondary" />
                TC Application Process
              </h2>
              <div className="space-y-4">
                <ProcessStep
                  title="Clearance Form"
                  description="Obtain a no-dues clearance form from the school office."
                />
                <ProcessStep
                  title="Submit Application"
                  description="Submit the TC application along with the clearance form and any pending fees."
                />
                <ProcessStep
                  title="Processing"
                  description="The TC will be prepared and uploaded to the website within 7-10 working days."
                />
              </div>
            </div>

            <Card className="bg-accent/30 border-none">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <FileText className="h-4 w-4 text-primary" /> Original Identity Proof of Student
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <FileText className="h-4 w-4 text-primary" /> Application signed by both parents
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <FileText className="h-4 w-4 text-primary" /> Copy of last result/marksheet
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6 border-primary text-primary hover:bg-primary hover:text-white font-bold">
                  <Download className="mr-2 h-4 w-4" />
                  Download Application Template
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProcessStep({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
        <CheckCircle className="h-4 w-4" />
      </div>
      <div>
        <h4 className="font-bold text-primary">{title}</h4>
        <p className="text-sm text-foreground/70">{description}</p>
      </div>
    </div>
  );
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
    </svg>
  );
}

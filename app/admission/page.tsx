import React from "react";
import { AdmissionForm } from "@/components/AdmissionForm";
import { CheckCircle2, Info, FileText, Calendar } from "lucide-react";

export default function AdmissionPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Page Header */}
      <section className="bg-primary py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Join our community of learners. Follow the simple steps below to apply for admission at Maria Mata Convent High School.
          </p>
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Steps */}
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary flex items-center gap-3">
                  <Info className="text-secondary" />
                  Admission Process
                </h2>
                <div className="space-y-4">
                  <Step number={1} title="Registration" description="Fill out the online application form with all required details of the student and parents." />
                  <Step number={2} title="Document Verification" description="Visit the school office with original documents for verification as per the scheduled appointment." />
                  <Step number={3} title="Interaction/Assessment" description="A friendly interaction with the child and parents to understand the needs and expectations." />
                  <Step number={4} title="Confirmation" description="Once approved, complete the fee payment and other formalities to confirm the admission." />
                </div>
              </div>

              <div className="space-y-6 pt-8">
                <h2 className="text-3xl font-bold text-primary flex items-center gap-3">
                  <FileText className="text-secondary" />
                  Documents Required
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <DocItem text="Copy of Birth Certificate" />
                  <DocItem text="Recent Passport Size Photographs (4)" />
                  <DocItem text="Previous Class Marksheet/Report Card" />
                  <DocItem text="Transfer Certificate (TC) in Original" />
                  <DocItem text="Aadhar Card of Student and Parents" />
                  <DocItem text="Caste Certificate (if applicable)" />
                </ul>
              </div>
            </div>

            {/* Sidebar / Form */}
            <div className="space-y-8">
              <div className="bg-accent/50 p-8 rounded-3xl space-y-4 border border-accent">
                <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-secondary" />
                  Key Dates
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-primary/10 pb-2">
                    <span className="text-sm font-medium">Session Start</span>
                    <span className="text-sm text-primary font-bold">April 1st</span>
                  </div>
                  <div className="flex justify-between border-b border-primary/10 pb-2">
                    <span className="text-sm font-medium">Form Submission</span>
                    <span className="text-sm text-primary font-bold">Ongoing</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-white p-8 rounded-3xl space-y-4 shadow-xl">
                <h3 className="text-xl font-bold text-secondary">Help Desk</h3>
                <p className="text-sm text-slate-300">Have questions about the admission process? Our team is here to help.</p>
                <div className="space-y-2">
                  <p className="text-lg font-bold">+91 7682 XXXXXX</p>
                  <p className="text-sm text-slate-400">Monday - Saturday (8:00 AM - 2:00 PM)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-accent/20" id="apply-form">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Apply Online</h2>
            <p className="text-foreground/70">
              Complete the form below to start your application. Our admissions office will review your submission and contact you within 2-3 working days.
            </p>
          </div>
          <AdmissionForm />
        </div>
      </section>
    </div>
  );
}

function Step({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0 w-12 h-12 bg-primary text-secondary rounded-full flex items-center justify-center font-bold text-xl border-4 border-accent">
        {number}
      </div>
      <div className="space-y-1">
        <h4 className="text-lg font-bold text-primary">{title}</h4>
        <p className="text-foreground/70 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function DocItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 bg-white p-4 rounded-xl border border-primary/5 shadow-sm">
      <CheckCircle2 className="h-5 w-5 text-secondary" />
      <span className="text-sm font-medium text-foreground/80">{text}</span>
    </li>
  );
}

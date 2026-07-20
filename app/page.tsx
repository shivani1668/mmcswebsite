import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, Trophy, School } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop')",
            filter: "brightness(0.4)"
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Nurturing Minds, <span className="text-secondary">Shaping Futures</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-slate-200 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Welcome to Maria Mata Convent High School, where we blend traditional values with modern education to inspire excellence in every student.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
            <Button render={<Link href="/admission" />} size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-bold px-8">
              Apply for Admission
            </Button>
            <Button render={<Link href="/about" />} size="lg" variant="outline" className="text-white border-white hover:bg-white/10 font-bold px-8">
              Explore Our School
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem icon={<Users />} count="1500+" label="Students" />
            <StatItem icon={<School />} count="50+" label="Teachers" />
            <StatItem icon={<Trophy />} count="25+" label="Years of Excellence" />
            <StatItem icon={<BookOpen />} count="100%" label="Result" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-accent text-primary text-sm font-bold rounded-full uppercase tracking-wider">
              Our Vision & Mission
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Inspired Education for a Brighter Tomorrow</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              At Maria Mata Convent High School, we believe that education is more than just academic achievement. It's about character building, spiritual growth, and preparing young individuals to become responsible citizens of the world.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-secondary/20 p-2 rounded-lg text-secondary">
                  <ArrowRight className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Holistic Development</h4>
                  <p className="text-sm text-foreground/70">Focusing on physical, mental, and emotional well-being.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-secondary/20 p-2 rounded-lg text-secondary">
                  <ArrowRight className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Value-Based Learning</h4>
                  <p className="text-sm text-foreground/70">Instilling integrity, compassion, and respect in every student.</p>
                </div>
              </div>
            </div>
            <Button render={<Link href="/about" />} variant="link" className="text-primary font-bold p-0 flex items-center group">
              Learn more about our school <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1523050853064-85a1b10ad975?q=80&w=2070&auto=format&fit=crop"
              alt="School Campus"
              className="rounded-2xl shadow-2xl relative z-10"
            />
          </div>
        </div>
      </section>

      {/* Facilities/Features */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Choose MMCS?</h2>
            <p className="text-foreground/70">We provide state-of-the-art facilities and a supportive environment for students to thrive.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Modern Labs"
              description="Equipped with the latest technology for Science, Computer, and Language learning."
              icon={<BookOpen className="h-8 w-8" />}
            />
            <FeatureCard
              title="Rich Library"
              description="Thousands of books, journals, and digital resources to foster a love for reading."
              icon={<BookOpen className="h-8 w-8" />}
            />
            <FeatureCard
              title="Sports Excellence"
              description="Large playgrounds and professional coaching for various indoor and outdoor sports."
              icon={<Trophy className="h-8 w-8" />}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-white border-none overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <CardContent className="p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div className="space-y-4 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold">Ready to Join Our Family?</h2>
                <p className="text-slate-300 max-w-xl">
                  Admission for the academic year {new Date().getFullYear()}-{new Date().getFullYear() + 1} is now open. Apply online today!
                </p>
              </div>
              <Button render={<Link href="/admission" />} size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-bold min-w-[200px]">
                Apply Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

function StatItem({ icon, count, label }: { icon: React.ReactNode, count: string, label: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-white space-y-2">
      <div className="p-3 bg-white/10 rounded-full text-secondary mb-2">
        {React.cloneElement(icon as React.ReactElement<any>, { className: "h-6 w-6" })}
      </div>
      <div className="text-3xl font-bold">{count}</div>
      <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">{label}</div>
    </div>
  );
}

function FeatureCard({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) {
  return (
    <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-8 space-y-4">
        <div className="p-3 bg-primary/5 rounded-xl text-primary inline-block">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-primary">{title}</h3>
        <p className="text-foreground/70 text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

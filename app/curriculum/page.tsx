import React from "react";
import { BookOpen, Languages, FlaskConical, Calculator, Globe, Music } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CurriculumPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Page Header */}
      <section className="bg-primary py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Programs</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Our comprehensive curriculum is designed to challenge students and prepare them for the 21st-century world.
          </p>
        </div>
      </section>

      {/* Levels of Education */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <LevelCard
              title="Pre-Primary"
              grades="Nursery to UKG"
              description="Play-based learning focusing on sensory development, language skills, and social interaction."
            />
            <LevelCard
              title="Primary"
              grades="Classes 1 to 5"
              description="Building strong foundations in core subjects like Literacy, Numeracy, and Environmental Studies."
            />
            <LevelCard
              title="Secondary"
              grades="Classes 6 to 10"
              description="An integrated approach to Science, Mathematics, and Social Sciences with a focus on analytical thinking."
            />
          </div>
        </div>
      </section>

      {/* Subject Areas */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-primary">Core Subject Areas</h2>
            <p className="text-foreground/70">A balanced blend of academic and co-curricular subjects.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <SubjectItem icon={<Languages />} title="Languages" description="English and Hindi (Sanskrit as third language)." />
            <SubjectItem icon={<Calculator />} title="Mathematics" description="Logic, geometry, and problem-solving skills." />
            <SubjectItem icon={<FlaskConical />} title="Sciences" description="Hands-on experiments in Physics, Chemistry, and Biology." />
            <SubjectItem icon={<Globe />} title="Social Studies" description="Understanding history, geography, and civic life." />
            <SubjectItem icon={<Music />} title="Arts & Music" description="Exploring creativity through drawing, dance, and music." />
            <SubjectItem icon={<BookOpen />} title="Values & Ethics" description="Moral science and value-based education." />
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Innovative Teaching Methodology</h2>
            <p className="text-foreground/80 leading-relaxed">
              We move beyond rote learning to embrace student-centric methodologies that encourage inquiry and active participation.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span className="font-medium">Smart Classrooms with Interactive Boards</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span className="font-medium">Project-Based Learning (PBL)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span className="font-medium">Regular Field Trips and Educational Tours</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span className="font-medium">Continuous and Comprehensive Evaluation</span>
              </li>
            </ul>
          </div>
          <div className="bg-primary rounded-3xl p-1 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022"
              alt="Teaching Methodology"
              className="rounded-[1.4rem] w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function LevelCard({ title, grades, description }: { title: string; grades: string; description: string }) {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-all">
      <CardHeader className="bg-primary text-white rounded-t-xl py-8">
        <CardTitle className="text-2xl font-bold text-center">{title}</CardTitle>
        <p className="text-center text-secondary font-semibold text-sm uppercase tracking-widest">{grades}</p>
      </CardHeader>
      <CardContent className="p-8 text-center">
        <p className="text-foreground/70 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

function SubjectItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-primary/5">
      <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center shrink-0">
        {React.cloneElement(icon as React.ReactElement<any>, { className: "h-6 w-6" })}
      </div>
      <div>
        <h4 className="font-bold text-primary">{title}</h4>
        <p className="text-sm text-foreground/70">{description}</p>
      </div>
    </div>
  );
}

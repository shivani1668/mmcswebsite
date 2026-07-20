import React from "react";
import { School, Book, Monitor, FlaskConical, Trophy, Bus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function FacilitiesPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Page Header */}
      <section className="bg-primary py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Infrastructure & Facilities</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Our campus is equipped with modern infrastructure to support the academic and extracurricular needs of our students.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-16">
          <FacilitySection
            title="Classrooms & Learning Spaces"
            description="Our classrooms are spacious, well-ventilated, and equipped with comfortable furniture and smart-class technology to create an engaging learning environment."
            image="https://images.unsplash.com/photo-1580582851906-81766627068d?q=80&w=2070"
            icon={<School />}
            reverse={false}
          />
          <FacilitySection
            title="Science & Computer Labs"
            description="We have separate, well-equipped laboratories for Physics, Chemistry, Biology, and Computer Science to encourage hands-on learning and technical skills."
            image="https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=2070"
            icon={<FlaskConical />}
            reverse={true}
          />
          <FacilitySection
            title="Library & Reading Room"
            description="A treasure trove of knowledge with a vast collection of books, encyclopedias, and journals. Our library provides a quiet space for research and reading."
            image="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070"
            icon={<Book />}
            reverse={false}
          />
          <FacilitySection
            title="Sports Facilities"
            description="We believe in physical fitness and sportsmanship. Our campus features playgrounds for cricket, football, volleyball, and indoor sports facilities."
            image="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070"
            icon={<Trophy />}
            reverse={true}
          />
        </div>
      </section>

      {/* Quick Stats/Other Facilities */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary">Other Amenities</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AmenityCard icon={<Monitor />} title="Smart Classes" />
            <AmenityCard icon={<Bus />} title="Transport Facility" />
            <AmenityCard icon={<School />} title="Auditorium" />
            <AmenityCard icon={<FlaskConical />} title="Safe Drinking Water" />
          </div>
        </div>
      </section>
    </div>
  );
}

function FacilitySection({ title, description, image, icon, reverse }: { title: string; description: string; image: string; icon: React.ReactNode; reverse: boolean }) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <div className={`space-y-6 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-xl flex items-center justify-center">
          {React.cloneElement(icon as React.ReactElement<any>, { className: "h-6 w-6" })}
        </div>
        <h2 className="text-3xl font-bold text-primary">{title}</h2>
        <p className="text-foreground/80 leading-relaxed text-lg">{description}</p>
      </div>
      <div className={`relative ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
        <img
          src={image}
          alt={title}
          className="rounded-3xl shadow-xl w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 border-2 border-primary/5 rounded-3xl" />
      </div>
    </div>
  );
}

function AmenityCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all text-center group">
      <CardContent className="p-8 space-y-4">
        <div className="w-12 h-12 bg-primary/5 text-primary rounded-full flex items-center justify-center mx-auto group-hover:bg-primary group-hover:text-white transition-all duration-300">
          {React.cloneElement(icon as React.ReactElement<any>, { className: "h-6 w-6" })}
        </div>
        <h4 className="font-bold text-primary">{title}</h4>
      </CardContent>
    </Card>
  );
}

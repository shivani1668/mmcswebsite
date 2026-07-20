import React from "react";
import { Quote } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Page Header */}
      <section className="bg-primary py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our School</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Discover the legacy, values, and people that make Maria Mata Convent High School a beacon of learning.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
             <img
              src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop"
              alt="School Legacy"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-secondary text-primary p-6 rounded-xl hidden md:block">
              <p className="text-3xl font-bold">25+</p>
              <p className="text-xs font-semibold uppercase tracking-widest">Years of History</p>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl font-bold text-primary">Our Legacy</h2>
            <p className="text-foreground/80 leading-relaxed">
              Founded with a vision to provide quality education in Chhatarpur, Maria Mata Convent High School has grown from a small beginning into one of the most respected educational institutions in the region.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Over the decades, we have remained committed to our core values while evolving with the changing times. Our school has been a second home to thousands of students, helping them find their voice and purpose.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="font-bold text-primary">Established</h4>
                <p className="text-sm text-foreground/60">1998 (Representative)</p>
              </div>
              <div>
                <h4 className="font-bold text-primary">Affiliation</h4>
                <p className="text-sm text-foreground/60">State Board / CBSE (TBD)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-3xl shadow-lg relative">
            <Quote className="absolute top-10 right-10 h-16 w-16 text-primary/5" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
              <div className="text-center md:text-left space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1544717297-fa154da09f9b?q=80&w=2070&auto=format&fit=crop"
                  alt="Principal"
                  className="w-48 h-48 mx-auto md:mx-0 rounded-2xl object-cover shadow-md"
                />
                <div>
                  <h3 className="text-xl font-bold text-primary">Sr. Mary Joseph</h3>
                  <p className="text-sm text-secondary font-semibold uppercase">Principal</p>
                </div>
              </div>
              <div className="md:col-span-2 space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-primary italic">"Education is the most powerful weapon which you can use to change the world."</h2>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    Dear Parents and Students, it is my pleasure to welcome you to Maria Mata Convent High School. Our school is a place where we strive for excellence in everything we do.
                  </p>
                  <p>
                    We focus on the holistic development of every child, ensuring they are not just academically sound but also emotionally intelligent and socially responsible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-primary text-white p-12 rounded-3xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
            <h2 className="text-3xl font-bold text-secondary">Our Vision</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              To be a leading educational institution that empowers students to achieve their full potential and become compassionate leaders who contribute positively to society.
            </p>
          </div>
          <div className="bg-secondary text-primary p-12 rounded-3xl space-y-6 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="leading-relaxed text-lg opacity-90">
              To provide a nurturing environment that fosters intellectual curiosity, spiritual growth, and physical well-being through innovative teaching and strong moral values.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

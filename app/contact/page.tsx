import React from "react";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, MessageCircle, Camera, Share2 } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Page Header */}
      <section className="bg-primary py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Have a question or want to visit our campus? Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary">Get in Touch</h2>
                <p className="text-foreground/70 max-w-lg">
                  We are always happy to hear from you. Whether you are a prospective parent, current student, or alumni, please feel free to contact us.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <ContactInfoItem
                  icon={<MapPin />}
                  title="Visit Us"
                  details="Maria Mata Convent High School, Chhatarpur, Madhya Pradesh - 471001"
                />
                <ContactInfoItem
                  icon={<Phone />}
                  title="Call Us"
                  details="+91 7682 XXXXXX"
                />
                <ContactInfoItem
                  icon={<Mail />}
                  title="Email Us"
                  details="info@mmcshschool.edu.in"
                />
                <ContactInfoItem
                  icon={<Clock />}
                  title="Office Hours"
                  details="Mon - Sat: 8:00 AM - 2:00 PM"
                />
              </div>

              <div className="space-y-6 pt-4">
                <h3 className="text-xl font-bold text-primary">Follow Us</h3>
                <div className="flex space-x-4">
                  <SocialLink icon={<MessageCircle />} href="#" />
                  <SocialLink icon={<Camera />} href="#" />
                  <SocialLink icon={<Share2 />} href="#" />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-primary/5">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-slate-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-slate-500 font-medium">Google Maps Integration Placeholder</p>
          {/* In a real scenario, you'd put an iframe here */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14545.992695574513!2d79.5800!3d24.9161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3982a8e8e!2sChhatarpur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title="School Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

function ContactInfoItem({ icon, title, details }: { icon: React.ReactNode; title: string; details: string }) {
  return (
    <div className="space-y-3">
      <div className="w-10 h-10 bg-primary/5 text-primary rounded-lg flex items-center justify-center">
        {React.cloneElement(icon as React.ReactElement<any>, { className: "h-5 w-5" })}
      </div>
      <div>
        <h4 className="font-bold text-primary">{title}</h4>
        <p className="text-sm text-foreground/70 leading-relaxed">{details}</p>
      </div>
    </div>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300"
    >
      {React.cloneElement(icon as React.ReactElement<any>, { className: "h-5 w-5" })}
    </a>
  );
}

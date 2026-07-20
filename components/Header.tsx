"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Curriculum", href: "/curriculum" },
  { name: "Facilities", href: "/facilities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Admission", href: "/admission" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <GraduationCap className="h-10 w-10 text-primary" />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-primary">MARIA MATA</span>
            <span className="text-xs font-semibold text-secondary uppercase tracking-widest">Convent High School</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                pathname === link.href ? "text-secondary" : "text-foreground/80"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button render={<Link href="/admission" />} variant="default" className="bg-primary hover:bg-primary/90">
            Apply Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t bg-white p-4 space-y-4 shadow-lg animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block text-lg font-medium transition-colors hover:text-secondary",
                pathname === link.href ? "text-secondary" : "text-foreground/80"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button render={<Link href="/admission" onClick={() => setIsOpen(false)} />} className="w-full bg-primary hover:bg-primary/90">
            Apply Now
          </Button>
        </div>
      )}
    </header>
  );
};

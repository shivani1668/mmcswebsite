"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Search } from "lucide-react";

const galleryImages = [
  { id: 1, category: "campus", url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071", title: "School Main Building" },
  { id: 2, category: "events", url: "https://images.unsplash.com/photo-1523050853064-85a1b10ad975?q=80&w=2070", title: "Annual Day Celebrations" },
  { id: 3, category: "activities", url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1800", title: "Classroom Learning" },
  { id: 4, category: "campus", url: "https://images.unsplash.com/photo-1580582851906-81766627068d?q=80&w=1770", title: "Science Laboratory" },
  { id: 5, category: "events", url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070", title: "Sports Meet" },
  { id: 6, category: "activities", url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073", title: "Library Session" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="flex flex-col w-full pb-20">
      {/* Page Header */}
      <section className="bg-primary py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Capturing the moments, achievements, and vibrant campus life at Maria Mata Convent High School.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-12">
            {/* Filter Tabs */}
            <Tabs defaultValue="all" className="w-full max-w-2xl" onValueChange={setActiveCategory}>
              <TabsList className="grid w-full grid-cols-4 h-12">
                <TabsTrigger value="all" className="text-sm font-bold">All</TabsTrigger>
                <TabsTrigger value="campus" className="text-sm font-bold">Campus</TabsTrigger>
                <TabsTrigger value="events" className="text-sm font-bold">Events</TabsTrigger>
                <TabsTrigger value="activities" className="text-sm font-bold">Activities</TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {filteredImages.map((image) => (
                <Dialog key={image.id}>
                  <DialogTrigger render={
                    <Card className="overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-500 border-none">
                      <CardContent className="p-0 relative aspect-[4/3]">
                        <img
                          src={image.url}
                          alt={image.title}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white p-6 text-center">
                          <Search className="h-10 w-10 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                          <h4 className="font-bold text-lg">{image.title}</h4>
                          <p className="text-xs text-secondary uppercase font-semibold tracking-widest mt-2">{image.category}</p>
                        </div>
                      </CardContent>
                    </Card>
                  } />
                  <DialogContent className="max-w-4xl p-0 bg-transparent border-none overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                    />
                    <div className="bg-white p-4 text-center">
                      <h3 className="text-xl font-bold text-primary">{image.title}</h3>
                      <p className="text-sm text-foreground/60 capitalize">{image.category}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-foreground/50 italic">No images found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import yogaApp1 from "@/assets/yoga-app-1.jpg";
import yogaApp2 from "@/assets/yoga-app-2.jpg";
import vehicleApp1 from "@/assets/vehicle-app-1.jpg";
import vehicleApp2 from "@/assets/vehicle-app-2.jpg";
import dtechApp1 from "@/assets/dtech-app-1.jpg";
import dtechApp2 from "@/assets/dtech-app-2.jpg";

const Portfolio = () => {
  const projects = [
    {
      name: "Yoga App",
      description: "A comprehensive yoga and meditation app with guided sessions, progress tracking, and personalized workout plans. Features calming UI with smooth animations.",
      images: [yogaApp1, yogaApp2],
      tech: ["Flutter", "Firebase", "REST API"],
      category: "Health & Fitness",
      color: "bg-purple-500",
    },
    {
      name: "Vehicle Sathi App",
      description: "Complete vehicle management solution with real-time tracking, service booking, maintenance reminders, and mechanic connection features.",
      images: [vehicleApp1, vehicleApp2],
      tech: ["React Native", "Google Maps", "Node.js"],
      category: "Automotive",
      color: "bg-orange-500",
    },
    {
      name: "Dtech App",
      description: "Enterprise technology platform for IoT device management, analytics dashboard, and smart control systems for businesses.",
      images: [dtechApp1, dtechApp2],
      tech: ["Flutter", "MongoDB", "IoT Integration"],
      category: "Technology",
      color: "bg-green-500",
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Apps We've <span className="gradient-text">Built</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful mobile and web applications built for diverse industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.name}
              className="overflow-hidden border-border bg-card card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative">
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.images.map((image, imgIndex) => (
                      <CarouselItem key={imgIndex}>
                        <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                          <img
                            src={image}
                            alt={`${project.name} screenshot ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 right-4">
                            <Badge className={`${project.color} text-white border-0`}>
                              {imgIndex + 1} / {project.images.length}
                            </Badge>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{project.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <Smartphone className="text-primary w-5 h-5" />
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary-light group"
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Request Similar App
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see more projects or discuss your app idea?
          </p>
          <Button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="btn-primary"
          >
            Let's Talk About Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

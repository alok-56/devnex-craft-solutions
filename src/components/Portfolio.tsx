import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Smartphone,
} from "lucide-react";
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

import vehicleApp1 from "@/assets/Vehiclesathi/1.png";
import vehicleApp2 from "@/assets/Vehiclesathi/2.png";
import vehicleApp3 from "@/assets/Vehiclesathi/3.png";
import vehicleApp4 from "@/assets/Vehiclesathi/4.png";
import vehicleApp5 from "@/assets/Vehiclesathi/5.png";
import dtechApp1 from "@/assets/Dtech/1.png";
import dtechApp2 from "@/assets/Dtech/2.png";
import dtechApp3 from "@/assets/Dtech/3.png";
import dtechApp4 from "@/assets/Dtech/4.png";
import waterstepsApp1 from "@/assets/Watersteps/1.png";
import waterstepsApp2 from "@/assets/Watersteps/2.png";
import waterstepsApp3 from "@/assets/Watersteps/3.png";
import waterstepsApp4 from "@/assets/Watersteps/4.png";
import bksApp1 from "@/assets/BKS/1.png";
import bksApp2 from "@/assets/BKS/2.png";
import bksApp3 from "@/assets/BKS/3.png";
import bksApp4 from "@/assets/BKS/4.png";
import appretailApp1 from "@/assets/Appretail/1.png";
import appretailApp2 from "@/assets/Appretail/2.png";
import appretailApp3 from "@/assets/Appretail/3.png";
import appretailApp4 from "@/assets/Appretail/4.png";
import hotelManagement1 from "@/assets/Hotel/1.png";
import hotelManagement2 from "@/assets/Hotel/2.png";
import hotelManagement3 from "@/assets/Hotel/3.png";
import hotelManagement4 from "@/assets/Hotel/4.png";
import hotelManagement5 from "@/assets/Hotel/5.png";
import mlmWebsite1 from "@/assets/MLM/1.png";
import mlmWebsite2 from "@/assets/MLM/2.png";
import mlmWebsite3 from "@/assets/MLM/3.png";
import mlmWebsite4 from "@/assets/MLM/4.png";
import tonyogaApp1 from "@/assets/Yoga/1.png";
import tonyogaApp2 from "@/assets/Yoga/2.png";
import tonyogaApp3 from "@/assets/Yoga/3.png";
import tonyogaApp4 from "@/assets/Yoga/4.png";
import tonyogaApp5 from "@/assets/Yoga/5.png";
import tonyogaApp6 from "@/assets/Yoga/6.png";

const Portfolio = () => {
  const projects = [
    {
      name: "VehicleSathi",
      description:
        "Comprehensive mechanic booking and vehicle service management app that allows users to find, book, and track trusted mechanics nearby while managing vehicle maintenance seamlessly.",
      images: [vehicleApp2, vehicleApp3, vehicleApp4, vehicleApp5, vehicleApp1],
      tech: ["React native", "Google Maps", "Node.js", "Firebase"],
      category: "Automotive",
      color: "bg-blue-500",
      link: "https://play.google.com/store/apps/details?id=com.vehiclesathi_app",
    },
    {
      name: "Dtech",
      description:
        "Smart electric meter management application designed for monitoring, controlling, and deducting energy usage in real-time. Enables efficient IoT-based electricity tracking and consumption optimization.",
      images: [dtechApp1, dtechApp2, dtechApp3, dtechApp4],
      tech: ["React Native", "MongoDB", "IoT Integration"],
      category: "Technology",
      color: "bg-green-500",
      link: "https://play.google.com/store/apps/details?id=com.dtechnewsolution&hl=en_US",
    },

    {
      name: "Watersteps",
      description:
        "Offline e-commerce solution designed for local shop owners to manage in-store and delivery orders efficiently. Includes product cataloging, billing, and inventory management without internet dependency.",
      images: [waterstepsApp1, waterstepsApp2, waterstepsApp3, waterstepsApp4],
      tech: ["React native", "REST API", "Payment Gateway"],
      category: "Retail",
      color: "bg-green-600",
      link: "https://play.google.com/store/apps/details?id=com.watersteps&hl=en_US",
    },
    {
      name: "BKS",
      description:
        "Advanced attendance management system featuring real-time employee check-in/out, geolocation-based tracking, task monitoring, and comprehensive attendance history analytics.",
      images: [bksApp1, bksApp2, bksApp3, bksApp4],
      tech: ["React native", "Firebase", "Geolocation"],
      category: "Business",
      color: "bg-pink-500",
      link: "https://apps.apple.com/us/app/bks/id6743420830",
    },
    {
      name: "AppRetail",
      description:
        "End-to-end vehicle management and inspection system for dealerships, integrating QR code scanning, detailed inspection reporting, and vehicle lifecycle tracking to streamline operations.",
      images: [appretailApp1, appretailApp2, appretailApp3, appretailApp4],
      tech: ["React native", "QR Integration", "MongoDB"],
      category: "Automotive",
      color: "bg-purple-600",
      link: "https://apps.apple.com/in/app/appretail/id6741881294",
    },
    {
      name: "Hotel Management System",
      description:
        "Comprehensive hotel management platform offering booking management, revenue tracking, room allocation, guest directory, and insightful analytics for efficient hospitality operations.",
      images: [
        hotelManagement1,
        hotelManagement2,
        hotelManagement3,
        hotelManagement4,
        hotelManagement5,
      ],
      tech: ["React", "Node.js", "PostgreSQL", "Analytics"],
      category: "Hospitality",
      color: "bg-blue-600",
      link: null,
    },
    {
      name: "MLM Platform",
      description:
        "Dynamic multi-level marketing solution that provides commission tracking, member network visualization, transaction management, and performance analytics for growing business networks.",
      images: [mlmWebsite1, mlmWebsite2, mlmWebsite3, mlmWebsite4],
      tech: ["React", "Node.js", "MongoDB", "Charts"],
      category: "Business",
      color: "bg-indigo-600",
      link: "https://www.silverx.site/#/login",
    },
    {
      name: "Tonyoga",
      description:
        "Comprehensive yoga and wellness course management platform with instructor scheduling, class booking, membership management, and progress tracking for students and trainers.",
      images: [
        tonyogaApp1,
        tonyogaApp2,
        tonyogaApp3,
        tonyogaApp4,
        tonyogaApp5,
        tonyogaApp6,
      ],
      tech: ["React", "Firebase", "Payment Integration"],
      category: "Health & Fitness",
      color: "bg-purple-500",
      link: null,
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
            Explore our portfolio of successful mobile and web applications
            built for diverse industries
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
                            <Badge
                              className={`${project.color} text-white border-0`}
                            >
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
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {project.name}
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <Smartphone className="text-primary w-5 h-5" />
                </div>

                <p className="text-muted-foreground text-sm mb-4">
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

                <div className="flex gap-2">
                  {project.link && (
                    <Button
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-white group"
                      onClick={() => window.open(project.link!, "_blank")}
                    >
                      View Live
                      <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  )}
                  <Button
                    variant={project.link ? "outline" : "default"}
                    className={`${project.link ? "flex-1" : "w-full"} ${
                      project.link
                        ? "border-border hover:bg-secondary"
                        : "btn-primary"
                    } group`}
                    onClick={() => {
                      const contactSection = document.getElementById("contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Request Similar
                    <Smartphone className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                  </Button>
                </div>
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

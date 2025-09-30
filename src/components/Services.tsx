import { Smartphone, Globe, Server, Plug, Palette, Headphones } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native Android & iOS apps using Flutter with beautiful UI and smooth performance.",
    },
    {
      icon: Globe,
      title: "Web App Development",
      description: "Responsive web applications using React, Next.js, and modern frameworks.",
    },
    {
      icon: Server,
      title: "Backend/API Development",
      description: "Scalable REST APIs, databases, and server-side logic with Node.js and Firebase.",
    },
    {
      icon: Plug,
      title: "Third-Party Integrations",
      description: "Payment gateways, maps, authentication, CRMs, and custom API integrations.",
    },
    {
      icon: Palette,
      title: "UI/UX Design & Prototyping",
      description: "User-centered design with Figma, creating intuitive and engaging interfaces.",
    },
    {
      icon: Headphones,
      title: "Ongoing Support & Maintenance",
      description: "Bug fixes, updates, feature additions, and technical support for your apps.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="card-hover border-border bg-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mb-4">
                    <Icon className="text-primary w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

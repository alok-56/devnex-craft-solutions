import { Hotel, ShoppingCart, GraduationCap, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Product {
  icon: any;
  name: string;
  tagline: string;
  features: string[];
  targetAudience: string;
  color: string;
  bgColor: string;
  comingSoon?: boolean;
}

const Products = () => {
  const products: Product[] = [
    {
      icon: Hotel,
      name: "Hotel Management System",
      tagline: "Complete hospitality solution",
      features: [
        "Room booking & availability",
        "Check-in/out management",
        "Staff roles & permissions",
        "Service logs & housekeeping",
        "Payment tracking & invoicing",
      ],
      targetAudience: "Hotels, Resorts, BnBs",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: ShoppingCart,
      name: "Billing POS",
      tagline: "Smart retail management - Coming Soon",
      features: [
        "Fast billing & invoicing",
        "Inventory management",
        "Barcode scanning",
        "GST-compliant reports",
        "Multi-location support",
      ],
      targetAudience: "Retail stores, Cafes, Restaurants",
      color: "text-green-500",
      bgColor: "bg-green-50",
      comingSoon: true,
    },
    {
      icon: GraduationCap,
      name: "Institute Management System",
      tagline: "Education made efficient",
      features: [
        "Student records & profiles",
        "Attendance tracking",
        "Fee management & receipts",
        "Staff & teacher management",
        "Performance reports & analytics",
      ],
      targetAudience: "Schools, Training centers, Coaching institutes",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
  ];

  const handleDemo = (productName: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      // Pre-fill the message in the contact form
      setTimeout(() => {
        const messageField = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
        if (messageField) {
          messageField.value = `Hi, I'm interested in a demo of ${productName}.`;
        }
      }, 500);
    }
  };

  return (
    <section id="products" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            SaaS <span className="gradient-text">Products</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Business-ready software solutions designed to streamline your operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card
                key={product.name}
                className="card-hover border-border bg-card animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl ${product.bgColor} flex items-center justify-center mb-4`}>
                    <Icon className={`${product.color} w-8 h-8`} />
                  </div>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                  <CardDescription className="text-base font-medium">{product.tagline}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <Badge variant="secondary" className="text-xs">
                      For: {product.targetAudience}
                    </Badge>
                  </div>

                  <Button
                    onClick={() => handleDemo(product.name)}
                    className="w-full btn-primary group"
                    disabled={product.comingSoon}
                  >
                    {product.comingSoon ? "Coming Soon" : "Request Demo"}
                    {!product.comingSoon && (
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;

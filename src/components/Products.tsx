import { Hotel, ShoppingCart, ArrowRight, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

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

interface AttachmentImage {
  id: number;
  name: string;
  path: string;
}

const Products = () => {
  const [selectedImage, setSelectedImage] = useState<AttachmentImage | null>(null);

  const attachmentImages: AttachmentImage[] = [
    { id: 1, name: "1.png", path: "/src/assets/Appretail/1.png" },
    { id: 2, name: "2.png", path: "/src/assets/Appretail/2.png" },
    { id: 3, name: "3.png", path: "/src/assets/Appretail/3.png" },
    { id: 4, name: "4.png", path: "/src/assets/Appretail/4.png" },
    { id: 5, name: "5.png", path: "/src/assets/Appretail/5.png" },
  ];

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
  ];

  const handleDemo = (productName: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
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

        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card
                key={product.name}
                className="card-hover border-border bg-card animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-xl ${product.bgColor} flex items-center justify-center mb-4`}>
                      <Icon className={`${product.color} w-8 h-8`} />
                    </div>
                    <CardTitle className="text-2xl">{product.name}</CardTitle>
                    <CardDescription className="text-base font-medium">{product.tagline}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 md:pt-6">
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
                </div>
              </Card>
            );
          })}
        </div>

        {/* Attachments Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="card-hover border-border bg-card">
            <CardHeader>
              <CardTitle className="text-2xl">Attachments</CardTitle>
              <CardDescription>Project images and screenshots</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {attachmentImages.map((image) => (
                  <div
                    key={image.id}
                    onClick={() => setSelectedImage(image)}
                    className="relative group cursor-pointer overflow-hidden rounded-lg bg-muted aspect-square flex items-center justify-center hover:shadow-lg transition-shadow"
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <span className="text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        View
                      </span>
                    </div>
                    <span className="text-muted-foreground text-sm text-center px-2">{image.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-card rounded-lg overflow-hidden max-w-2xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <div className="bg-muted aspect-video flex items-center justify-center">
              <div className="text-center">
                <p className="text-muted-foreground text-lg">Image Preview</p>
                <p className="text-sm text-muted-foreground mt-2">{selectedImage.path}</p>
              </div>
            </div>
            <div className="p-4 border-t border-border">
              <p className="font-semibold">{selectedImage.name}</p>
              <p className="text-sm text-muted-foreground mt-1">{selectedImage.path}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
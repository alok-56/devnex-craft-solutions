import { Hotel, ShoppingCart, Check, ExternalLink, Zap, Shield, Clock, Users, BarChart3, Globe, CreditCard, Package, Smartphone, TrendingUp, Calendar, Bell, DollarSign, FileText, Wifi, Settings, Lock, Headphones, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

// Hotel Management System Images
import hotelImg1 from "@/assets/Hotel/1.png";
import hotelImg2 from "@/assets/Hotel/2.png";
import hotelImg3 from "@/assets/Hotel/3.png";
import hotelImg4 from "@/assets/Hotel/4.png";
import hotelImg5 from "@/assets/Hotel/5.png";

// POS System Images
import posImg1 from "@/assets/POS/1.png";
import posImg2 from "@/assets/POS/2.png";
import posImg3 from "@/assets/POS/3.png";
import posImg4 from "@/assets/POS/4.png";
import posImg5 from "@/assets/POS/5.png";
import posImg6 from "@/assets/POS/6.png";
import posImg7 from "@/assets/POS/7.png";
import posImg8 from "@/assets/POS/8.png";

interface Feature {
  icon: any;
  title: string;
  description: string;
}

interface Product {
  icon: any;
  name: string;
  tagline: string;
  description: string;
  features: Feature[];
  additionalFeatures: string[];
  targetAudience: string[];
  benefits: string[];
  color: string;
  bgColor: string;
  gradient: string;
  images?: string[];
  demoLink?: string;
  bookingLink?: string;
  comingSoon?: boolean;
}

const Products = () => {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: string]: number}>({});
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const products: Product[] = [
    {
      icon: Hotel,
      name: "BrillRooms Hotel Management System",
      tagline: "Complete End-to-End Hospitality Solution",
      description: "A powerful, cloud-based property management system designed to streamline every aspect of your hotel operations. From reservations to revenue management, BrillRooms provides the tools you need to deliver exceptional guest experiences.",
      features: [
        {
          icon: Calendar,
          title: "Advanced Reservation Management",
          description: "Real-time room availability, instant booking confirmations, multi-channel distribution, and intelligent overbooking prevention"
        },
        {
          icon: Users,
          title: "Front Desk Operations",
          description: "Seamless check-in/out, guest registration, room assignments, folio management, and express checkout options"
        },
        {
          icon: Smartphone,
          title: "Online Booking Engine",
          description: "Mobile-responsive booking portal with real-time availability, secure payment processing, and instant confirmation"
        },
        {
          icon: BarChart3,
          title: "Revenue Management",
          description: "Dynamic pricing strategies, occupancy analytics, revenue forecasting, and performance dashboards"
        },
        {
          icon: Shield,
          title: "Housekeeping Management",
          description: "Room status tracking, task assignments, cleaning schedules, maintenance requests, and real-time updates"
        },
        {
          icon: CreditCard,
          title: "Billing & Invoicing",
          description: "Automated invoicing, multiple payment methods, split bills, GST-compliant reports, and payment tracking"
        },
        {
          icon: Globe,
          title: "Channel Manager Integration",
          description: "Sync with OTAs (Booking.com, Expedia, MakeMyTrip), GDS systems, and metasearch engines in real-time"
        },
        {
          icon: Users,
          title: "Staff Management",
          description: "Role-based access control, shift scheduling, performance tracking, and department coordination"
        },
        {
          icon: Bell,
          title: "Guest Experience Management",
          description: "Guest profiles, preference tracking, loyalty programs, feedback management, and personalized services"
        },
        {
          icon: FileText,
          title: "Reporting & Analytics",
          description: "Comprehensive reports on occupancy, revenue, operations, guest statistics, and business intelligence"
        },
        {
          icon: Wifi,
          title: "Cloud-Based Access",
          description: "Access from anywhere, automatic backups, 99.9% uptime, and seamless updates"
        },
        {
          icon: Lock,
          title: "Security & Compliance",
          description: "Data encryption, PCI-DSS compliance, regular security audits, and secure payment gateway"
        }
      ],
      additionalFeatures: [
        "Multi-property management dashboard",
        "Night audit automation",
        "Rate management & packages",
        "Group booking management",
        "Corporate client handling",
        "Conference & banquet management",
        "Inventory & stock control",
        "Vendor management",
        "Email & SMS notifications",
        "WhatsApp integration",
        "Commission tracking",
        "Agent portal access",
        "Guest history & CRM",
        "Expense management",
        "Custom rate plans",
        "Seasonal pricing",
        "Early check-in/late checkout handling",
        "Lost & found management",
        "Minibar management",
        "Point of Sale integration"
      ],
      targetAudience: [
        "Hotels & Resorts",
        "Boutique Hotels",
        "Budget Hotels",
        "Service Apartments",
        "Guest Houses",
        "Bed & Breakfasts",
        "Hostels",
        "Motels"
      ],
      benefits: [
        "Increase direct bookings by 40%",
        "Reduce operational costs by 30%",
        "Improve staff efficiency by 50%",
        "Achieve 99.9% system uptime",
        "24/7 customer support"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      gradient: "from-blue-500 to-cyan-500",
      images: [hotelImg1, hotelImg2, hotelImg3, hotelImg4, hotelImg5],
      demoLink: "https://admin.brillrooms.com/",
      bookingLink: "https://brillrooms.com"
    },
    {
      icon: ShoppingCart,
      name: "BrillPOS - Point of Sale System",
      tagline: "Smart Retail & Restaurant Management - Coming Soon",
      description: "A comprehensive POS solution built for modern retail stores, cafes, and restaurants. Streamline billing, manage inventory, track sales, and grow your business with powerful analytics and real-time insights.",
      features: [
        {
          icon: Zap,
          title: "Lightning-Fast Billing",
          description: "Quick checkout with barcode scanning, product search, multiple payment modes, and instant receipt generation"
        },
        {
          icon: Package,
          title: "Inventory Management",
          description: "Real-time stock tracking, low stock alerts, automatic reordering, batch tracking, and expiry management"
        },
        {
          icon: CreditCard,
          title: "Multi-Payment Support",
          description: "Cash, card, UPI, digital wallets, EMI options, and integrated payment gateway"
        },
        {
          icon: FileText,
          title: "GST-Compliant Invoicing",
          description: "Automated GST calculations, GSTR reports, tax summaries, and e-invoice generation"
        },
        {
          icon: BarChart3,
          title: "Sales Analytics",
          description: "Real-time dashboards, sales trends, best-selling items, profit margins, and performance metrics"
        },
        {
          icon: Users,
          title: "Customer Management",
          description: "Customer database, purchase history, loyalty programs, targeted promotions, and feedback collection"
        },
        {
          icon: Globe,
          title: "Multi-Location Support",
          description: "Centralized management for multiple stores, inter-branch transfers, and consolidated reporting"
        },
        {
          icon: Smartphone,
          title: "Mobile POS",
          description: "Android/iOS apps for on-the-go billing, table-side ordering, and mobile inventory checks"
        },
        {
          icon: Users,
          title: "Employee Management",
          description: "Staff attendance, sales tracking per employee, commission calculation, and access controls"
        },
        {
          icon: TrendingUp,
          title: "Promotions & Discounts",
          description: "Happy hours, combo offers, seasonal discounts, coupon codes, and member pricing"
        },
        {
          icon: Settings,
          title: "Table Management (F&B)",
          description: "Visual table layouts, order tracking, table status, split bills, and KOT (Kitchen Order Tickets)"
        },
        {
          icon: Clock,
          title: "24/7 Cloud Sync",
          description: "Automatic data backup, offline mode, multi-device sync, and cloud-based reporting"
        }
      ],
      additionalFeatures: [
        "Barcode label printing",
        "Vendor & supplier management",
        "Purchase order management",
        "Return & exchange handling",
        "Credit/debit note management",
        "Expense tracking",
        "Profit & loss reports",
        "Cash flow management",
        "Multiple tax rate support",
        "Product variants (size, color)",
        "Recipe management (F&B)",
        "Kitchen display system",
        "Waiter app integration",
        "Online ordering integration",
        "Delivery management",
        "QR code menu (F&B)",
        "Membership & loyalty cards",
        "SMS & email marketing",
        "Thermal printer support",
        "Weighing scale integration"
      ],
      targetAudience: [
        "Retail Stores",
        "Supermarkets & Grocery",
        "Restaurants & Cafes",
        "Bakeries & Sweet Shops",
        "Quick Service Restaurants",
        "Cloud Kitchens",
        "Bars & Pubs",
        "Boutiques & Fashion Stores",
        "Electronics Stores",
        "Medical Stores"
      ],
      benefits: [
        "Reduce billing time by 60%",
        "Eliminate stock discrepancies",
        "Increase customer retention by 35%",
        "Real-time business insights",
        "Dedicated support team"
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
      gradient: "from-green-500 to-emerald-500",
      images: [posImg1, posImg2, posImg3, posImg4, posImg5, posImg6, posImg7, posImg8],
      comingSoon: true
    }
  ];

  const handleDemo = (productName: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const messageField = document.querySelector(
          'textarea[name="message"]'
        ) as HTMLTextAreaElement;
        if (messageField) {
          messageField.value = `Hi, I'm interested in learning more about ${productName}.`;
        }
      }, 500);
    }
  };

  const nextImage = (productName: string, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [productName]: ((prev[productName] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (productName: string, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [productName]: ((prev[productName] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const goToImage = (productName: string, index: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [productName]: index
    }));
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
            Our Solutions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
            Enterprise SaaS Products
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful, cloud-based solutions designed to transform your business operations and drive growth
          </p>
        </div>

        {/* Products */}
        <div className="space-y-12">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isExpanded = expandedProduct === product.name;
            const currentIndex = currentImageIndex[product.name] || 0;
            const images = product.images || [];

            return (
              <Card
                key={product.name}
                className="overflow-hidden border-2 hover:border-blue-200 transition-all duration-300 shadow-lg hover:shadow-2xl"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  opacity: 0,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Header Section with Gradient */}
                <div className={`bg-gradient-to-r ${product.gradient} p-1`}>
                  <div className="bg-white p-6">
                    <div className="flex flex-col lg:flex-row gap-6 items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                            {product.name}
                          </h3>
                          <p className="text-base md:text-lg text-gray-600 font-medium mt-1">
                            {product.tagline}
                          </p>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-3 flex-wrap">
                        {product.demoLink && !product.comingSoon && (
                          <Button
                            asChild
                            variant="outline"
                            className="gap-2"
                          >
                            <a href={product.demoLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4" />
                              View Demo
                            </a>
                          </Button>
                        )}
                        {product.bookingLink && !product.comingSoon && (
                          <Button
                            asChild
                            variant="outline"
                            className="gap-2"
                          >
                            <a href={product.bookingLink} target="_blank" rel="noopener noreferrer">
                              <Globe className="w-4 h-4" />
                              Booking Portal
                            </a>
                          </Button>
                        )}
                        {product.comingSoon && (
                          <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300 px-4 py-2">
                            Coming Soon -  1st Jan 2026
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Carousel Section */}
                {images.length > 0 && (
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8">
                    {/* Main Carousel */}
                    <div className="relative max-w-5xl mx-auto">
                      <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                        <img
                          src={images[currentIndex]}
                          alt={`${product.name} screenshot ${currentIndex + 1}`}
                          className="w-full h-full object-contain bg-white cursor-pointer transition-transform duration-300 group-hover:scale-105"
                          onClick={() => setLightboxImage(images[currentIndex])}
                        />
                        
                        {/* Zoom Indicator */}
                        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-2 rounded-lg flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Maximize2 className="w-4 h-4" />
                          <span className="text-sm">Click to enlarge</span>
                        </div>

                        {/* Navigation Arrows */}
                        {images.length > 1 && (
                          <>
                            <button
                              onClick={() => prevImage(product.name, images.length)}
                              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all hover:scale-110"
                            >
                              <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                              onClick={() => nextImage(product.name, images.length)}
                              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all hover:scale-110"
                            >
                              <ChevronRight className="w-6 h-6" />
                            </button>
                          </>
                        )}

                        {/* Image Counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                          {currentIndex + 1} / {images.length}
                        </div>
                      </div>

                      {/* Thumbnail Navigation */}
                      {images.length > 1 && (
                        <div className="flex gap-3 mt-6 overflow-x-auto pb-2 justify-center">
                          {images.map((img, idx) => (
                            <button
                              key={idx}
                              onClick={() => goToImage(product.name, idx)}
                              className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-3 transition-all ${
                                idx === currentIndex
                                  ? 'border-white scale-110 shadow-xl'
                                  : 'border-white/30 hover:border-white/60 opacity-60 hover:opacity-100'
                              }`}
                            >
                              <img
                                src={img}
                                alt={`Thumbnail ${idx + 1}`}
                                className="w-full h-full object-cover bg-white"
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Content Section */}
                <CardContent className="p-8">
                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {product.description}
                  </p>

                  {/* Target Audience */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                      Perfect For
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.targetAudience.map((audience) => (
                        <Badge
                          key={audience}
                          variant="secondary"
                          className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1"
                        >
                          {audience}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Core Features Grid */}
                  <h4 className="text-2xl font-bold mb-6 text-gray-900">
                    Core Features
                  </h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {product.features.map((feature) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div
                          key={feature.title}
                          className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200 hover:border-gray-300"
                        >
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4`}>
                            <FeatureIcon className="w-6 h-6 text-white" />
                          </div>
                          <h5 className="font-semibold mb-2 text-gray-900">
                            {feature.title}
                          </h5>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Additional Features */}
                  {isExpanded && (
                    <div className="mb-8 animate-fade-in-up">
                      <h4 className="text-xl font-bold mb-4 text-gray-900">
                        Additional Features
                      </h4>
                      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {product.additionalFeatures.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-start gap-2 bg-white p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                          >
                            <Check className={`w-4 h-4 ${product.color} flex-shrink-0 mt-0.5`} />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Benefits */}
                  {isExpanded && (
                    <div className="mb-8 animate-fade-in-up">
                      <h4 className="text-xl font-bold mb-4 text-gray-900">
                        Key Benefits
                      </h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {product.benefits.map((benefit) => (
                          <div
                            key={benefit}
                            className={`bg-gradient-to-br ${product.gradient} p-4 rounded-lg text-white shadow-md hover:shadow-lg transition-shadow`}
                          >
                            <div className="flex items-center gap-2">
                              <TrendingUp className="w-5 h-5" />
                              <span className="font-medium">{benefit}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* View More / Contact Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                    <Button
                      onClick={() => setExpandedProduct(isExpanded ? null : product.name)}
                      variant="outline"
                      className="flex-1"
                    >
                      {isExpanded ? "Show Less" : "View All Features"}
                    </Button>
                    <Button
                      onClick={() => handleDemo(product.name)}
                      className={`flex-1 bg-gradient-to-r ${product.gradient} text-white hover:opacity-90 transition-opacity`}
                      disabled={product.comingSoon}
                    >
                      {product.comingSoon ? (
                        <>
                          <Bell className="mr-2 w-4 h-4" />
                          Notify Me When Available
                        </>
                      ) : (
                        <>
                          <Headphones className="mr-2 w-4 h-4" />
                          Request Demo & Pricing
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-12 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl mb-8 text-blue-50">
            Join hundreds of businesses already using our solutions to grow faster and operate smarter
          </p>
          
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 text-4xl font-light w-12 h-12 flex items-center justify-center"
            onClick={() => setLightboxImage(null)}
          >
            ×
          </button>
          <img
            src={lightboxImage}
            alt="Full size preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Products;
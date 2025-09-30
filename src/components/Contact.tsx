import { useState } from "react";
import { Mail, MessageSquare, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" }).max(1000, { message: "Message must be less than 1000 characters" }),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          newErrors[error.path[0] as string] = error.message;
        }
      });
      setErrors(newErrors);
      return;
    }

    // Encode data for WhatsApp
    const message = encodeURIComponent(
      `Name: ${result.data.name}\nEmail: ${result.data.email}\nMessage: ${result.data.message}`
    );
    const whatsappUrl = `https://wa.me/YOUR_PHONE_NUMBER?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    
    toast({
      title: "Message sent!",
      description: "Redirecting you to WhatsApp to complete your message.",
    });
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:contact@devnex.com",
      color: "hover:text-red-500",
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      href: "https://wa.me/YOUR_PHONE_NUMBER",
      color: "hover:text-green-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourprofile",
      color: "hover:text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/yourprofile",
      color: "hover:text-gray-800",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Get in touch and let's build something amazing together.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 mb-12">
            <div>
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="h-12"
              />
              {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
            </div>
            
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="h-12"
              />
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="min-h-[150px]"
              />
              {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
            </div>
            
            <Button type="submit" className="w-full btn-primary h-12 text-base group">
              Send Message
              <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center gap-2 text-muted-foreground transition-colors ${link.color}`}
                  aria-label={link.label}
                >
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary-light transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium">{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

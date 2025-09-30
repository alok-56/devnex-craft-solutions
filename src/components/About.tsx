import { CheckCircle2 } from "lucide-react";

const About = () => {
  const techStack = [
    "Flutter",
    "React",
    "Node.js",
    "Firebase",
    "REST APIs",
    "Stripe",
    "Razorpay",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
  ];

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              About <span className="gradient-text">My Journey</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground mb-12">
            <p>
              With over <span className="text-primary font-semibold">5+ years of experience</span> in
              full-stack development, I've built everything from mobile apps for Android and iOS to
              complex web platforms and backend systems.
            </p>
            <p>
              My focus isn't just on writing clean code — it's on{" "}
              <span className="text-foreground font-semibold">solving real business problems</span>.
              Whether you need a custom app, a scalable API, or a third-party integration, I bring
              technical expertise and business value to every project.
            </p>
            <p>
              Beyond freelance work, I've developed and launched{" "}
              <span className="text-foreground font-semibold">business-ready SaaS products</span> that
              help hotels, retailers, and educational institutes streamline their operations.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Tech Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={tech}
                  className="flex items-center gap-2 bg-background p-4 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 card-hover"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                  <span className="text-foreground font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

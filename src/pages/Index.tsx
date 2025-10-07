import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Rocket, Users, Trophy, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBackground from "@/components/AnimatedBackground";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const features = [
    {
      icon: Rocket,
      title: "Innovation",
      description: "Pushing boundaries in AI, robotics, and emerging technologies",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building together, learning together, growing together",
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "Competing in hackathons and winning innovation challenges",
    },
    {
      icon: Sparkles,
      title: "Creativity",
      description: "Transforming bold ideas into groundbreaking solutions",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3,
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8 animate-fade-in-up">
            <div className="inline-block">
              <div className="text-6xl md:text-8xl font-orbitron font-black text-gradient animate-pulse-glow mb-4">
                TEAM TURTLE
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-wave"></div>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-light text-foreground/90 max-w-3xl mx-auto">
              🐢 Slow is Smooth, Smooth is Smart
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Innovating Beyond Limits
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/projects">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground glow group px-8 py-6 text-lg"
                >
                  Explore Projects
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg"
                >
                  Meet The Team
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute bottom-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-60 left-1/4 w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 text-gradient">
          What We Stand For
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="card-gradient border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:glow group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="inline-block p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-orbitron font-bold text-xl">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 container mx-auto px-4">
        <Card className="card-gradient border-primary/30 glow">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-gradient">
              Ready to Join the Revolution?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Be part of a community that's shaping the future through innovation, collaboration, and creativity.
            </p>
            <Link to="/login">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground glow-accent px-8 py-6 text-lg"
              >
                Get Started Today
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;

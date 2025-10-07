import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Users } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

const About = () => {
  const values = [
    { icon: Target, title: "Mission", description: "To foster innovation and creativity among students through hands-on tech projects and collaborative learning" },
    { icon: Eye, title: "Vision", description: "Creating the next generation of tech leaders who will shape the future with AI, robotics, and innovation" },
    { icon: Heart, title: "Passion", description: "Driven by curiosity, fueled by innovation, and committed to making a difference" },
    { icon: Users, title: "Community", description: "Building a supportive environment where ideas flourish and friendships form" },
  ];

  const timeline = [
    { year: "2023", event: "Team Turtle Founded", description: "Started with 10 passionate students" },
    { year: "2023", event: "First Hackathon Win", description: "Won 1st place at Regional Tech Challenge" },
    { year: "2024", event: "AI Workshop Series", description: "Launched monthly workshops on AI & ML" },
    { year: "2024", event: "50+ Members", description: "Grew to become one of the largest tech clubs" },
    { year: "2025", event: "International Competition", description: "Representing at global innovation summit" },
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-12">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-orbitron font-bold text-gradient">
            About Team Turtle
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just a club—we're a movement of young innovators passionate about technology, creativity, and pushing boundaries.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="card-gradient border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:glow animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 space-y-4">
                <div className="inline-block p-4 bg-primary/10 rounded-full">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-orbitron font-bold text-2xl">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-4xl font-orbitron font-bold text-center mb-12 text-gradient">
            Our Journey
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-fade-in-up`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <Card className="card-gradient border-primary/20 hover:glow transition-all duration-300 inline-block">
                      <CardContent className="p-6 space-y-2">
                        <div className="text-primary font-orbitron font-bold text-xl">{item.year}</div>
                        <h3 className="font-bold text-lg">{item.event}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="w-4 h-4 bg-primary rounded-full glow z-10"></div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section Preview */}
        <Card className="card-gradient border-primary/30 glow">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-gradient">
              Meet Our Amazing Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A diverse group of talented students united by passion for innovation and technology
            </p>
            <div className="text-muted-foreground">
              Team member profiles coming soon!
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;

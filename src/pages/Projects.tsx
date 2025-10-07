import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

const Projects = () => {
  const projects = [
    {
      title: "AI Vision Assistant",
      description: "Computer vision system for real-time object detection and classification using TensorFlow",
      tags: ["AI", "Python", "TensorFlow"],
      status: "Active",
      color: "primary"
    },
    {
      title: "Smart Campus Bot",
      description: "Autonomous navigation robot for campus tours and information assistance",
      tags: ["Robotics", "Arduino", "ROS"],
      status: "In Progress",
      color: "secondary"
    },
    {
      title: "Code Collab Platform",
      description: "Real-time collaborative coding platform with AI-powered suggestions",
      tags: ["Web Dev", "React", "WebSockets"],
      status: "Completed",
      color: "accent"
    },
    {
      title: "Green Energy Monitor",
      description: "IoT solution for tracking and optimizing renewable energy consumption",
      tags: ["IoT", "Sensors", "Data Analytics"],
      status: "Active",
      color: "primary"
    },
    {
      title: "AR Learning Experience",
      description: "Augmented reality educational app for interactive STEM learning",
      tags: ["AR", "Unity", "C#"],
      status: "Planning",
      color: "secondary"
    },
    {
      title: "Blockchain Voting System",
      description: "Secure and transparent voting platform using blockchain technology",
      tags: ["Blockchain", "Solidity", "Web3"],
      status: "In Progress",
      color: "accent"
    },
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-12">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-orbitron font-bold text-gradient">
            Our Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovation in action. Explore the cutting-edge projects our team is building.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="card-gradient border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:glow animate-fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="font-orbitron text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge 
                    variant="outline" 
                    className={`border-${project.color} text-${project.color}`}
                  >
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="bg-muted/50"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-primary/50 hover:bg-primary/10"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-secondary/50 hover:bg-secondary/10"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20">
          <Card className="card-gradient border-primary/30 glow">
            <CardContent className="p-12 text-center space-y-4">
              <h2 className="text-3xl font-orbitron font-bold text-gradient">
                Have a Project Idea?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join us and bring your innovative ideas to life. Collaborate with talented peers and make an impact.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground glow mt-4">
                Submit Your Idea
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;

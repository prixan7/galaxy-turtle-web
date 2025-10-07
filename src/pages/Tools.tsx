import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Terminal, Lightbulb, BookOpen } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useEffect, useState } from "react";

const Tools = () => {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  const codingTips = [
    "💡 Use meaningful variable names - your future self will thank you!",
    "🚀 Always comment your code, especially complex logic",
    "🎯 Break down large functions into smaller, reusable components",
    "⚡ Git commit often with descriptive messages",
    "🔍 Test edge cases, not just happy paths",
    "📚 Read documentation before asking questions",
    "🎨 Keep your code DRY - Don't Repeat Yourself",
    "🔐 Never hardcode sensitive information like API keys",
    "🌟 Write code for humans first, computers second",
    "⏰ Take regular breaks - fresh eyes catch more bugs",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTipIndex((prev) => (prev + 1) % codingTips.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [codingTips.length]);

  const tools = [
    {
      category: "Development",
      icon: Code,
      items: [
        { name: "VS Code", description: "Powerful code editor with extensions" },
        { name: "GitHub", description: "Version control and collaboration" },
        { name: "Postman", description: "API testing and development" },
      ],
    },
    {
      category: "AI & ML",
      icon: Lightbulb,
      items: [
        { name: "TensorFlow", description: "Machine learning framework" },
        { name: "PyTorch", description: "Deep learning library" },
        { name: "Jupyter", description: "Interactive notebooks for data science" },
      ],
    },
    {
      category: "DevOps",
      icon: Terminal,
      items: [
        { name: "Docker", description: "Containerization platform" },
        { name: "Kubernetes", description: "Container orchestration" },
        { name: "Jenkins", description: "CI/CD automation" },
      ],
    },
    {
      category: "Learning",
      icon: BookOpen,
      items: [
        { name: "LeetCode", description: "Practice coding problems" },
        { name: "Coursera", description: "Online courses and certifications" },
        { name: "Stack Overflow", description: "Developer community Q&A" },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-12">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-orbitron font-bold text-gradient">
            Tools & Tips
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Level up your coding game with our curated tools and daily tips
          </p>
        </div>

        {/* Scrolling Tips Banner */}
        <Card className="card-gradient border-primary/30 glow mb-12 overflow-hidden animate-fade-in-up">
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-orbitron font-bold text-gradient">
                💻 Daily Coding Tip
              </h2>
              <div 
                className="text-xl text-foreground min-h-[60px] flex items-center justify-center transition-all duration-500"
                key={currentTipIndex}
              >
                <p className="animate-fade-in-up max-w-2xl">
                  {codingTips[currentTipIndex]}
                </p>
              </div>
              <div className="flex justify-center gap-2 pt-2">
                {codingTips.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentTipIndex 
                        ? 'w-8 bg-primary' 
                        : 'w-2 bg-muted'
                    }`}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((category, index) => (
            <Card 
              key={index}
              className="card-gradient border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:glow animate-slide-in-left"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-orbitron text-2xl">
                    {category.category}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.items.map((tool, toolIndex) => (
                  <div 
                    key={toolIndex}
                    className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:translate-x-2"
                  >
                    <h4 className="font-bold text-lg mb-1">{tool.name}</h4>
                    <p className="text-muted-foreground text-sm">{tool.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Resources Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-orbitron font-bold mb-8 text-gradient">
            Recommended Learning Paths
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Web Development",
                path: "HTML/CSS → JavaScript → React → Node.js",
                color: "primary",
              },
              {
                title: "AI & Machine Learning",
                path: "Python → NumPy/Pandas → TensorFlow → Deep Learning",
                color: "secondary",
              },
              {
                title: "Mobile Development",
                path: "Dart → Flutter → Firebase → App Deployment",
                color: "accent",
              },
            ].map((path, index) => (
              <Card 
                key={index}
                className={`card-gradient border-${path.color}/30 hover:glow transition-all duration-300 hover:scale-105 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-orbitron font-bold text-xl text-gradient">
                    {path.title}
                  </h3>
                  <p className="text-muted-foreground">{path.path}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Star } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

const Leaderboard = () => {
  const topContributors = [
    {
      rank: 1,
      name: "Alex Chen",
      points: 2850,
      projects: 15,
      achievements: ["Top Contributor", "AI Expert", "Hackathon Winner"],
      avatar: "🦸‍♂️",
    },
    {
      rank: 2,
      name: "Sarah Kumar",
      points: 2640,
      projects: 12,
      achievements: ["Innovation Leader", "Robotics Pro"],
      avatar: "👩‍💻",
    },
    {
      rank: 3,
      name: "Marcus Johnson",
      points: 2420,
      projects: 14,
      achievements: ["Code Master", "Team Player"],
      avatar: "🚀",
    },
    {
      rank: 4,
      name: "Emily Zhang",
      points: 2180,
      projects: 10,
      achievements: ["Web Dev Expert", "Creative Mind"],
      avatar: "✨",
    },
    {
      rank: 5,
      name: "David Park",
      points: 2050,
      projects: 11,
      achievements: ["IoT Specialist", "Workshop Leader"],
      avatar: "🔧",
    },
  ];

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return "border-accent text-accent";
      case 2: return "border-secondary text-secondary";
      case 3: return "border-primary text-primary";
      default: return "border-muted text-muted-foreground";
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Trophy className="w-8 h-8 text-accent animate-pulse-glow" />;
      case 2: return <Medal className="w-8 h-8 text-secondary" />;
      case 3: return <Award className="w-8 h-8 text-primary" />;
      default: return <Star className="w-6 h-6 text-muted-foreground" />;
    }
  };

  return (
    <div className="relative min-h-screen pt-24 pb-12">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-orbitron font-bold text-gradient">
            Leaderboard
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating our top contributors and innovators
          </p>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {/* 2nd Place */}
          <Card className="card-gradient border-secondary/50 hover:glow transition-all duration-300 md:mt-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <CardContent className="p-6 text-center space-y-4">
              <div className="text-6xl">{topContributors[1].avatar}</div>
              <div className="flex justify-center">
                {getRankIcon(2)}
              </div>
              <div>
                <h3 className="font-orbitron font-bold text-xl">{topContributors[1].name}</h3>
                <Badge variant="outline" className={`mt-2 ${getRankColor(2)}`}>
                  #2
                </Badge>
              </div>
              <div className="text-3xl font-orbitron font-bold text-secondary">
                {topContributors[1].points}
              </div>
              <p className="text-sm text-muted-foreground">{topContributors[1].projects} Projects</p>
            </CardContent>
          </Card>

          {/* 1st Place */}
          <Card className="card-gradient border-accent/50 glow-accent hover:scale-105 transition-all duration-300 animate-fade-in-up">
            <CardContent className="p-6 text-center space-y-4">
              <div className="text-7xl animate-float">{topContributors[0].avatar}</div>
              <div className="flex justify-center">
                {getRankIcon(1)}
              </div>
              <div>
                <h3 className="font-orbitron font-bold text-2xl">{topContributors[0].name}</h3>
                <Badge variant="outline" className={`mt-2 ${getRankColor(1)}`}>
                  #1 Champion
                </Badge>
              </div>
              <div className="text-4xl font-orbitron font-bold text-accent animate-pulse-glow">
                {topContributors[0].points}
              </div>
              <p className="text-sm text-muted-foreground">{topContributors[0].projects} Projects</p>
            </CardContent>
          </Card>

          {/* 3rd Place */}
          <Card className="card-gradient border-primary/50 hover:glow transition-all duration-300 md:mt-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <CardContent className="p-6 text-center space-y-4">
              <div className="text-6xl">{topContributors[2].avatar}</div>
              <div className="flex justify-center">
                {getRankIcon(3)}
              </div>
              <div>
                <h3 className="font-orbitron font-bold text-xl">{topContributors[2].name}</h3>
                <Badge variant="outline" className={getRankColor(3)}>
                  #3
                </Badge>
              </div>
              <div className="text-3xl font-orbitron font-bold text-primary">
                {topContributors[2].points}
              </div>
              <p className="text-sm text-muted-foreground">{topContributors[2].projects} Projects</p>
            </CardContent>
          </Card>
        </div>

        {/* Full Leaderboard */}
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl font-orbitron font-bold mb-6 text-gradient">
            Top Contributors
          </h2>
          
          {topContributors.map((contributor, index) => (
            <Card 
              key={index}
              className={`card-gradient transition-all duration-300 hover:scale-105 animate-slide-in-left ${
                index < 3 ? 'hover:glow border-primary/30' : 'border-muted/20'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12">
                      {getRankIcon(contributor.rank)}
                    </div>
                    <div className="text-4xl">{contributor.avatar}</div>
                    <div>
                      <CardTitle className="font-orbitron">
                        {contributor.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {contributor.projects} Projects Completed
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-orbitron font-bold ${
                      index === 0 ? 'text-accent' : 
                      index === 1 ? 'text-secondary' : 
                      index === 2 ? 'text-primary' : 
                      'text-foreground'
                    }`}>
                      {contributor.points}
                    </div>
                    <p className="text-sm text-muted-foreground">points</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {contributor.achievements.map((achievement, achIndex) => (
                    <Badge 
                      key={achIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/30"
                    >
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { label: "Total Members", value: "50+", icon: "👥" },
            { label: "Projects Completed", value: "120+", icon: "🚀" },
            { label: "Awards Won", value: "25+", icon: "🏆" },
          ].map((stat, index) => (
            <Card 
              key={index}
              className="card-gradient border-primary/20 hover:glow transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center space-y-2">
                <div className="text-4xl">{stat.icon}</div>
                <div className="text-3xl font-orbitron font-bold text-primary">
                  {stat.value}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useState, useEffect } from "react";

const Events = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Countdown to next event (example: 30 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const upcomingEvents = [
    {
      title: "AI Innovation Hackathon 2025",
      date: "March 15-17, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Tech Campus, Hall A",
      participants: "200+",
      type: "Hackathon",
      status: "Registration Open",
    },
    {
      title: "Robotics Workshop Series",
      date: "March 22, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Innovation Lab",
      participants: "50",
      type: "Workshop",
      status: "Coming Soon",
    },
    {
      title: "Tech Talk: Future of AI",
      date: "April 5, 2025",
      time: "4:00 PM - 6:00 PM",
      location: "Virtual Event",
      participants: "Unlimited",
      type: "Talk",
      status: "Registration Open",
    },
  ];

  const pastEvents = [
    {
      title: "Code Sprint Challenge",
      date: "January 2025",
      achievement: "🏆 1st Place - National Level",
    },
    {
      title: "IoT Innovation Expo",
      date: "December 2024",
      achievement: "🎖️ Best Project Award",
    },
    {
      title: "ML Workshop Series",
      date: "November 2024",
      achievement: "✨ 100+ Attendees",
    },
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-12">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-orbitron font-bold text-gradient">
            Events & Competitions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us in exciting hackathons, workshops, and tech events
          </p>
        </div>

        {/* Countdown Timer */}
        <Card className="card-gradient border-primary/30 glow mb-12 animate-fade-in-up">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-orbitron font-bold text-gradient">
                Next Major Event Countdown
              </h2>
              <p className="text-muted-foreground">AI Innovation Hackathon 2025</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                {[
                  { value: countdown.days, label: "Days" },
                  { value: countdown.hours, label: "Hours" },
                  { value: countdown.minutes, label: "Minutes" },
                  { value: countdown.seconds, label: "Seconds" },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="bg-muted/30 rounded-lg p-4 hover:bg-muted/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-4xl font-orbitron font-bold text-primary animate-pulse-glow">
                      {item.value}
                    </div>
                    <div className="text-muted-foreground text-sm mt-2">{item.label}</div>
                  </div>
                ))}
              </div>
              
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground glow-accent">
                Register Now
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-4xl font-orbitron font-bold mb-8 text-gradient">
            Upcoming Events
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={index}
                className="card-gradient border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:glow animate-slide-in-left"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="font-orbitron text-xl">
                      {event.title}
                    </CardTitle>
                    <Badge className="bg-primary/20 text-primary border-primary/50">
                      {event.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-secondary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{event.participants} Participants</span>
                    </div>
                  </div>
                  
                  <Badge variant="outline" className="border-secondary/50 text-secondary">
                    {event.type}
                  </Badge>
                  
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-4xl font-orbitron font-bold mb-8 text-gradient">
            Past Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card 
                key={index}
                className="card-gradient border-accent/20 hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:glow-accent animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center space-y-3">
                  <h3 className="font-orbitron font-bold text-lg">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{event.date}</p>
                  <div className="text-2xl">{event.achievement}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

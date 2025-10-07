import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-card/50 backdrop-blur-lg border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="font-orbitron text-lg font-bold text-gradient">Team Turtle</h3>
            <p className="text-muted-foreground text-sm">
              Slow is Smooth, Smooth is Smart. Innovating Beyond Limits.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-orbitron font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link to="/events" className="text-muted-foreground hover:text-primary transition-colors">
                Events
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-orbitron font-semibold">Resources</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/tools" className="text-muted-foreground hover:text-primary transition-colors">
                Tools & Tips
              </Link>
              <Link to="/leaderboard" className="text-muted-foreground hover:text-primary transition-colors">
                Leaderboard
              </Link>
              <Link to="/login" className="text-muted-foreground hover:text-primary transition-colors">
                Login
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-orbitron font-semibold">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors glow-accent">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors glow-accent">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors glow-accent">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors glow-accent">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Team Turtle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

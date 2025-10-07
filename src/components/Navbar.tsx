import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import turtleLogo from "@/assets/turtle-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Events", path: "/events" },
    { name: "Leaderboard", path: "/leaderboard" },
    { name: "Tools & Tips", path: "/tools" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={turtleLogo} 
              alt="Team Turtle Logo" 
              className="h-10 w-10 animate-pulse-glow group-hover:scale-110 transition-transform duration-300"
            />
            <span className="font-orbitron text-xl font-bold text-gradient">
              TEAM TURTLE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button 
                  variant="ghost" 
                  className="text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  {item.name}
                </Button>
              </Link>
            ))}
            <Link to="/login">
              <Button className="ml-4 bg-primary hover:bg-primary/90 text-primary-foreground glow">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in-up">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block py-2 px-4 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <Button className="mt-2 w-full bg-primary hover:bg-primary/90 text-primary-foreground glow">
                Login
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

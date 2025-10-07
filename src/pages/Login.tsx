import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedBackground from "@/components/AnimatedBackground";
import turtleLogo from "@/assets/turtle-logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent, userType: string) => {
    e.preventDefault();
    console.log(`${userType} login attempted with:`, email);
    // This is just a UI mockup - no actual authentication
  };

  return (
    <div className="relative min-h-screen pt-24 pb-12 flex items-center justify-center">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 relative z-10 max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8 animate-fade-in-up">
          <img 
            src={turtleLogo} 
            alt="Team Turtle Logo" 
            className="h-24 w-24 mx-auto animate-pulse-glow mb-4"
          />
          <h1 className="text-4xl font-orbitron font-bold text-gradient mb-2">
            Welcome Back
          </h1>
          <p className="text-muted-foreground">
            Sign in to access your Team Turtle account
          </p>
        </div>

        {/* Login Tabs */}
        <Card className="card-gradient border-primary/30 glow animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <CardHeader>
            <CardTitle className="text-center font-orbitron text-2xl">
              Login Portal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="member" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 bg-muted/50">
                <TabsTrigger value="member" className="font-orbitron data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Member
                </TabsTrigger>
                <TabsTrigger value="admin" className="font-orbitron data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                  Admin
                </TabsTrigger>
              </TabsList>

              {/* Member Login */}
              <TabsContent value="member">
                <form onSubmit={(e) => handleSubmit(e, "Member")} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="member-email" className="text-foreground">
                      Email Address
                    </Label>
                    <Input
                      id="member-email"
                      type="email"
                      placeholder="member@teamturtle.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-muted/30 border-primary/30 focus:border-primary focus:ring-primary transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="member-password" className="text-foreground">
                      Password
                    </Label>
                    <Input
                      id="member-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-muted/30 border-primary/30 focus:border-primary focus:ring-primary transition-all"
                      required
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center space-x-2 text-muted-foreground cursor-pointer">
                      <input type="checkbox" className="rounded border-primary/30" />
                      <span>Remember me</span>
                    </label>
                    <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                      Forgot password?
                    </a>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow py-6 text-lg font-orbitron"
                  >
                    Sign In as Member
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                      Register here
                    </a>
                  </p>
                </form>
              </TabsContent>

              {/* Admin Login */}
              <TabsContent value="admin">
                <form onSubmit={(e) => handleSubmit(e, "Admin")} className="space-y-4">
                  <div className="p-4 bg-accent/10 border border-accent/30 rounded-lg mb-4">
                    <p className="text-sm text-accent font-medium">
                      ⚠️ Admin Access Only
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      This portal is for club bearers and administrators
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="admin-email" className="text-foreground">
                      Admin Email
                    </Label>
                    <Input
                      id="admin-email"
                      type="email"
                      placeholder="admin@teamturtle.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-muted/30 border-accent/30 focus:border-accent focus:ring-accent transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="admin-password" className="text-foreground">
                      Admin Password
                    </Label>
                    <Input
                      id="admin-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-muted/30 border-accent/30 focus:border-accent focus:ring-accent transition-all"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground glow-accent py-6 text-lg font-orbitron"
                  >
                    Sign In as Admin
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    Need admin access?{" "}
                    <a href="#" className="text-accent hover:text-accent/80 transition-colors">
                      Contact support
                    </a>
                  </p>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Info Note */}
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground bg-muted/20 p-4 rounded-lg border border-muted/30">
            🔒 This is a design mockup. No actual authentication is performed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

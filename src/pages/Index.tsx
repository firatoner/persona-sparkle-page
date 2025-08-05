import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Twitter, ExternalLink, Instagram } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
 
  const skills = [
    /*
    "React", "TypeScript", "Node.js", "Python", "UI/UX Design", 
    "MongoDB", "PostgreSQL", "Docker", "AWS", "Git"
    */
  ];

  const projects = [
    /*
    {
      title: "E-Commerce Platform",
      description: "Modern, responsive e-commerce solution built with React and Node.js",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Task Management App", 
      description: "Collaborative task management tool with real-time updates",
      tech: ["TypeScript", "React", "Socket.io"],
      link: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive analytics dashboard for business intelligence",
      tech: ["React", "D3.js", "Python"],
      link: "#"
    }
      */
  ];

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url('/lovable-uploads/0380f801-53f3-4c14-80d4-e1c49076257c.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Mobile-friendly overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/85 to-background/30 lg:to-background/20" />
      
      <div className="relative z-10 container mx-auto px-4 py-6 min-h-screen flex items-start pt-8 sm:pt-16">
        <div className="w-full max-w-xs sm:max-w-sm mx-auto lg:mx-0">
          <div className="w-full">
            
            {/* Left Side - Compact CV */}
            <div className={`space-y-4 transition-all duration-1000 ${isVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0'}`}>
              
              {/* Compact Profile Section */}
              <Card className="glass-card p-4 float">
                <div className="text-center mb-3">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-light to-primary overflow-hidden ring-2 ring-accent/30 mx-auto mb-3">
                    <img 
                      src="../../profile.jpg" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h1 className="text-xl font-bold text-foreground">
                    Umut Öner
                  </h1>
                  <p className="text-sm text-primary font-medium">
                    Wine Making - Öküzgözü 🍇 - Gastronom🍷
                  </p>
                </div>

                {/* Compact Contact Info */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-3 h-3 text-highlight" />
                    <a href="mailto:max.mustermann@example.com">
                      <span>umut_oner@hotmail.com</span>
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-3 h-3 text-highlight" />
                    <a href="tel:+905326611027">
                      <span>+90 (532) 661-1027</span>
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-3 h-3 text-highlight" />
                    <span>İstanbul / Türkiye </span>
                  </div>
                </div>
              </Card>

              {/* Compact About Section */}
              {/* 
              <Card className={`glass-card p-4 float-delayed transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
                <h2 className="text-lg font-bold text-primary mb-2">Hakkımda</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  hakkimda bla bla  
                </p>
              </Card>
              */}

              {/* Compact Skills Section */}
              {/*
              <Card className={`glass-card p-4 float transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
                <h2 className="text-lg font-bold text-primary mb-2">Skills</h2>
                <div className="flex flex-wrap gap-1">
                  {skills.slice(0, 6).map((skill, index) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs bg-accent/20 text-accent-foreground border-accent/30 hover:bg-accent/30 transition-colors cursor-default"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
              */}
              {/* Compact Social Links */}
              <Card className={`glass-card p-4 float-delayed transition-all duration-1000 delay-700 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
                <h2 className="text-lg font-bold text-primary mb-2">Sosyal Medya</h2>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="btn-nature p-2 h-8 w-8"
                    asChild
                  >
                    <a href="https://www.instagram.com/umutoner76/" target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-3 h-3"/>
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="btn-nature p-2 h-8 w-8"
                    asChild
                  >
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-3 h-3" />
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="btn-nature p-2 h-8 w-8"
                    asChild
                  >
                    <a href="https://x.com/umutoner76" target="_blank" rel="noopener noreferrer">
                      <Twitter className="w-3 h-3" />
                    </a>
                  </Button>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
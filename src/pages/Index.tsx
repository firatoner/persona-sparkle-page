import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    "React", "TypeScript", "Node.js", "Python", "UI/UX Design", 
    "MongoDB", "PostgreSQL", "Docker", "AWS", "Git"
  ];

  const projects = [
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
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
      
      <div className="relative z-10 container mx-auto px-6 py-12 min-h-screen flex items-center">
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Main Content */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0'}`}>
              
              {/* Profile Section */}
              <Card className="glass-card p-8 float">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-light to-primary overflow-hidden ring-4 ring-accent/30 transform hover:scale-105 transition-transform duration-300">
                    <img 
                      src="/lovable-uploads/0380f801-53f3-4c14-80d4-e1c49076257c.png" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">
                      Alex Johnson
                    </h1>
                    <p className="text-xl text-primary font-medium">
                      Full Stack Developer
                    </p>
                    <p className="text-muted-foreground mt-1">
                      Creating digital experiences that matter
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-4 h-4 text-highlight" />
                    <span className="text-sm">alex@example.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="w-4 h-4 text-highlight" />
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <MapPin className="w-4 h-4 text-highlight" />
                    <span className="text-sm">San Francisco, CA</span>
                  </div>
                </div>
              </Card>

              {/* About Section */}
              <Card className={`glass-card p-6 float-delayed transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
                <h2 className="text-2xl font-bold text-primary mb-4">About Me</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Passionate full-stack developer with 5+ years of experience creating 
                  innovative web applications. I specialize in modern JavaScript frameworks 
                  and have a keen eye for user experience design.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you can find me exploring nature trails, 
                  contributing to open source projects, or experimenting with new 
                  technologies that push the boundaries of web development.
                </p>
              </Card>

              {/* Skills Section */}
              <Card className={`glass-card p-6 float transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
                <h2 className="text-2xl font-bold text-primary mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-accent/20 text-accent-foreground border-accent/30 hover:bg-accent/30 transition-colors cursor-default transform hover:scale-105 transition-transform duration-200"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* Social Links */}
              <Card className={`glass-card p-6 float-delayed transition-all duration-1000 delay-700 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
                <h2 className="text-2xl font-bold text-primary mb-4">Connect With Me</h2>
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="btn-nature animate-underline"
                    asChild
                  >
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="btn-nature animate-underline"
                    asChild
                  >
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="btn-nature animate-underline"
                    asChild
                  >
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <Twitter className="w-4 h-4 mr-2" />
                      Twitter
                    </a>
                  </Button>
                </div>
              </Card>
            </div>

            {/* Right Side - Projects */}
            <div className={`space-y-6 transition-all duration-1000 delay-900 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
              <h2 className="text-3xl font-bold text-primary mb-6">Featured Projects</h2>
              
              {projects.map((project, index) => (
                <Card 
                  key={project.title} 
                  className="glass-card p-6 hover:scale-105 transition-transform duration-300 group cursor-pointer"
                  style={{ animationDelay: `${(index + 10) * 100}ms` }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-highlight transition-colors" />
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}

              <Card className="glass-card p-6 text-center">
                <Button className="btn-nature w-full group">
                  View All Projects
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
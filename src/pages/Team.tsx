import { Mail, Linkedin, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const Team = () => {
  const teamMembers = [
    {
      name: "Lead Developer",
      role: "Full-Stack Engineer & AI Specialist",
      bio: "Expert in machine learning, network security, and forensic analysis systems. Specializes in building scalable investigative platforms.",
      skills: ["Machine Learning", "Network Analysis", "React", "Python"],
    },
    {
      name: "Security Researcher",
      role: "Cybersecurity Expert",
      bio: "Extensive experience in TOR network research, dark web investigations, and cryptographic analysis.",
      skills: ["TOR Networks", "Cryptography", "Forensics", "Security"],
    },
    {
      name: "Data Scientist",
      role: "AI & Analytics Lead",
      bio: "Specializes in pattern recognition, correlation algorithms, and predictive modeling for network traffic analysis.",
      skills: ["Deep Learning", "Data Mining", "Statistics", "Visualization"],
    },
    {
      name: "UI/UX Designer",
      role: "Product Designer",
      bio: "Creates intuitive interfaces for complex investigative tools used by law enforcement professionals.",
      skills: ["UI Design", "UX Research", "Prototyping", "Accessibility"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold glow-text">Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dedicated experts in cybersecurity, AI, and forensic analysis working to support 
              law enforcement in combating cybercrime
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="cyber-card p-8">
                <div className="space-y-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto" />
                  
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                  </div>

                  <p className="text-muted-foreground text-center">{member.bio}</p>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 justify-center pt-4">
                    <Button size="icon" variant="outline">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="cyber-card p-8 md:p-12 bg-gradient-cyber">
            <h2 className="text-3xl font-bold text-center mb-6">Our Mission</h2>
            <div className="space-y-4 text-lg text-foreground/90 max-w-3xl mx-auto">
              <p>
                We are a multidisciplinary team of cybersecurity researchers, data scientists, 
                and engineers committed to supporting law enforcement in their fight against 
                cybercrime and terrorism conducted through anonymous networks.
              </p>
              <p>
                TOR-Unveil represents our contribution to the Tamil Nadu Police Hackathon 2025, 
                demonstrating how advanced technology can be ethically applied to protect public 
                safety while respecting privacy and legal frameworks.
              </p>
              <p>
                Our goal is to provide investigators with scientifically sound, legally defensible 
                tools that reduce investigation time and improve case success rates.
              </p>
            </div>
          </Card>

          <Card className="cyber-card p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Project Timeline</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  <div className="w-0.5 h-full bg-border" />
                </div>
                <div className="pb-8">
                  <p className="font-semibold">Research Phase</p>
                  <p className="text-sm text-muted-foreground">
                    Studied TOR network architecture, existing tracing methods, and legal frameworks
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  <div className="w-0.5 h-full bg-border" />
                </div>
                <div className="pb-8">
                  <p className="font-semibold">Algorithm Development</p>
                  <p className="text-sm text-muted-foreground">
                    Developed correlation algorithms and trained AI prediction models
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  <div className="w-0.5 h-full bg-border" />
                </div>
                <div className="pb-8">
                  <p className="font-semibold">Platform Implementation</p>
                  <p className="text-sm text-muted-foreground">
                    Built full-stack application with dashboard, analysis engine, and reporting system
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                </div>
                <div>
                  <p className="font-semibold">Hackathon Presentation</p>
                  <p className="text-sm text-muted-foreground">
                    Presenting TOR-Unveil at Tamil Nadu Police Hackathon 2025
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Team;

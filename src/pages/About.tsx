import { Shield, Target, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold glow-text">About TOR-Unveil</h1>
            <p className="text-xl text-muted-foreground">
              Advanced TOR Network Analysis for Law Enforcement
            </p>
          </div>

          <Card className="cyber-card p-8 md:p-12 space-y-6">
            <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
            <p className="text-lg text-foreground/90 leading-relaxed">
              TOR-Unveil is a comprehensive analytical system developed for the Tamil Nadu Police 
              Hackathon 2025. Our mission is to provide law enforcement agencies with cutting-edge 
              tools to investigate and trace activities conducted over the TOR anonymity network.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              The project combines automated data collection, advanced correlation algorithms, 
              artificial intelligence, and intuitive visualization to create a complete investigative 
              platform. By analyzing patterns in TOR network traffic and node behavior, TOR-Unveil 
              can identify probable origin IP addresses with quantified confidence levels.
            </p>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="cyber-card p-6 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Our Mission</h3>
              <p className="text-foreground/80">
                Empower law enforcement with tools to trace criminal activity on TOR networks while 
                maintaining ethical and legal standards.
              </p>
            </Card>

            <Card className="cyber-card p-6 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Our Approach</h3>
              <p className="text-foreground/80">
                Combining AI-powered analysis, network forensics, and real-time monitoring into 
                a unified investigative platform.
              </p>
            </Card>

            <Card className="cyber-card p-6 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Our Impact</h3>
              <p className="text-foreground/80">
                Enable faster investigations, higher success rates, and stronger evidence for 
                prosecuting cybercrime cases.
              </p>
            </Card>
          </div>

          <Card className="cyber-card p-8 md:p-12 space-y-6">
            <h2 className="text-3xl font-bold mb-4">Technical Approach</h2>
            <div className="space-y-4 text-foreground/90">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Data Collection</h3>
                <p>
                  Automated systems continuously monitor and collect TOR node information, traffic patterns, 
                  and timing data from multiple sources.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Pattern Analysis</h3>
                <p>
                  Advanced correlation algorithms analyze relationships between entry nodes, exit nodes, 
                  traffic timing, and behavioral patterns.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">AI Prediction</h3>
                <p>
                  Machine learning models trained on historical data predict probable origin IPs and 
                  generate confidence scores for each prediction.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Forensic Documentation</h3>
                <p>
                  Comprehensive reports document findings with evidence chains, methodology transparency, 
                  and confidence metrics suitable for legal proceedings.
                </p>
              </div>
            </div>
          </Card>

          <Card className="cyber-card p-8 md:p-12 space-y-6 bg-gradient-cyber">
            <h2 className="text-3xl font-bold mb-4">Why It Matters</h2>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Criminal exploitation of TOR networks poses significant challenges to public safety and 
              national security. TOR-Unveil addresses this critical need by providing law enforcement 
              with scientifically-sound, legally-defensible methods to investigate TOR-based criminal 
              activity. Our system respects privacy rights while enabling justice.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              By reducing investigation time, improving accuracy, and providing clear evidence trails, 
              TOR-Unveil helps protect communities from cybercrime, terrorism, human trafficking, and 
              other serious offenses conducted under the veil of TOR anonymity.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;

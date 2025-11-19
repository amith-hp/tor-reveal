import { Link } from "react-router-dom";
import { ArrowRight, Shield, Network, Brain, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import heroBanner from "@/assets/hero-banner.jpg";

const Home = () => {
  const highlights = [
    {
      icon: Network,
      title: "Node Correlation",
      description: "Advanced algorithms correlate TOR node activity patterns to trace traffic flows",
    },
    {
      icon: Brain,
      title: "AI Prediction",
      description: "Machine learning models predict probable origin IPs with confidence scoring",
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "Live dashboard visualization of TOR network activity and analysis results",
    },
    {
      icon: Shield,
      title: "Forensic Ready",
      description: "Export comprehensive reports suitable for law enforcement investigations",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroBanner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              <span className="text-sm font-medium text-primary">Tamil Nadu Police Hackathon 2025</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="glow-text">TOR-Unveil</span>
              <br />
              <span className="text-3xl md:text-4xl text-muted-foreground">Peel the Onion</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trace TOR Network Traffic with Confidence
            </p>
            
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              An advanced analytical system designed to trace TOR network users by correlating node data 
              and activity patterns, enabling law enforcement to identify probable origin IP addresses 
              behind TOR-based anonymous traffic.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" asChild className="text-lg">
                <Link to="/dashboard">
                  View Dashboard <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg">
                <Link to="/features">Explore Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-4 bg-gradient-cyber">
        <div className="container mx-auto max-w-4xl">
          <Card className="cyber-card p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">The Challenge</h2>
            <div className="space-y-4 text-lg text-foreground/90">
              <p>
                The TOR network provides anonymity that shields criminal activities from law enforcement. 
                Traditional tracking methods fail against TOR's multi-layered encryption and routing through 
                multiple nodes across the globe.
              </p>
              <p>
                Criminals exploit this anonymity for illegal activities including drug trafficking, 
                cybercrime, terrorism coordination, and distribution of illegal content. Law enforcement 
                agencies need advanced tools to pierce through this anonymity while respecting privacy laws.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="cyber-card p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Innovation</h2>
            <div className="space-y-4 text-lg text-foreground/90">
              <p>
                TOR-Unveil employs sophisticated correlation algorithms and artificial intelligence to 
                analyze TOR node patterns, timing correlations, and traffic fingerprints. By processing 
                vast amounts of network data and applying machine learning models, the system can predict 
                the probable origin of TOR traffic with quantified confidence levels.
              </p>
              <p>
                Unlike traditional approaches, TOR-Unveil integrates automated data collection, real-time 
                analysis, AI-powered prediction, and forensic reporting into a unified platform designed 
                specifically for law enforcement investigations.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-20 px-4 bg-gradient-cyber">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Core Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="cyber-card p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Unveil the Truth?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Explore our comprehensive platform designed for law enforcement professionals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/upload">Upload Network Logs</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

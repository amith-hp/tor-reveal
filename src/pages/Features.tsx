import { Database, GitBranch, Brain, Activity, Upload, Clock, Award, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const Features = () => {
  const features = [
    {
      icon: Database,
      title: "Automated TOR Data Collection",
      description: "Continuously monitors and collects real-time data from TOR network nodes, including entry guards, relay servers, and exit nodes. Automatically captures traffic patterns, timing information, and node metadata.",
      capabilities: [
        "Real-time TOR node monitoring",
        "Automated data ingestion pipelines",
        "Multi-source data aggregation",
        "Metadata extraction and indexing",
      ],
    },
    {
      icon: GitBranch,
      title: "Node Correlation Engine",
      description: "Advanced algorithms analyze relationships between TOR nodes to identify patterns and correlations. Maps traffic flows through the TOR network to establish connection chains.",
      capabilities: [
        "Entry-to-exit node correlation",
        "Timing attack analysis",
        "Traffic flow mapping",
        "Pattern recognition algorithms",
      ],
    },
    {
      icon: Brain,
      title: "AI-Based Origin Prediction",
      description: "Machine learning models trained on historical TOR traffic data predict the probable origin IP address of anonymous connections with quantified confidence levels.",
      capabilities: [
        "Deep learning prediction models",
        "Confidence scoring system",
        "Historical pattern learning",
        "Behavioral fingerprinting",
      ],
    },
    {
      icon: Activity,
      title: "Real-time Visualization Dashboard",
      description: "Interactive dashboard provides live monitoring of TOR network activity, ongoing analyses, and investigation results with intuitive visualizations and drill-down capabilities.",
      capabilities: [
        "Live network topology maps",
        "Traffic flow visualization",
        "Investigation status tracking",
        "Interactive data exploration",
      ],
    },
    {
      icon: Upload,
      title: "Forensic Log Upload",
      description: "Support for uploading network captures (PCAP files), firewall logs, and other forensic data for offline analysis. Processes existing evidence to extract TOR-related activity.",
      capabilities: [
        "PCAP file processing",
        "Multi-format log parsing",
        "Evidence chain management",
        "Batch upload support",
      ],
    },
    {
      icon: Clock,
      title: "Timeline Reconstruction",
      description: "Reconstructs chronological timelines of TOR activity showing the sequence of events, node transitions, and traffic patterns over time for comprehensive case understanding.",
      capabilities: [
        "Event sequence analysis",
        "Temporal pattern detection",
        "Activity timeline visualization",
        "Cross-reference correlation",
      ],
    },
    {
      icon: Award,
      title: "Confidence Scoring",
      description: "Every prediction and analysis result includes a transparent confidence score based on data quality, pattern strength, and algorithmic certainty. Helps investigators assess reliability.",
      capabilities: [
        "Multi-factor confidence calculation",
        "Uncertainty quantification",
        "Result reliability metrics",
        "Transparent scoring methodology",
      ],
    },
    {
      icon: FileText,
      title: "Exportable Forensic Report",
      description: "Generates comprehensive, court-ready forensic reports documenting findings, methodology, evidence chain, and conclusions. Exports in multiple formats suitable for legal proceedings.",
      capabilities: [
        "PDF and HTML report generation",
        "Evidence documentation",
        "Methodology transparency",
        "Chain of custody tracking",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold glow-text">Platform Features</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive suite of tools designed for professional TOR network investigation
            </p>
          </div>

          <div className="grid gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="cyber-card p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 glow-border">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-bold text-primary">{feature.title}</h2>
                    <p className="text-lg text-foreground/90">{feature.description}</p>
                    
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground">Key Capabilities:</h3>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {feature.capabilities.map((capability, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="cyber-card p-8 md:p-12 bg-gradient-cyber text-center">
            <h2 className="text-3xl font-bold mb-4">Integrated Investigation Platform</h2>
            <p className="text-lg text-foreground/90 max-w-3xl mx-auto">
              All features work seamlessly together, creating a unified workflow from data collection 
              through analysis to final forensic reporting. The platform is designed specifically for 
              law enforcement professionals conducting TOR network investigations.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Features;

import { Activity, Users, Globe, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";

const Dashboard = () => {
  const stats = [
    { icon: Activity, label: "Active Analyses", value: "12", change: "+3" },
    { icon: Users, label: "TOR Nodes Monitored", value: "8,432", change: "+124" },
    { icon: Globe, label: "Correlations Found", value: "456", change: "+89" },
    { icon: TrendingUp, label: "Avg Confidence", value: "87%", change: "+2%" },
  ];

  const recentAnalyses = [
    {
      id: "A-2025-001",
      target: "Target Alpha",
      status: "completed",
      confidence: 92,
      timestamp: "2 hours ago",
    },
    {
      id: "A-2025-002",
      target: "Target Beta",
      status: "processing",
      confidence: 0,
      timestamp: "4 hours ago",
    },
    {
      id: "A-2025-003",
      target: "Target Gamma",
      status: "completed",
      confidence: 78,
      timestamp: "6 hours ago",
    },
    {
      id: "A-2025-004",
      target: "Target Delta",
      status: "processing",
      confidence: 0,
      timestamp: "8 hours ago",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold glow-text">Investigation Dashboard</h1>
              <p className="text-muted-foreground mt-2">Real-time TOR network analysis overview</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Live</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="cyber-card p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-sm text-primary">{stat.change} today</p>
                  </div>
                  <div className="p-3 rounded-lg bg-primary/10">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Network Visualization Placeholder */}
          <Card className="cyber-card p-8">
            <h2 className="text-2xl font-bold mb-6">Live Network Topology</h2>
            <div className="aspect-video bg-muted/20 rounded-lg border border-border flex items-center justify-center">
              <div className="text-center space-y-4">
                <Globe className="h-16 w-16 text-primary mx-auto animate-pulse" />
                <p className="text-lg text-muted-foreground">
                  Network visualization module
                </p>
                <p className="text-sm text-muted-foreground max-w-md">
                  Interactive TOR network map showing node connections, traffic flows, and correlation patterns
                </p>
              </div>
            </div>
          </Card>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Recent Analyses */}
            <Card className="cyber-card p-6">
              <h2 className="text-2xl font-bold mb-6">Recent Analyses</h2>
              <div className="space-y-4">
                {recentAnalyses.map((analysis) => (
                  <div
                    key={analysis.id}
                    className="p-4 rounded-lg border border-border bg-muted/5 hover:bg-muted/10 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold">{analysis.id}</p>
                        <p className="text-sm text-muted-foreground">{analysis.target}</p>
                      </div>
                      {analysis.status === "completed" ? (
                        <CheckCircle className="h-5 w-5 text-primary" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-secondary animate-pulse" />
                      )}
                    </div>
                    {analysis.status === "completed" && (
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Confidence</span>
                          <span className="font-semibold">{analysis.confidence}%</span>
                        </div>
                        <Progress value={analysis.confidence} className="h-2" />
                      </div>
                    )}
                    {analysis.status === "processing" && (
                      <p className="text-sm text-secondary">Analysis in progress...</p>
                    )}
                    <p className="text-xs text-muted-foreground mt-2">{analysis.timestamp}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Activity Feed */}
            <Card className="cyber-card p-6">
              <h2 className="text-2xl font-bold mb-6">System Activity</h2>
              <div className="space-y-4">
                {[
                  { event: "New TOR node detected", time: "5 min ago", type: "info" },
                  { event: "Correlation analysis completed", time: "12 min ago", type: "success" },
                  { event: "Data collection batch processed", time: "25 min ago", type: "info" },
                  { event: "High confidence match found", time: "1 hour ago", type: "success" },
                  { event: "Timeline reconstruction initiated", time: "2 hours ago", type: "info" },
                  { event: "Forensic report exported", time: "3 hours ago", type: "success" },
                ].map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg border border-border bg-muted/5"
                  >
                    <div
                      className={`h-2 w-2 rounded-full mt-2 ${
                        activity.type === "success" ? "bg-primary" : "bg-secondary"
                      }`}
                    />
                    <div className="flex-1">
                      <p className="text-sm">{activity.event}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Performance Metrics */}
          <Card className="cyber-card p-8">
            <h2 className="text-2xl font-bold mb-6">System Performance</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Processing Speed</span>
                  <span className="font-semibold">Fast</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Data Quality</span>
                  <span className="font-semibold">High</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">System Health</span>
                  <span className="font-semibold">Optimal</span>
                </div>
                <Progress value={98} className="h-2" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import { FileText, Download, Calendar, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import { toast } from "sonner";

const Reports = () => {
  const handleDownload = (reportId: string) => {
    toast.success(`Downloading report ${reportId}`);
  };

  const reports = [
    {
      id: "R-2025-001",
      title: "Operation Darknet Alpha",
      date: "2025-01-15",
      confidence: 92,
      status: "finalized",
      findings: "High confidence origin IP identified",
    },
    {
      id: "R-2025-002",
      title: "Investigation Beta Network",
      date: "2025-01-14",
      confidence: 78,
      status: "finalized",
      findings: "Multiple potential origin IPs with correlation",
    },
    {
      id: "R-2025-003",
      title: "Case Gamma Timeline",
      date: "2025-01-13",
      confidence: 85,
      status: "finalized",
      findings: "Timeline reconstruction with 85% confidence",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold glow-text">Forensic Reports</h1>
            <p className="text-xl text-muted-foreground">
              Auto-generated court-ready forensic investigation reports
            </p>
          </div>

          <Card className="cyber-card p-8">
            <h2 className="text-2xl font-bold mb-4">Report Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-primary">Comprehensive Documentation</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Complete chain of evidence</li>
                  <li>• Methodology transparency</li>
                  <li>• Timeline reconstruction</li>
                  <li>• All correlation data</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-primary">Legal Compliance</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Court-admissible format</li>
                  <li>• Chain of custody tracking</li>
                  <li>• Expert testimony support</li>
                  <li>• Audit trail included</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-primary">Technical Analysis</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Node correlation details</li>
                  <li>• AI prediction confidence</li>
                  <li>• Pattern analysis results</li>
                  <li>• Statistical validation</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-primary">Export Options</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• PDF with digital signatures</li>
                  <li>• HTML interactive version</li>
                  <li>• Raw data exports (CSV/JSON)</li>
                  <li>• Evidence package (ZIP)</li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Generated Reports</h2>
            {reports.map((report) => (
              <Card key={report.id} className="cyber-card p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-semibold">{report.title}</h3>
                        <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                          {report.id}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {report.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="h-4 w-4" />
                          {report.confidence}% confidence
                        </div>
                      </div>
                      <p className="text-muted-foreground">{report.findings}</p>
                      <div className="space-y-1 pt-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Confidence Level</span>
                          <span className="font-semibold">{report.confidence}%</span>
                        </div>
                        <Progress value={report.confidence} className="h-2" />
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleDownload(report.id)}
                    className="w-full md:w-auto"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <Card className="cyber-card p-8 bg-gradient-cyber">
            <h2 className="text-2xl font-bold mb-4">Report Contents</h2>
            <div className="space-y-4 text-foreground/90">
              <div>
                <h3 className="font-semibold mb-2">1. Executive Summary</h3>
                <p className="text-muted-foreground">
                  High-level overview of findings, confidence levels, and key conclusions suitable 
                  for decision-makers and prosecutors.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">2. Methodology</h3>
                <p className="text-muted-foreground">
                  Detailed explanation of analytical techniques, data sources, algorithms used, 
                  and scientific basis for conclusions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">3. Technical Findings</h3>
                <p className="text-muted-foreground">
                  Comprehensive analysis results including node correlations, timing patterns, 
                  traffic fingerprints, and AI predictions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">4. Timeline Reconstruction</h3>
                <p className="text-muted-foreground">
                  Chronological sequence of events showing TOR activity patterns and identified connections.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">5. Evidence Chain</h3>
                <p className="text-muted-foreground">
                  Complete documentation of data sources, handling procedures, and chain of custody.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">6. Confidence Assessment</h3>
                <p className="text-muted-foreground">
                  Quantified confidence scores with explanations of factors affecting reliability.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reports;

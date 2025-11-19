import { useState } from "react";
import { Upload as UploadIcon, FileText, CheckCircle, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import { toast } from "sonner";

const Upload = () => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleUpload = () => {
    setUploading(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          toast.success("Files uploaded successfully!");
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const supportedFormats = [
    { format: "PCAP", description: "Network packet capture files for traffic analysis" },
    { format: "Network Logs", description: "Firewall, router, and server logs" },
    { format: "TOR Logs", description: "TOR node and relay logs" },
    { format: "Connection Logs", description: "TCP/IP connection records" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold glow-text">Upload Forensic Logs</h1>
            <p className="text-xl text-muted-foreground">
              Upload network captures and logs for TOR traffic analysis
            </p>
          </div>

          <Card className="cyber-card p-8 md:p-12">
            <div className="space-y-6">
              <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer">
                <UploadIcon className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Drop files here or click to browse</h3>
                <p className="text-muted-foreground mb-4">
                  Support for PCAP, network logs, and other forensic data formats
                </p>
                <Button onClick={handleUpload} disabled={uploading}>
                  Select Files
                </Button>
              </div>

              {uploading && (
                <div className="space-y-2 animate-fade-in">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Uploading files...</span>
                    <span className="font-semibold">{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              )}
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="cyber-card p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">What We Analyze</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Network packet captures (PCAP files)</li>
                    <li>• TOR node connection logs</li>
                    <li>• Traffic timing patterns</li>
                    <li>• Protocol fingerprints</li>
                    <li>• Correlation indicators</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="cyber-card p-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Important Notes</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Ensure files contain TOR-related traffic</li>
                    <li>• Include timestamp information</li>
                    <li>• Larger files provide better analysis</li>
                    <li>• All uploads are encrypted</li>
                    <li>• Chain of custody maintained</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <Card className="cyber-card p-6">
            <h2 className="text-2xl font-bold mb-4">Supported Formats</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {supportedFormats.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/5 border border-border">
                  <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">{item.format}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="cyber-card p-8 bg-gradient-cyber">
            <h2 className="text-2xl font-bold mb-4">Processing Pipeline</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div>
                  <p className="font-semibold">Upload & Validation</p>
                  <p className="text-sm text-muted-foreground">Files are securely uploaded and validated</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div>
                  <p className="font-semibold">Data Extraction</p>
                  <p className="text-sm text-muted-foreground">Network data and metadata extracted</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div>
                  <p className="font-semibold">TOR Analysis</p>
                  <p className="text-sm text-muted-foreground">Correlation and pattern analysis performed</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold">
                  4
                </div>
                <div>
                  <p className="font-semibold">Results & Report</p>
                  <p className="text-sm text-muted-foreground">Findings compiled into forensic report</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Upload;

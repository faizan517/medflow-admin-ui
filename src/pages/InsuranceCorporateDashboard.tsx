import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Shield, Users, TrendingUp, Building2, Calendar, Phone, Mail, MapPin, CheckCircle, Clock, AlertTriangle } from "lucide-react";

const InsuranceCorporateDashboard = () => {
  const insuranceStats = {
    totalPolicies: 156,
    activePolicies: 142,
    totalClaims: 89,
    pendingClaims: 23,
    approvedClaims: 58,
    rejectedClaims: 8,
    totalCoverage: 15750000,
    monthlyPremiums: 2890000
  };

  const corporatePartners = [
    {
      id: 1,
      companyName: "Unilever Pakistan",
      contactPerson: "Ahmed Hassan",
      totalEmployees: 345,
      coveredEmployees: 289,
      policyType: "Platinum Health Cover",
      premiumAmount: 1250000,
      coverageLimit: 5000000,
      phone: "+92-300-1234567",
      email: "ahmed@unilever.com",
      city: "Karachi",
      status: "Active",
      renewalDate: "2024-12-31"
    },
    {
      id: 2,
      companyName: "10Pearls",
      contactPerson: "Sarah Khan",
      totalEmployees: 222,
      coveredEmployees: 198,
      policyType: "Gold Health Cover",
      premiumAmount: 890000,
      coverageLimit: 3000000,
      phone: "+92-321-9876543",
      email: "sarah@10pearls.com",
      city: "Lahore",
      status: "Active",
      renewalDate: "2024-10-15"
    },
    {
      id: 3,
      companyName: "Systems Limited",
      contactPerson: "Omar Sheikh",
      totalEmployees: 458,
      coveredEmployees: 425,
      policyType: "Platinum Health Cover",
      premiumAmount: 1580000,
      coverageLimit: 6000000,
      phone: "+92-42-1234567",
      email: "omar@systemsltd.com",
      city: "Lahore",
      status: "Pending Renewal",
      renewalDate: "2024-09-30"
    }
  ];

  const recentClaims = [
    { 
      id: "CLM-2024-001", 
      company: "Unilever Pakistan", 
      employee: "Ali Hassan", 
      service: "Cardiac Surgery", 
      amount: 350000, 
      status: "Approved",
      date: "2024-01-20",
      hospital: "Aga Khan Hospital"
    },
    { 
      id: "CLM-2024-002", 
      company: "10Pearls", 
      employee: "Maria Ahmed", 
      service: "MRI Scan", 
      amount: 25000, 
      status: "Pending",
      date: "2024-01-19",
      hospital: "Shaukat Khanum Hospital"
    },
    { 
      id: "CLM-2024-003", 
      company: "Systems Limited", 
      employee: "Fatima Khan", 
      service: "Maternity Package", 
      amount: 150000, 
      status: "Under Review",
      date: "2024-01-18",
      hospital: "Liaquat National Hospital"
    },
    { 
      id: "CLM-2024-004", 
      company: "Unilever Pakistan", 
      employee: "Hassan Ali", 
      service: "Emergency Treatment", 
      amount: 85000, 
      status: "Approved",
      date: "2024-01-17",
      hospital: "South City Hospital"
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      "Active": { color: "bg-success text-success-foreground", icon: CheckCircle },
      "Pending": { color: "bg-warning text-warning-foreground", icon: Clock },
      "Pending Renewal": { color: "bg-orange text-orange-foreground", icon: AlertTriangle },
      "Inactive": { color: "bg-muted text-muted-foreground", icon: Clock },
      "Approved": { color: "bg-success text-success-foreground", icon: CheckCircle },
      "Under Review": { color: "bg-info text-info-foreground", icon: Clock },
      "Rejected": { color: "bg-destructive text-destructive-foreground", icon: AlertTriangle }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig["Pending"];
    const Icon = config.icon;

    return (
      <Badge className={config.color}>
        <Icon className="w-3 h-3 mr-1" />
        {status}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Insurance Corporate Dashboard</h1>
          <p className="text-muted-foreground">Manage insurance policies, claims, and corporate partnerships</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
            <Calendar className="mr-2 h-4 w-4" />
            Claims Report
          </Button>
          <Button className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground shadow-md">
            New Policy
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Policies</CardTitle>
            <Shield className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{insuranceStats.totalPolicies}</div>
            <p className="text-xs text-success">{insuranceStats.activePolicies} active</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Claims</CardTitle>
            <Building2 className="h-4 w-4 text-info" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{insuranceStats.totalClaims}</div>
            <p className="text-xs text-warning">{insuranceStats.pendingClaims} pending</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Coverage Amount</CardTitle>
            <TrendingUp className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">Rs {(insuranceStats.totalCoverage / 1000000).toFixed(1)}M</div>
            <p className="text-xs text-success">Total coverage</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Premiums</CardTitle>
            <TrendingUp className="h-4 w-4 text-orange" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">Rs {(insuranceStats.monthlyPremiums / 1000000).toFixed(2)}M</div>
            <p className="text-xs text-orange">+8% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Corporate Partners Overview */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-foreground">Corporate Partners</CardTitle>
          <CardDescription>Insurance coverage for corporate employees and their families</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company</TableHead>
                <TableHead>Contact Person</TableHead>
                <TableHead>Coverage</TableHead>
                <TableHead>Policy Details</TableHead>
                <TableHead>Premium</TableHead>
                <TableHead>Renewal</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {corporatePartners.map((partner) => (
                <TableRow key={partner.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">
                    <div className="space-y-1">
                      <div className="font-semibold text-foreground">{partner.companyName}</div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        {partner.city}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="text-sm font-medium text-foreground">{partner.contactPerson}</div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Phone className="h-3 w-3 mr-1" />
                        {partner.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="font-medium">{partner.coveredEmployees} / {partner.totalEmployees}</div>
                      <div className="text-xs text-muted-foreground">employees covered</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="text-sm font-medium text-foreground">{partner.policyType}</div>
                      <div className="text-xs text-muted-foreground">
                        Limit: Rs {(partner.coverageLimit / 1000000).toFixed(1)}M
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium text-foreground">
                      Rs {(partner.premiumAmount / 1000).toFixed(0)}K
                    </div>
                    <div className="text-xs text-muted-foreground">monthly</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {partner.renewalDate}
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(partner.status)}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover">
                      Manage Policy
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Recent Claims & Policy Analytics */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Claims</CardTitle>
            <CardDescription>Latest insurance claims from corporate employees</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentClaims.map((claim) => (
                <div key={claim.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-foreground">{claim.employee}</p>
                      {getStatusBadge(claim.status)}
                    </div>
                    <p className="text-xs text-muted-foreground">{claim.company} • {claim.service}</p>
                    <p className="text-xs text-muted-foreground">{claim.hospital}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="text-sm font-medium text-foreground">Rs {claim.amount.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">{claim.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Claims Analytics */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-foreground">Claims Analytics</CardTitle>
            <CardDescription>Overview of claim processing and approval rates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-success/5 rounded-lg border border-success/20">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-foreground">Approved Claims</h4>
                  <Badge className="bg-success text-success-foreground">{insuranceStats.approvedClaims}</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Approval Rate</span>
                    <span className="font-medium text-foreground">
                      {Math.round((insuranceStats.approvedClaims / insuranceStats.totalClaims) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-success h-2 rounded-full" 
                      style={{ width: `${(insuranceStats.approvedClaims / insuranceStats.totalClaims) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-warning/5 rounded-lg border border-warning/20">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-foreground">Pending Claims</h4>
                  <Badge className="bg-warning text-warning-foreground">{insuranceStats.pendingClaims}</Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  Average processing time: 3-5 business days
                </p>
              </div>

              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-foreground">Monthly Trends</h4>
                  <Badge className="bg-primary text-primary-foreground">↑ 12%</Badge>
                </div>
                <div className="text-xs text-muted-foreground">
                  <p>Claims volume increased by 12% this month</p>
                  <p>Average claim amount: Rs 95,000</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InsuranceCorporateDashboard;
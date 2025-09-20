import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Building2, Users, TrendingUp, Shield, Calendar, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const CorporateDashboard = () => {
  const corporateStats = {
    totalCorporates: 2,
    totalEmployees: 567,
    activeEmployees: 445,
    monthlyUtilization: 89,
    averageClaimsPerMonth: 45,
    totalSavings: 125000
  };

  const corporateAccounts = [
    {
      id: 1,
      name: "Unilever Pakistan",
      contactPerson: "Ahmed Hassan",
      employees: 345,
      activeEmployees: 289,
      utilizationRate: 84,
      phone: "+92-300-1234567",
      email: "ahmed@unilever.com",
      city: "Karachi",
      status: "Active",
      contractExpiry: "2024-12-31"
    },
    {
      id: 2,
      name: "10Pearls",
      contactPerson: "Sarah Khan",
      employees: 222,
      activeEmployees: 156,
      utilizationRate: 70,
      phone: "+92-321-9876543",
      email: "sarah@10pearls.com",
      city: "Lahore",
      status: "Active",
      contractExpiry: "2024-10-15"
    }
  ];

  const recentActivity = [
    { company: "Unilever Pakistan", employee: "Ali Hassan", service: "Video Consultation", date: "2024-01-20", amount: 2500 },
    { company: "10Pearls", employee: "Maria Ahmed", service: "Lab Test", date: "2024-01-20", amount: 1500 },
    { company: "Unilever Pakistan", employee: "Omar Sheikh", service: "Pharmacy", date: "2024-01-19", amount: 850 },
    { company: "10Pearls", employee: "Fatima Khan", service: "Home Visit", date: "2024-01-19", amount: 3500 }
  ];

  const getStatusBadge = (status: string) => {
    const colors: Record<string, string> = {
      "Active": "bg-success text-success-foreground",
      "Inactive": "bg-muted text-muted-foreground",
      "Pending": "bg-warning text-warning-foreground"
    };

    return (
      <Badge className={colors[status] || "bg-muted text-muted-foreground"}>
        {status}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Corporate Dashboard</h1>
          <p className="text-muted-foreground">Monitor corporate accounts, employee utilization, and business metrics</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
            <Calendar className="mr-2 h-4 w-4" />
            Reports
          </Button>
          <Link to="/corporate">
            <Button className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground shadow-md">
              Manage Corporate
            </Button>
          </Link>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Corporate Accounts</CardTitle>
            <Building2 className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{corporateStats.totalCorporates}</div>
            <p className="text-xs text-success">Both active</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Employees</CardTitle>
            <Users className="h-4 w-4 text-info" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{corporateStats.totalEmployees}</div>
            <p className="text-xs text-muted-foreground">Registered users</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Users</CardTitle>
            <Users className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{corporateStats.activeEmployees}</div>
            <p className="text-xs text-success">{Math.round((corporateStats.activeEmployees / corporateStats.totalEmployees) * 100)}% utilization</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Usage</CardTitle>
            <TrendingUp className="h-4 w-4 text-orange" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{corporateStats.monthlyUtilization}%</div>
            <p className="text-xs text-orange">+12% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg Claims</CardTitle>
            <Shield className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{corporateStats.averageClaimsPerMonth}</div>
            <p className="text-xs text-muted-foreground">Per month</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Cost Savings</CardTitle>
            <TrendingUp className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">Rs {corporateStats.totalSavings.toLocaleString()}</div>
            <p className="text-xs text-success">This quarter</p>
          </CardContent>
        </Card>
      </div>

      {/* Corporate Accounts Overview */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-foreground">Corporate Accounts Overview</CardTitle>
          <CardDescription>Detailed view of corporate partnerships and employee utilization</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company</TableHead>
                <TableHead>Contact Person</TableHead>
                <TableHead>Contact Info</TableHead>
                <TableHead>Employees</TableHead>
                <TableHead>Utilization</TableHead>
                <TableHead>Contract Expiry</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {corporateAccounts.map((account) => (
                <TableRow key={account.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">
                    <div className="space-y-1">
                      <div className="font-semibold text-foreground">{account.name}</div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        {account.city}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{account.contactPerson}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Phone className="h-3 w-3 mr-1" />
                        {account.phone}
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Mail className="h-3 w-3 mr-1" />
                        {account.email}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="font-medium">{account.employees} total</div>
                      <div className="text-xs text-success">{account.activeEmployees} active</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="font-medium">{account.utilizationRate}%</div>
                      <div className="w-12 bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${account.utilizationRate}%` }}
                        ></div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    <div className="flex items-center text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {account.contractExpiry}
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(account.status)}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Recent Corporate Activity */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Employee Activity</CardTitle>
            <CardDescription>Latest service usage by corporate employees</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-foreground">{activity.employee}</p>
                    <p className="text-xs text-muted-foreground">{activity.company} • {activity.service}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="text-sm font-medium text-foreground">Rs {activity.amount}</p>
                    <p className="text-xs text-muted-foreground">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Corporate Benefits Summary */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-foreground">Corporate Benefits</CardTitle>
            <CardDescription>Employee healthcare benefits and coverage details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-foreground">Premium Plan Coverage</h4>
                  <Badge className="bg-primary text-primary-foreground">Active</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Video Consultations</p>
                    <p className="text-sm font-medium text-foreground">Unlimited</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Home Visits</p>
                    <p className="text-sm font-medium text-foreground">5 per month</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Lab Tests</p>
                    <p className="text-sm font-medium text-foreground">80% covered</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Pharmacy</p>
                    <p className="text-sm font-medium text-foreground">60% discount</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-success/5 rounded-lg border border-success/20">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-foreground">Emergency Services</h4>
                  <Badge className="bg-success text-success-foreground">24/7</Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  Round-the-clock emergency support with priority booking and dedicated helpline.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CorporateDashboard;
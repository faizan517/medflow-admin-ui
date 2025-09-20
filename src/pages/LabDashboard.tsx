import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { TestTube, Calendar, Clock, Users, TrendingUp, AlertCircle, Download, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const LabDashboard = () => {
  const labStats = {
    totalLabs: 2,
    activeLabs: 2,
    testsToday: 47,
    pendingReports: 12,
    completedTests: 156,
    averageProcessingTime: 24
  };

  const labPerformance = [
    {
      id: 1,
      name: "Dow Lab Karachi",
      testsToday: 28,
      pendingReports: 8,
      completedThisWeek: 89,
      averageTime: 22,
      efficiency: 92,
      status: "Operational"
    },
    {
      id: 2,
      name: "Agha Khan Laboratory",
      testsToday: 19,
      pendingReports: 4,
      completedThisWeek: 67,
      averageTime: 26,
      efficiency: 88,
      status: "Operational"
    }
  ];

  const todayTests = [
    { id: "T001", patient: "Ali Hassan", test: "Complete Blood Count (CBC)", lab: "Dow Lab Karachi", time: "09:30", status: "In Progress" },
    { id: "T002", patient: "Shaalimar Ahmed", test: "Liver Function Test", lab: "Agha Khan Laboratory", time: "10:15", status: "Completed" },
    { id: "T003", patient: "Omar Sheikh", test: "Thyroid Profile", lab: "Dow Lab Karachi", time: "11:00", status: "Sample Received" },
    { id: "T004", patient: "Fatima Khan", test: "Lipid Profile", lab: "Agha Khan Laboratory", time: "11:30", status: "Processing" },
    { id: "T005", patient: "Ahmed Malik", test: "HbA1c", lab: "Dow Lab Karachi", time: "12:00", status: "Pending" }
  ];

  const testCategories = [
    { category: "Blood Tests", count: 28, percentage: 60 },
    { category: "Urine Tests", count: 8, percentage: 17 },
    { category: "Biochemistry", count: 6, percentage: 13 },
    { category: "Microbiology", count: 3, percentage: 6 },
    { category: "Others", count: 2, percentage: 4 }
  ];

  const getStatusBadge = (status: string) => {
    const colors: Record<string, string> = {
      "Completed": "bg-success text-success-foreground",
      "In Progress": "bg-info text-info-foreground",
      "Processing": "bg-warning text-warning-foreground",
      "Sample Received": "bg-orange text-orange-foreground",
      "Pending": "bg-muted text-muted-foreground",
      "Operational": "bg-success text-success-foreground"
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
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Laboratory Dashboard</h1>
          <p className="text-muted-foreground">Monitor lab operations, test processing, and performance metrics</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
          <Link to="/laboratory">
            <Button className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground shadow-md">
              Manage Labs
            </Button>
          </Link>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Partner Labs</CardTitle>
            <TestTube className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{labStats.totalLabs}</div>
            <p className="text-xs text-success">All operational</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Tests Today</CardTitle>
            <TestTube className="h-4 w-4 text-info" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{labStats.testsToday}</div>
            <p className="text-xs text-info">+15% from yesterday</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending Reports</CardTitle>
            <AlertCircle className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{labStats.pendingReports}</div>
            <p className="text-xs text-warning">Awaiting results</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Completed</CardTitle>
            <TestTube className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{labStats.completedTests}</div>
            <p className="text-xs text-success">This week</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg Processing</CardTitle>
            <Clock className="h-4 w-4 text-orange" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{labStats.averageProcessingTime}h</div>
            <p className="text-xs text-orange">Turnaround time</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Efficiency</CardTitle>
            <TrendingUp className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">90%</div>
            <p className="text-xs text-success">Above target</p>
          </CardContent>
        </Card>
      </div>

      {/* Lab Performance Overview */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-foreground">Laboratory Performance</CardTitle>
          <CardDescription>Real-time performance metrics for partner laboratories</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Laboratory</TableHead>
                <TableHead>Tests Today</TableHead>
                <TableHead>Pending Reports</TableHead>
                <TableHead>Week Completed</TableHead>
                <TableHead>Avg Time (hrs)</TableHead>
                <TableHead>Efficiency</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {labPerformance.map((lab) => (
                <TableRow key={lab.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium text-foreground">{lab.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-info/10 text-info border-info">
                      {lab.testsToday} tests
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-warning/10 text-warning border-warning">
                      {lab.pendingReports} pending
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">{lab.completedThisWeek}</TableCell>
                  <TableCell className="text-muted-foreground">{lab.averageTime}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{lab.efficiency}%</span>
                      </div>
                      <Progress value={lab.efficiency} className="h-2" />
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(lab.status)}</TableCell>
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

      {/* Today's Tests & Test Categories */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Today's Tests */}
        <Card className="md:col-span-2 shadow-md">
          <CardHeader>
            <CardTitle className="text-foreground">Today's Test Schedule</CardTitle>
            <CardDescription>Real-time status of scheduled tests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todayTests.map((test) => (
                <div key={test.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-foreground">{test.id}</p>
                      <Badge variant="outline" className="text-xs">{test.test}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{test.patient} • {test.lab}</p>
                  </div>
                  <div className="text-right space-y-1">
                    {getStatusBadge(test.status)}
                    <p className="text-xs text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" /> {test.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Test Categories */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-foreground">Test Categories</CardTitle>
            <CardDescription>Distribution of test types today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {testCategories.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{category.category}</span>
                    <span className="text-sm text-muted-foreground">{category.count}</span>
                  </div>
                  <div className="space-y-1">
                    <Progress value={category.percentage} className="h-2" />
                    <div className="text-xs text-muted-foreground text-right">{category.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions & Alerts */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Quality Control Alerts */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-warning" />
              Quality Control Alerts
            </CardTitle>
            <CardDescription>Important alerts and system notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-warning/10 rounded-lg border border-warning/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">Calibration Due</p>
                    <p className="text-xs text-muted-foreground">Dow Lab Karachi - Hematology Analyzer</p>
                  </div>
                  <Badge className="bg-warning text-warning-foreground">Due Today</Badge>
                </div>
              </div>
              <div className="p-3 bg-info/10 rounded-lg border border-info/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">Reagent Stock Low</p>
                    <p className="text-xs text-muted-foreground">CBC reagents - 2 days remaining</p>
                  </div>
                  <Badge className="bg-info text-info-foreground">Monitor</Badge>
                </div>
              </div>
              <div className="p-3 bg-success/10 rounded-lg border border-success/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">Quality Check Passed</p>
                    <p className="text-xs text-muted-foreground">All systems operational</p>
                  </div>
                  <Badge className="bg-success text-success-foreground">OK</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-foreground">Quick Actions</CardTitle>
            <CardDescription>Common laboratory management tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              <Button variant="outline" className="justify-start h-auto p-4">
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span className="font-medium">Generate Daily Report</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Export today's test summary</p>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto p-4">
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <TestTube className="h-4 w-4 text-success" />
                    <span className="font-medium">Schedule Quality Check</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Initiate QC procedures</p>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto p-4">
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-info" />
                    <span className="font-medium">Staff Schedule</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Manage lab technician shifts</p>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LabDashboard;
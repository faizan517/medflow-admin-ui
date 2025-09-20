import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, TestTube, Calendar, MapPin, Phone, Mail } from "lucide-react";
import { mockLaboratories } from "@/data/mockData";

const Laboratory = () => {
  const getStatusBadge = (status: string) => {
    const colors: Record<string, string> = {
      "Enabled": "bg-success text-success-foreground",
      "Disabled": "bg-muted text-muted-foreground"
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
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Laboratory Management</h1>
          <p className="text-muted-foreground">Manage test booking requests, lab partners, and report uploads</p>
        </div>
        <Button className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground shadow-md">
          <Plus className="mr-2 h-4 w-4" />
          Create Laboratory
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Labs</CardTitle>
            <TestTube className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{mockLaboratories.length}</div>
            <p className="text-xs text-success">Partner laboratories</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Labs</CardTitle>
            <TestTube className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {mockLaboratories.filter(lab => lab.status === "Enabled").length}
            </div>
            <p className="text-xs text-muted-foreground">Currently operational</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Tests Today</CardTitle>
            <TestTube className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">47</div>
            <p className="text-xs text-warning">Scheduled tests</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending Reports</CardTitle>
            <TestTube className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">12</div>
            <p className="text-xs text-destructive">Awaiting results</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="shadow-md">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  placeholder="Search laboratories..."
                  className="pl-10"
                />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="enabled">Enabled</SelectItem>
                <SelectItem value="disabled">Disabled</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="City" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cities</SelectItem>
                <SelectItem value="karachi">Karachi</SelectItem>
                <SelectItem value="lahore">Lahore</SelectItem>
                <SelectItem value="islamabad">Islamabad</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="text-muted-foreground">
              Clear
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Laboratory Table */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-foreground">Laboratory List</CardTitle>
          <CardDescription>
            Showing {mockLaboratories.length} of {mockLaboratories.length} laboratories
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Laboratory</TableHead>
                <TableHead>Contact Person</TableHead>
                <TableHead>Contact Details</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Valid Till</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockLaboratories.map((lab) => (
                <TableRow key={lab.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">
                    <div className="space-y-1">
                      <div className="font-semibold text-foreground">{lab.name}</div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        {lab.city}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{lab.contactPerson}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Phone className="h-3 w-3 mr-1" />
                        {lab.phone}
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Mail className="h-3 w-3 mr-1" />
                        {lab.email}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-xs max-w-xs">
                    {lab.address}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    <div className="flex items-center text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {lab.validTill}
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(lab.status)}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Recent Test Requests */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-foreground">Recent Test Requests</CardTitle>
          <CardDescription>Latest lab test bookings and status updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { id: "REQ-001", patient: "Ali Hassan", test: "Complete Blood Count (CBC)", lab: "Dow Lab Karachi", status: "Completed", date: "2024-01-20" },
              { id: "REQ-002", patient: "Shaalimar Ahmed", test: "Liver Function Test", lab: "Agha Khan Laboratory", status: "In Progress", date: "2024-01-21" },
              { id: "REQ-003", patient: "Antrikish Kumar", test: "Thyroid Profile", lab: "Dow Lab Karachi", status: "Pending", date: "2024-01-21" }
            ].map((request) => (
              <div key={request.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-foreground">{request.id}</p>
                    <Badge variant="outline" className="text-xs">{request.test}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{request.patient} • {request.lab}</p>
                </div>
                <div className="text-right space-y-1">
                  {getStatusBadge(request.status)}
                  <p className="text-xs text-muted-foreground">{request.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Laboratory;
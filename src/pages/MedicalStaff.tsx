import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, User, Clock, Phone, Mail } from "lucide-react";

const MedicalStaff = () => {
  const staffData = [
    {
      id: 1,
      name: "Nurse Sarah Ahmed",
      role: "Senior Nurse",
      department: "Emergency",
      shift: "Day Shift",
      phone: "+92-300-1111111",
      email: "sarah.nurse@mediq.com",
      status: "On Duty",
      duties: "Patient Care, IV Administration"
    },
    {
      id: 2,
      name: "Ahmed Ali Khan",
      role: "Medical Attendant", 
      department: "General Ward",
      shift: "Night Shift",
      phone: "+92-321-2222222",
      email: "ahmed.attendant@mediq.com",
      status: "Off Duty",
      duties: "Patient Transport, Equipment Setup"
    },
    {
      id: 3,
      name: "Fatima Malik",
      role: "Lab Technician",
      department: "Laboratory",
      shift: "Day Shift", 
      phone: "+92-333-3333333",
      email: "fatima.lab@mediq.com",
      status: "On Duty",
      duties: "Sample Processing, Test Analysis"
    }
  ];

  const getStatusBadge = (status: string) => {
    const colors: Record<string, string> = {
      "On Duty": "bg-success text-success-foreground",
      "Off Duty": "bg-muted text-muted-foreground",
      "On Leave": "bg-warning text-warning-foreground"
    };

    return (
      <Badge className={colors[status] || "bg-muted text-muted-foreground"}>
        {status}
      </Badge>
    );
  };

  const getRoleBadge = (role: string) => {
    const colors: Record<string, string> = {
      "Senior Nurse": "bg-info/10 text-info border-info",
      "Medical Attendant": "bg-warning/10 text-warning border-warning",
      "Lab Technician": "bg-success/10 text-success border-success"
    };

    return (
      <Badge variant="outline" className={colors[role] || "bg-muted text-muted-foreground"}>
        {role}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Medical Staff Management</h1>
          <p className="text-muted-foreground">Manage nurses, attendants, and support staff with duty assignments</p>
        </div>
        <Button className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground shadow-md">
          <Plus className="mr-2 h-4 w-4" />
          Add Staff Member
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Staff</CardTitle>
            <User className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{staffData.length}</div>
            <p className="text-xs text-success">Medical support team</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">On Duty</CardTitle>
            <User className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {staffData.filter(s => s.status === "On Duty").length}
            </div>
            <p className="text-xs text-muted-foreground">Currently working</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Day Shift</CardTitle>
            <Clock className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {staffData.filter(s => s.shift === "Day Shift").length}
            </div>
            <p className="text-xs text-muted-foreground">8AM - 8PM</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Night Shift</CardTitle>
            <Clock className="h-4 w-4 text-info" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {staffData.filter(s => s.shift === "Night Shift").length}
            </div>
            <p className="text-xs text-muted-foreground">8PM - 8AM</p>
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
                  placeholder="Search staff members..."
                  className="pl-10"
                />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="emergency">Emergency</SelectItem>
                <SelectItem value="general">General Ward</SelectItem>
                <SelectItem value="laboratory">Laboratory</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="on-duty">On Duty</SelectItem>
                <SelectItem value="off-duty">Off Duty</SelectItem>
                <SelectItem value="on-leave">On Leave</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Shift" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Shifts</SelectItem>
                <SelectItem value="day">Day Shift</SelectItem>
                <SelectItem value="night">Night Shift</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Staff Table */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-foreground">Medical Staff List</CardTitle>
          <CardDescription>
            Showing {staffData.length} of {staffData.length} staff members
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Shift</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Assigned Duties</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {staffData.map((staff) => (
                <TableRow key={staff.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">
                    <div className="space-y-1">
                      <div className="font-semibold text-foreground">{staff.name}</div>
                      <div className="text-xs text-muted-foreground">{staff.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>{getRoleBadge(staff.role)}</TableCell>
                  <TableCell className="text-muted-foreground">{staff.department}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{staff.shift}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        <span className="text-xs">{staff.phone}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm max-w-xs">
                    {staff.duties}
                  </TableCell>
                  <TableCell>{getStatusBadge(staff.status)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-1 justify-end">
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover">
                        Profile
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                        Schedule
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Shift Schedule */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-foreground">Today's Shift Schedule</CardTitle>
          <CardDescription>Current duty assignments and coverage</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <Clock className="h-4 w-4 text-warning" />
                Day Shift (8AM - 8PM)
              </h4>
              {staffData.filter(s => s.shift === "Day Shift").map((staff) => (
                <div key={staff.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="text-sm font-medium text-foreground">{staff.name}</p>
                    <p className="text-xs text-muted-foreground">{staff.role} • {staff.department}</p>
                  </div>
                  {getStatusBadge(staff.status)}
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <Clock className="h-4 w-4 text-info" />
                Night Shift (8PM - 8AM)
              </h4>
              {staffData.filter(s => s.shift === "Night Shift").map((staff) => (
                <div key={staff.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="text-sm font-medium text-foreground">{staff.name}</p>
                    <p className="text-xs text-muted-foreground">{staff.role} • {staff.department}</p>
                  </div>
                  {getStatusBadge(staff.status)}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MedicalStaff;
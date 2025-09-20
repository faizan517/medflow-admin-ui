import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, Filter, Stethoscope, Star, Phone, Mail } from "lucide-react";
import { mockDoctors } from "@/data/mockData";

const Doctors = () => {
  const getStatusBadge = (status: string) => {
    const colors: Record<string, string> = {
      "Available": "bg-success text-success-foreground",
      "Busy": "bg-warning text-warning-foreground",
      "Offline": "bg-muted text-muted-foreground"
    };

    return (
      <Badge className={colors[status] || "bg-muted text-muted-foreground"}>
        {status}
      </Badge>
    );
  };

  const getSpecialtyBadge = (specialty: string) => {
    const colors: Record<string, string> = {
      "Cardiology": "bg-destructive/10 text-destructive border-destructive",
      "Dermatology": "bg-info/10 text-info border-info",
      "Pediatrics": "bg-success/10 text-success border-success"
    };

    return (
      <Badge variant="outline" className={colors[specialty] || "bg-muted text-muted-foreground"}>
        {specialty}
      </Badge>
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${
          i < Math.floor(rating) 
            ? "fill-yellow-400 text-yellow-400" 
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Doctor Management</h1>
          <p className="text-muted-foreground">Manage healthcare providers, specialties, and availability</p>
        </div>
        <Button className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground shadow-md">
          <Plus className="mr-2 h-4 w-4" />
          Add Doctor
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Doctors</CardTitle>
            <Stethoscope className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{mockDoctors.length}</div>
            <p className="text-xs text-success">+2 this month</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Available Now</CardTitle>
            <Stethoscope className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {mockDoctors.filter(d => d.status === "Available").length}
            </div>
            <p className="text-xs text-muted-foreground">Ready for consultations</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg Rating</CardTitle>
            <Star className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {(mockDoctors.reduce((sum, d) => sum + d.rating, 0) / mockDoctors.length).toFixed(1)}
            </div>
            <p className="text-xs text-success">Excellent service</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Specialties</CardTitle>
            <Stethoscope className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {new Set(mockDoctors.map(d => d.specialty)).size}
            </div>
            <p className="text-xs text-muted-foreground">Medical specialties</p>
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
                  placeholder="Search doctors..."
                  className="pl-10"
                />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Specialties</SelectItem>
                <SelectItem value="cardiology">Cardiology</SelectItem>
                <SelectItem value="dermatology">Dermatology</SelectItem>
                <SelectItem value="pediatrics">Pediatrics</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="busy">Busy</SelectItem>
                <SelectItem value="offline">Offline</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="text-muted-foreground">
              Clear Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Doctors Table */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-foreground">Doctor List</CardTitle>
          <CardDescription>
            Showing {mockDoctors.length} of {mockDoctors.length} doctors
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Doctor</TableHead>
                <TableHead>Specialty</TableHead>
                <TableHead>Experience</TableHead>
                <TableHead>Availability</TableHead>
                <TableHead>Consultation Fee</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockDoctors.map((doctor) => (
                <TableRow key={doctor.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">
                    <div>
                      <div className="font-semibold text-foreground">{doctor.name}</div>
                      <div className="text-xs text-muted-foreground">{doctor.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>{getSpecialtyBadge(doctor.specialty)}</TableCell>
                  <TableCell className="text-muted-foreground">{doctor.experience}</TableCell>
                  <TableCell className="text-muted-foreground text-xs">{doctor.availability}</TableCell>
                  <TableCell className="font-medium">Rs {doctor.consultationFee.toLocaleString()}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <div className="flex">{renderStars(doctor.rating)}</div>
                      <span className="text-xs text-muted-foreground ml-1">{doctor.rating}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        <span className="text-xs">{doctor.phone}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(doctor.status)}</TableCell>
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
    </div>
  );
};

export default Doctors;
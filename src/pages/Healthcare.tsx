import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, Heart, Users, Phone, Mail, MapPin } from "lucide-react";

const Healthcare = () => {
  const healthcareData = [
    {
      id: 1,
      facilityName: "Ahmed Medical Center",
      type: "Hospital",
      contactPerson: "Ahmed Ali",
      phone: "+92-333-2222222",
      email: "ahmed@gmail.com",
      city: "Karachi",
      address: "C 17, Block 13 Gulberg Town, Karachi, Karachi City, Sindh, Pakistan",
      linkedPatients: 125,
      familyMembers: 45,
      status: "Enabled"
    },
    {
      id: 2,
      facilityName: "Jinnah Hospital",
      type: "Public Hospital",
      contactPerson: "Shaheem",
      phone: "+92-300-2002200",
      email: "jinnah@gmail.com", 
      city: "Karachi",
      address: "Rafiq Shaheed Road, Karachi",
      linkedPatients: 89,
      familyMembers: 32,
      status: "Enabled"
    },
    {
      id: 3,
      facilityName: "Dow Hospital",
      type: "Private Hospital", 
      contactPerson: "Shaheem ur rehman",
      phone: "+92-302-3223456",
      email: "dowhospital@gmail.com",
      city: "Karachi", 
      address: "Main University Road, Karachi",
      linkedPatients: 67,
      familyMembers: 28,
      status: "Enabled"
    }
  ];

  const familyRelations = [
    { id: 1, patient: "Ali Hassan", relation: "Father", familyMember: "Hassan Ali", facility: "Ahmed Medical Center" },
    { id: 2, patient: "Shaalimar Ahmed", relation: "Mother", familyMember: "Fatima Ahmed", facility: "Jinnah Hospital" },
    { id: 3, patient: "Antrikish Kumar", relation: "Sibling", familyMember: "Arjun Kumar", facility: "Dow Hospital" },
    { id: 4, patient: "Sarah Khan", relation: "Child", familyMember: "Omar Khan", facility: "Ahmed Medical Center" }
  ];

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

  const getTypeBadge = (type: string) => {
    const colors: Record<string, string> = {
      "Hospital": "bg-info/10 text-info border-info",
      "Public Hospital": "bg-success/10 text-success border-success",
      "Private Hospital": "bg-warning/10 text-warning border-warning"
    };

    return (
      <Badge variant="outline" className={colors[type] || "bg-muted text-muted-foreground"}>
        {type}
      </Badge>
    );
  };

  const getRelationBadge = (relation: string) => {
    const colors: Record<string, string> = {
      "Father": "bg-info/10 text-info border-info",
      "Mother": "bg-success/10 text-success border-success", 
      "Sibling": "bg-warning/10 text-warning border-warning",
      "Child": "bg-destructive/10 text-destructive border-destructive"
    };

    return (
      <Badge variant="outline" className={colors[relation] || "bg-muted text-muted-foreground"}>
        {relation}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Healthcare Management</h1>
          <p className="text-muted-foreground">Manage healthcare facilities, linked patients, and family relationships</p>
        </div>
        <Button className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground shadow-md">
          <Plus className="mr-2 h-4 w-4" />
          Add Healthcare Facility
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Healthcare Facilities</CardTitle>
            <Heart className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{healthcareData.length}</div>
            <p className="text-xs text-success">Partner facilities</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Linked Patients</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {healthcareData.reduce((total, facility) => total + facility.linkedPatients, 0)}
            </div>
            <p className="text-xs text-muted-foreground">Across all facilities</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Family Members</CardTitle>
            <Users className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {healthcareData.reduce((total, facility) => total + facility.familyMembers, 0)}
            </div>
            <p className="text-xs text-muted-foreground">Linked relationships</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Facilities</CardTitle>
            <Heart className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {healthcareData.filter(f => f.status === "Enabled").length}
            </div>
            <p className="text-xs text-success">Currently operational</p>
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
                  placeholder="Search healthcare facilities..."
                  className="pl-10"
                />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="hospital">Hospital</SelectItem>
                <SelectItem value="public">Public Hospital</SelectItem>
                <SelectItem value="private">Private Hospital</SelectItem>
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
          </div>
        </CardContent>
      </Card>

      {/* Healthcare Facilities Table */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-foreground">Healthcare Facility List</CardTitle>
          <CardDescription>
            Showing {healthcareData.length} of {healthcareData.length} healthcare facilities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Healthcare Facility</TableHead>
                <TableHead>Contact Person</TableHead>
                <TableHead>Contact Details</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Linked Patients</TableHead>
                <TableHead>Family Members</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {healthcareData.map((facility) => (
                <TableRow key={facility.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">
                    <div className="space-y-1">
                      <div className="font-semibold text-foreground">{facility.facilityName}</div>
                      {getTypeBadge(facility.type)}
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{facility.contactPerson}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Phone className="h-3 w-3 mr-1" />
                        {facility.phone}
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Mail className="h-3 w-3 mr-1" />
                        {facility.email}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        {facility.city}
                      </div>
                      <div className="text-xs text-muted-foreground max-w-xs truncate">
                        {facility.address}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{facility.linkedPatients} patients</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{facility.familyMembers} members</Badge>
                  </TableCell>
                  <TableCell>{getStatusBadge(facility.status)}</TableCell>
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

      {/* Family Relationships */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-foreground">Family Relationships</CardTitle>
          <CardDescription>Patient family member linkages and relationships</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Relation</TableHead>
                <TableHead>Family Member</TableHead>
                <TableHead>Healthcare Facility</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {familyRelations.map((relation) => (
                <TableRow key={relation.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium text-foreground">{relation.patient}</TableCell>
                  <TableCell>{getRelationBadge(relation.relation)}</TableCell>
                  <TableCell className="font-medium text-foreground">{relation.familyMember}</TableCell>
                  <TableCell className="text-muted-foreground">{relation.facility}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-1 justify-end">
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover">
                        View
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                        Edit
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

export default Healthcare;
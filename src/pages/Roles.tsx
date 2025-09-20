import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Settings, Users, Shield } from "lucide-react";

const Roles = () => {
  const roles = [
    {
      id: 1,
      name: "Administrator",
      description: "Full system access with all permissions",
      userCount: 2,
      permissions: {
        userManagement: true,
        customerManagement: true,
        orderManagement: true,
        systemSettings: true,
        reports: true
      }
    },
    {
      id: 2,
      name: "Manager", 
      description: "Manage operations and view reports",
      userCount: 5,
      permissions: {
        userManagement: false,
        customerManagement: true,
        orderManagement: true,
        systemSettings: false,
        reports: true
      }
    },
    {
      id: 3,
      name: "Operator",
      description: "Handle day-to-day operations", 
      userCount: 12,
      permissions: {
        userManagement: false,
        customerManagement: true,
        orderManagement: true,
        systemSettings: false,
        reports: false
      }
    }
  ];

  const groups = [
    { id: 1, name: "Healthcare Team", members: 8, description: "Medical staff and healthcare providers" },
    { id: 2, name: "Operations Team", members: 6, description: "Order and request management team" },
    { id: 3, name: "Support Team", members: 4, description: "Customer support and assistance" }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">User Roles & Groups</h1>
          <p className="text-muted-foreground">Manage role-based permissions and user group assignments</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
            <Plus className="mr-2 h-4 w-4" />
            Create Group
          </Button>
          <Button className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground shadow-md">
            <Plus className="mr-2 h-4 w-4" />
            Create Role
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Roles</CardTitle>
            <Shield className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{roles.length}</div>
            <p className="text-xs text-muted-foreground">Active permission roles</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">User Groups</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{groups.length}</div>
            <p className="text-xs text-muted-foreground">Organized user groups</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {roles.reduce((total, role) => total + role.userCount, 0)}
            </div>
            <p className="text-xs text-success">Across all roles</p>
          </CardContent>
        </Card>
      </div>

      {/* Roles Management */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-foreground">Role-Based Permissions</CardTitle>
          <CardDescription>Configure permissions for each user role</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {roles.map((role) => (
              <div key={role.id} className="border rounded-lg p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-foreground">{role.name}</h3>
                      <Badge variant="outline">{role.userCount} users</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{role.description}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover">
                    <Settings className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">User Management</span>
                    <Switch checked={role.permissions.userManagement} disabled />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Customer Management</span>
                    <Switch checked={role.permissions.customerManagement} disabled />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Order Management</span>
                    <Switch checked={role.permissions.orderManagement} disabled />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">System Settings</span>
                    <Switch checked={role.permissions.systemSettings} disabled />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Reports</span>
                    <Switch checked={role.permissions.reports} disabled />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* User Groups */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-foreground">User Groups</CardTitle>
          <CardDescription>Organize users into functional groups</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Group Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Members</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {groups.map((group) => (
                <TableRow key={group.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{group.name}</TableCell>
                  <TableCell className="text-muted-foreground">{group.description}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{group.members} members</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-1 justify-end">
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover">
                        Manage
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

export default Roles;
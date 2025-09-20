import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Building2, Users } from "lucide-react";

const Corporate = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Corporate Management</h1>
          <p className="text-muted-foreground">Corporate account linkage, employee management, and offers</p>
        </div>
        <Button className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground shadow-md">
          <Plus className="mr-2 h-4 w-4" />
          Add Corporate
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Corporate Accounts</CardTitle>
            <Building2 className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">2</div>
            <p className="text-xs text-success">Unilever, 10Pearls</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Linked Employees</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">567</div>
            <p className="text-xs text-muted-foreground">Total employees</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Corporate;
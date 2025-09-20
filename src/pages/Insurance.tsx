import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Shield } from "lucide-react";

const Insurance = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Insurance Management</h1>
          <p className="text-muted-foreground">Insurance providers, policy numbers, and coverage details</p>
        </div>
        <Button className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground shadow-md">
          <Plus className="mr-2 h-4 w-4" />
          Add Provider
        </Button>
      </div>

      <Card className="bg-gradient-card shadow-md">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Insurance Providers</CardTitle>
          <Shield className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">3</div>
          <p className="text-xs text-success">Allianz, EFU, Jubilee</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Insurance;
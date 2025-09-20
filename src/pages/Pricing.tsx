import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, DollarSign } from "lucide-react";

const Pricing = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Product Price</h1>
          <p className="text-muted-foreground">Editable rate lists and dynamic pricing by category</p>
        </div>
        <Button className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground shadow-md">
          <Plus className="mr-2 h-4 w-4" />
          Update Pricing
        </Button>
      </div>

      <Card className="bg-gradient-card shadow-md">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-primary" />
            Pricing Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Configure pricing rules and rate structures</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Pricing;
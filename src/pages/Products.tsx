import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Package } from "lucide-react";

const Products = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Product Management</h1>
          <p className="text-muted-foreground">Medicines, services, and health packages</p>
        </div>
        <Button className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground shadow-md">
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      <Card className="bg-gradient-card shadow-md">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center gap-2">
            <Package className="h-5 w-5 text-primary" />
            Product Catalog
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Manage your product inventory and service offerings</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Products;
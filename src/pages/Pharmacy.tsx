import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Pill, Package, TrendingUp } from "lucide-react";
import { mockProducts } from "@/data/mockData";

const Pharmacy = () => {
  const getStatusBadge = (status: string) => {
    const colors: Record<string, string> = {
      "Available": "bg-success text-success-foreground",
      "Out of Stock": "bg-destructive text-destructive-foreground"
    };
    return <Badge className={colors[status] || "bg-muted text-muted-foreground"}>{status}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Pharmacy Management</h1>
          <p className="text-muted-foreground">Medicine catalog, prescriptions, pricing, and availability</p>
        </div>
        <Button className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground shadow-md">
          <Plus className="mr-2 h-4 w-4" />
          Add Medicine
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Products</CardTitle>
            <Pill className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{mockProducts.length}</div>
            <p className="text-xs text-success">Medicine catalog</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-foreground">Medicine Catalog</CardTitle>
          <CardDescription>Available medicines and stock levels</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Medicine</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>Rs {product.price}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>{getStatusBadge(product.status)}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="text-primary">Edit</Button>
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

export default Pharmacy;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, Gift, TrendingUp, Calendar, Users } from "lucide-react";
import { mockPromotions } from "@/data/mockData";
import { Link } from "react-router-dom";

const Promotions = () => {
  const getStatusBadge = (status: string) => {
    const colors: Record<string, string> = {
      "Active": "bg-success text-success-foreground",
      "Expired": "bg-muted text-muted-foreground",
      "Draft": "bg-warning text-warning-foreground"
    };

    return (
      <Badge className={colors[status] || "bg-muted text-muted-foreground"}>
        {status}
      </Badge>
    );
  };

  const getTypeBadge = (type: string) => {
    const colors: Record<string, string> = {
      "Seasonal": "bg-info/10 text-info border-info",
      "New Customer": "bg-success/10 text-success border-success",
      "National": "bg-destructive/10 text-destructive border-destructive"
    };

    return (
      <Badge variant="outline" className={colors[type] || "bg-muted text-muted-foreground"}>
        {type}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Promotion & Packages</h1>
          <p className="text-muted-foreground">Create and manage promotional offers, discounts, and packages</p>
        </div>
        <Link to="/promotions/create">
          <Button className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground shadow-md">
            <Plus className="mr-2 h-4 w-4" />
            Create Promotion
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Promotions</CardTitle>
            <Gift className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{mockPromotions.length}</div>
            <p className="text-xs text-success">+2 this month</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Offers</CardTitle>
            <Gift className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {mockPromotions.filter(p => p.status === "Active").length}
            </div>
            <p className="text-xs text-muted-foreground">Currently running</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Usage</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {mockPromotions.reduce((total, promo) => total + promo.usageCount, 0)}
            </div>
            <p className="text-xs text-success">Redemptions</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Redemption</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {Math.round(mockPromotions.reduce((total, promo) => total + promo.usageCount, 0) / mockPromotions.length)}
            </div>
            <p className="text-xs text-muted-foreground">Per promotion</p>
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
                  placeholder="Search promotions..."
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
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="expired">Expired</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="seasonal">Seasonal</SelectItem>
                <SelectItem value="new-customer">New Customer</SelectItem>
                <SelectItem value="national">National</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="text-muted-foreground">
              Clear
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Promotions Table */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-foreground">Promotion List</CardTitle>
          <CardDescription>
            Showing {mockPromotions.length} of {mockPromotions.length} promotions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Promotion Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Discount</TableHead>
                <TableHead>Valid Period</TableHead>
                <TableHead>Usage Count</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockPromotions.map((promotion) => (
                <TableRow key={promotion.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">
                    <div className="space-y-1">
                      <div className="font-semibold text-foreground">{promotion.name}</div>
                    </div>
                  </TableCell>
                  <TableCell>{getTypeBadge(promotion.type)}</TableCell>
                  <TableCell className="font-medium text-success">{promotion.discount}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {promotion.validFrom}
                      </div>
                      <div className="text-xs text-muted-foreground">to {promotion.validTo}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">
                      {promotion.usageCount} times
                    </Badge>
                  </TableCell>
                  <TableCell>{getStatusBadge(promotion.status)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-1 justify-end">
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover">
                        Details
                      </Button>
                      {promotion.status === "Active" && (
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                          Edit
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="shadow-md hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2">
              <Gift className="h-5 w-5 text-primary" />
              Seasonal Offers
            </CardTitle>
            <CardDescription>Create time-limited seasonal promotions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Perfect for holidays, festivals, and special occasions</p>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Customer Rewards
            </CardTitle>
            <CardDescription>Loyalty programs and customer retention offers</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Reward repeat customers and encourage loyalty</p>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Service Packages
            </CardTitle>
            <CardDescription>Bundle services for better value</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Combine consultations, tests, and treatments</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Promotions;
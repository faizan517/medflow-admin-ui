import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Pill, Package, TrendingUp, AlertTriangle, ShoppingCart, DollarSign, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const PharmacyDashboard = () => {
  const pharmacyStats = {
    totalProducts: 156,
    lowStockItems: 8,
    ordersToday: 23,
    pendingOrders: 5,
    totalRevenue: 45600,
    averageOrderValue: 1250
  };

  const topSellingMedicines = [
    { name: "Panadol", category: "Pain Relief", salesThisWeek: 45, revenue: 675, trend: "+12%" },
    { name: "Surbex-Z", category: "Vitamins", salesThisWeek: 32, revenue: 1440, trend: "+8%" },
    { name: "Augmentin", category: "Antibiotics", salesThisWeek: 18, revenue: 2160, trend: "+15%" },
    { name: "Brufen", category: "Pain Relief", salesThisWeek: 28, revenue: 840, trend: "+5%" },
    { name: "Claritin", category: "Antihistamine", salesThisWeek: 15, revenue: 750, trend: "-3%" }
  ];

  const recentOrders = [
    { id: "PH001", customer: "Ali Hassan", items: "Panadol, Surbex-Z", amount: 180, status: "Completed", time: "10:30 AM" },
    { id: "PH002", customer: "Shaalimar Ahmed", items: "Augmentin, Brufen", amount: 320, status: "Processing", time: "11:15 AM" },
    { id: "PH003", customer: "Omar Sheikh", items: "Claritin", amount: 85, status: "Pending", time: "12:00 PM" },
    { id: "PH004", customer: "Fatima Khan", items: "Panadol, Vitamin D", amount: 145, status: "Completed", time: "12:30 PM" },
    { id: "PH005", customer: "Ahmed Malik", items: "Diabetes Kit", amount: 450, status: "Processing", time: "01:00 PM" }
  ];

  const lowStockAlerts = [
    { medicine: "Sofin", category: "Antibiotics", currentStock: 2, minStock: 10, urgency: "Critical" },
    { medicine: "Insulin", category: "Diabetes", currentStock: 5, minStock: 15, urgency: "High" },
    { medicine: "Aspirin", category: "Pain Relief", currentStock: 8, minStock: 20, urgency: "Medium" },
    { medicine: "Ventolin", category: "Respiratory", currentStock: 3, minStock: 12, urgency: "High" }
  ];

  const categoryPerformance = [
    { category: "Pain Relief", sales: 850, percentage: 35 },
    { category: "Antibiotics", sales: 650, percentage: 27 },
    { category: "Vitamins", sales: 480, percentage: 20 },
    { category: "Respiratory", sales: 280, percentage: 12 },
    { category: "Others", sales: 140, percentage: 6 }
  ];

  const getStatusBadge = (status: string) => {
    const colors: Record<string, string> = {
      "Completed": "bg-success text-success-foreground",
      "Processing": "bg-info text-info-foreground",
      "Pending": "bg-warning text-warning-foreground",
      "Cancelled": "bg-destructive text-destructive-foreground"
    };

    return (
      <Badge className={colors[status] || "bg-muted text-muted-foreground"}>
        {status}
      </Badge>
    );
  };

  const getUrgencyBadge = (urgency: string) => {
    const colors: Record<string, string> = {
      "Critical": "bg-destructive text-destructive-foreground",
      "High": "bg-orange text-orange-foreground",
      "Medium": "bg-warning text-warning-foreground",
      "Low": "bg-muted text-muted-foreground"
    };

    return (
      <Badge className={colors[urgency] || "bg-muted text-muted-foreground"}>
        {urgency}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Pharmacy Dashboard</h1>
          <p className="text-muted-foreground">Monitor medicine inventory, orders, and prescription management</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
            <Package className="mr-2 h-4 w-4" />
            Stock Report
          </Button>
          <Link to="/pharmacy">
            <Button className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground shadow-md">
              Manage Pharmacy
            </Button>
          </Link>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Products</CardTitle>
            <Pill className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{pharmacyStats.totalProducts}</div>
            <p className="text-xs text-success">Medicine catalog</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Low Stock</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{pharmacyStats.lowStockItems}</div>
            <p className="text-xs text-destructive">Need restocking</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Orders Today</CardTitle>
            <ShoppingCart className="h-4 w-4 text-info" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{pharmacyStats.ordersToday}</div>
            <p className="text-xs text-info">+18% from yesterday</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending Orders</CardTitle>
            <Clock className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{pharmacyStats.pendingOrders}</div>
            <p className="text-xs text-warning">Awaiting processing</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Today's Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">Rs {pharmacyStats.totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-success">+12% from yesterday</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg Order Value</CardTitle>
            <TrendingUp className="h-4 w-4 text-orange" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">Rs {pharmacyStats.averageOrderValue}</div>
            <p className="text-xs text-orange">Per transaction</p>
          </CardContent>
        </Card>
      </div>

      {/* Top Selling & Low Stock */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Top Selling Medicines */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-foreground">Top Selling Medicines</CardTitle>
            <CardDescription>Best performing products this week</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Medicine</TableHead>
                  <TableHead>Sales</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>Trend</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topSellingMedicines.map((medicine, index) => (
                  <TableRow key={index} className="hover:bg-muted/50">
                    <TableCell>
                      <div className="space-y-1">
                        <p className="font-medium text-foreground">{medicine.name}</p>
                        <p className="text-xs text-muted-foreground">{medicine.category}</p>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{medicine.salesThisWeek}</TableCell>
                    <TableCell className="font-medium">Rs {medicine.revenue}</TableCell>
                    <TableCell>
                      <span className={`text-xs font-medium ${
                        medicine.trend.startsWith('+') ? 'text-success' : 'text-destructive'
                      }`}>
                        {medicine.trend}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Low Stock Alerts */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              Low Stock Alerts
            </CardTitle>
            <CardDescription>Medicines requiring immediate attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowStockAlerts.map((alert, index) => (
                <div key={index} className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-medium text-foreground">{alert.medicine}</p>
                      <p className="text-xs text-muted-foreground">{alert.category}</p>
                    </div>
                    {getUrgencyBadge(alert.urgency)}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Stock Level</span>
                      <span className="font-medium">{alert.currentStock}/{alert.minStock}</span>
                    </div>
                    <Progress 
                      value={(alert.currentStock / alert.minStock) * 100} 
                      className="h-2" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders & Category Performance */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Recent Orders */}
        <Card className="md:col-span-2 shadow-md">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Orders</CardTitle>
            <CardDescription>Latest pharmacy orders and their status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-foreground">{order.id}</p>
                      <Badge variant="outline" className="text-xs">Rs {order.amount}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{order.customer}</p>
                    <p className="text-xs text-muted-foreground truncate max-w-xs">{order.items}</p>
                  </div>
                  <div className="text-right space-y-1">
                    {getStatusBadge(order.status)}
                    <p className="text-xs text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" /> {order.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Category Performance */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-foreground">Category Performance</CardTitle>
            <CardDescription>Sales distribution by medicine category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categoryPerformance.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{category.category}</span>
                    <span className="text-sm text-muted-foreground">Rs {category.sales}</span>
                  </div>
                  <div className="space-y-1">
                    <Progress value={category.percentage} className="h-2" />
                    <div className="text-xs text-muted-foreground text-right">{category.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions & Prescription Insights */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Prescription Insights */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-foreground">Prescription Insights</CardTitle>
            <CardDescription>Analysis of prescription patterns and trends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-foreground">Most Prescribed</h4>
                  <Badge className="bg-primary text-primary-foreground">This Week</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Antibiotics</span>
                    <span className="font-medium">45 prescriptions</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Pain Relief</span>
                    <span className="font-medium">38 prescriptions</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Vitamins</span>
                    <span className="font-medium">32 prescriptions</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-success/5 rounded-lg border border-success/20">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-foreground">Prescription Upload</h4>
                  <Badge className="bg-success text-success-foreground">95% Digital</Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  Most customers are uploading prescriptions digitally, improving processing speed.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-foreground">Quick Actions</CardTitle>
            <CardDescription>Common pharmacy management tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              <Button variant="outline" className="justify-start h-auto p-4">
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-primary" />
                    <span className="font-medium">Update Stock Levels</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Manage inventory quantities</p>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto p-4">
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                    <span className="font-medium">Restock Alerts</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Process low stock notifications</p>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto p-4">
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-success" />
                    <span className="font-medium">Price Updates</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Adjust medicine pricing</p>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PharmacyDashboard;
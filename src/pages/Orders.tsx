import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, Calendar, Download, ShoppingCart, DollarSign } from "lucide-react";
import { mockOrders } from "@/data/mockData";
import { Link } from "react-router-dom";

const Orders = () => {
  const getStatusBadge = (status: string) => {
    const colors: Record<string, string> = {
      "Completed": "bg-success text-success-foreground",
      "Pending": "bg-warning text-warning-foreground",
      "Cancelled": "bg-destructive text-destructive-foreground"
    };

    return (
      <Badge className={colors[status] || "bg-muted text-muted-foreground"}>
        {status}
      </Badge>
    );
  };

  const getPaymentBadge = (status: string) => {
    const colors: Record<string, string> = {
      "Paid": "bg-success text-success-foreground",
      "Pending": "bg-warning text-warning-foreground",
      "Refunded": "bg-info text-info-foreground"
    };

    return (
      <Badge variant="outline" className={colors[status] || "bg-muted text-muted-foreground"}>
        {status}
      </Badge>
    );
  };

  const getTotalRevenue = () => {
    return mockOrders
      .filter(order => order.status === "Completed")
      .reduce((total, order) => total + order.amount, 0);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Order Management</h1>
          <p className="text-muted-foreground">Track and manage customer orders, payments, and services</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground shadow-md">
            <Calendar className="mr-2 h-4 w-4" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{mockOrders.length}</div>
            <p className="text-xs text-success">+15% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Completed</CardTitle>
            <ShoppingCart className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {mockOrders.filter(o => o.status === "Completed").length}
            </div>
            <p className="text-xs text-muted-foreground">
              {Math.round((mockOrders.filter(o => o.status === "Completed").length / mockOrders.length) * 100)}% completion rate
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending</CardTitle>
            <ShoppingCart className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {mockOrders.filter(o => o.status === "Pending").length}
            </div>
            <p className="text-xs text-warning">Requires attention</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">Rs {getTotalRevenue().toLocaleString()}</div>
            <p className="text-xs text-success">+8% from last month</p>
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
                  placeholder="Search orders..."
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
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
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
                <SelectValue placeholder="Payment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Payments</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="refunded">Refunded</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-foreground">Order List</CardTitle>
          <CardDescription>
            Showing {mockOrders.length} of {mockOrders.length} orders
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Doctor</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>City</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockOrders.map((order) => (
                <TableRow key={order.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium text-primary">
                    <Link to={`/orders/${order.id}`} className="hover:underline">
                      {order.id}
                    </Link>
                  </TableCell>
                  <TableCell className="font-medium">{order.customer}</TableCell>
                  <TableCell className="text-muted-foreground">{order.service}</TableCell>
                  <TableCell className="text-muted-foreground">{order.doctor}</TableCell>
                  <TableCell className="text-muted-foreground">{order.date}</TableCell>
                  <TableCell className="text-muted-foreground">{order.city}</TableCell>
                  <TableCell className="font-medium">Rs {order.amount.toLocaleString()}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell>{getPaymentBadge(order.paymentStatus)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-1 justify-end">
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover">
                        View
                      </Button>
                      {order.status === "Pending" && (
                        <Button variant="ghost" size="sm" className="text-warning hover:text-warning/80">
                          Reschedule
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
    </div>
  );
};

export default Orders;
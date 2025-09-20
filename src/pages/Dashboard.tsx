import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Activity, ShoppingCart, DollarSign, TrendingUp, Calendar } from "lucide-react";
import { dashboardStats, mockOrders, mockRequests } from "@/data/mockData";

const Dashboard = () => {
  const stats = [
    {
      title: "Active Doctors",
      value: dashboardStats.activeDoctors,
      icon: Users,
      change: "+5%",
      changeType: "positive" as const
    },
    {
      title: "Pending Requests", 
      value: dashboardStats.pendingRequests,
      icon: Activity,
      change: "-2%",
      changeType: "negative" as const
    },
    {
      title: "Orders Today",
      value: dashboardStats.ordersToday,
      icon: ShoppingCart,
      change: "+12%", 
      changeType: "positive" as const
    },
    {
      title: "Monthly Revenue",
      value: `Rs ${dashboardStats.monthlyRevenue.toLocaleString()}`,
      icon: DollarSign,  
      change: "+8%",
      changeType: "positive" as const
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      "Completed": "default",
      "Pending": "secondary", 
      "Cancelled": "destructive",
      "Confirmed": "default",
      "Active": "default"
    };
    
    const colors: Record<string, string> = {
      "Completed": "bg-success text-success-foreground",
      "Confirmed": "bg-success text-success-foreground", 
      "Pending": "bg-warning text-warning-foreground",
      "Cancelled": "bg-destructive text-destructive-foreground"
    };

    return (
      <Badge className={colors[status] || "bg-muted text-muted-foreground"}>
        {status}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with your healthcare platform.</p>
        </div>
        <Button className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground shadow-md">
          <Calendar className="mr-2 h-4 w-4" />
          Generate Report
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-gradient-card shadow-md hover:shadow-lg transition-all duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="flex items-center text-xs">
                <TrendingUp className={`mr-1 h-3 w-3 ${
                  stat.changeType === 'positive' ? 'text-success' : 'text-destructive'
                }`} />
                <span className={stat.changeType === 'positive' ? 'text-success' : 'text-destructive'}>
                  {stat.change}
                </span>
                <span className="text-muted-foreground ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Orders */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Orders</CardTitle>
            <CardDescription>Latest customer orders and their status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockOrders.slice(0, 5).map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-foreground">{order.id}</p>
                    <p className="text-xs text-muted-foreground">{order.customer} • {order.service}</p>
                  </div>
                  <div className="text-right">
                    {getStatusBadge(order.status)}
                    <p className="text-xs text-muted-foreground mt-1">Rs {order.amount}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Requests */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Requests</CardTitle>
            <CardDescription>Latest service requests from customers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockRequests.slice(0, 5).map((request) => (
                <div key={request.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-foreground">{request.id}</p>
                    <p className="text-xs text-muted-foreground">{request.customer} • {request.type}</p>
                  </div>
                  <div className="text-right">
                    {getStatusBadge(request.status)}
                    <p className="text-xs text-muted-foreground mt-1">{request.priority} Priority</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Suggestions Panel */}
      <Card className="bg-gradient-primary shadow-lg">
        <CardHeader>
          <CardTitle className="text-primary-foreground flex items-center gap-2">
            <Activity className="h-5 w-5" />
            AI Insights & Suggestions
          </CardTitle>
        </CardHeader>
        <CardContent className="text-primary-foreground">
          <div className="space-y-3">
            <div className="p-3 bg-white/10 rounded-lg">
              <p className="text-sm">📈 High order cancellations detected in Karachi this week (15% increase)</p>
            </div>
            <div className="p-3 bg-white/10 rounded-lg">
              <p className="text-sm">💊 Panadol stock running low - consider restocking soon</p>
            </div>
            <div className="p-3 bg-white/10 rounded-lg">
              <p className="text-sm">👨‍⚕️ Dr. Rohit has highest patient satisfaction (4.8/5) - promote his availability</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
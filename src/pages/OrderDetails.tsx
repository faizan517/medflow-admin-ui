import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  ArrowLeft, Download, Phone, Mail, MapPin, Calendar, 
  Clock, CreditCard, FileText, User, Stethoscope
} from "lucide-react";
import { useParams, Link } from "react-router-dom";
import { mockOrders } from "@/data/mockData";

const OrderDetails = () => {
  const { id } = useParams();
  
  // Mock detailed order data (in real app, fetch from API)
  const orderDetails = {
    id: "ORD-001",
    customer: {
      name: "Ali Hassan",
      phone: "+92-300-1234567",
      email: "ali.hassan@email.com",
      address: "House 123, Block A, Gulshan-e-Iqbal, Karachi"
    },
    service: "Laboratory Service",
    doctor: "Dr. Rohit Sharma",
    date: "15th April, 2023",
    time: "14:35",
    city: "Karachi",
    status: "Completed",
    paymentStatus: "Paid",
    paymentMethod: "Cash on delivery (COD)",
    billingAddress: "N/A",
    laboratory: {
      name: "Dow Lab Karachi",
      branch: "Agha Khan PECHS"
    },
    tests: [
      {
        category: "Blood test",
        service: "Complete blood count (CBC)",
        rate: 500,
        discount: 0,
        amount: 500
      }
    ],
    totals: {
      subTotal: 500,
      cashOnDelivery: 0,
      totalAmountDue: 500
    },
    timeline: [
      { status: "Order Placed", date: "15th April, 2023 - 14:35", completed: true },
      { status: "Confirmed", date: "15th April, 2023 - 14:40", completed: true },
      { status: "Sample Collected", date: "16th April, 2023 - 09:30", completed: true },
      { status: "Processing", date: "16th April, 2023 - 10:00", completed: true },
      { status: "Completed", date: "17th April, 2023 - 16:00", completed: true }
    ]
  };

  const getStatusBadge = (status: string) => {
    const colors: Record<string, string> = {
      "Completed": "bg-success text-success-foreground",
      "Pending": "bg-warning text-warning-foreground",
      "Cancelled": "bg-destructive text-destructive-foreground",
      "Paid": "bg-success text-success-foreground"
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
        <div className="flex items-center gap-4">
          <Link to="/orders">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Orders
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Order Details - {orderDetails.service}</h1>
            <p className="text-muted-foreground">Order ID: {orderDetails.id}</p>
          </div>
        </div>
        <Button className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground shadow-md">
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
      </div>

      {/* Order Status & Customer Info */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2 shadow-md">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-foreground flex items-center gap-2">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {orderDetails.customer.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                {orderDetails.customer.name}
              </CardTitle>
              {getStatusBadge(orderDetails.status)}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">City:</span>
                  <span className="font-medium">{orderDetails.city}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Created On:</span>
                  <span className="font-medium">{orderDetails.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Time:</span>
                  <span className="font-medium">{orderDetails.time}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Contact:</span>
                  <span className="font-medium">{orderDetails.customer.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Payment Status:</span>
                  {getStatusBadge(orderDetails.paymentStatus)}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Payment Method:</span>
                  <span className="font-medium">{orderDetails.paymentMethod}</span>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Laboratory:</span>
                <span className="font-medium">{orderDetails.laboratory.name}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Laboratory Branch:</span>
                <span className="font-medium">{orderDetails.laboratory.branch}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Visit Address:</span>
                <span className="font-medium text-xs">{orderDetails.customer.address}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Order Timeline */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-foreground">Order Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {orderDetails.timeline.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`mt-1 h-2 w-2 rounded-full ${
                    item.completed ? 'bg-success' : 'bg-muted'
                  }`} />
                  <div className="space-y-1">
                    <p className={`text-sm font-medium ${
                      item.completed ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {item.status}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Order Details Table */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-foreground">Order Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Rate (Rs)</TableHead>
                <TableHead>Discount (Rs)</TableHead>
                <TableHead>Amount (Rs)</TableHead>
                <TableHead>Reports</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orderDetails.tests.map((test, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{test.category}</TableCell>
                  <TableCell>{test.service}</TableCell>
                  <TableCell>{test.rate}</TableCell>
                  <TableCell>{test.discount}</TableCell>
                  <TableCell className="font-medium">{test.amount}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover text-xs">
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover text-xs">
                        <FileText className="h-3 w-3 mr-1" />
                        Re-upload
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Totals */}
          <div className="mt-6 space-y-2 border-t pt-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Sub Total</span>
              <span className="font-medium">Rs {orderDetails.totals.subTotal}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Cash on delivery (COD)</span>
              <span className="font-medium">Rs {orderDetails.totals.cashOnDelivery}</span>
            </div>
            <Separator />
            <div className="flex justify-between text-lg font-semibold">
              <span>Total Amount Due</span>
              <span>Rs {orderDetails.totals.totalAmountDue}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderDetails;
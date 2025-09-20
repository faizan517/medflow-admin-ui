import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Search, Filter, ClipboardList, AlertCircle, Calendar, Edit, Send } from "lucide-react";
import { mockRequests } from "@/data/mockData";

const Requests = () => {
  const getStatusBadge = (status: string) => {
    const colors: Record<string, string> = {
      "Confirmed": "bg-success text-success-foreground",
      "Pending": "bg-warning text-warning-foreground",
      "Completed": "bg-info text-info-foreground",
      "Cancelled": "bg-destructive text-destructive-foreground"
    };

    return (
      <Badge className={colors[status] || "bg-muted text-muted-foreground"}>
        {status}
      </Badge>
    );
  };

  const getTypeBadge = (type: string) => {
    const colors: Record<string, string> = {
      "Pharmacy": "bg-info/10 text-info border-info",
      "Lab Test": "bg-success/10 text-success border-success",
      "Doctor Visit": "bg-warning/10 text-warning border-warning",
      "Homecare": "bg-destructive/10 text-destructive border-destructive"
    };

    return (
      <Badge variant="outline" className={colors[type] || "bg-muted text-muted-foreground"}>
        {type}
      </Badge>
    );
  };

  const getPriorityBadge = (priority: string) => {
    const colors: Record<string, string> = {
      "High": "bg-destructive text-destructive-foreground",
      "Medium": "bg-warning text-warning-foreground",
      "Low": "bg-muted text-muted-foreground"
    };

    return (
      <Badge variant="outline" className={colors[priority] || "bg-muted text-muted-foreground"}>
        {priority}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Request Management</h1>
          <p className="text-muted-foreground">Manage service requests: Homecare, Pharmacy, Lab, and Doctor visits</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
            <Filter className="mr-2 h-4 w-4" />
            Advanced Filter
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Requests</CardTitle>
            <ClipboardList className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{mockRequests.length}</div>
            <p className="text-xs text-success">+5 today</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending</CardTitle>
            <ClipboardList className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {mockRequests.filter(r => r.status === "Pending").length}
            </div>
            <p className="text-xs text-warning">Awaiting action</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">High Priority</CardTitle>
            <AlertCircle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {mockRequests.filter(r => r.priority === "High").length}
            </div>
            <p className="text-xs text-destructive">Urgent attention</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Completed</CardTitle>
            <ClipboardList className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {mockRequests.filter(r => r.status === "Completed").length}
            </div>
            <p className="text-xs text-success">This week</p>
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
                  placeholder="Search requests..."
                  className="pl-10"
                />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="pharmacy">Pharmacy</SelectItem>
                <SelectItem value="lab">Lab Test</SelectItem>
                <SelectItem value="doctor">Doctor Visit</SelectItem>
                <SelectItem value="homecare">Homecare</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priority</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Requests Table */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-foreground">Request List</CardTitle>
          <CardDescription>
            Showing {mockRequests.length} of {mockRequests.length} requests
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Request ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockRequests.map((request) => (
                <TableRow key={request.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium text-primary">{request.id}</TableCell>
                  <TableCell>{getTypeBadge(request.type)}</TableCell>
                  <TableCell className="font-medium">{request.customer}</TableCell>
                  <TableCell className="text-muted-foreground max-w-xs truncate">{request.description}</TableCell>
                  <TableCell className="text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {request.date}
                    </div>
                  </TableCell>
                  <TableCell>{getPriorityBadge(request.priority)}</TableCell>
                  <TableCell>{getStatusBadge(request.status)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-1 justify-end">
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover">
                        Details
                      </Button>
                      {request.status === "Pending" && (
                        <>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="sm" className="text-warning hover:text-warning/80">
                                <Edit className="h-3 w-3 mr-1" />
                                Modify
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-md">
                              <DialogHeader>
                                <DialogTitle>Modify Request</DialogTitle>
                                <DialogDescription>
                                  Update request details for {request.id}
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div>
                                  <label className="text-sm font-medium text-foreground mb-2 block">
                                    Description
                                  </label>
                                  <Textarea 
                                    placeholder="Update request description..."
                                    defaultValue={request.description}
                                  />
                                </div>
                                <div>
                                  <label className="text-sm font-medium text-foreground mb-2 block">
                                    Priority
                                  </label>
                                  <Select defaultValue={request.priority.toLowerCase()}>
                                    <SelectTrigger>
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="high">High</SelectItem>
                                      <SelectItem value="medium">Medium</SelectItem>
                                      <SelectItem value="low">Low</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div className="flex gap-2 pt-4">
                                  <Button className="flex-1 bg-gradient-primary hover:bg-primary-hover text-primary-foreground">
                                    Update Request
                                  </Button>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>

                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="sm" className="text-success hover:text-success/80">
                                <Send className="h-3 w-3 mr-1" />
                                Send
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-md">
                              <DialogHeader>
                                <DialogTitle>Send Request Confirmation</DialogTitle>
                                <DialogDescription>
                                  Confirm and send request {request.id} to the service provider
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div className="p-4 bg-muted/50 rounded-lg">
                                  <div className="space-y-2 text-sm">
                                    <div><strong>Customer:</strong> {request.customer}</div>
                                    <div><strong>Type:</strong> {request.type}</div>
                                    <div><strong>Description:</strong> {request.description}</div>
                                    <div><strong>Priority:</strong> {request.priority}</div>
                                  </div>
                                </div>
                                <div>
                                  <label className="text-sm font-medium text-foreground mb-2 block">
                                    Additional Notes
                                  </label>
                                  <Textarea placeholder="Add any special instructions..." />
                                </div>
                                <div className="flex gap-2 pt-4">
                                  <Button className="flex-1 bg-success hover:bg-success/90 text-success-foreground">
                                    <Send className="h-4 w-4 mr-2" />
                                    Send Request
                                  </Button>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Request Type Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {['Pharmacy', 'Lab Test', 'Doctor Visit', 'Homecare'].map((type) => {
          const typeRequests = mockRequests.filter(r => r.type === type);
          const pendingCount = typeRequests.filter(r => r.status === 'Pending').length;
          
          return (
            <Card key={type} className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center justify-between">
                  <span>{type} Requests</span>
                  {getTypeBadge(type)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-foreground">{typeRequests.length}</div>
                  <div className="text-xs text-muted-foreground">
                    {pendingCount} pending • {typeRequests.length - pendingCount} processed
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Requests;
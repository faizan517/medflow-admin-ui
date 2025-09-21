import { NavLink, useLocation } from "react-router-dom";
import {
  Users, UserCheck, Stethoscope, User, ShoppingCart, 
  ClipboardList, Home, Pill, TestTube, Building2, Shield, 
  Package, DollarSign, Gift, BarChart3, Settings, Calendar,
  FileText, Heart, Clock, Microscope, Wrench, LogOut
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useAuth, UserRole } from "@/contexts/AuthContext";
import mentorLogo from "@/assets/mentor-health-logo.png";

const roleMenuItems = {
  admin: [
    { group: "Overview", items: [
      { title: "Dashboard", url: "/", icon: BarChart3 },
      { title: "Corporate Dashboard", url: "/corporate-dashboard", icon: Building2 },
      { title: "Lab Dashboard", url: "/lab-dashboard", icon: TestTube },
      { title: "Pharmacy Dashboard", url: "/pharmacy-dashboard", icon: Pill },
    ]},
    { group: "User & Access", items: [
      { title: "Internal User Management", url: "/users", icon: Users },
      { title: "User Roles & Groups", url: "/roles", icon: UserCheck },
    ]},
    { group: "Healthcare", items: [
      { title: "Customer Management", url: "/customers", icon: Users },
      { title: "Doctor Management", url: "/doctors", icon: Stethoscope },
      { title: "Medical Staff Management", url: "/medical-staff", icon: User },
      { title: "Healthcare Management", url: "/healthcare", icon: Home },
    ]},
    { group: "Operations", items: [
      { title: "Order Management", url: "/orders", icon: ShoppingCart },
      { title: "Request Management", url: "/requests", icon: ClipboardList },
    ]},
    { group: "Services", items: [
      { title: "Homecare Duty Management", url: "/homecare", icon: Home },
      { title: "Pharmacy Management", url: "/pharmacy", icon: Pill },
      { title: "Laboratory Management", url: "/laboratory", icon: TestTube },
    ]},
    { group: "Business", items: [
      { title: "Corporate Management", url: "/corporate", icon: Building2 },
      { title: "Insurance Management", url: "/insurance", icon: Shield },
    ]},
    { group: "Catalog", items: [
      { title: "Product Management", url: "/products", icon: Package },
      { title: "Product Price", url: "/pricing", icon: DollarSign },
    ]},
    { group: "Marketing", items: [
      { title: "Promotion & Packages", url: "/promotions", icon: Gift },
    ]},
    { group: "System", items: [
      { title: "Setup & Configurations", url: "/settings", icon: Settings },
    ]}
  ],
  doctor: [
    { group: "Dashboard", items: [
      { title: "My Dashboard", url: "/doctor-dashboard", icon: BarChart3 },
    ]},
    { group: "Appointments", items: [
      { title: "My Appointments", url: "/doctor/appointments", icon: Calendar },
      { title: "Schedule Planner", url: "/doctor/planner", icon: Clock },
    ]},
    { group: "Consultations", items: [
      { title: "Video Consultations", url: "/doctor/consultations", icon: Stethoscope },
      { title: "Medical Records", url: "/doctor/records", icon: FileText },
    ]},
    { group: "Patients", items: [
      { title: "My Patients", url: "/doctor/patients", icon: Users },
      { title: "Patient History", url: "/doctor/history", icon: Heart },
    ]}
  ],
  lab: [
    { group: "Dashboard", items: [
      { title: "Lab Dashboard", url: "/lab-dashboard", icon: BarChart3 },
    ]},
    { group: "Test Management", items: [
      { title: "Test Requests", url: "/lab/requests", icon: ClipboardList },
      { title: "Results Upload", url: "/lab/results", icon: FileText },
    ]},
    { group: "Inventory", items: [
      { title: "Equipment", url: "/lab/equipment", icon: Microscope },
      { title: "Supplies", url: "/lab/supplies", icon: Package },
    ]},
    { group: "Quality", items: [
      { title: "Quality Control", url: "/lab/quality", icon: Shield },
      { title: "Maintenance", url: "/lab/maintenance", icon: Wrench },
    ]}
  ],
  patient: [
    { group: "Dashboard", items: [
      { title: "My Dashboard", url: "/patient-dashboard", icon: BarChart3 },
    ]},
    { group: "Profile", items: [
      { title: "My Profile", url: "/patient/profile", icon: User },
      { title: "Medical Records", url: "/patient/records", icon: FileText },
    ]},
    { group: "Appointments", items: [
      { title: "My Appointments", url: "/patient/appointments", icon: Calendar },
      { title: "Book Appointment", url: "/patient/book", icon: Stethoscope },
    ]},
    { group: "Services", items: [
      { title: "My Orders", url: "/patient/orders", icon: ShoppingCart },
      { title: "Consultations", url: "/patient/consultations", icon: Heart },
    ]}
  ],
  corporate: [
    { group: "Dashboard", items: [
      { title: "Corporate Dashboard", url: "/corporate-dashboard", icon: BarChart3 },
    ]},
    { group: "Employees", items: [
      { title: "Employee Management", url: "/corporate/employees", icon: Users },
      { title: "Health Packages", url: "/corporate/packages", icon: Package },
    ]},
    { group: "Claims", items: [
      { title: "Claims Management", url: "/corporate/claims", icon: ClipboardList },
      { title: "Analytics", url: "/corporate/analytics", icon: BarChart3 },
    ]},
    { group: "Reports", items: [
      { title: "Usage Reports", url: "/corporate/reports", icon: FileText },
      { title: "Cost Analysis", url: "/corporate/costs", icon: DollarSign },
    ]}
  ],
  "insurance-corporate": [
    { group: "Dashboard", items: [
      { title: "Insurance Dashboard", url: "/insurance-corporate-dashboard", icon: BarChart3 },
    ]},
    { group: "Policy Management", items: [
      { title: "Active Policies", url: "/insurance/policies", icon: Shield },
      { title: "Policy Renewals", url: "/insurance/renewals", icon: Calendar },
    ]},
    { group: "Claims", items: [
      { title: "Claims Tracking", url: "/insurance/claims", icon: ClipboardList },
      { title: "Claims Analytics", url: "/insurance/analytics", icon: BarChart3 },
    ]},
    { group: "Partnerships", items: [
      { title: "Corporate Partners", url: "/insurance/partners", icon: Building2 },
      { title: "Healthcare Providers", url: "/insurance/providers", icon: Stethoscope },
    ]}
  ]
};

export function RoleBasedSidebar() {
  const { state } = useSidebar();
  const { user, logout } = useAuth();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  if (!user) return null;

  const menuItems = roleMenuItems[user.role] || [];

  const isActive = (path: string) => {
    if (path === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(path);
  };

  return (
    <Sidebar className={`${collapsed ? "w-14" : "w-64"} bg-sidebar border-sidebar-border`}>
      <SidebarContent className="bg-sidebar">
        {/* Logo */}
        <div className="flex h-16 items-center justify-center border-b border-sidebar-border/20 px-4">
          {!collapsed ? (
            <div className="flex items-center gap-3">
              <img 
                src={mentorLogo} 
                alt="Mentor Health" 
                className="h-8"
              />
            </div>
          ) : (
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">M</span>
            </div>
          )}
        </div>

        {/* User Info */}
        {!collapsed && (
          <div className="p-4 border-b border-sidebar-border/20">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                {user.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-sidebar-foreground truncate">
                  {user.name}
                </p>
                <p className="text-xs text-sidebar-foreground/70 capitalize">
                  {user.role.replace('-', ' ')} Portal
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4">
          {menuItems.map((group) => (
            <SidebarGroup key={group.group} className="px-3">
              {!collapsed && (
                <SidebarGroupLabel className="px-3 text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider">
                  {group.group}
                </SidebarGroupLabel>
              )}
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild
                        className={`w-full justify-start gap-3 px-3 py-2 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors ${
                          isActive(item.url) 
                            ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm" 
                            : ""
                        }`}
                      >
                        <NavLink to={item.url}>
                          <item.icon className={`${collapsed ? "h-5 w-5" : "h-4 w-4"} flex-shrink-0`} />
                          {!collapsed && (
                            <span className="text-sm font-medium truncate">{item.title}</span>
                          )}
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </div>

        {/* Logout Button */}
        <div className="p-4 border-t border-sidebar-border/20">
          <Button
            variant="ghost"
            size={collapsed ? "icon" : "sm"}
            className="w-full text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            onClick={logout}
          >
            <LogOut className={`${collapsed ? "h-5 w-5" : "h-4 w-4 mr-2"}`} />
            {!collapsed && "Logout"}
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
import { NavLink, useLocation } from "react-router-dom";
import {
  Users, UserCheck, Stethoscope, User, ShoppingCart, 
  ClipboardList, Home, Pill, TestTube, Building2, Shield, 
  Package, DollarSign, Gift, BarChart3, Settings
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

const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: BarChart3,
    group: "Overview"
  },
  {
    title: "Internal User Management", 
    url: "/users",
    icon: Users,
    group: "User & Access"
  },
  {
    title: "User Roles & Groups",
    url: "/roles",
    icon: UserCheck,
    group: "User & Access"
  },
  {
    title: "Customer Management",
    url: "/customers", 
    icon: Users,
    group: "Healthcare"
  },
  {
    title: "Doctor Management",
    url: "/doctors",
    icon: Stethoscope,
    group: "Healthcare"
  },
  {
    title: "Medical Staff Management",
    url: "/medical-staff",
    icon: User,
    group: "Healthcare"
  },
  {
    title: "Healthcare Management",
    url: "/healthcare",
    icon: Home,
    group: "Healthcare"
  },
  {
    title: "Order Management",
    url: "/orders",
    icon: ShoppingCart,
    group: "Operations"
  },
  {
    title: "Request Management", 
    url: "/requests",
    icon: ClipboardList,
    group: "Operations"
  },
  {
    title: "Homecare Duty Management",
    url: "/homecare",
    icon: Home,
    group: "Services"
  },
  {
    title: "Pharmacy Management",
    url: "/pharmacy",
    icon: Pill,
    group: "Services"
  },
  {
    title: "Laboratory Management",
    url: "/laboratory",
    icon: TestTube,
    group: "Services"
  },
  {
    title: "Corporate Management",
    url: "/corporate",
    icon: Building2,
    group: "Business"
  },
  {
    title: "Insurance Management",
    url: "/insurance",
    icon: Shield,
    group: "Business"
  },
  {
    title: "Product Management",
    url: "/products",
    icon: Package,
    group: "Catalog"
  },
  {
    title: "Product Price",
    url: "/pricing",
    icon: DollarSign,
    group: "Catalog"
  },
  {
    title: "Promotion & Packages",
    url: "/promotions",
    icon: Gift,
    group: "Marketing"
  },
  {
    title: "Setup & Configurations",
    url: "/settings",
    icon: Settings,
    group: "System"
  }
];

const groupedItems = menuItems.reduce((acc, item) => {
  if (!acc[item.group]) {
    acc[item.group] = [];
  }
  acc[item.group].push(item);
  return acc;
}, {} as Record<string, typeof menuItems>);

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(path);
  };

  return (
    <Sidebar className={`${collapsed ? "w-14" : "w-64"} bg-gradient-sidebar border-sidebar-border`}>
      <SidebarContent className="bg-gradient-sidebar">
        {/* Logo */}
        <div className="flex h-16 items-center justify-center border-b border-sidebar-border/20 px-4">
          {!collapsed ? (
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary">
                <span className="text-lg font-bold text-sidebar-primary-foreground">M</span>
              </div>
              <span className="text-lg font-semibold text-sidebar-foreground">MediQ</span>
            </div>
          ) : (
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary">
              <span className="text-lg font-bold text-sidebar-primary-foreground">M</span>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4">
          {Object.entries(groupedItems).map(([groupName, items]) => (
            <SidebarGroup key={groupName} className="px-3">
              {!collapsed && (
                <SidebarGroupLabel className="px-3 text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider">
                  {groupName}
                </SidebarGroupLabel>
              )}
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
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
      </SidebarContent>
    </Sidebar>
  );
}
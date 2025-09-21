import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { RoleBasedSidebar } from "./RoleBasedSidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import mentorLogo from "@/assets/mentor-health-logo.png";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const { user } = useAuth();
  
  const getBreadcrumbItems = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const items = [];
    
    if (pathSegments.length === 0) {
      items.push({ label: 'Dashboard', href: '/', isLast: true });
    } else {
      items.push({ label: 'Home', href: '/', isLast: false });
      
      pathSegments.forEach((segment, index) => {
        const isLast = index === pathSegments.length - 1;
        const href = '/' + pathSegments.slice(0, index + 1).join('/');
        const label = segment.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
        
        items.push({ label, href, isLast });
      });
    }
    
    return items;
  };

  const breadcrumbItems = getBreadcrumbItems();

  const getPortalName = () => {
    switch (user?.role) {
      case 'admin': return 'Healthcare Admin Portal';
      case 'doctor': return 'Doctor Portal';
      case 'lab': return 'Laboratory Portal';
      case 'patient': return 'Patient Portal';
      case 'corporate': return 'Corporate Portal';
      case 'insurance-corporate': return 'Insurance Corporate Portal';
      default: return 'Healthcare Portal';
    }
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <RoleBasedSidebar />
        
        <div className="flex flex-1 flex-col">
          {/* Top Header */}
          <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
            <div className="flex h-16 items-center justify-between px-6">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
                
                <img 
                  src={mentorLogo} 
                  alt="Mentor Health" 
                  className="h-6"
                />
                
                <Breadcrumb>
                  <BreadcrumbList>
                    {breadcrumbItems.map((item, index) => (
                      <div key={item.href} className="flex items-center">
                        {index > 0 && <BreadcrumbSeparator className="text-muted-foreground" />}
                        <BreadcrumbItem>
                          {item.isLast ? (
                            <BreadcrumbPage className="text-foreground">
                              {item.label}
                            </BreadcrumbPage>
                          ) : (
                            <BreadcrumbLink 
                              href={item.href}
                              className="text-muted-foreground hover:text-foreground"
                            >
                              {item.label}
                            </BreadcrumbLink>
                          )}
                        </BreadcrumbItem>
                      </div>
                    ))}
                  </BreadcrumbList>
                </Breadcrumb>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  {getPortalName()}
                </span>
                
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <Bell className="h-5 w-5" />
                </Button>
                
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-sm font-medium text-foreground">{user?.name}</div>
                    <div className="text-xs text-muted-foreground">{user?.email}</div>
                  </div>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user?.avatar} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {user?.name?.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
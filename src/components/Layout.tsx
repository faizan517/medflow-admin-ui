import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  
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

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        
        <div className="flex flex-1 flex-col">
          {/* Top Header */}
          <header className="sticky top-0 z-50 w-full border-b bg-gradient-sidebar text-sidebar-foreground shadow-sm">
            <div className="flex h-16 items-center justify-between px-6">
              <div className="flex items-center gap-2">
                <SidebarTrigger className="text-sidebar-foreground hover:bg-sidebar-accent" />
                
                <Breadcrumb>
                  <BreadcrumbList>
                    {breadcrumbItems.map((item, index) => (
                      <div key={item.href} className="flex items-center">
                        {index > 0 && <BreadcrumbSeparator className="text-sidebar-foreground/60" />}
                        <BreadcrumbItem>
                          {item.isLast ? (
                            <BreadcrumbPage className="text-sidebar-foreground">
                              {item.label}
                            </BreadcrumbPage>
                          ) : (
                            <BreadcrumbLink 
                              href={item.href}
                              className="text-sidebar-foreground/80 hover:text-sidebar-foreground"
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
                <Button variant="ghost" size="icon" className="text-sidebar-foreground hover:bg-sidebar-accent">
                  <Bell className="h-5 w-5" />
                </Button>
                
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-sm font-medium text-sidebar-foreground">MediQ Administrator</div>
                    <div className="text-xs text-sidebar-foreground/70">admin@mediq.com</div>
                  </div>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground">MA</AvatarFallback>
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
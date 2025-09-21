import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth, UserRole } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { 
  User, 
  Stethoscope, 
  TestTube, 
  Users, 
  Building2, 
  Shield,
  UserCheck
} from "lucide-react";
import mentorLogo from "@/assets/mentor-health-logo.png";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRoleLogin = (role: UserRole) => {
    login(role);
    navigate(role === 'admin' ? '/' : `/${role}-dashboard`);
  };

  const roles = [
    {
      id: 'admin' as UserRole,
      title: 'Admin',
      description: 'Full system access with all modules and analytics',
      icon: UserCheck,
      color: 'primary',
      features: ['User Management', 'Analytics', 'System Settings', 'All Modules']
    },
    {
      id: 'doctor' as UserRole,
      title: 'Doctor',
      description: 'Medical consultation and patient management',
      icon: Stethoscope,
      color: 'success',
      features: ['Appointments', 'Consultations', 'Medical Records', 'Planner']
    },
    {
      id: 'lab' as UserRole,
      title: 'Laboratory',
      description: 'Lab test management and results processing',
      icon: TestTube,
      color: 'info',
      features: ['Test Requests', 'Results Upload', 'Equipment', 'Inventory']
    },
    {
      id: 'patient' as UserRole,
      title: 'Patient',
      description: 'Personal health records and appointment booking',
      icon: User,
      color: 'orange',
      features: ['My Profile', 'Appointments', 'Records', 'Consultations']
    },
    {
      id: 'corporate' as UserRole,
      title: 'Corporate',
      description: 'Employee health management and corporate analytics',
      icon: Building2,
      color: 'pink',
      features: ['Employees', 'Claims', 'Analytics', 'Health Packages']
    },
    {
      id: 'insurance-corporate' as UserRole,
      title: 'Insurance Corporate',
      description: 'Insurance policy and claims management',
      icon: Shield,
      color: 'warning',
      features: ['Policy Management', 'Claims Tracking', 'Corporate Partnerships', 'Coverage Analytics']
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: 'border-primary bg-primary/5 hover:bg-primary/10',
      success: 'border-success bg-success/5 hover:bg-success/10',
      info: 'border-info bg-info/5 hover:bg-info/10',
      orange: 'border-orange bg-orange/5 hover:bg-orange/10',
      pink: 'border-pink bg-pink/5 hover:bg-pink/10',
      warning: 'border-warning bg-warning/5 hover:bg-warning/10'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  const getIconColor = (color: string) => {
    const colorMap = {
      primary: 'text-primary',
      success: 'text-success',
      info: 'text-info',
      orange: 'text-orange',
      pink: 'text-pink',
      warning: 'text-warning'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center p-4">
      {/* Header */}
      <div className="mb-8 text-center">
        <img 
          src={mentorLogo} 
          alt="Mentor Health" 
          className="h-12 mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold text-foreground mb-2">Welcome to Mentor Health</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          Select your role to access your personalized healthcare management dashboard
        </p>
      </div>

      {/* Role Selection Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {roles.map((role) => {
          const Icon = role.icon;
          return (
            <Card 
              key={role.id} 
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${getColorClasses(role.color)}`}
              onClick={() => handleRoleLogin(role.id)}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full bg-white shadow-sm">
                  <Icon className={`h-8 w-8 ${getIconColor(role.color)}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {role.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {role.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2 mb-4">
                  {role.features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-center text-xs text-muted-foreground"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${getIconColor(role.color)} bg-current mr-2`} />
                      {feature}
                    </div>
                  ))}
                </div>
                <Button 
                  className="w-full text-primary-foreground bg-primary hover:bg-primary-hover"
                  size="sm"
                >
                  Login as {role.title}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-xs text-muted-foreground">
        <p>© 2024 Mentor Health. All rights reserved.</p>
        <p className="mt-1">Professional Healthcare Management System</p>
      </div>
    </div>
  );
};

export default Login;
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { Layout } from "@/components/Layout";
import Login from "./pages/Login";

// Pages
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Roles from "./pages/Roles";
import Customers from "./pages/Customers";
import Doctors from "./pages/Doctors";
import MedicalStaff from "./pages/MedicalStaff";
import Healthcare from "./pages/Healthcare";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import Requests from "./pages/Requests";
import Homecare from "./pages/Homecare";
import Pharmacy from "./pages/Pharmacy";
import Laboratory from "./pages/Laboratory";
import Corporate from "./pages/Corporate";
import Insurance from "./pages/Insurance";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import Promotions from "./pages/Promotions";
import CreatePromotion from "./pages/CreatePromotion";
import Settings from "./pages/Settings";
import CorporateDashboard from "./pages/CorporateDashboard";
import LabDashboard from "./pages/LabDashboard";
import PharmacyDashboard from "./pages/PharmacyDashboard";
import InsuranceCorporateDashboard from "./pages/InsuranceCorporateDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route 
              path="/*" 
              element={
                <ProtectedRoute>
                  <Layout>
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/users" element={<Users />} />
                      <Route path="/roles" element={<Roles />} />
                      <Route path="/customers" element={<Customers />} />
                      <Route path="/doctors" element={<Doctors />} />
                      <Route path="/medical-staff" element={<MedicalStaff />} />
                      <Route path="/healthcare" element={<Healthcare />} />
                      <Route path="/orders" element={<Orders />} />
                      <Route path="/orders/:id" element={<OrderDetails />} />
                      <Route path="/requests" element={<Requests />} />
                      <Route path="/homecare" element={<Homecare />} />
                      <Route path="/pharmacy" element={<Pharmacy />} />
                      <Route path="/laboratory" element={<Laboratory />} />
                      <Route path="/corporate" element={<Corporate />} />
                      <Route path="/insurance" element={<Insurance />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/pricing" element={<Pricing />} />
                      <Route path="/promotions" element={<Promotions />} />
                      <Route path="/promotions/create" element={<CreatePromotion />} />
                      <Route path="/settings" element={<Settings />} />
                      <Route path="/corporate-dashboard" element={<CorporateDashboard />} />
                      <Route path="/lab-dashboard" element={<LabDashboard />} />
                      <Route path="/pharmacy-dashboard" element={<PharmacyDashboard />} />
                      <Route path="/insurance-corporate-dashboard" element={<InsuranceCorporateDashboard />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </Layout>
                </ProtectedRoute>
              } 
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

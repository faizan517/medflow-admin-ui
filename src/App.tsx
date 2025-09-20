import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";

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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

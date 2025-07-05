
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Branches from "./pages/Branches";
import PatientSafety from "./pages/PatientSafety";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

// Branch Pages
import Kondapur from "./pages/branches/Kondapur";
import Kukatpally from "./pages/branches/Kukatpally";
import BanjaraHills from "./pages/branches/BanjaraHills";
import Chandanagar from "./pages/branches/Chandanagar";
import Nallagandla from "./pages/branches/Nallagandla";
import Appointment from "./pages/Appointment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/patient-safety" element={<PatientSafety />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Branch Routes */}
          <Route path="/branches/kondapur" element={<Kondapur />} />
          <Route path="/branches/kukatpally" element={<Kukatpally />} />
          <Route path="/branches/banjara-hills" element={<BanjaraHills />} />
          <Route path="/branches/chandanagar" element={<Chandanagar />} />
          <Route path="/branches/nallagandla" element={<Nallagandla />} />
          
          {/* Appointment Route */}
          <Route path="/appointment" element={<Appointment />} />
          
          {/* Patient Safety Route */}
          <Route path="/patient-safety" element={<PatientSafety />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

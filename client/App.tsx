import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PagePlaceholder from "./components/PagePlaceholder";
import Index from "./pages/Index";
import OurProjects from "./pages/OurProjects";
import ProjectDetail from "./pages/ProjectDetail";
import OurInitiatives from "./pages/OurInitiatives";
import Donation from "./pages/Donation";
import Gallery from "./pages/Gallery";
import Teams from "./pages/Teams";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      
      <BrowserRouter>
      <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/our-projects" element={<OurProjects />} />
            <Route path="/our-projects/:projectId" element={<ProjectDetail />} />
            <Route path="/our-initiatives" element={<OurInitiatives />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/privacy-policy"
              element={<PagePlaceholder title="Privacy Policy" />}
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);

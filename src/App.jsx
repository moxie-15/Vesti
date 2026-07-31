import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Countries from './pages/Countries';
import News from './pages/News';
import ScanProfile from './pages/ScanProfile';
import Country from './pages/Country';
import CountryClarity from './pages/CountryClarity';
import CountryPricing from './pages/CountryPricing';
import CountryPayment from './pages/CountryPayment';
import AgentModal from './components/AgentModal';
import Admin from './pages/Admin';
import Passports from './pages/Passports';
import Consultation from './pages/Consultation';
import Visas from './pages/Visas';
import Banking from './pages/Banking';
import About from './pages/About';
import Careers from './pages/Careers';
import Press from './pages/Press';
import Faqs from './pages/Faqs';
import Contact from './pages/Contact';
import Updates from './pages/Updates';
import ZyraAI from './pages/ZyraAI';
import LegalCommandCenter from './pages/LegalCommandCenter';

function App() {
  return (
    <BrowserRouter>
      <AgentModal />
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/countries" element={<MainLayout><Countries /></MainLayout>} />
        <Route path="/countries/:id" element={<MainLayout><Country /></MainLayout>} />
        <Route path="/countries/:id/clarity" element={<MainLayout><CountryClarity /></MainLayout>} />
        <Route path="/countries/:id/pricing" element={<MainLayout><CountryPricing /></MainLayout>} />
        <Route path="/countries/:id/payment" element={<MainLayout><CountryPayment /></MainLayout>} />
        <Route path="/news" element={<MainLayout><News /></MainLayout>} />
        <Route path="/scan-profile" element={<MainLayout><ScanProfile /></MainLayout>} />
        <Route path="/zyra" element={<MainLayout><ZyraAI /></MainLayout>} />
        <Route path="/legal" element={<MainLayout><LegalCommandCenter /></MainLayout>} />
        <Route path="/admin" element={<Admin />} />
        
        {/* Products Dropdown Routes */}
        <Route path="/passports" element={<MainLayout><Passports /></MainLayout>} />
        <Route path="/consultation" element={<MainLayout><Consultation /></MainLayout>} />
        <Route path="/visas" element={<MainLayout><Visas /></MainLayout>} />
        <Route path="/banking" element={<MainLayout><Banking /></MainLayout>} />

        {/* Company Dropdown Routes */}
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/careers" element={<MainLayout><Careers /></MainLayout>} />
        <Route path="/press" element={<MainLayout><Press /></MainLayout>} />
        <Route path="/faqs" element={<MainLayout><Faqs /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/updates" element={<MainLayout><Updates /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

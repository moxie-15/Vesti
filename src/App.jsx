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

function App() {
  return (
    <BrowserRouter>
      <AgentModal />
      <Routes>
        <Route path="/" element={
          <MainLayout>
            <Home />
          </MainLayout>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/countries" element={<MainLayout><Countries /></MainLayout>} />
        <Route path="/countries/:id" element={<MainLayout><Country /></MainLayout>} />
        <Route path="/countries/:id/clarity" element={<MainLayout><CountryClarity /></MainLayout>} />
        <Route path="/countries/:id/pricing" element={<MainLayout><CountryPricing /></MainLayout>} />
        <Route path="/countries/:id/payment" element={<MainLayout><CountryPayment /></MainLayout>} />
        <Route path="/news" element={<MainLayout><News /></MainLayout>} />
        <Route path="/scan-profile" element={<MainLayout><ScanProfile /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

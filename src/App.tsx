import React from 'react';
import { Menu, Home, FileText, Settings, Activity, BookOpen, PenTool as Tool, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ManagementPlanning from './components/ManagementPlanning';
import Documentation from './components/Documentation';
import Procedures from './components/Procedures';
import Monitoring from './components/Monitoring';
import Education from './components/Education';
import Technologies from './components/Technologies';
import Footer from './components/Footer';

function App() {
  const navItems = [
    { name: 'Inicio', icon: Home },
    { name: 'Gestión y Planeación', icon: Settings },
    { name: 'Documentación', icon: FileText },
    { name: 'Procedimientos', icon: Menu },
    { name: 'Monitoreo', icon: Activity },
    { name: 'Educación', icon: BookOpen },
    { name: 'Tecnologías', icon: Tool },
    { name: 'Contacto', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar items={navItems} />
      <main>
        <Hero />
        <ManagementPlanning />
        <Documentation />
        <Procedures />
        <Monitoring />
        <Education />
        <Technologies />
      </main>
      <Footer />
    </div>
  );
}

export default App;
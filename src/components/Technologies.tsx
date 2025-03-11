import React from 'react';
import { Server, Shield } from 'lucide-react';

const Technologies = () => {
  return (
    <section id="tecnologias" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-16">
          Tecnologías y Herramientas Recomendadas
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Server className="h-8 w-8 text-blue-600 mr-4" />
              <h3 className="text-2xl font-semibold">Hardware Recomendado</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold mb-2">Raspberry Pi</h4>
                <p className="text-gray-600">
                  Ideal para implementar un sistema de monitoreo centralizado y
                  firewall personalizado.
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold mb-2">Ubiquiti UniFi</h4>
                <p className="text-gray-600">
                  Equipamiento profesional para redes seguras y gestionables.
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold mb-2">Sensores IoT Seguros</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Sensores de movimiento</li>
                  <li>Cámaras de seguridad</li>
                  <li>Sensores ambientales</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-blue-600 mr-4" />
              <h3 className="text-2xl font-semibold">Software Esencial</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold mb-2">Sistemas Operativos</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>pfSense para firewall</li>
                  <li>Home Assistant para automatización</li>
                  <li>OpenWrt para routers</li>
                </ul>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold mb-2">Herramientas de Monitoreo</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Wireshark para análisis de red</li>
                  <li>ELK Stack para logs</li>
                  <li>Prometheus + Grafana</li>
                </ul>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold mb-2">Seguridad</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Suricata IDS/IPS</li>
                  <li>OpenVAS para escaneo</li>
                  <li>Fail2Ban para protección</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
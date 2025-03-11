import React, { useState } from 'react';
import { Settings, Shield, Lock } from 'lucide-react';

const Procedures = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: 'Configuración de Dispositivos',
      icon: Settings,
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-lg mb-4">Pasos de Configuración</h4>
          <ol className="list-decimal list-inside space-y-2">
            <li>Realizar un inventario de dispositivos IoT</li>
            <li>Cambiar contraseñas predeterminadas</li>
            <li>Actualizar firmware a la última versión</li>
            <li>Configurar red segura dedicada</li>
            <li>Implementar autenticación de dos factores</li>
          </ol>
        </div>
      )
    },
    {
      title: 'Seguridad en Dispositivos IoT',
      icon: Shield,
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-lg mb-4">Medidas de Seguridad</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Implementación de cifrado end-to-end</li>
            <li>Configuración de firewalls dedicados</li>
            <li>Monitoreo continuo de tráfico</li>
            <li>Políticas de acceso restrictivas</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Configuración de Firewalls',
      icon: Lock,
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-lg mb-4">Configuración de Firewall</h4>
          <div className="space-y-2">
            <p>1. Reglas básicas de firewall:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Bloquear tráfico no esencial</li>
              <li>Permitir solo puertos necesarios</li>
              <li>Implementar reglas de geolocalización</li>
            </ul>
            <p>2. Monitoreo y logging:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Configurar alertas de seguridad</li>
              <li>Mantener registros de acceso</li>
              <li>Revisar logs periódicamente</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="procedimientos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-16">
          Procedimientos Definidos para Implementación de IoT
        </h2>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex border-b">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`flex-1 py-4 px-6 text-sm font-medium flex items-center justify-center
                  ${activeTab === index
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-blue-600'
                  }`}
                onClick={() => setActiveTab(index)}
              >
                <tab.icon className="h-5 w-5 mr-2" />
                {tab.title}
              </button>
            ))}
          </div>

          <div className="p-6">
            {tabs[activeTab].content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Procedures;
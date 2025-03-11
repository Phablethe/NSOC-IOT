import React from 'react';
import { BookOpen, AlertCircle } from 'lucide-react';

const Documentation = () => {
  return (
    <section id="documentacion" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-16">
          Documentación Completa para Implementación
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <BookOpen className="h-8 w-8 text-blue-600 mr-4" />
              <h3 className="text-2xl font-semibold">Guías de Configuración</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold mb-2">Configuración de Router</h4>
                <p className="text-gray-600">Guía paso a paso para configurar tu router de manera segura.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold mb-2">Instalación de Cámaras</h4>
                <p className="text-gray-600">Tutorial detallado para la instalación y configuración de cámaras IP.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold mb-2">Sensores IoT</h4>
                <p className="text-gray-600">Configuración y calibración de sensores para el hogar inteligente.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <AlertCircle className="h-8 w-8 text-blue-600 mr-4" />
              <h3 className="text-2xl font-semibold">Documentación de Incidentes</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold mb-2">Gestión de Incidentes</h4>
                <p className="text-gray-600">Procedimientos para documentar y gestionar incidentes de seguridad.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold mb-2">Herramientas Recomendadas</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>ELK Stack para análisis de logs</li>
                  <li>Splunk para monitoreo de seguridad</li>
                  <li>Confluence para documentación</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
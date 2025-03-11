import React from 'react';
import { Activity, Bell, AlertTriangle } from 'lucide-react';

const Monitoring = () => {
  return (
    <section id="monitoreo" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-16">
          Monitoreo de Dispositivos IoT
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-6">
              <Activity className="h-8 w-8 text-blue-600 mr-4" />
              <h3 className="text-xl font-semibold">Sistema de Monitoreo</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                Implementación de sistemas de monitoreo profesionales para dispositivos IoT:
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Zabbix para monitoreo general</li>
                <li>Nagios para alertas críticas</li>
                <li>Grafana para visualización</li>
              </ul>
              <div className="mt-6">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Ver guía de implementación →
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-6">
              <Bell className="h-8 w-8 text-blue-600 mr-4" />
              <h3 className="text-xl font-semibold">Alertas en Tiempo Real</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                Configuración de alertas usando:
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Prometheus para métricas</li>
                <li>Grafana para dashboards</li>
                <li>Alertmanager para notificaciones</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <h4 className="font-medium mb-2">Ejemplo de Dashboard</h4>
                <div className="aspect-video bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-6">
              <AlertTriangle className="h-8 w-8 text-blue-600 mr-4" />
              <h3 className="text-xl font-semibold">Procedimiento ante Incidente</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                Pasos a seguir ante un incidente:
              </p>
              <ol className="list-decimal list-inside text-gray-600">
                <li>Detección del incidente</li>
                <li>Evaluación inicial</li>
                <li>Contención del incidente</li>
                <li>Investigación</li>
                <li>Recuperación</li>
                <li>Documentación</li>
              </ol>
              <div className="mt-6">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Descargar Protocolo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Monitoring;
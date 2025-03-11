import React, { useState } from 'react';
import { Shield, Cpu, RefreshCw, AlertTriangle, List, Lock, PenTool as Tool, Bell } from 'lucide-react';

const ManagementPlanning = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const cards = [
    {
      title: 'Conceptos Básicos de Seguridad',
      icon: Shield,
      content: 'Fundamentos y objetivos de seguridad para la protección de dispositivos IoT en el hogar.',
      expanded: [
        {
          title: 'Objetivos Principales',
          items: [
            'Protección de la privacidad de usuarios',
            'Integridad de datos',
            'Disponibilidad de servicios',
            'Cumplimiento de estándares OWASP IoT'
          ]
        },
        {
          title: 'Amenazas Principales',
          items: [
            'Contraseñas débiles o predeterminadas',
            'Servicios de red inseguros',
            'Interfaces inseguras',
            'Falta de actualizaciones seguras',
            'Componentes desactualizados',
            'Transmisión de datos sin cifrar',
            'Gestión inadecuada de dispositivos',
            'Configuraciones predeterminadas inseguras',
            'Vulnerabilidades físicas'
          ]
        }
      ]
    },
    {
      title: 'Gestión de Dispositivos IoT',
      icon: Cpu,
      content: 'Inventario y clasificación de dispositivos IoT para una gestión efectiva de la seguridad.',
      expanded: [
        {
          title: 'Herramientas de Inventario',
          items: [
            'Nmap - Escáner de red',
            'Angry IP Scanner - Detección de dispositivos',
            'Wireshark - Análisis de tráfico',
            'Fing - Descubrimiento de dispositivos',
            'Home Assistant - Gestión centralizada'
          ]
        },
        {
          title: 'Clasificación de Riesgos',
          items: [
            'Evaluación de criticidad',
            'Análisis de vulnerabilidades',
            'Priorización de seguridad',
            'Documentación de dispositivos'
          ]
        }
      ]
    },
    {
      title: 'Plan de Actualizaciones',
      icon: RefreshCw,
      content: 'Estrategias y herramientas para mantener actualizados los dispositivos y sistemas.',
      expanded: [
        {
          title: 'Herramientas de Actualización',
          items: [
            'UnifiOS - Gestión de actualizaciones',
            'OpenWrt - Firmware personalizado',
            'Home Assistant OS - Actualizaciones automáticas',
            'PiVPN - Actualizaciones de VPN',
            'OPNsense - Gestión de firewall'
          ]
        },
        {
          title: 'Proceso de Actualización',
          items: [
            'Verificación de integridad',
            'Respaldos automáticos',
            'Programación de actualizaciones',
            'Monitoreo post-actualización'
          ]
        }
      ]
    },
    {
      title: 'Plan de Respuesta',
      icon: AlertTriangle,
      content: 'Procedimientos y herramientas para responder ante incidentes de seguridad.',
      expanded: [
        {
          title: 'Herramientas de Respuesta',
          items: [
            'TheHive - Gestión de incidentes',
            'Wazuh - SIEM/IDS open source',
            'Snort - Sistema de detección de intrusos',
            'OSSEC - Monitoreo de integridad',
            'Fail2Ban - Protección contra ataques'
          ]
        },
        {
          title: 'Automatización de Respuesta',
          items: [
            'Detección automática de amenazas',
            'Aislamiento de dispositivos',
            'Bloqueo de accesos no autorizados',
            'Restauración de configuraciones'
          ]
        }
      ]
    }
  ];

  return (
    <section id="gestion" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-16">
          Gestión y Planeación de un NSOC para IoT
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg transition-all duration-300 cursor-pointer
                ${expandedCard === index ? 'scale-105 shadow-xl' : 'hover:shadow-xl hover:scale-102'}`}
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
            >
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <card.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                
                {expandedCard === index ? (
                  <div className="space-y-6">
                    {card.expanded.map((section, sIdx) => (
                      <div key={sIdx} className="border-l-4 border-blue-600 pl-4">
                        <h4 className="font-semibold mb-2">{section.title}</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          {section.items.map((item, iIdx) => (
                            <li key={iIdx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">{card.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-6">Recursos Adicionales</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Tool className="h-6 w-6 text-blue-600 mr-2" />
                <h4 className="font-semibold">Herramientas Esenciales</h4>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>OpenVAS - Escáner de vulnerabilidades</li>
                <li>Suricata - IDS/IPS</li>
                <li>ModSecurity - WAF</li>
                <li>ELK Stack - Análisis de logs</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <Bell className="h-6 w-6 text-blue-600 mr-2" />
                <h4 className="font-semibold">Monitoreo Continuo</h4>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Prometheus - Métricas</li>
                <li>Grafana - Visualización</li>
                <li>Nagios - Monitoreo de red</li>
                <li>Zabbix - Monitoreo integral</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementPlanning;
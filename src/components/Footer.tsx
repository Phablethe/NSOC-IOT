import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Tu mensaje..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-blue-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#gestion" className="hover:text-blue-400 transition-colors">
                  Gestión y Planeación
                </a>
              </li>
              <li>
                <a href="#documentacion" className="hover:text-blue-400 transition-colors">
                  Documentación
                </a>
              </li>
              <li>
                <a href="#procedimientos" className="hover:text-blue-400 transition-colors">
                  Procedimientos
                </a>
              </li>
              <li>
                <a href="#monitoreo" className="hover:text-blue-400 transition-colors">
                  Monitoreo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="mailto:contact@nsoc-iot.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-8">
              <p className="text-sm text-gray-400">
                © 2025 NSOC IoT. Todos los derechos reservados.
              </p>
              <div className="mt-2 space-x-4 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">
                  Política de Privacidad
                </a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors">
                  Términos de Servicio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
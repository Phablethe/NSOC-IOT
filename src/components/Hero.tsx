import React from 'react';

const Hero = () => {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80')"
        }}
      >
        <span className="w-full h-full absolute opacity-50 bg-black"></span>
      </div>
      
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              <h1 className="text-white font-semibold text-5xl">
                Centro de Operaciones de Seguridad de Red para IoT
              </h1>
              <p className="mt-4 text-lg text-gray-200">
                Implementa un NSOC efectivo para proteger tus dispositivos IoT y crear un hogar inteligente más seguro.
                Descubre las mejores prácticas, herramientas y procedimientos.
              </p>
              <div className="mt-8">
                <a
                  href="#gestion"
                  className="bg-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 mr-4"
                >
                  Comenzar
                </a>
                <a
                  href="#documentacion"
                  className="bg-transparent border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
                >
                  Documentación
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
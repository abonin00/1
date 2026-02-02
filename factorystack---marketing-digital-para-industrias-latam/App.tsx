
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ToolsGrid from './components/ToolsGrid';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Trusted By Section */}
        <section className="py-12 border-y border-gray-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">
              Trabajamos con las mejores herramientas del mundo
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center space-x-2 font-bold text-xl text-gray-700">
                <div className="w-6 h-6 bg-blue-500 rounded-sm"></div>
                <span>Google</span>
              </div>
              <div className="flex items-center space-x-2 font-bold text-xl text-gray-700">
                <div className="w-6 h-6 bg-blue-800 rounded-full"></div>
                <span>Meta</span>
              </div>
              <div className="flex items-center space-x-2 font-bold text-xl text-gray-700">
                <div className="w-6 h-6 bg-teal-600 rounded"></div>
                <span>Microsoft</span>
              </div>
              <div className="flex items-center space-x-2 font-bold text-xl text-gray-700">
                <div className="w-6 h-6 bg-orange-500 transform rotate-45"></div>
                <span>Analytics</span>
              </div>
              <div className="flex items-center space-x-2 font-bold text-xl text-gray-700">
                <div className="w-6 h-6 bg-red-600 rounded-full"></div>
                <span>Search Console</span>
              </div>
            </div>
          </div>
        </section>

        <Features />
        
        {/* Deep Dive Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-blue-100 rounded-full blur-xl opacity-60"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bb848a4f691f?auto=format&fit=crop&q=80&w=1200" 
                    alt="Panel de Google Analytics con aumento de conversiones" 
                    className="relative rounded-2xl shadow-xl border border-gray-100 w-full aspect-video object-cover"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-50 max-w-xs">
                    <p className="text-sm font-bold text-gray-900 mb-1">+145% más mensajes</p>
                    <p className="text-xs text-gray-500">Es lo que logran nuestros clientes en los primeros meses.</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  No adivines. Mira qué pasa en tu negocio.
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Muchas fábricas tiran dinero en anuncios sin saber si funcionan. Nosotros conectamos todo para que veas qué anuncio trajo cada venta.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </div>
                    <div>
                       <span className="font-bold text-gray-900">Sabemos quién te llama:</span> Te decimos qué palabras usan tus clientes para encontrarte.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </div>
                    <div>
                       <span className="font-bold text-gray-900">Estás en el mapa:</span> Hacemos que tu fábrica aparezca cuando te busquen cerca.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ToolsGrid />
        
        {/* Pricing/Audit Highlight */}
        <section className="py-24 bg-white" id="precios">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-900 rounded-3xl p-8 lg:p-16 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600 opacity-10 skew-x-12 transform translate-x-20"></div>
               <div className="relative z-10 grid lg:grid-cols-3 gap-12 items-center">
                  <div className="lg:col-span-2">
                     <h3 className="text-3xl font-bold text-white mb-6">Un precio claro, sin sorpresas</h3>
                     <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                        Pagas una vez por configurar todo o puedes pedirnos que manejemos tus anuncios cada mes. Tú eliges lo que mejor te venga.
                     </p>
                     <div className="grid sm:grid-cols-2 gap-6 text-white text-sm">
                        <div className="flex items-center space-x-3">
                           <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                           <span>Sin contratos largos</span>
                        </div>
                        <div className="flex items-center space-x-3">
                           <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                           <span>Tú eres dueño de tus cuentas</span>
                        </div>
                        <div className="flex items-center space-x-3">
                           <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                           <span>Te enseñamos cómo funciona</span>
                        </div>
                        <div className="flex items-center space-x-3">
                           <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                           <span>Soporte siempre listo</span>
                        </div>
                     </div>
                  </div>
                  <div className="bg-white rounded-2xl p-8 text-center shadow-xl">
                     <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest mb-2">Primer paso</p>
                     <div className="text-4xl font-bold text-gray-900 mb-2">$0 <span className="text-sm font-normal text-gray-400">USD</span></div>
                     <p className="text-gray-600 text-sm mb-6">Revisamos tu web gratis y te decimos qué falta.</p>
                     <button className="w-full bg-google-blue text-white py-3 rounded-md font-bold hover:bg-blue-700 transition-colors">
                        Quiero mi auditoría
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;

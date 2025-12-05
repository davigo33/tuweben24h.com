'use client'

import Link from 'next/link'
import { Clock, Zap, CheckCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary-600/20 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-accent-600/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in backdrop-blur-sm">
            <Zap className="w-4 h-4 text-primary-400" />
            <span>Entrega garantizada en 24 horas</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up font-heading tracking-tight">
            Tu Web Profesional
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
              en Solo 24 Horas
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto animate-slide-up font-light">
            Diseño moderno, responsive y optimizado. Sin esperas, sin complicaciones.
            Tu negocio online empieza ahora.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up">
            <Link
              href="/solicitar"
              className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-200 transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-heading uppercase tracking-wider"
            >
              Solicitar Ahora
            </Link>
            <a
              href="#pricing"
              className="bg-transparent text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all font-bold text-lg border border-white/20 font-heading uppercase tracking-wider"
            >
              Ver Precios
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-8">
            <div className="flex items-center justify-center space-x-3">
              <Clock className="w-8 h-8 text-primary-400" />
              <div className="text-left">
                <p className="font-bold text-white font-heading">24 Horas</p>
                <p className="text-sm text-gray-400">Entrega garantizada</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-8 h-8 text-green-400" />
              <div className="text-left">
                <p className="font-bold text-white font-heading">Responsive</p>
                <p className="text-sm text-gray-400">Mobile-first design</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Zap className="w-8 h-8 text-accent-400" />
              <div className="text-left">
                <p className="font-bold text-white font-heading">Optimizada</p>
                <p className="text-sm text-gray-400">SEO y velocidad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

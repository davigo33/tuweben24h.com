'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Shield, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [serviciosOpen, setServiciosOpen] = useState(false)

  useEffect(() => {
    // Verificar si hay sesión de admin
    if (typeof window !== 'undefined') {
      const adminAuth = localStorage.getItem('admin_authenticated')
      setIsAdmin(adminAuth === 'true')
    }
  }, [])

  const navLinks = [
    { href: '/#features', label: 'Características' },
    { href: '/#how-it-works', label: 'Cómo funciona' },
    { href: '/#pricing', label: 'Precios' },
    { href: '/proyectos', label: 'Proyectos' },
    { href: '/blog', label: 'Blog' },
  ]

  const servicios = [
    { href: '/servicios/paginas-web-para-negocios', label: 'Páginas Web para Negocios' },
    { href: '/servicios/web-para-restaurantes', label: 'Web para Restaurantes' },
    { href: '/servicios/web-para-abogados', label: 'Web para Abogados' },
    { href: '/servicios/web-para-clinicas', label: 'Web para Clínicas' },
    { href: '/servicios/web-para-coaches', label: 'Web para Coaches' },
    { href: '/servicios/web-para-inmobiliarias', label: 'Web para Inmobiliarias' },
    { href: '/servicios/web-para-dentistas', label: 'Web para Dentistas' },
    { href: '/servicios/web-para-peluquerias', label: 'Web para Peluquerías' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 mr-8 shrink-0">
            <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center">
              <span className="font-heading font-bold text-xl">T</span>
            </div>
            <span className="font-heading font-bold text-xl text-white tracking-tight">
              TuWebEn<span className="text-gray-400">24h</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {/* Dropdown Servicios */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setServiciosOpen(true)}
              onMouseLeave={() => setServiciosOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors font-medium font-heading text-sm uppercase tracking-wider py-2">
                <span>Servicios</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {serviciosOpen && (
                <div className="absolute top-full left-0 w-64 pt-2 z-50">
                  <div className="bg-[#0a0a0a] border border-white/10 rounded-lg shadow-xl py-2">
                    {servicios.map((servicio) => (
                      <Link
                        key={servicio.href}
                        href={servicio.href}
                        className="block px-4 py-2 text-gray-400 hover:bg-white/5 hover:text-white transition-colors text-sm"
                      >
                        {servicio.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors font-medium font-heading text-sm uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
            {isAdmin && (
              <Link
                href="/admin"
                className="flex items-center space-x-1 text-primary-400 hover:text-primary-300 transition-colors font-medium font-heading text-sm uppercase"
              >
                <Shield className="w-4 h-4" />
                <span>Admin</span>
              </Link>
            )}
            <Link
              href="/solicitar"
              className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors font-bold font-heading text-sm uppercase tracking-wider"
            >
              Solicitar Web
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-slide-down bg-[#0a0a0a] border-t border-white/10">
            <div className="flex flex-col space-y-3 pt-4">
              {/* Servicios mobile */}
              <div className="border-b border-white/10 pb-3">
                <p className="text-gray-500 text-xs font-semibold mb-2 px-3 font-heading">SERVICIOS</p>
                {servicios.map((servicio) => (
                  <Link
                    key={servicio.href}
                    href={servicio.href}
                    className="block text-gray-300 hover:text-white transition-colors py-2 pl-3 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {servicio.label}
                  </Link>
                ))}
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors font-medium py-2 px-3 font-heading text-sm uppercase"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {isAdmin && (
                <Link
                  href="/admin"
                  className="flex items-center space-x-1 text-primary-400 hover:text-primary-300 transition-colors font-medium py-2 px-3"
                  onClick={() => setIsOpen(false)}
                >
                  <Shield className="w-4 h-4" />
                  <span>Panel Admin</span>
                </Link>
              )}
              <Link
                href="/solicitar"
                className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-bold text-center font-heading uppercase mx-3"
                onClick={() => setIsOpen(false)}
              >
                Solicitar Web
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

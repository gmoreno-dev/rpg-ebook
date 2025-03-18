"use client"

import type React from "react"

import { BookOpen, Menu, X, Skull, Moon, Sun, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import DiceRoller from "@/components/dice-roller"
import { useState, useEffect } from "react"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Add dark class to html element
    document.documentElement.classList.add("dark")
  }, [])

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark")
    } else {
      document.documentElement.classList.add("dark")
    }
    setIsDarkMode(!isDarkMode)
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[#1D1616] text-[#EEEEEE] relative overflow-hidden">
      <ParticleBackground />

      <div className="absolute top-4 right-4 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleDarkMode}
          className="text-[#D84040] hover:text-[#EEEEEE] hover:bg-[#8E1616] transition-all duration-300"
        >
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>

      <Navigation />

      <main className="container mx-auto px-4 py-8 relative z-10">
        <header className="mb-12 text-center">
          <div className="relative inline-block">
            <h1 className="text-4xl md:text-6xl font-bold text-[#D84040] mb-4 animate-pulse-slow">
              Correntes do Crepúsculo
            </h1>
            <div className="absolute -top-6 -right-6 opacity-70 animate-float">
              <Skull className="h-12 w-12 text-[#D84040]" />
            </div>
          </div>
          <p className="text-xl md:text-2xl text-[#EEEEEE] mb-8 animate-fade-in">Um RPG de Horror e Fantasia Sombria</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              className="bg-[#8E1616] hover:bg-[#D84040] text-[#EEEEEE] shadow-glow transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="/livro">
                <BookOpen className="mr-2 h-4 w-4" />
                Começar a Ler
              </Link>
            </Button>

            <Button
              className="bg-[#8E1616] hover:bg-[#D84040] text-[#EEEEEE] shadow-glow transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="https://bright-foggy-farmer.glitch.me/" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                Criar/Ver Ficha
              </Link>
            </Button>

            <DiceRoller />
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            title="Criação de Personagem"
            description="Crie personagens únicos com aspectos, perícias e façanhas personalizadas."
            icon="character"
          />
          <FeatureCard
            title="Sistema de Sanidade"
            description="Enfrente os horrores do mundo e mantenha sua sanidade intacta."
            icon="sanity"
          />
          <FeatureCard
            title="Contratos com Entidades"
            description="Faça pactos com seres poderosos, mas cuidado com as consequências."
            icon="contract"
          />
        </section>
      </main>
      <Footer />
    </div>
  )
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#1D1616] border-b border-[#8E1616] sticky top-0 z-50 shadow-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-[#D84040] hover:text-[#EEEEEE] transition-colors duration-300"
          >
            Correntes do Crepúsculo
          </Link>

          <div className="hidden md:flex space-x-4">
            <NavLink href="/livro">Livro</NavLink>
            <NavLink href="/livro/criacao-personagem">Criação de Personagem</NavLink>
            <NavLink href="/livro/mecanicas">Mecânicas</NavLink>
            <NavLink href="/livro/entidades">Entidades</NavLink>
            <NavLink href="/livro/pericias">Perícias</NavLink>
            <NavLink href="/livro/habilidades">Habilidades</NavLink>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-[#EEEEEE] hover:text-[#D84040] transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-fade-down">
            <MobileNavLink href="/livro" onClick={() => setIsOpen(false)}>
              Livro
            </MobileNavLink>
            <MobileNavLink href="/livro/criacao-personagem" onClick={() => setIsOpen(false)}>
              Criação de Personagem
            </MobileNavLink>
            <MobileNavLink href="/livro/mecanicas" onClick={() => setIsOpen(false)}>
              Mecânicas
            </MobileNavLink>
            <MobileNavLink href="/livro/entidades" onClick={() => setIsOpen(false)}>
              Entidades
            </MobileNavLink>
            <MobileNavLink href="/livro/pericias" onClick={() => setIsOpen(false)}>
              Perícias
            </MobileNavLink>
            <MobileNavLink href="/livro/habilidades" onClick={() => setIsOpen(false)}>
              Habilidades
            </MobileNavLink>
          </div>
        )}
      </div>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-[#EEEEEE] hover:text-[#D84040] transition-colors duration-300 px-3 py-2 relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D84040] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      href={href}
      className="block text-[#EEEEEE] hover:text-[#D84040] transition-colors duration-300 px-3 py-2 border-b border-[#8E1616]"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-[#1D1616] border border-[#8E1616] rounded-lg p-6 hover:border-[#D84040] transition-all duration-500 hover:shadow-glow transform hover:scale-105 animate-fade-in relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-[#8E1616]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="mb-4 h-16 flex items-center justify-center relative">
        <img
          src={`/asaf.png?height=64&width=64`}
          alt={icon}
          className="h-16 w-16 object-contain relative z-10 group-hover:animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-[#8E1616]/20 rounded-full filter blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
      </div>
      <h3 className="text-xl font-bold text-[#D84040] mb-2 relative z-10">{title}</h3>
      <p className="text-[#EEEEEE] relative z-10">{description}</p>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-[#1D1616] border-t border-[#8E1616] py-8 relative z-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-[#EEEEEE]">© {new Date().getFullYear()} Correntes do Crepúsculo RPG</p>
        <p className="text-sm text-[#EEEEEE]/60 mt-2">Todos os direitos reservados</p>
        <div className="mt-4 flex justify-center space-x-4">
          <Button variant="ghost" size="icon" className="text-[#D84040] hover:text-[#EEEEEE] hover:bg-[#8E1616]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </Button>
          <Button variant="ghost" size="icon" className="text-[#D84040] hover:text-[#EEEEEE] hover:bg-[#8E1616]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-twitter"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </Button>
          <Button variant="ghost" size="icon" className="text-[#D84040] hover:text-[#EEEEEE] hover:bg-[#8E1616]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </Button>
        </div>
      </div>
    </footer>
  )
}


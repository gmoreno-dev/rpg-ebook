"use client"

import { BookOpen, Users, Dices, Ghost, List, Zap, Skull, Sparkles } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function TableOfContents() {
  const pathname = usePathname()
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const sections = [
    {
      title: "Livro",
      href: "/livro",
      icon: BookOpen,
    },
    {
      title: "Criação de Personagem",
      href: "/livro/criacao-personagem",
      icon: Users,
    },
    {
      title: "Mecânicas",
      href: "/livro/mecanicas",
      icon: Dices,
    },
    {
      title: "Entidades",
      href: "/livro/entidades",
      icon: Ghost,
    },
    {
      title: "Perícias",
      href: "/livro/pericias",
      icon: List,
    },
    {
      title: "Habilidades",
      href: "/livro/habilidades",
      icon: Zap,
    },
    {
      title: "Sanidade",
      href: "/livro/sanidade",
      icon: Skull,
    },
    {
      title: "Façanhas",
      href: "/livro/facanhas",
      icon: Sparkles,
    },
  ]

  return (
    <div className="bg-[#1D1616] border border-[#8E1616] rounded-lg p-4 shadow-glow">
      <h2 className="text-xl font-bold text-[#D84040] mb-4 flex items-center">
        <BookOpen className="mr-2 h-5 w-5" />
        Índice
      </h2>
      <nav>
        <ul className="space-y-2">
          {sections.map((section) => {
            const isActive = pathname === section.href
            const Icon = section.icon

            return (
              <li key={section.href}>
                <Link
                  href={section.href}
                  className={cn(
                    "flex items-center p-2 rounded-md transition-all duration-300 relative overflow-hidden",
                    isActive ? "bg-[#8E1616] text-[#EEEEEE]" : "text-[#EEEEEE] hover:bg-[#8E1616]/30",
                  )}
                  onMouseEnter={() => setHoveredItem(section.href)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {section.title}

                  <AnimatePresence>
                    {hoveredItem === section.href && !isActive && (
                      <motion.span
                        className="absolute bottom-0 left-0 h-0.5 bg-[#D84040]"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        exit={{ width: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}


"use client"

import { ChevronLeft, ChevronRight, Skull } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import TableOfContents from "@/components/table-of-contents"
import PageTransition from "@/components/page-transition"
import { Progress } from "@/components/ui/progress"
import { useState } from "react"

export default function SanidadePage() {
  const [sanityLevel, setSanityLevel] = useState(80)

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#1D1616] text-[#EEEEEE] relative">
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1 lg:sticky lg:top-24 lg:self-start">
              <TableOfContents />
            </aside>

            <main className="lg:col-span-3 bg-[#1D1616] border border-[#8E1616] rounded-lg p-6 md:p-8 shadow-glow">
              <header className="mb-8 relative">
                <div className="absolute -top-4 -left-4 text-[#D84040] opacity-70">
                  <Skull className="h-8 w-8" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#D84040] mb-4 pl-6">Sanidade</h1>
                <Separator className="my-6 bg-[#8E1616]" />
              </header>

              <section className="prose prose-invert max-w-none prose-headings:text-[#D84040] prose-p:text-[#EEEEEE] prose-strong:text-[#D84040]">
                <p className="lead">
                  A sanidade representa a resistência mental e emocional dos personagens diante do horror do mundo
                  decadente e seus contratos sobrenaturais.
                </p>

                <div className="my-6 p-4 border border-[#8E1616] rounded-lg bg-[#1D1616]/50 relative overflow-hidden">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-[#D84040]">Nível de Sanidade</h3>
                    <span className="text-[#EEEEEE]">{sanityLevel}%</span>
                  </div>

                  <Progress value={sanityLevel} className="h-4 bg-[#1D1616] border border-[#8E1616]" />

                  <div className="mt-4 flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSanityLevel(Math.max(0, sanityLevel - 10))}
                      className="border-[#8E1616] text-[#D84040] hover:bg-[#8E1616]/20"
                    >
                      Perder Sanidade
                    </Button>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSanityLevel(Math.min(100, sanityLevel + 5))}
                      className="border-[#8E1616] text-[#D84040] hover:bg-[#8E1616]/20"
                    >
                      Recuperar Sanidade
                    </Button>
                  </div>

                  <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-10">
                    <Skull className="w-full h-full" />
                  </div>
                </div>

                <p>
                  Cada vez que os personagens testemunharem ou se envolverem com eventos traumáticos, perturbadores ou
                  usarem poderes que desafiam sua humanidade, precisarão fazer testes para evitar perda de Sanidade. A
                  perda gradual da sanidade pode gerar consequências psicológicas, reduzindo suas habilidades e impondo
                  penalidades às rolagens futuras até serem devidamente tratados ou curados.
                </p>

                <p>
                  Sanidade pode ser recuperada lentamente com descanso, cuidados médicos ou através de eventos positivos
                  na história, dependendo das decisões tomadas pelos jogadores.
                </p>

                <h2 className="group flex items-center">
                  Níveis de Sanidade
                  <span className="ml-2 h-1 w-0 bg-[#D84040] group-hover:w-16 transition-all duration-300"></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <SanidadeCard
                    level="Estável (80-100%)"
                    description="O personagem está mentalmente saudável e capaz de lidar com o estresse e horror do mundo ao seu redor."
                    effects="Nenhuma penalidade. Capacidade total de raciocínio e ação."
                  />

                  <SanidadeCard
                    level="Perturbado (60-79%)"
                    description="O personagem começa a experimentar ansiedade, pesadelos e momentos de paranoia."
                    effects="Penalidade de -1 em testes de Vontade e Conhecimentos. Possíveis flashbacks em situações de estresse."
                  />

                  <SanidadeCard
                    level="Instável (40-59%)"
                    description="Alucinações ocasionais, comportamento errático e dificuldade para distinguir realidade de ilusão."
                    effects="Penalidade de -2 em testes sociais e de percepção. Possibilidade de ações irracionais em momentos de pressão."
                  />

                  <SanidadeCard
                    level="Crítico (20-39%)"
                    description="Delírios frequentes, comportamento autodestrutivo e incapacidade de funcionar normalmente em sociedade."
                    effects="Penalidade de -3 em quase todos os testes. Risco de perder o controle do personagem temporariamente."
                  />

                  <SanidadeCard
                    level="Colapso (0-19%)"
                    description="Completa ruptura com a realidade, comportamento extremamente perigoso e imprevisível."
                    effects="Personagem se torna temporariamente um PNJ controlado pelo narrador até recuperar alguma sanidade."
                  />
                </div>

                <h2 className="group flex items-center">
                  Recuperação de Sanidade
                  <span className="ml-2 h-1 w-0 bg-[#D84040] group-hover:w-16 transition-all duration-300"></span>
                </h2>

                <p>Recuperar sanidade é um processo lento e difícil. Algumas formas de recuperação incluem:</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Descanso:</strong> Um período prolongado de descanso em um ambiente seguro pode restaurar
                    pequenas quantidades de sanidade.
                  </li>
                  <li>
                    <strong>Terapia:</strong> Encontrar um curandeiro, médico ou especialista em traumas mentais pode
                    ajudar a recuperar sanidade mais rapidamente.
                  </li>
                  <li>
                    <strong>Conexões Pessoais:</strong> Interagir positivamente com entes queridos ou fortalecer laços
                    sociais pode restaurar sanidade.
                  </li>
                  <li>
                    <strong>Resolução:</strong> Resolver traumas passados ou concluir objetivos pessoais importantes
                    pode resultar em ganhos significativos de sanidade.
                  </li>
                </ul>

                <div className="my-8 flex justify-between">
                  <Button
                    asChild
                    className="bg-[#8E1616] hover:bg-[#D84040] text-[#EEEEEE] shadow-glow transition-all duration-300"
                  >
                    <Link href="/livro/habilidades">
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      Voltar para Habilidades
                    </Link>
                  </Button>

                  <Button
                    asChild
                    className="bg-[#8E1616] hover:bg-[#D84040] text-[#EEEEEE] shadow-glow transition-all duration-300"
                  >
                    <Link href="/livro/facanhas">
                      Continuar para Façanhas
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

function SanidadeCard({ level, description, effects }: { level: string; description: string; effects: string }) {
  return (
    <div className="bg-[#1D1616] border border-[#8E1616] rounded-lg p-4 hover:border-[#D84040] transition-all duration-300 hover:shadow-glow group">
      <h3 className="text-lg font-bold text-[#D84040] mb-2 group-hover:translate-x-1 transition-transform duration-300">
        {level}
      </h3>
      <p className="text-[#EEEEEE] mb-2">{description}</p>
      <p className="text-[#EEEEEE]/80 text-sm italic">
        <strong className="text-[#D84040]">Efeitos:</strong> {effects}
      </p>
    </div>
  )
}


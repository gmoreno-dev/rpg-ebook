import { ChevronRight, BookOpen } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import TableOfContents from "@/components/table-of-contents"
import BloodSplatter from "@/components/blood-splatter"
import PageTransition from "@/components/page-transition"

export default function BookPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#1D1616] text-[#EEEEEE] relative">
        <BloodSplatter />

        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1 lg:sticky lg:top-24 lg:self-start">
              <TableOfContents />
            </aside>

            <main className="lg:col-span-3 bg-[#1D1616] border border-[#8E1616] rounded-lg p-6 md:p-8 shadow-glow">
              <header className="mb-8 relative">
                <div className="absolute -top-4 -left-4 text-[#D84040] opacity-70">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#D84040] mb-4 pl-6">Correntes do Crepúsculo</h1>
                <p className="text-xl text-[#EEEEEE]">Um RPG de Horror e Fantasia Sombria</p>
                <Separator className="my-6 bg-[#8E1616]" />
              </header>

              <section className="prose prose-invert max-w-none prose-headings:text-[#D84040] prose-p:text-[#EEEEEE] prose-strong:text-[#D84040]">
                <h2 className="group flex items-center">
                  Introdução
                  <span className="ml-2 h-1 w-0 bg-[#D84040] group-hover:w-16 transition-all duration-300"></span>
                </h2>
                <p>
                  Bem-vindo a <strong>Correntes do Crepúsculo</strong>, um mundo onde a realidade está em declínio e
                  entidades sobrenaturais fazem contratos com mortais desesperados. Neste RPG, você interpretará
                  personagens que fizeram pactos com forças além da compreensão humana, ganhando poderes
                  extraordinários, mas também enfrentando consequências terríveis.
                </p>

                <div className="my-6 relative">
                  <img
                    src="/mundo.png?height=200&width=600"
                    alt="Mundo em declínio"
                    className="w-full h-48 object-cover rounded-lg border border-[#8E1616] shadow-md"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D1616] to-transparent opacity-60"></div>
                </div>

                <p>
                  Este livro contém todas as regras necessárias para jogar, desde a criação de personagens até as
                  mecânicas de jogo e descrições das entidades conhecidas que oferecem contratos aos mortais.
                </p>

                <h2 className="group flex items-center">
                  Sobre o Mundo
                  <span className="ml-2 h-1 w-0 bg-[#D84040] group-hover:w-16 transition-all duration-300"></span>
                </h2>
                <p>
                  Em Correntes do Crepúsculo, o mundo está em um estado de decadência lenta. A barreira entre o plano
                  mortal e os reinos sobrenaturais está se desfazendo, permitindo que entidades de outros planos
                  interajam mais facilmente com os humanos. Estas entidades - sejam elas demônios abissais, deuses
                  menores ou espíritos primordiais - oferecem contratos aos mortais, concedendo-lhes poderes em troca de
                  serviços ou sacrifícios.
                </p>

                <p>
                  Os personagens dos jogadores são indivíduos que, por desespero, ambição ou necessidade, aceitaram
                  esses contratos. Agora, eles navegam por um mundo sombrio, utilizando seus poderes sobrenaturais
                  enquanto lidam com as consequências de seus pactos e tentam manter sua humanidade e sanidade intactas.
                </p>

                <div className="my-8 flex justify-center">
                  <Button
                    asChild
                    className="bg-[#8E1616] hover:bg-[#D84040] text-[#EEEEEE] shadow-glow transition-all duration-300 transform hover:scale-105"
                  >
                    <Link href="/livro/criacao-personagem">
                      Continuar para Criação de Personagem
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


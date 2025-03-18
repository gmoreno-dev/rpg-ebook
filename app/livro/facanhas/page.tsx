import { ChevronLeft, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import TableOfContents from "@/components/table-of-contents"
import PageTransition from "@/components/page-transition"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FacanhasPage() {
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
                  <Sparkles className="h-8 w-8" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#D84040] mb-4 pl-6">Façanhas</h1>
                <Separator className="my-6 bg-[#8E1616]" />
              </header>

              <section className="prose prose-invert max-w-none prose-headings:text-[#D84040] prose-p:text-[#EEEEEE] prose-strong:text-[#D84040]">
                <p className="lead">
                  Façanhas são habilidades especiais que destacam seu personagem, permitindo realizar ações exclusivas
                  ou concedendo bônus específicos em certas situações.
                </p>

                <h2 className="group flex items-center">
                  Como criar suas Façanhas
                  <span className="ml-2 h-1 w-0 bg-[#D84040] group-hover:w-16 transition-all duration-300"></span>
                </h2>

                <p>
                  Você pode criar suas façanhas durante a criação de personagem ou durante o jogo, seguindo exemplos
                  práticos abaixo ou inventando algo único.
                </p>

                <h2 className="group flex items-center">
                  Tipos de Façanhas
                  <span className="ml-2 h-1 w-0 bg-[#D84040] group-hover:w-16 transition-all duration-300"></span>
                </h2>

                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Nova Ação:</strong> Permite que você use uma perícia de forma nova e única, que normalmente
                    não seria possível.
                  </li>
                  <li>
                    <strong>Bônus Específico:</strong> Dá um bônus fixo (+2) em situações específicas ao usar
                    determinada perícia.
                  </li>
                </ul>

                <div className="my-8">
                  <h3 className="text-xl font-bold text-[#D84040] mb-4">Exemplos de Façanhas</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FacanhaCard
                      name="Especialista em Armadilhas"
                      description="Você ganha +2 ao desarmar armadilhas usando a perícia Destreza."
                      type="Bônus Específico"
                    />

                    <FacanhaCard
                      name="Mente Brilhante"
                      description="Ao usar a perícia Inteligência para decifrar enigmas ou códigos antigos, você ganha um bônus de +2."
                      type="Bônus Específico"
                    />

                    <FacanhaCard
                      name="Negociador Nato"
                      description="Recebe +2 em testes de Carisma ao tentar persuadir ou negociar com personagens não hostis."
                      type="Bônus Específico"
                    />

                    <FacanhaCard
                      name="Combatente Ágil"
                      description="Pode utilizar a perícia Agilidade em vez de Força para atacar com armas leves ou à distância, recebendo +2 na rolagem."
                      type="Nova Ação"
                    />

                    <FacanhaCard
                      name="Um Trago Por Um Fato"
                      description="Oferece um bônus sempre que você tentar extrair informações importantes enquanto bebe socialmente com alguém em um bar ou taberna."
                      type="Bônus Específico"
                    />
                  </div>
                </div>

                <div className="bg-[#8E1616]/20 border border-[#8E1616] rounded-lg p-6 my-8 relative overflow-hidden">
                  <div className="absolute -bottom-8 -right-8 text-[#D84040] opacity-20">
                    <Sparkles className="h-32 w-32" />
                  </div>

                  <h3 className="text-xl font-bold text-[#D84040] mb-4">Criando Suas Próprias Façanhas</h3>

                  <p className="mb-4">
                    Ao criar façanhas, pense no que torna seu personagem especial e como ele pode usar suas habilidades
                    de maneira única para enfrentar desafios específicos no mundo do jogo.
                  </p>

                  <p>Uma boa façanha deve ser:</p>

                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Específica o suficiente para não ser útil em todas as situações</li>
                    <li>Alinhada com o conceito e história do seu personagem</li>
                    <li>Interessante narrativamente, não apenas mecanicamente</li>
                    <li>Equilibrada em termos de poder (consulte o narrador)</li>
                  </ul>
                </div>

                <div className="my-8 flex justify-start">
                  <Button
                    asChild
                    className="bg-[#8E1616] hover:bg-[#D84040] text-[#EEEEEE] shadow-glow transition-all duration-300"
                  >
                    <Link href="/livro/sanidade">
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      Voltar para Sanidade
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

function FacanhaCard({ name, description, type }: { name: string; description: string; type: string }) {
  return (
    <Card className="bg-[#1D1616] border-[#8E1616] hover:border-[#D84040] transition-all duration-300 hover:shadow-glow group overflow-hidden">
      <div className="absolute top-0 left-0 w-2 h-full bg-[#8E1616] group-hover:bg-[#D84040] transition-colors duration-300"></div>

      <CardHeader className="pb-2">
        <CardTitle className="text-[#D84040] group-hover:translate-x-1 transition-transform duration-300 flex items-center">
          <Sparkles className="h-4 w-4 mr-2 inline-block" />
          {name}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-2">
        <p className="text-[#EEEEEE]">{description}</p>
        <p className="text-[#D84040]/80 text-sm font-semibold">{type}</p>
      </CardContent>
    </Card>
  )
}


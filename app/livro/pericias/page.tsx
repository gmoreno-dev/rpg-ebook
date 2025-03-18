import { ChevronLeft, ChevronRight, List } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import TableOfContents from "@/components/table-of-contents"
import PageTransition from "@/components/page-transition"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function PericiasPage() {
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
                  <List className="h-8 w-8" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#D84040] mb-4 pl-6">Lista de Perícias</h1>
                <Separator className="my-6 bg-[#8E1616]" />
              </header>

              <section className="prose prose-invert max-w-none prose-headings:text-[#D84040] prose-p:text-[#EEEEEE] prose-strong:text-[#D84040]">
                <p className="lead">
                  Perícias são as habilidades fundamentais do seu personagem, usadas para realizar ações durante o jogo.
                  Cada personagem possui perícias classificadas em níveis que vão de Medíocre (+0) até Ótimo (+4).
                  Quanto mais alta a perícia, melhor o personagem é naquela atividade específica.
                </p>

                <p>
                  Se precisar usar uma perícia que seu personagem não possui, você rolará os dados com nível Medíocre
                  (+0).
                </p>

                <div className="my-8 overflow-x-auto">
                  <Table className="border-[#8E1616]">
                    <TableCaption>Lista completa de perícias e suas aplicações</TableCaption>
                    <TableHeader>
                      <TableRow className="hover:bg-[#8E1616]/20 border-[#8E1616]">
                        <TableHead className="text-[#D84040]">Perícia</TableHead>
                        <TableHead className="text-[#D84040] text-center">Superar</TableHead>
                        <TableHead className="text-[#D84040] text-center">Criar Vantagem</TableHead>
                        <TableHead className="text-[#D84040] text-center">Atacar</TableHead>
                        <TableHead className="text-[#D84040] text-center">Defender</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <PericiasTableRow name="Atletismo" superar criar atacar={false} defender />
                      <PericiasTableRow name="Atirar" superar criar atacar defender={false} />
                      <PericiasTableRow name="Comunicação" superar criar atacar={false} defender />
                      <PericiasTableRow name="Condução" superar criar atacar={false} defender />
                      <PericiasTableRow name="Conhecimentos" superar criar atacar={false} defender />
                      <PericiasTableRow name="Contatos" superar criar atacar={false} defender />
                      <PericiasTableRow name="Empatia" superar criar atacar={false} defender />
                      <PericiasTableRow name="Enganar" superar criar atacar={false} defender />
                      <PericiasTableRow name="Furtividade" superar criar atacar={false} defender />
                      <PericiasTableRow name="Investigar" superar criar atacar={false} defender={false} />
                      <PericiasTableRow name="Lutar" superar criar atacar defender />
                      <PericiasTableRow name="Ofícios" superar criar atacar={false} defender={false} />
                      <PericiasTableRow name="Percepção" superar criar atacar={false} defender />
                      <PericiasTableRow name="Provocar" superar criar atacar defender={false} />
                      <PericiasTableRow name="Recursos" superar criar atacar={false} defender={false} />
                      <PericiasTableRow name="Roubo" superar criar atacar={false} defender={false} />
                      <PericiasTableRow name="Vigor" superar criar atacar={false} defender={false} />
                      <PericiasTableRow name="Vontade" superar criar atacar={false} defender />
                    </TableBody>
                  </Table>
                </div>

                <h2 className="group flex items-center">
                  Descrição das Perícias
                  <span className="ml-2 h-1 w-0 bg-[#D84040] group-hover:w-16 transition-all duration-300"></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <PericiasCard
                    name="Atletismo"
                    description="Representa sua capacidade física geral, incluindo correr, pular, escalar e nadar."
                  />
                  <PericiasCard
                    name="Atirar"
                    description="Sua habilidade com armas à distância, desde arcos e bestas até armas de fogo."
                  />
                  <PericiasCard
                    name="Comunicação"
                    description="Capacidade de interagir socialmente de forma positiva, persuadindo e criando conexões."
                  />
                  <PericiasCard
                    name="Condução"
                    description="Habilidade para operar veículos e montarias em diversas situações."
                  />
                  <PericiasCard
                    name="Conhecimentos"
                    description="Representa sua educação formal e conhecimentos acadêmicos sobre diversos assuntos."
                  />
                  <PericiasCard
                    name="Contatos"
                    description="Sua rede de relacionamentos e capacidade de obter informações através de conexões sociais."
                  />
                  <PericiasCard
                    name="Empatia"
                    description="Capacidade de perceber as emoções e intenções verdadeiras de outras pessoas."
                  />
                  <PericiasCard
                    name="Enganar"
                    description="Habilidade para mentir, trapacear e manipular outros para seus próprios fins."
                  />
                  <PericiasCard
                    name="Furtividade"
                    description="Capacidade de se mover sem ser detectado e agir secretamente."
                  />
                  <PericiasCard
                    name="Investigar"
                    description="Habilidade para encontrar pistas, resolver enigmas e deduzir informações."
                  />
                  <PericiasCard name="Lutar" description="Sua capacidade em combate corpo a corpo, com ou sem armas." />
                  <PericiasCard
                    name="Ofícios"
                    description="Conhecimento técnico para criar, consertar ou avaliar itens e estruturas."
                  />
                </div>

                <div className="my-8 flex justify-between">
                  <Button
                    asChild
                    className="bg-[#8E1616] hover:bg-[#D84040] text-[#EEEEEE] shadow-glow transition-all duration-300"
                  >
                    <Link href="/livro/mecanicas">
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      Voltar para Mecânicas
                    </Link>
                  </Button>

                  <Button
                    asChild
                    className="bg-[#8E1616] hover:bg-[#D84040] text-[#EEEEEE] shadow-glow transition-all duration-300"
                  >
                    <Link href="/livro/habilidades">
                      Continuar para Habilidades
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

function PericiasTableRow({
  name,
  superar,
  criar,
  atacar,
  defender,
}: {
  name: string
  superar: boolean
  criar: boolean
  atacar: boolean
  defender: boolean
}) {
  return (
    <TableRow className="hover:bg-[#8E1616]/20 border-[#8E1616]">
      <TableCell className="font-medium">{name}</TableCell>
      <TableCell className="text-center">{superar ? "X" : ""}</TableCell>
      <TableCell className="text-center">{criar ? "X" : ""}</TableCell>
      <TableCell className="text-center">{atacar ? "X" : ""}</TableCell>
      <TableCell className="text-center">{defender ? "X" : ""}</TableCell>
    </TableRow>
  )
}

function PericiasCard({ name, description }: { name: string; description: string }) {
  return (
    <div className="bg-[#1D1616] border border-[#8E1616] rounded-lg p-4 hover:border-[#D84040] transition-all duration-300 hover:shadow-glow group">
      <h3 className="text-lg font-bold text-[#D84040] mb-2 group-hover:translate-x-1 transition-transform duration-300">
        {name}
      </h3>
      <p className="text-[#EEEEEE]">{description}</p>
    </div>
  )
}


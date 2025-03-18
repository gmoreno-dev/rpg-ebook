import { ChevronLeft, ChevronRight, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import TableOfContents from "@/components/table-of-contents"
import PageTransition from "@/components/page-transition"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HabilidadesPage() {
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
                  <Zap className="h-8 w-8" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#D84040] mb-4 pl-6">Habilidades Especiais</h1>
                <Separator className="my-6 bg-[#8E1616]" />
              </header>

              <section className="prose prose-invert max-w-none prose-headings:text-[#D84040] prose-p:text-[#EEEEEE] prose-strong:text-[#D84040]">
                <p className="lead">
                  Alguns personagens possuem habilidades sobrenaturais, resultado do contato direto ou indireto com
                  entidades sobrenaturais do cenário. Essas habilidades têm custos específicos e só podem ser ativadas
                  com sucesso em testes usando um dado d20.
                </p>

                <div className="my-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <HabilidadeCard
                      name="Intuição Profana"
                      description="Você pode analisar rapidamente um oponente, percebendo suas fraquezas e forças. Ao ativar essa habilidade, você pode escolher entre conhecer o nível de força geral do oponente ou pedir que o narrador descreva o provável resultado de uma luta direta entre vocês."
                      cost="Perda temporária de sanidade devido à tensão mental e ao estresse da análise sobrenatural."
                    />

                    <HabilidadeCard
                      name="Presença Silenciosa"
                      description="Você pode ocultar completamente sua presença e evitar produzir qualquer som, tornando-se praticamente indetectável."
                      cost="Após usar a habilidade, você fica temporariamente exausto fisicamente, tendo penalidades em ações que exijam esforço físico imediato."
                    />

                    <HabilidadeCard
                      name="Sentidos Apurados"
                      description="Você pode ampliar drasticamente sua percepção, identificando perigos ocultos ou elementos escondidos ao redor."
                      cost="Após usar, você sofre uma sensibilidade extrema temporária que pode causar desorientação ou confusão, dificultando ações subsequentes relacionadas à percepção."
                    />

                    <HabilidadeCard
                      name="Aura de Influência"
                      description="Você consegue influenciar sutilmente as emoções e decisões das pessoas próximas."
                      cost="Cada uso causa um desgaste emocional intenso, deixando você vulnerável emocionalmente por um breve período, com penalidades em testes sociais subsequentes."
                    />

                    <HabilidadeCard
                      name="Toque da Corrupção"
                      description="Você pode drenar temporariamente energia vital ou sanidade de um oponente através do toque direto, enfraquecendo-o brevemente."
                      cost="A cada utilização, você perde uma pequena porção da própria sanidade, sofrendo penalidades psicológicas e vulnerabilidade aumentada por um curto período."
                    />
                  </div>
                </div>

                <h2 className="group flex items-center">
                  Magia e Poderes
                  <span className="ml-2 h-1 w-0 bg-[#D84040] group-hover:w-16 transition-all duration-300"></span>
                </h2>

                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Contratos e suas Consequências:</strong> Contratos fornecem poderes sobrenaturais, mas
                    impõem consequências como perda da humanidade, obrigações perigosas ou danos físicos e mentais.
                  </li>
                  <li>
                    <strong>Tipos de Entidades e seus Poderes:</strong> Demônios Abissais oferecem poderes destrutivos;
                    Deuses Menores dão poderes grandiosos com exigências rigorosas; Espíritos Primordiais fornecem
                    controle elemental em troca de equilíbrio.
                  </li>
                  <li>
                    <strong>Limitações e Custos dos Contratos:</strong> Os poderes vêm com limitações severas, como uso
                    limitado, obrigações específicas, ou degradação gradual da sanidade.
                  </li>
                </ul>

                <div className="my-6 relative">
                  <img
                    src="/placeholder.svg?height=200&width=600"
                    alt="Poderes sobrenaturais"
                    className="w-full h-48 object-cover rounded-lg border border-[#8E1616] shadow-md"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D1616] to-transparent opacity-60"></div>
                </div>

                <div className="my-8 flex justify-between">
                  <Button
                    asChild
                    className="bg-[#8E1616] hover:bg-[#D84040] text-[#EEEEEE] shadow-glow transition-all duration-300"
                  >
                    <Link href="/livro/pericias">
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      Voltar para Perícias
                    </Link>
                  </Button>

                  <Button
                    asChild
                    className="bg-[#8E1616] hover:bg-[#D84040] text-[#EEEEEE] shadow-glow transition-all duration-300"
                  >
                    <Link href="/livro/sanidade">
                      Continuar para Sanidade
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

function HabilidadeCard({ name, description, cost }: { name: string; description: string; cost: string }) {
  return (
    <Card className="bg-[#1D1616] border-[#8E1616] hover:border-[#D84040] transition-all duration-300 hover:shadow-glow overflow-hidden group">
      <div className="absolute top-0 right-0 w-16 h-16">
        <div className="absolute top-0 right-0 w-16 h-16 bg-[#8E1616] transform rotate-45 translate-x-8 -translate-y-8 group-hover:bg-[#D84040] transition-colors duration-300"></div>
        <Zap className="absolute top-2 right-2 h-4 w-4 text-[#1D1616] z-10" />
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-[#D84040] group-hover:translate-x-1 transition-transform duration-300">
          {name}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-[#EEEEEE]">{description}</p>

        <div>
          <CardDescription className="text-[#D84040] font-semibold mb-1">Preço:</CardDescription>
          <p className="text-[#EEEEEE]/80 text-sm italic">{cost}</p>
        </div>
      </CardContent>
    </Card>
  )
}


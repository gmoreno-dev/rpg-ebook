import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import TableOfContents from "@/components/table-of-contents"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function CharacterCreationPage() {
  return (
    <div className="min-h-screen bg-[#1D1616] text-[#EEEEEE]">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1 lg:sticky lg:top-24 lg:self-start">
            <TableOfContents />
          </aside>

          <main className="lg:col-span-3 bg-[#1D1616] border border-[#8E1616] rounded-lg p-6 md:p-8">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-[#D84040] mb-4">Criação de Personagem</h1>
              <Separator className="my-6 bg-[#8E1616]" />
            </header>

            <section className="prose prose-invert max-w-none prose-headings:text-[#D84040] prose-p:text-[#EEEEEE] prose-strong:text-[#D84040]">
              <h2>A Ideia de Personagem</h2>
              <p>
                Criar um personagem em Correntes do Crepúsculo começa com a definição do seu Conceito e da sua
                Dificuldade, dois aspectos essenciais que vão dar vida ao seu personagem e torná-lo interessante e
                envolvente dentro do jogo.
              </p>

              <p>
                Esses aspectos são essenciais porque definem quem seu personagem realmente é, suas forças e fraquezas, e
                determinam o motivo pelo qual ele é relevante para a história.
              </p>

              <Accordion type="single" collapsible className="w-full my-6">
                <AccordionItem value="conceito" className="border-[#8E1616]">
                  <AccordionTrigger className="text-[#D84040] hover:text-[#D84040]/80">Conceito</AccordionTrigger>
                  <AccordionContent className="text-[#EEEEEE]">
                    <p>
                      O conceito é uma frase curta que resume claramente quem seu personagem é e o que ele faz. Ele
                      descreve sua ocupação, papel social ou talento especial.
                    </p>
                    <p>
                      Pense no seu conceito como algo que combina a profissão, função ou vocação do seu personagem,
                      podendo incluir detalhes únicos para dar ainda mais personalidade.
                    </p>
                    <p className="font-bold mt-4">Exemplos de Conceitos:</p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Guerreiro Marcado Pelas Sombras</li>
                      <li>Sacerdotisa em Busca de Redenção</li>
                      <li>Ladrão Arrependido Buscando Redenção</li>
                      <li>Explorador de Ruínas Antigas</li>
                      <li>Alquimista Obcecado pelo Conhecimento Proibido</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="dificuldade" className="border-[#8E1616]">
                  <AccordionTrigger className="text-[#D84040] hover:text-[#D84040]/80">Dificuldade</AccordionTrigger>
                  <AccordionContent className="text-[#EEEEEE]">
                    <p>
                      A Dificuldade é um aspecto que destaca algum tipo de complicação constante ou desafio na vida do
                      seu personagem. É algo que traz problemas frequentes e que torna sua jornada ainda mais
                      interessante.
                    </p>
                    <p className="font-bold mt-4">Existem dois tipos principais de dificuldades:</p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        <strong>Problemas pessoais:</strong> São características ou vícios que complicam a vida do seu
                        personagem.
                        <p className="mt-2">
                          Exemplo: "A Garrafa Sempre Me Chama", "Sempre Desconfio dos Outros", "Não Consigo Controlar
                          Minha Ira".
                        </p>
                      </li>
                      <li className="mt-4">
                        <strong>Relações complicadas:</strong> Pessoas ou organizações específicas que dificultam
                        diretamente sua vida.
                        <p className="mt-2">
                          Exemplos: "Caçado Pelo Culto de Merodath", "Em Dívida com a Ordem dos Espíritos", "Perseguido
                          pela Guilda Sombria".
                        </p>
                      </li>
                    </ul>
                    <p className="mt-4">
                      Sua dificuldade não deve ser simples de resolver, mas também não deve paralisar completamente seu
                      personagem.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h2>Aspectos</h2>
              <p>
                Aspectos são frases curtas que descrevem algo significativo sobre seu personagem. Eles definem quem seu
                personagem realmente é, destacando o que o torna especial e interessante dentro do jogo. Podem descrever
                desde personalidades e crenças até problemas e motivações. Aspectos são usados para dar profundidade ao
                personagem e influenciam diretamente nas ações que ele pode realizar no jogo.
              </p>

              <p>
                Durante o jogo, você pode invocar um aspecto gastando um ponto de destino, o que lhe proporciona um
                bônus em suas rolagens. Por outro lado, quando um aspecto causar complicações para seu personagem, você
                ganha um ponto de destino – isso é chamado de "forçar" um aspecto.
              </p>

              <div className="bg-[#8E1616]/20 border border-[#8E1616] rounded-lg p-4 my-6">
                <h3 className="text-[#D84040] text-lg font-bold mb-2">Exemplo</h3>
                <p>
                  A personagem Fräkeline tem o aspecto <strong>"Se É Valioso, Poderia Ser Meu"</strong>, destacando sua
                  obsessão por bens materiais e sua tendência a se arriscar por riquezas. Esse aspecto traz benefícios
                  em negociações ou buscas por tesouros, mas frequentemente coloca Fräkeline em situações complicadas ou
                  perigosas.
                </p>
              </div>

              <h2>Perícias</h2>
              <p>
                Perícias são as habilidades fundamentais do seu personagem, usadas para realizar ações durante o jogo.
                Cada personagem possui perícias classificadas em níveis que vão de Medíocre (+0) até Ótimo (+4). Quanto
                mais alta a perícia, melhor o personagem é naquela atividade específica.
              </p>

              <p>
                Se precisar usar uma perícia que seu personagem não possui, você rolará os dados com nível Medíocre
                (+0).
              </p>

              <div className="bg-[#8E1616]/20 border border-[#8E1616] rounded-lg p-4 my-6">
                <h3 className="text-[#D84040] text-lg font-bold mb-2">Exemplo</h3>
                <p>
                  O personagem Bandor tem a perícia <strong>"Conhecimento Oculto"</strong> em nível Ótimo (+4),
                  permitindo-lhe facilmente identificar artefatos mágicos ou entidades sobrenaturais. Porém, ele não
                  possui a perícia <strong>"Furtividade"</strong>, o que o deixa em uma posição difícil quando precisa
                  agir secretamente.
                </p>
              </div>

              <div className="my-8 flex justify-between">
                <Button asChild className="bg-[#8E1616] hover:bg-[#D84040] text-[#EEEEEE]">
                  <Link href="/livro">
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Voltar para Introdução
                  </Link>
                </Button>

                <Button asChild className="bg-[#8E1616] hover:bg-[#D84040] text-[#EEEEEE]">
                  <Link href="/livro/mecanicas">
                    Continuar para Mecânicas
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}


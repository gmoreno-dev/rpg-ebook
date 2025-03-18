import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import TableOfContents from "@/components/table-of-contents"
import DiceRoller from "@/components/dice-roller"

export default function MechanicsPage() {
  return (
    <div className="min-h-screen bg-[#1D1616] text-[#EEEEEE]">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1 lg:sticky lg:top-24 lg:self-start">
            <TableOfContents />
          </aside>

          <main className="lg:col-span-3 bg-[#1D1616] border border-[#8E1616] rounded-lg p-6 md:p-8">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-[#D84040] mb-4">Mecânicas de Jogo</h1>
              <Separator className="my-6 bg-[#8E1616]" />
            </header>

            <section className="prose prose-invert max-w-none prose-headings:text-[#D84040] prose-p:text-[#EEEEEE] prose-strong:text-[#D84040]">
              <h2>Realizando Ações</h2>
              <p>
                Durante o jogo, sempre que seu personagem tentar realizar uma ação que tenha um resultado incerto, você
                fará uma rolagem de um dado de 20 lados (d20) para determinar se terá sucesso ou não. Se a ação for
                simples ou sem oposição, geralmente não é necessário rolar dados; basta narrar a ação. Se a situação for
                desafiadora ou houver oposição direta, você precisará realizar uma rolagem.
              </p>

              <div className="flex justify-center my-6">
                <DiceRoller />
              </div>

              <h3>Rolando o Dado</h3>
              <p>
                Para realizar uma ação, role um d20 e adicione o modificador apropriado (normalmente relacionado às
                perícias do personagem). Quanto maior o resultado, melhor:
              </p>

              <ul className="list-disc pl-6">
                <li>
                  <strong>20 (resultado natural):</strong> Sucesso crítico, algo excepcional acontece.
                </li>
                <li>
                  <strong>Acima da dificuldade/oposição:</strong> Sucesso.
                </li>
                <li>
                  <strong>Igual à dificuldade/oposição:</strong> Sucesso parcial ou algum custo adicional.
                </li>
                <li>
                  <strong>Abaixo da dificuldade/oposição:</strong> Falha.
                </li>
                <li>
                  <strong>1 (resultado natural):</strong> Falha crítica, algo ruim ou inesperado acontece.
                </li>
              </ul>

              <h3>Interpretando Resultados</h3>
              <p>
                O narrador determinará o nível de dificuldade ou oposição. Se sua rolagem for igual ou superior ao
                número determinado, sua ação é bem-sucedida. Se for inferior, algo dará errado ou terá um sucesso
                parcial com consequências negativas.
              </p>

              <div className="bg-[#8E1616]/20 border border-[#8E1616] rounded-lg p-4 my-6">
                <h3 className="text-[#D84040] text-lg font-bold mb-2">Exemplo</h3>
                <p>
                  Esopo encontra uma armadilha mágica mortal protegendo o antigo túmulo de Da'oth. O narrador determina
                  que a dificuldade para evitar a armadilha é 15. Esopo tem um modificador de Destreza +3, então ele
                  rola um d20 e tira 14, totalizando 17. Ele supera a armadilha com sucesso e passa para o próximo
                  desafio sem ser ferido.
                </p>
              </div>

              <h2>Pontos de Destino</h2>
              <p>
                Pontos de Destino são recursos especiais que permitem aos jogadores influenciar diretamente os eventos e
                resultados do jogo. Eles representam momentos dramáticos, sorte ou uma intervenção especial do destino
                na história do personagem.
              </p>

              <p>
                Cada jogador começa com uma quantidade definida de pontos de destino, que podem ser gastos ou recebidos
                durante a partida.
              </p>

              <h3>Gastando Pontos de Destino</h3>
              <p>Você pode gastar um ponto de destino para obter vantagens nas situações a seguir:</p>

              <ul className="list-disc pl-6">
                <li>
                  <strong>Invocar Aspectos:</strong> Você pode gastar um ponto de destino para ganhar vantagem em um
                  teste, desde que justifique como um de seus aspectos se aplica à situação. Ao fazer isso, você
                  adiciona +2 ao resultado de um teste feito com o d20. Você pode fazer isso após rolar o dado caso não
                  goste do resultado, desde que consiga explicar como o aspecto escolhido ajudará na situação.
                </li>
                <li>
                  <strong>Criar Detalhes Narrativos:</strong> Você pode gastar um ponto de destino para adicionar um
                  detalhe ou elemento narrativo ao cenário ou situação atual, com aprovação do narrador.
                </li>
              </ul>

              <div className="bg-[#8E1616]/20 border border-[#8E1616] rounded-lg p-4 my-6">
                <h3 className="text-[#D84040] text-lg font-bold mb-2">Exemplo</h3>
                <p>
                  A personagem Fräkeline tenta convencer um comerciante a revelar informações importantes. Ela rola um
                  d20 e soma seu modificador de Carisma, obtendo um resultado total de 12, que não é suficiente. Ela
                  decide invocar seu aspecto "Se É Valioso, Poderia Ser Meu" gastando um ponto de destino e acrescenta
                  +2 ao resultado, totalizando 14 e garantindo sucesso na ação.
                </p>
              </div>

              <h3>Recuperando Pontos de Destino (Forçar Aspectos)</h3>
              <p>
                Você recupera pontos de destino quando aceita que um de seus aspectos complique a situação do seu
                personagem. Isso é conhecido como "forçar" um aspecto e pode ser sugerido tanto pelo narrador quanto
                pelos próprios jogadores.
              </p>

              <p>
                Quando o aspecto do seu personagem criar complicações na narrativa ou limitar suas opções, você ganha um
                ponto de destino em troca. Se você preferir evitar essas complicações, poderá pagar um ponto de destino
                para recusar a complicação proposta pelo narrador.
              </p>

              <div className="bg-[#8E1616]/20 border border-[#8E1616] rounded-lg p-4 my-6">
                <h3 className="text-[#D84040] text-lg font-bold mb-2">Exemplo</h3>
                <p>
                  Esopo possui o aspecto "Não Entendo Absolutamente Nada". Durante um baile sofisticado, o narrador
                  sugere que Esopo inadvertidamente insulte uma figura importante devido à sua falta de entendimento das
                  normas sociais locais. O jogador aceita essa complicação, recebe um ponto de destino e agora precisa
                  lidar com as consequências dramáticas que surgem da situação.
                </p>
              </div>

              <h2>Sanidade</h2>
              <p>
                A sanidade representa a resistência mental e emocional dos personagens diante do horror do mundo
                decadente e seus contratos sobrenaturais.
              </p>

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

              <div className="my-8 flex justify-between">
                <Button asChild className="bg-[#8E1616] hover:bg-[#D84040] text-[#EEEEEE]">
                  <Link href="/livro/criacao-personagem">
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Voltar para Criação de Personagem
                  </Link>
                </Button>

                <Button asChild className="bg-[#8E1616] hover:bg-[#D84040] text-[#EEEEEE]">
                  <Link href="/livro/entidades">
                    Continuar para Entidades
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


import { ChevronLeft } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import TableOfContents from "@/components/table-of-contents"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Dados das entidades para facilitar a manutenção
const entities = [
  {
    name: "Baalzar, Senhor da Destruição",
    type: "Demônio Abissal",
    description: "Conhecido por sua violência extrema e força destrutiva. Frequentemente faz contratos envolvendo guerra e conflitos.",
    imageUrl: "/baalzar.png" // Substitua pelo caminho real da imagem
  },
  {
    name: "Lyssara, Deusa das Lágrimas",
    type: "Deusa Menor",
    description: "Conhecida por sua misericórdia e cura milagrosa. Ela busca recuperar seguidores para restaurar sua antiga glória.",
    imageUrl: "/lyssara.png" // Substitua pelo caminho real da imagem
  },
  {
    name: "Zerathul, Espírito da Tempestade",
    type: "Espírito Primordial",
    description: "Representa tempestades e ventos furiosos. Aceita contratos para controlar fenômenos climáticos em troca de serviços que restauram o equilíbrio natural.",
    imageUrl: "/zerathul.png" // Substitua pelo caminho real da imagem
  },
  {
    name: "Sylthar, Sombra das Florestas",
    type: "Espírito Primordial",
    description: "Guardião das matas e florestas, concede poderes relacionados à furtividade, sobrevivência e comunicação com animais e plantas, exigindo proteção rigorosa de áreas naturais em troca.",
    imageUrl: "/sylthar.png" // Substitua pelo caminho real da imagem
  }
];

export default function EntitiesPage() {
  return (
    <div className="min-h-screen bg-[#1D1616] text-[#EEEEEE]">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1 lg:sticky lg:top-24 lg:self-start">
            <TableOfContents />
          </aside>

          <main className="lg:col-span-3 bg-[#1D1616] border border-[#8E1616] rounded-lg p-6 md:p-8">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-[#D84040] mb-4">Entidades Conhecidas</h1>
              <Separator className="my-6 bg-[#8E1616]" />
            </header>

            <section className="prose prose-invert max-w-none prose-headings:text-[#D84040] prose-p:text-[#EEEEEE] prose-strong:text-[#D84040]">
              <p className="lead">
                As entidades sobrenaturais que oferecem contratos aos mortais são diversas e poderosas. Cada uma tem
                suas próprias motivações, poderes e exigências. Abaixo estão algumas das entidades mais conhecidas no
                mundo de Correntes do Crepúsculo.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                {entities.map((entity, index) => (
                  <EntityCard
                    key={index}
                    name={entity.name}
                    type={entity.type}
                    description={entity.description}
                    imageUrl={entity.imageUrl}
                  />
                ))}
              </div>

              <h2>Tipos de Entidades</h2>

              <h3>Demônios Abissais</h3>
              <p>
                Demônios Abissais são entidades caóticas e destrutivas, originadas das profundezas do Abismo. Eles
                oferecem contratos que geralmente envolvem poderes destrutivos, força sobrenatural ou habilidades de
                combate aprimoradas. Em troca, exigem violência, caos ou a corrupção de inocentes. (Demônios Abissais são obrigados a cumprir os termos de seus contratos, mas frequentemente buscam maneiras de corromper ou enganar seus contratantes.)
              </p>
              <p>
                Os contratos com Demônios Abissais frequentemente levam à degradação física do contratante,
                manifestando-se como mutações, marcas demoníacas ou uma aura de medo que afasta pessoas comuns.
              </p>

              <h3>Deuses Menores</h3>
              <p>
                Deuses Menores são divindades que perderam grande parte de seu poder e seguidores. Eles oferecem
                contratos para recuperar sua influência no mundo mortal. Seus poderes são variados, dependendo do
                domínio do deus, e podem incluir cura, conhecimento, influência sobre elementos ou habilidades sociais
                sobrenaturais.
              </p>
              <p>
                Em troca, exigem devoção, propagação de sua fé, realização de rituais específicos ou cumprimento de
                códigos de conduta rigorosos. Falhar em cumprir essas obrigações pode resultar na perda dos poderes
                concedidos ou em punições divinas.
              </p>

              <h3>Espíritos Primordiais</h3>
              <p>
                Espíritos Primordiais são manifestações das forças fundamentais da natureza. Eles oferecem contratos
                relacionados ao controle de elementos, comunicação com animais, manipulação do clima ou habilidades de
                cura e transformação.
              </p>
              <p>
                Seus contratos geralmente exigem a manutenção do equilíbrio natural, proteção de locais sagrados ou a
                realização de tarefas que beneficiem o domínio do espírito. Violar esses termos pode resultar em
                desastres naturais localizados ou na inversão dos poderes concedidos contra o próprio contratante.
              </p>

              <h2>Contratos e Consequências</h2>
              <p>Cada personagem pode (OU NÃO) ter um contrato inicial com uma entidade
sobrenatural conhecida, começar a campanha com um contrato pode limitar interações
com novas entidades. O contrato define o poder adquirido e as obrigações ou
consequências atreladas a ele. Contratos devem ser discutidos e aprovados
pelo narrador.</p>
              <p>Todos os contratos com entidades sobrenaturais têm consequências. Alguns efeitos comuns incluem:</p>

              <ul className="list-disc pl-6">
                <li>Perda gradual de humanidade ou empatia</li>
                <li>Dependência crescente dos poderes concedidos</li>
                <li>Alterações físicas ou mentais permanentes</li>
                <li>Atração de outras entidades sobrenaturais hostis</li>
                <li>Obrigações perigosas ou moralmente questionáveis</li>
                <li>Degradação acelerada da sanidade</li>
              </ul>

              <div className="my-8 flex justify-start">
                <Button asChild className="bg-[#8E1616] hover:bg-[#D84040] text-[#EEEEEE]">
                  <Link href="/livro/mecanicas">
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Voltar para Mecânicas
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

function EntityCard({ 
  name, 
  type, 
  description, 
  imageUrl 
}: { 
  name: string; 
  type: string; 
  description: string; 
  imageUrl?: string;
}) {
  // Fallback para um placeholder se a imagem não for fornecida
  const imageSrc = imageUrl || `/placeholder.svg?height=100&width=100&text=${encodeURIComponent(name)}`;
  
  return (
    <Card className="bg-[#1D1616] border-[#8E1616] hover:border-[#D84040] transition-colors">
      <CardHeader className="pb-2">
        <CardTitle className="text-[#D84040]">{name}</CardTitle>
        <CardDescription className="text-[#EEEEEE]/70">{type}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center mb-4">
          <img src={imageSrc || "/placeholder.svg"} alt={name} className="h-24 w-24 object-contain" />
        </div>
        <p className="text-[#EEEEEE]">{description}</p>
      </CardContent>
    </Card>
  )
}
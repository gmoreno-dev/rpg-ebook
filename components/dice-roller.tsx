"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dice6 } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DiceRoller() {
  const [isOpen, setIsOpen] = useState(false)
  const [diceType, setDiceType] = useState("20")
  const [modifier, setModifier] = useState(0)
  const [result, setResult] = useState<number | null>(null)
  const [rolling, setRolling] = useState(false)
  const [rollHistory, setRollHistory] = useState<{ diceType: string; roll: number; modifier: number; total: number }[]>(
    [],
  )

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!isOpen || !result || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 200
    canvas.height = 200

    // Draw dice result with blood effect
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw circle background
    ctx.beginPath()
    ctx.arc(canvas.width / 2, canvas.height / 2, 70, 0, Math.PI * 2)
    ctx.fillStyle = "#1D1616"
    ctx.fill()
    ctx.strokeStyle = "#8E1616"
    ctx.lineWidth = 3
    ctx.stroke()

    // Draw result text
    ctx.font = "bold 60px serif"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillStyle = "#D84040"
    ctx.fillText(result.toString(), canvas.width / 2, canvas.height / 2)

    // Add blood drips
    const drips = Math.floor(Math.random() * 5) + 3
    for (let i = 0; i < drips; i++) {
      const angle = Math.random() * Math.PI * 2
      const distance = 60 + Math.random() * 10
      const x = canvas.width / 2 + Math.cos(angle) * distance
      const y = canvas.height / 2 + Math.sin(angle) * distance

      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x + Math.random() * 10 - 5, y + 20 + Math.random() * 30)
      ctx.lineTo(x - 5 + Math.random() * 10, y + 20 + Math.random() * 30)
      ctx.closePath()
      ctx.fillStyle = "rgba(142, 22, 22, 0.7)"
      ctx.fill()
    }
  }, [isOpen, result])

  const rollDice = () => {
    setRolling(true)

    // Simulate rolling animation
    const animationDuration = 1500 // 1.5 seconds
    const framesPerSecond = 15
    const totalFrames = animationDuration / (1000 / framesPerSecond)
    let currentFrame = 0

    const animateRoll = () => {
      if (currentFrame < totalFrames) {
        const randomRoll = Math.floor(Math.random() * Number.parseInt(diceType)) + 1
        setResult(randomRoll)
        currentFrame++
        setTimeout(animateRoll, 1000 / framesPerSecond)
      } else {
        // Final roll
        const finalRoll = Math.floor(Math.random() * Number.parseInt(diceType)) + 1
        setResult(finalRoll)
        setRolling(false)

        // Add to history
        setRollHistory((prev) => [
          {
            diceType,
            roll: finalRoll,
            modifier: modifier,
            total: finalRoll + modifier,
          },
          ...prev.slice(0, 4), // Keep only the last 5 rolls
        ])
      }
    }

    animateRoll()
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="bg-[#8E1616] hover:bg-[#D84040] text-[#EEEEEE] shadow-glow transition-all duration-300 transform hover:scale-105"
      >
        <Dice6 className="mr-2 h-4 w-4" />
        Rolar Dados
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-[#1D1616] border-[#8E1616] text-[#EEEEEE] shadow-glow">
          <DialogHeader>
            <DialogTitle className="text-[#D84040]">Rolador de Dados</DialogTitle>
            <DialogDescription className="text-[#EEEEEE]/70">
              Escolha o tipo de dado e o modificador para sua rolagem.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dice-type" className="text-[#EEEEEE]">
                  Tipo de Dado
                </Label>
                <Select value={diceType} onValueChange={setDiceType}>
                  <SelectTrigger id="dice-type" className="bg-[#1D1616] border-[#8E1616] text-[#EEEEEE]">
                    <SelectValue placeholder="Selecione o dado" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1D1616] border-[#8E1616] text-[#EEEEEE]">
                    <SelectItem value="4">D4</SelectItem>
                    <SelectItem value="6">D6</SelectItem>
                    <SelectItem value="8">D8</SelectItem>
                    <SelectItem value="10">D10</SelectItem>
                    <SelectItem value="12">D12</SelectItem>
                    <SelectItem value="20">D20</SelectItem>
                    <SelectItem value="100">D100</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="modifier" className="text-[#EEEEEE]">
                  Modificador
                </Label>
                <Input
                  id="modifier"
                  type="number"
                  value={modifier}
                  onChange={(e) => setModifier(Number.parseInt(e.target.value) || 0)}
                  className="bg-[#1D1616] border-[#8E1616] text-[#EEEEEE]"
                />
              </div>
            </div>

            <Button
              onClick={rollDice}
              disabled={rolling}
              className="bg-[#8E1616] hover:bg-[#D84040] text-[#EEEEEE] mt-2 transition-all duration-300"
            >
              {rolling ? "Rolando..." : "Rolar D" + diceType}
            </Button>

            {result !== null && (
              <div className="text-center p-4 border border-[#8E1616] rounded-lg bg-[#1D1616] relative overflow-hidden">
                <canvas ref={canvasRef} className="mx-auto" width="200" height="200" />
                <div className="text-sm text-[#EEEEEE]/70 mt-2">
                  Rolagem: {result} {modifier > 0 ? `+ ${modifier}` : modifier < 0 ? `- ${Math.abs(modifier)}` : ""}
                  <span className="block font-bold text-[#D84040]">Total: {result + modifier}</span>
                </div>
              </div>
            )}

            {rollHistory.length > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-medium text-[#D84040] mb-2">Histórico de Rolagens</h3>
                <div className="space-y-2 max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-[#8E1616] scrollbar-track-[#1D1616]">
                  {rollHistory.map((roll, index) => (
                    <div
                      key={index}
                      className="text-sm p-2 border border-[#8E1616] rounded-lg flex justify-between hover:bg-[#8E1616]/20 transition-colors duration-200"
                    >
                      <span>
                        D{roll.diceType}: {roll.roll}
                      </span>
                      <span>{roll.modifier > 0 ? `+${roll.modifier}` : roll.modifier < 0 ? roll.modifier : ""}</span>
                      <span className="font-bold text-[#D84040]">{roll.total}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}


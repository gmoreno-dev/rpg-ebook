"use client"

import { useEffect, useRef } from "react"

export default function BloodSplatter() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full window size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Draw blood splatters
    const drawSplatter = (x: number, y: number, size: number, opacity: number) => {
      const dropCount = Math.floor(Math.random() * 5) + 3

      for (let i = 0; i < dropCount; i++) {
        const dropSize = size * (Math.random() * 0.5 + 0.5)
        const angle = Math.random() * Math.PI * 2
        const distance = Math.random() * size * 2
        const dropX = x + Math.cos(angle) * distance
        const dropY = y + Math.sin(angle) * distance

        ctx.beginPath()
        ctx.arc(dropX, dropY, dropSize, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(142, 22, 22, ${opacity * (Math.random() * 0.3 + 0.7)})`
        ctx.fill()

        // Add drips
        if (Math.random() > 0.5) {
          const dripLength = dropSize * (Math.random() * 3 + 1)
          const dripWidth = dropSize * (Math.random() * 0.5 + 0.3)

          ctx.beginPath()
          ctx.moveTo(dropX, dropY)
          ctx.lineTo(dropX + Math.random() * dripWidth * 2 - dripWidth, dropY + dripLength)
          ctx.lineTo(dropX - Math.random() * dripWidth * 2 + dripWidth, dropY + dripLength)
          ctx.closePath()
          ctx.fillStyle = `rgba(142, 22, 22, ${opacity * (Math.random() * 0.3 + 0.4)})`
          ctx.fill()
        }
      }
    }

    // Create random splatters
    const splatterCount = 5

    for (let i = 0; i < splatterCount; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height * 0.3 // Only in top third
      const size = Math.random() * 15 + 5
      const opacity = Math.random() * 0.2 + 0.1 // Subtle

      drawSplatter(x, y, size, opacity)
    }

    // Add one larger splatter in a corner
    drawSplatter(canvas.width * 0.9, canvas.height * 0.1, 30, 0.3)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
}


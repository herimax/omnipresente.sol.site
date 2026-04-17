"use client"

import { useState } from "react"
import { Copy, Check, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"

const SOLANA_ADDRESS = "omnipresente.sol"
const solanaPayUrl = `solana:omnipresente.sol?amount=0.01&label=Tip%20a%20Herimax&message=Gracias%20por%20apoyar%20mi%20poes%C3%ADa%20y%20m%C3%BAsica`

export function SolanaTip() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SOLANA_ADDRESS)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <section className="w-full mt-10" aria-label="Apóyame con Solana">
      <h2 className="text-xl font-bold text-foreground text-center mb-4">Apoyame con Solana</h2>
      
      <p className="text-sm text-foreground/90 text-center leading-relaxed mb-6">
        Si mis versos, mi musica o mi presencia te acompanan, puedes apoyarme directamente con SOL o USDC. Gracias totales
      </p>

      <div className="flex flex-col items-center gap-4">
        {/* SNS Name Display */}
        <div className="px-4 py-2 rounded-full bg-card/50 border border-border/50">
          <span className="font-mono text-sm text-primary">
            {SOLANA_ADDRESS}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
          {/* Primary: Solana Pay Button */}
          <Button
            asChild
            className="flex-1 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <a href={solanaPayUrl}>
              <Wallet className="w-4 h-4" />
              Tip with Solana Pay
            </a>
          </Button>

          {/* Secondary: Copy Button */}
          <Button
            variant="outline"
            onClick={handleCopy}
            className="flex-1 gap-2 border-border/50 hover:border-primary/50 hover:bg-card"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-500" />
                Copiado!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copiar direccion
              </>
            )}
          </Button>
        </div>

        {/* Helper text */}
        <p className="text-xs text-muted-foreground text-center max-w-sm mt-2 leading-relaxed">
          Abre con Phantom, Solflare o cualquier wallet Solana. Tambien puedes enviar cualquier cantidad directamente a omnipresente.sol
        </p>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Copy, Check, Wallet } from "lucide-react"

const SOLANA_ADDRESS = "omnipresente.sol"
const ETHEREUM_ADDRESS = "0x4090f1eb674317fec844b354e26ce232b0cf0fbf"

export function SolanaTip() {
  const [copiedSolana, setCopiedSolana] = useState(false)
  const [copiedEth, setCopiedEth] = useState(false)

  const handleCopySolana = async () => {
    try {
      await navigator.clipboard.writeText(SOLANA_ADDRESS)
      setCopiedSolana(true)
      setTimeout(() => setCopiedSolana(false), 2000)
    } catch (err) {
      console.error("[v0] Failed to copy Solana address:", err)
    }
  }

  const handleCopyEth = async () => {
    try {
      await navigator.clipboard.writeText(ETHEREUM_ADDRESS)
      setCopiedEth(true)
      setTimeout(() => setCopiedEth(false), 2000)
    } catch (err) {
      console.error("[v0] Failed to copy Ethereum address:", err)
    }
  }

  return (
    <section className="w-full mt-10" aria-label="Apóyame">
      <h2 className="text-xl font-bold text-foreground text-center mb-4">Apoyame</h2>
      
      <p className="text-sm text-foreground/90 text-center leading-relaxed mb-8">
        Si mis versos, mi musica o mi presencia te acompanan, puedes apoyarme directamente. Gracias totales 🦉
      </p>

      <div className="flex flex-col items-center gap-8">
        {/* Solana Section */}
        <div className="w-full flex flex-col items-center gap-3">
          <h3 className="text-sm font-semibold text-foreground/80">Solana</h3>
          <div className="px-4 py-2 rounded-lg bg-card/50 border border-border/50">
            <span className="font-mono text-xs text-primary/80">
              {SOLANA_ADDRESS}
            </span>
          </div>
          <button
            onClick={handleCopySolana}
            className="px-6 py-2 rounded-lg bg-primary/10 border border-primary/30 hover:bg-primary/20 transition-colors flex items-center gap-2 text-sm text-primary"
          >
            {copiedSolana ? (
              <>
                <Check className="w-4 h-4" />
                Copiado!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copiar
              </>
            )}
          </button>
        </div>

        {/* Ethereum Section */}
        <div className="w-full flex flex-col items-center gap-3">
          <h3 className="text-sm font-semibold text-foreground/80">Ethereum</h3>
          <div className="px-4 py-2 rounded-lg bg-card/50 border border-border/50 max-w-xs">
            <span className="font-mono text-xs text-primary/80 break-all">
              {ETHEREUM_ADDRESS}
            </span>
          </div>
          <button
            onClick={handleCopyEth}
            className="px-6 py-2 rounded-lg bg-primary/10 border border-primary/30 hover:bg-primary/20 transition-colors flex items-center gap-2 text-sm text-primary"
          >
            {copiedEth ? (
              <>
                <Check className="w-4 h-4" />
                Copiado!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copiar
              </>
            )}
          </button>
        </div>
      </div>

      <p className="text-xs text-muted-foreground text-center mt-8 leading-relaxed">
        Abre con tu wallet favorito de Solana o Ethereum y envia cualquier cantidad
      </p>
    </section>
  )
}

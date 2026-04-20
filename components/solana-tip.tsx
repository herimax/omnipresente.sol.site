"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { useTranslation, type Language } from "@/lib/translations"

const SOLANA_ADDRESS = "omnipresente.sol"
const ETHEREUM_ADDRESS = "0x4090f1eb674317fec844b354e26ce232b0cf0fbf"

interface SolanaTipProps {
  language?: Language
}

export function SolanaTip({ language = 'es' }: SolanaTipProps) {
  const t = useTranslation(language)
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
    <section className="w-full mt-10" aria-label={t.supportMe}>
      <h2 className="text-2xl font-bold text-foreground text-center mb-3">{t.supportMe}</h2>
      
      <p className="text-sm text-foreground/90 text-center leading-relaxed mb-10 max-w-2xl mx-auto">
        {t.supportText}
      </p>

      {/* Three Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Card 1: Solana */}
        <div className="p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm flex flex-col items-center gap-4">
          <h3 className="text-lg font-semibold text-primary">{t.solanaName}</h3>
          <div className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50">
            <span className="font-mono text-xs text-foreground/70 block text-center break-all">
              {SOLANA_ADDRESS}
            </span>
          </div>
          <button
            onClick={handleCopySolana}
            className="w-full px-4 py-2 rounded-lg bg-emerald-500/20 border border-emerald-500/50 hover:bg-emerald-500/30 transition-colors flex items-center justify-center gap-2 text-sm text-emerald-400 font-medium"
          >
            {copiedSolana ? (
              <>
                <Check className="w-4 h-4" />
                {t.copied}
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                {t.copyButton}
              </>
            )}
          </button>
        </div>

        {/* Card 2: Ethereum */}
        <div className="p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm flex flex-col items-center gap-4">
          <h3 className="text-lg font-semibold text-primary">{t.ethereumName}</h3>
          <div className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50">
            <span className="font-mono text-xs text-foreground/70 block text-center break-all">
              {ETHEREUM_ADDRESS}
            </span>
          </div>
          <button
            onClick={handleCopyEth}
            className="w-full px-4 py-2 rounded-lg bg-emerald-500/20 border border-emerald-500/50 hover:bg-emerald-500/30 transition-colors flex items-center justify-center gap-2 text-sm text-emerald-400 font-medium"
          >
            {copiedEth ? (
              <>
                <Check className="w-4 h-4" />
                {t.copied}
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                {t.copyEth}
              </>
            )}
          </button>
        </div>

        {/* Card 3: Ko-fi */}
        <div className="md:col-span-1 flex flex-col items-center gap-4">
          <h3 className="text-lg font-semibold text-foreground text-center">{t.kofiPay}</h3>
          <a
            href="https://ko-fi.com/herimax/tip"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full group"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-300">
              <img
                src="/kofi-banner.jpg"
                alt="Support Herimax on Ko-fi"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          </a>
        </div>
      </div>

      {/* Footer Text */}
      <p className="text-xs text-muted-foreground text-center leading-relaxed px-4">
        {t.sendDirect}
      </p>
    </section>
  )
}

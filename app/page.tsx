'use client'

import { useState } from 'react'
import { ProfileHeader } from "@/components/profile-header"
import { YouTubeEmbed } from "@/components/youtube-embed"
import { LinkCard } from "@/components/link-card"
import { SolanaIcon, MusicIcon, PlaylistIcon, NearIcon, TortoiseIcon } from "@/components/social-icons"
import { FloatingDecorations } from "@/components/decorations"
import { SolanaTip } from "@/components/solana-tip"
import { LanguageSelector } from "@/components/language-selector"
import { useTranslation, type Language } from "@/lib/translations"
import { Feather } from "lucide-react"

// ========================================
// TU INFORMACION
// ========================================

const profile = {
  name: "Herimax",
  username: "omnipresente.sol",
  bio: "Poetry writer | 🎵 AI Music | 🌍 Crypto\n\nPassionate explorer of technology, Bitcoin and NFTs, weaving verses into sound, building trust in Web3, Rootstocker, web3 Music Collector.",
  avatarUrl: "/avatar.png",
  socials: {
    twitter: "https://x.com/Maximio79",
    youtube: "https://youtube.com/@herimax7",
    farcaster: "https://farcaster.xyz/herimax",
    telegram: "https://t.me/+CzVuvXbzp3IzZWMx",
  }
}

const links = [
  {
    title: "Me perdí de ti - Mi primera canción en Tortoise",
    url: "https://tortoise.studio/song/me-perd-de-t",
    icon: <TortoiseIcon className="w-5 h-5" />,
  },
  {
    title: "Mi música en Near.fm",
    url: "https://near.fm/profile/herimax.near",
    icon: <NearIcon className="w-5 h-5" />,
  },
]

// ========================================
// TABLON DE VERSOS
// ========================================

const versos = [
  // ← Agrega más versos aquí duplicando el objeto en el array "versos"
  {
    texto: `"Todos tenemos un precio que hay que pagar
siempre tocamos el lodo antes de avanzar
un sacrificio que lamentar y no lo puedes 
controlar, el camino sigue, pero ligero
y despojado en lo material, en lo espiritual 
puedo conectar con mi elemento natural"`,
  },
  {
    texto: `"Me frustra tanto tomar acciones,
el universo se me cae en decisiones.
El tiempo corre, afrontar las condiciones,
el miedo aparece debajo de mi piel,
sufriendo y hablando con mi sombra,
admitiendo mis errores en la zozobra"`,
  },
  {
    texto: `"Escorpio no pares
Que tu pasión no quiero perder 
Tus labios oscuros son mis señales
Tu magnetismo no puedo entender 
Tu impulso, me arde
Desde lo profundo, psique y placer
Envenenados somos letales
Pero al final, ¿quién va a ceder?
Pero al final, ¿quién va a ceder?
Pero al final, ¿quién va a ceder?"`,
  },
  {
    texto: `"Pero sin querer, yo te empecé a ghostear,
en mí no busques el diálogo de una ilusión, ¡qué estupidez!
Y no es inmadurez,
hablar desde el silencio que como crítica fría e indirecta se confiesa.

Perdón, es mi naturaleza...
cortar este lazo con total firmeza,
sacarte de una vez de mi cabeza,
porque mereces amor con nobleza,
y no las sobras de tu mesa"`,
  },
]

// ========================================

export default function LinktreePage() {
  const [language, setLanguage] = useState<Language>('es')
  const t = useTranslation(language)

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <LanguageSelector language={language} onLanguageChange={setLanguage} />
      
      {/* Floating owls, scrolls and quills decoration */}
      <FloatingDecorations />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 py-12 md:py-16 max-w-md mx-auto">
        {/* Profile Header */}
        <ProfileHeader
          name={profile.name}
          username={profile.username}
          bio={profile.bio}
          avatarUrl={profile.avatarUrl}
          socials={profile.socials}
        />

        {/* Links Section */}
        <section className="w-full mt-8 space-y-3" aria-label="Enlaces">
          {links.map((link, index) => (
            <LinkCard
              key={index}
              title={link.title}
              url={link.url}
              icon={link.icon}
            />
          ))}
        </section>

        {/* Playlist Section */}
        <section className="w-full mt-8" aria-label="Playlist">
          <div className="flex items-center gap-2 mb-4">
            <PlaylistIcon className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">{t.playlist}</h2>
          </div>
          <a
            href="https://youtube.com/playlist?list=PLBU60ByNyJxXEPdHopC8ctkwcQXY8Rqko&si=-ecBV-8P6JFa0ICH"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full p-4 rounded-xl bg-card/50 border border-border/50 hover:bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="aspect-video rounded-lg overflow-hidden bg-muted mb-3">
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=PLBU60ByNyJxXEPdHopC8ctkwcQXY8Rqko"
                title="Astroemociones Playlist"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center">{t.viewPlaylist}</p>
          </a>
        </section>

        {/* Video Section */}
        <section className="w-full mt-8" aria-label="Videos destacados">
          <div className="flex items-center gap-2 mb-4">
            <MusicIcon className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">{t.videoHighlight}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <YouTubeEmbed 
              videoId="yGsYL2pdM20" 
              title="Video de Herimax" 
            />
            <YouTubeEmbed 
              videoId="DU_pXvUvyJQ" 
              title="Video de Herimax" 
            />
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-border/50 mt-12" />

        {/* About Me Section */}
        <section className="w-full mt-10" aria-label="About Me">
          <h2 className="text-xl font-bold text-foreground text-center mb-6">{t.aboutMe}</h2>
          
          {/* Owl Poet Image */}
          <div className="flex justify-center mb-8">
            <div className="relative p-1 rounded-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent">
              <div className="p-0.5 rounded-full bg-card/80 backdrop-blur-sm border border-border/50">
                <img 
                  src="/about-owl.png" 
                  alt="El poeta buho escribiendo versos a la luz de las velas"
                  className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-sm text-foreground/90 leading-relaxed space-y-4">
            <p>
              {t.aboutMeText1}
            </p>
            <p>
              {t.aboutMeText2}
            </p>
            <p>
              {t.aboutMeText3}
            </p>
            <p>
              {t.aboutMeText4}
            </p>
            <p>
              {t.aboutMeText5}
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-border/50 mt-12" />

        {/* Solana Tip Section */}
        <SolanaTip language={language} />

        {/* Divider */}
        <div className="w-full h-px bg-border/50 mt-12" />

        {/* Tablon de Versos Section */}
        <section className="w-full mt-10" aria-label="Tablón de Versos">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Feather className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-foreground">{t.versesBoard}</h2>
          </div>
          <p className="text-sm text-muted-foreground text-center mb-8">
            {t.versesBoardSubtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {versos.map((verso, index) => (
              <article 
                key={index} 
                className="p-6 rounded-xl bg-card/30 border border-border/30 backdrop-blur-sm"
              >
                <p className="text-foreground/90 text-center text-sm leading-relaxed whitespace-pre-line font-light italic">
                  {verso.texto}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-border/50 mt-12" />

        {/* Footer */}
        <footer className="mt-12 flex flex-col items-center gap-4">
          {/* Powered by badge */}
          <a
            href="https://sns.id"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            <SolanaIcon className="w-4 h-4" />
            <span>{t.poweredBy}</span>
          </a>
          
          {/* Domain badge */}
          <div className="px-4 py-2 rounded-full bg-card/50 border border-border/50">
            <span className="font-mono text-xs text-muted-foreground">
              omnipresente.sol.site
            </span>
          </div>
        </footer>
      </div>
    </main>
  )
}

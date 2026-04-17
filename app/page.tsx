import { ProfileHeader } from "@/components/profile-header"
import { YouTubeEmbed } from "@/components/youtube-embed"
import { LinkCard } from "@/components/link-card"
import { SolanaIcon, MusicIcon, PlaylistIcon, NearIcon, TortoiseIcon } from "@/components/social-icons"
import { FloatingDecorations } from "@/components/decorations"
import { SolanaTip } from "@/components/solana-tip"
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
]

// ========================================

export default function LinktreePage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
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
            <h2 className="text-lg font-semibold text-foreground">Mi nueva playlist de 4 canciones increíbles de mi puño y letra, Astroemociones</h2>
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
            <p className="text-sm text-muted-foreground text-center">Ver playlist completa en YouTube</p>
          </a>
        </section>

        {/* Video Section */}
        <section className="w-full mt-8" aria-label="Video destacado">
          <div className="flex items-center gap-2 mb-4">
            <MusicIcon className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Video destacado</h2>
          </div>
          <YouTubeEmbed 
            videoId="yGsYL2pdM20" 
            title="Video de Herimax" 
          />
        </section>
        
{/* ==================== SECCIÓN APÓYAME - SIMPLIFICADA ==================== */}
      <section className="py-16 border-t border-gray-800">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-3">Apóyame</h2>
          <p className="text-center text-gray-400 mb-10 text-lg">
            Si mis versos, mi música o mi presencia te acompañan,<br />
            puedes apoyarme directamente. Gracias por el amor ❤️
          </p>

          <div className="space-y-6">
            {/* Solana Name Service */}
            <div className="bg-zinc-900/50 border border-zinc-700 rounded-3xl p-6 text-center">
              <p className="text-sm text-gray-400 mb-2">Nombre Solana</p>
              <p className="font-mono text-xl text-white mb-4">omnipresente.sol</p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('omnipresente.sol');
                  // Feedback simple (puedes mejorar después)
                  const btn = document.getElementById('copy-sol');
                  if (btn) btn.textContent = '¡Copiado!';
                  setTimeout(() => { if (btn) btn.textContent = 'Copiar omnipresente.sol'; }, 2000);
                }}
                id="copy-sol"
                className="w-full bg-white text-black font-medium py-4 px-6 rounded-2xl hover:bg-gray-200 transition-colors"
              >
                Copiar omnipresente.sol
              </button>
            </div>

            {/* Ethereum */}
            <div className="bg-zinc-900/50 border border-zinc-700 rounded-3xl p-6 text-center">
              <p className="text-sm text-gray-400 mb-2">Ethereum (ETH / cualquier token)</p>
              <p className="font-mono text-[15px] text-white break-all mb-4">
                0x4090f1eb674317fec844b354e26ce232b0cf0fbf
              </p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('0x4090f1eb674317fec844b354e26ce232b0cf0fbf');
                  const btn = document.getElementById('copy-eth');
                  if (btn) btn.textContent = '¡Copiado!';
                  setTimeout(() => { if (btn) btn.textContent = 'Copiar dirección ETH'; }, 2000);
                }}
                id="copy-eth"
                className="w-full bg-white text-black font-medium py-4 px-6 rounded-2xl hover:bg-gray-200 transition-colors"
              >
                Copiar dirección ETH
              </button>
            </div>
          </div>

          <p className="text-center text-xs text-gray-500 mt-10">
            Usa Phantom, Solflare, MetaMask o cualquier wallet.<br />
            Envía cualquier cantidad, sin monto mínimo.
          </p>
        </div>
      </section>
      {/* ==================== FIN SECCIÓN APÓYAME ==================== */}
        {/* Divider */}
        <div className="w-full h-px bg-border/50 mt-12" />

        {/* About Me Section */}
        <section className="w-full mt-10" aria-label="About Me">
          <h2 className="text-xl font-bold text-foreground text-center mb-6">About Me</h2>
          
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
              Soy <strong className="text-foreground">Herimax</strong>, conocido como <strong className="text-foreground">El Omnipresente</strong>.
            </p>
            <p>
              Poeta desde hace mas de 20 años, llevo tejiendo versos mucho antes de que el mundo digital existiera. Desde 2019 estoy inmerso en el universo cripto, donde encontre un nuevo lienzo para crear.
            </p>
            <p>
              Me dedico a la creacion de contenido y, ultimamente, a transformar mis letras en musica con inteligencia artificial: el encuentro perfecto entre alma analogica y tecnologia artificial.
            </p>
            <p>
              Desde 2022 mi presencia se ha multiplicado en comunidades afines, convirtiendome en ese hilo invisible que conecta ideas, personas y momentos.
            </p>
            <p>
              Aqui sigo: ligero de lo material, conectado con mi elemento natural.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-border/50 mt-12" />

        {/* Solana Tip Section */}
        <SolanaTip />

        {/* Divider */}
        <div className="w-full h-px bg-border/50 mt-12" />

        {/* Tablon de Versos Section */}
        <section className="w-full mt-10" aria-label="Tablón de Versos">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Feather className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-foreground">Tablón de Versos</h2>
          </div>
          <p className="text-sm text-muted-foreground text-center mb-8">
            Espacio para mis poemas, reflexiones y citas que resuenan
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
            <span>Powered by sol.site</span>
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

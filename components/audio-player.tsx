'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause } from 'lucide-react'

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.muted = false
        audioRef.current.play().catch(err => {
          console.log('[v0] Audio play error:', err.message)
        })
        setIsPlaying(true)
      }
    }
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)

    return () => {
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
    }
  }, [])

  // Intentar reproducir muteado para pasar políticas de autoplay
  useEffect(() => {
    const attemptMutedAutoplay = async () => {
      if (audioRef.current) {
        audioRef.current.muted = true
        try {
          const playPromise = audioRef.current.play()
          if (playPromise !== undefined) {
            await playPromise
            console.log('[v0] Muted autoplay successful')
            // Desmuteamos después de que inicie
            setTimeout(() => {
              if (audioRef.current) {
                audioRef.current.muted = false
              }
            }, 300)
          }
        } catch (err) {
          console.log('[v0] Autoplay blocked - tap play button to start')
        }
      }
    }

    attemptMutedAutoplay()
  }, [])

  return (
    <>
      <audio
        ref={audioRef}
        src="/omnipresente-v2.mp3"
        crossOrigin="anonymous"
        controlsList="nodownload"
        loop
      />
      
      {/* Botón flotante - siempre visible */}
      <button
        onClick={togglePlayPause}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full border-2 border-primary/60 bg-background/90 backdrop-blur-sm hover:border-primary hover:bg-primary/10 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl hover:scale-110"
        aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
        title={isPlaying ? 'Pausar' : 'Reproducir'}
      >
        {isPlaying ? (
          <Pause className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
        ) : (
          <Play className="w-6 h-6 text-primary ml-0.5 group-hover:scale-110 transition-transform" />
        )}
      </button>
    </>
  )
}

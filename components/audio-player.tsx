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
        audioRef.current.play().catch(err => {
          console.log('[v0] Audio play error:', err)
        })
        setIsPlaying(true)
      }
    }
  }

  useEffect(() => {
    const handlePlayPause = () => {
      setIsPlaying(true)
    }

    const handlePause = () => {
      setIsPlaying(false)
    }

    const audio = audioRef.current
    if (audio) {
      audio.addEventListener('play', handlePlayPause)
      audio.addEventListener('pause', handlePause)

      return () => {
        audio.removeEventListener('play', handlePlayPause)
        audio.removeEventListener('pause', handlePause)
      }
    }
  }, [])

  return (
    <div className="flex items-center justify-center">
      <audio
        ref={audioRef}
        src="/omnipresente-v2.mp3"
        crossOrigin="anonymous"
        controlsList="nodownload"
      />
      
      <button
        onClick={togglePlayPause}
        className="w-16 h-16 rounded-full border-2 border-primary/50 hover:border-primary transition-all duration-300 flex items-center justify-center hover:bg-primary/5 group"
        aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
      >
        {isPlaying ? (
          <Pause className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors" />
        ) : (
          <Play className="w-6 h-6 text-primary ml-0.5 group-hover:text-primary/80 transition-colors" />
        )}
      </button>
    </div>
  )
}

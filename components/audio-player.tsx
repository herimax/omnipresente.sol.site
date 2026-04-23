'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause } from 'lucide-react'

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isFloating, setIsFloating] = useState(false)

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

  // Autoplay when component mounts
  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        // Allow autoplay by checking browser policy
        audioRef.current.muted = true
        try {
          await audioRef.current.play()
          // Try to unmute after starting
          setTimeout(() => {
            if (audioRef.current) {
              audioRef.current.muted = false
            }
          }, 100)
          setIsPlaying(true)
        } catch (err) {
          console.log('[v0] Autoplay policy restriction')
        }
      }
    }

    // Small delay to ensure audio element is ready
    const timer = setTimeout(playAudio, 300)
    return () => clearTimeout(timer)
  }, [])

  // Handle scroll to show floating button
  useEffect(() => {
    const handleScroll = () => {
      setIsFloating(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <audio
        ref={audioRef}
        src="/omnipresente-v2.mp3"
        crossOrigin="anonymous"
        controlsList="nodownload"
      />
      
      {/* Floating button - appears on scroll */}
      {isFloating && (
        <button
          onClick={togglePlayPause}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full border-2 border-primary/60 bg-background/80 backdrop-blur-sm hover:border-primary hover:bg-primary/10 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
          aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
          ) : (
            <Play className="w-5 h-5 text-primary ml-0.5 group-hover:scale-110 transition-transform" />
          )}
        </button>
      )}
    </>
  )
}

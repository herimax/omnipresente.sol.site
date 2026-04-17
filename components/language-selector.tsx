'use client'

import { useState, useRef, useEffect } from 'react'
import { Globe, ChevronUp } from 'lucide-react'
import type { Language } from '@/lib/translations'

const languages: { code: Language; name: string; fullName: string }[] = [
  { code: 'es', name: 'ES', fullName: 'Español' },
  { code: 'en', name: 'US', fullName: 'English' },
  { code: 'pt', name: 'PT', fullName: 'Português' },
  { code: 'fr', name: 'FR', fullName: 'Français' },
  { code: 'zh', name: 'CN', fullName: '中文' },
  { code: 'ko', name: 'KR', fullName: '한국어' },
]

interface LanguageSelectorProps {
  language: Language
  onLanguageChange: (lang: Language) => void
}

export function LanguageSelector({ language, onLanguageChange }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const currentLang = languages.find((l) => l.code === language)

  return (
    <div ref={menuRef} className="fixed top-4 right-4 z-50">
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors"
      >
        <Globe className="w-5 h-5 text-primary" />
        <span className="text-sm font-medium text-foreground">{currentLang?.name}</span>
        <ChevronUp
          className={`w-4 h-4 text-foreground transition-transform duration-200 ${
            isOpen ? 'rotate-0' : 'rotate-180'
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-12 right-0 mt-2 rounded-2xl bg-card/90 backdrop-blur-sm border border-border/50 overflow-hidden shadow-lg">
          {languages.map((lang, index) => (
            <button
              key={lang.code}
              onClick={() => {
                onLanguageChange(lang.code)
                setIsOpen(false)
              }}
              className={`w-full px-6 py-4 flex items-center gap-3 text-left transition-colors duration-200 ${
                language === lang.code
                  ? 'bg-primary/20 border-b border-border/30 text-primary'
                  : 'bg-background/50 hover:bg-background/80'
              } ${index !== languages.length - 1 && language !== lang.code ? 'border-b border-border/20' : ''}`}
            >
              <span className="text-xs font-semibold text-muted-foreground min-w-8">{lang.name}</span>
              <span className="text-sm font-medium text-foreground">{lang.fullName}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

'use client'

import { useState } from 'react'
import type { Language } from '@/lib/translations'

const languages: { code: Language; name: string }[] = [
  { code: 'es', name: 'ES' },
  { code: 'en', name: 'EN' },
  { code: 'pt', name: 'PT' },
  { code: 'fr', name: 'FR' },
  { code: 'zh', name: '中文' },
  { code: 'ko', name: '한국' },
]

interface LanguageSelectorProps {
  language: Language
  onLanguageChange: (lang: Language) => void
}

export function LanguageSelector({ language, onLanguageChange }: LanguageSelectorProps) {
  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-1 p-1 rounded-full bg-card/80 backdrop-blur-sm border border-border/50">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onLanguageChange(lang.code)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
            language === lang.code
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  )
}

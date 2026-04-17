"use client"

export function OwlDecoration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Owl body */}
      <ellipse cx="32" cy="38" rx="18" ry="20" className="fill-primary/10 stroke-primary/30" strokeWidth="1" />
      {/* Owl head */}
      <circle cx="32" cy="22" r="14" className="fill-primary/10 stroke-primary/30" strokeWidth="1" />
      {/* Ears/tufts */}
      <path d="M20 12 L24 20 L18 18 Z" className="fill-primary/20" />
      <path d="M44 12 L40 20 L46 18 Z" className="fill-primary/20" />
      {/* Eyes */}
      <circle cx="26" cy="22" r="5" className="fill-background stroke-primary/40" strokeWidth="1" />
      <circle cx="38" cy="22" r="5" className="fill-background stroke-primary/40" strokeWidth="1" />
      <circle cx="26" cy="22" r="2" className="fill-primary/60" />
      <circle cx="38" cy="22" r="2" className="fill-primary/60" />
      {/* Beak */}
      <path d="M32 26 L29 30 L32 32 L35 30 Z" className="fill-primary/30" />
      {/* Wings */}
      <path d="M14 35 Q8 45 16 55" className="stroke-primary/20" strokeWidth="1.5" fill="none" />
      <path d="M50 35 Q56 45 48 55" className="stroke-primary/20" strokeWidth="1.5" fill="none" />
      {/* Feather details */}
      <path d="M22 40 Q32 38 42 40" className="stroke-primary/15" strokeWidth="1" fill="none" />
      <path d="M24 46 Q32 44 40 46" className="stroke-primary/15" strokeWidth="1" fill="none" />
    </svg>
  )
}

export function ScrollDecoration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Scroll paper */}
      <path
        d="M8 8 L8 56 Q8 60 12 60 L36 60 Q40 60 40 56 L40 8 Q40 4 36 4 L12 4 Q8 4 8 8 Z"
        className="fill-primary/5 stroke-primary/20"
        strokeWidth="1"
      />
      {/* Top curl */}
      <path
        d="M6 10 Q4 6 8 4 Q12 2 14 6"
        className="stroke-primary/25"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Bottom curl */}
      <path
        d="M42 54 Q44 58 40 60 Q36 62 34 58"
        className="stroke-primary/25"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Text lines */}
      <line x1="14" y1="16" x2="34" y2="16" className="stroke-primary/15" strokeWidth="1" />
      <line x1="14" y1="22" x2="30" y2="22" className="stroke-primary/15" strokeWidth="1" />
      <line x1="14" y1="28" x2="32" y2="28" className="stroke-primary/15" strokeWidth="1" />
      <line x1="14" y1="34" x2="28" y2="34" className="stroke-primary/15" strokeWidth="1" />
      <line x1="14" y1="40" x2="34" y2="40" className="stroke-primary/15" strokeWidth="1" />
      <line x1="14" y1="46" x2="26" y2="46" className="stroke-primary/15" strokeWidth="1" />
    </svg>
  )
}

export function QuillDecoration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Feather */}
      <path
        d="M16 4 Q8 20 10 40 Q12 50 14 56 L16 60 L18 56 Q20 50 22 40 Q24 20 16 4 Z"
        className="fill-primary/10 stroke-primary/25"
        strokeWidth="1"
      />
      {/* Feather spine */}
      <line x1="16" y1="8" x2="16" y2="58" className="stroke-primary/30" strokeWidth="1" />
      {/* Feather details */}
      <path d="M16 15 Q12 18 10 22" className="stroke-primary/15" strokeWidth="0.5" fill="none" />
      <path d="M16 15 Q20 18 22 22" className="stroke-primary/15" strokeWidth="0.5" fill="none" />
      <path d="M16 25 Q11 28 10 34" className="stroke-primary/15" strokeWidth="0.5" fill="none" />
      <path d="M16 25 Q21 28 22 34" className="stroke-primary/15" strokeWidth="0.5" fill="none" />
      <path d="M16 38 Q13 42 12 48" className="stroke-primary/15" strokeWidth="0.5" fill="none" />
      <path d="M16 38 Q19 42 20 48" className="stroke-primary/15" strokeWidth="0.5" fill="none" />
      {/* Quill tip */}
      <path d="M15 58 L16 64 L17 58" className="fill-primary/30" />
    </svg>
  )
}

export function FloatingDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Background glow effects */}
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl" />
      
      {/* Floating owls */}
      <OwlDecoration className="absolute top-20 left-4 w-12 h-12 opacity-40 animate-pulse" />
      <OwlDecoration className="absolute top-1/3 right-2 w-10 h-10 opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
      <OwlDecoration className="absolute bottom-40 left-2 w-8 h-8 opacity-25 animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Floating scrolls */}
      <ScrollDecoration className="absolute top-32 right-6 w-8 h-12 opacity-35 animate-pulse" style={{ animationDelay: '0.5s' }} />
      <ScrollDecoration className="absolute top-2/3 left-6 w-6 h-10 opacity-25 animate-pulse" style={{ animationDelay: '1.5s' }} />
      <ScrollDecoration className="absolute bottom-60 right-4 w-7 h-11 opacity-30 animate-pulse" style={{ animationDelay: '2.5s' }} />
      
      {/* Floating quills */}
      <QuillDecoration className="absolute top-48 left-8 w-5 h-10 opacity-30 rotate-12 animate-pulse" style={{ animationDelay: '0.7s' }} />
      <QuillDecoration className="absolute top-1/2 right-8 w-4 h-8 opacity-25 -rotate-12 animate-pulse" style={{ animationDelay: '1.7s' }} />
      <QuillDecoration className="absolute bottom-32 left-4 w-4 h-8 opacity-20 rotate-6 animate-pulse" style={{ animationDelay: '2.2s' }} />
    </div>
  )
}

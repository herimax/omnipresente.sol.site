"use client"

import { cn } from "@/lib/utils"
import { ExternalLink } from "lucide-react"

interface LinkCardProps {
  title: string
  url: string
  icon?: React.ReactNode
  className?: string
}

export function LinkCard({ title, url, icon, className }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex items-center gap-4 w-full px-6 py-4",
        "bg-card/50 backdrop-blur-sm border border-border/50",
        "rounded-xl transition-all duration-300",
        "hover:bg-card hover:border-primary/50 hover:scale-[1.02]",
        "hover:shadow-lg hover:shadow-primary/10",
        "focus:outline-none focus:ring-2 focus:ring-primary/50",
        className
      )}
    >
      {icon && (
        <span className="flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors">
          {icon}
        </span>
      )}
      <span className="flex-1 font-medium text-foreground">{title}</span>
      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
    </a>
  )
}

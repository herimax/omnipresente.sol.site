import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SocialIcon, XIcon, YouTubeIcon, FarcasterIcon, TelegramIcon } from "./social-icons"

interface ProfileHeaderProps {
  name: string
  username: string
  bio: string
  avatarUrl?: string
  socials?: {
    twitter?: string
    youtube?: string
    farcaster?: string
    telegram?: string
  }
}

export function ProfileHeader({ 
  name, 
  username, 
  bio, 
  avatarUrl,
  socials 
}: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center space-y-4">
      {/* Avatar with glow effect */}
      <div className="relative">
        <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl scale-110" />
        <Avatar className="relative w-24 h-24 border-2 border-primary/50">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback className="text-2xl bg-card">
            {name.split(' ').map(n => n[0]).join('').toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Name and username */}
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-foreground">{name}</h1>
        <p className="text-primary font-mono text-sm">@{username}</p>
      </div>

      {/* Bio */}
      <p className="text-muted-foreground max-w-xs text-sm leading-relaxed whitespace-pre-line">
        {bio}
      </p>

      {/* Social Icons */}
      {socials && (
        <div className="flex items-center gap-3 pt-2">
          {socials.twitter && (
            <SocialIcon href={socials.twitter} icon={<XIcon />} label="X (Twitter)" />
          )}
          {socials.youtube && (
            <SocialIcon href={socials.youtube} icon={<YouTubeIcon />} label="YouTube" />
          )}
          {socials.farcaster && (
            <SocialIcon href={socials.farcaster} icon={<FarcasterIcon />} label="Farcaster" />
          )}
          {socials.telegram && (
            <SocialIcon href={socials.telegram} icon={<TelegramIcon />} label="Telegram" />
          )}
        </div>
      )}
    </header>
  )
}

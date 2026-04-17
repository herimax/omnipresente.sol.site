interface YouTubeEmbedProps {
  videoId: string
  title?: string
}

export function YouTubeEmbed({ videoId, title = "Video de YouTube" }: YouTubeEmbedProps) {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="relative w-full aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  )
}

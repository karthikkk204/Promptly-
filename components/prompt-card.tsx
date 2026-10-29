import Image from 'next/image'
import type { PromptItem } from '@/lib/prompts'

type PromptCardProps = {
  item: PromptItem
  onOpen: (item: PromptItem) => void
}

export function PromptCard({ item, onOpen }: PromptCardProps) {
  return (
    <article className="mb-4 break-inside-avoid">
      <button
        type="button"
        onClick={() => onOpen(item)}
        className="group block w-full overflow-hidden rounded-xl border border-border bg-card text-left transition-colors hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <div className="relative overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            width={768}
            height={1152}
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-2 top-2 rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium backdrop-blur">
            {item.category}
          </span>
        </div>
        <div className="flex flex-col gap-1.5 p-3">
          <h2 className="text-sm font-semibold leading-snug text-balance">{item.title}</h2>
          <p className="line-clamp-3 text-xs leading-relaxed text-muted-foreground">
            {item.prompt}
          </p>
        </div>
      </button>
    </article>
  )
}

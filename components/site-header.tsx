import { Sparkles } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="size-4" aria-hidden="true" />
          </span>
          <span className="text-lg font-semibold tracking-tight">Promptly</span>
        </a>
        <p className="hidden text-sm text-muted-foreground sm:block">
          AI image prompts, ready to copy
        </p>
      </div>
    </header>
  )
}

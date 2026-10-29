import { SiteHeader } from '@/components/site-header'
import { PromptGallery } from '@/components/prompt-gallery'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
          <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-5xl">
            Discover, copy and share <span className="text-primary">AI image prompts</span>
          </h1>
          <p className="mt-3 max-w-xl text-muted-foreground text-pretty">
            Browse portraits, couples, landscapes and creative concepts. Tap any image to see the
            full prompt and copy it in one click.
          </p>
        </div>
        <PromptGallery />
      </main>
    </>
  )
}

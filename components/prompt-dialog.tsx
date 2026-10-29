'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@base-ui/react/dialog'
import { Check, Copy, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { PromptItem } from '@/lib/prompts'

type PromptDialogProps = {
  item: PromptItem | null
  onClose: () => void
}

export function PromptDialog({ item, onClose }: PromptDialogProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    if (!item) return
    await navigator.clipboard.writeText(item.prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Dialog.Root
      open={item !== null}
      onOpenChange={(open) => {
        if (!open) {
          setCopied(false)
          onClose()
        }
      }}
    >
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm" />
        <Dialog.Popup className="fixed left-1/2 top-1/2 z-50 flex max-h-[90vh] w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl md:flex-row">
          {item && (
            <>
              <div className="relative h-72 shrink-0 bg-muted md:h-auto md:w-1/2">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 448px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="w-fit rounded-full bg-primary/15 px-2.5 py-1 text-xs font-medium text-primary">
                      {item.category}
                    </span>
                    <Dialog.Title className="text-xl font-semibold leading-tight text-balance">
                      {item.title}
                    </Dialog.Title>
                  </div>
                  <Dialog.Close
                    className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    aria-label="Close"
                  >
                    <X className="size-5" />
                  </Dialog.Close>
                </div>

                <ul className="flex flex-wrap gap-2" aria-label="Tags">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Prompt
                  </h3>
                  <Dialog.Description className="rounded-lg bg-muted p-4 text-sm leading-relaxed">
                    {item.prompt}
                  </Dialog.Description>
                </div>

                <Button onClick={handleCopy} size="lg" className="mt-auto w-full">
                  {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
                  {copied ? 'Copied!' : 'Copy prompt'}
                </Button>
                <span className="sr-only" aria-live="polite">
                  {copied ? 'Prompt copied to clipboard' : ''}
                </span>
              </div>
            </>
          )}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

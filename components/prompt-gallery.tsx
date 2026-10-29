'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { CATEGORIES, PROMPTS, type Category, type PromptItem } from '@/lib/prompts'
import { PromptCard } from '@/components/prompt-card'
import { PromptDialog } from '@/components/prompt-dialog'
import { cn } from '@/lib/utils'

type Filter = 'All' | Category

export function PromptGallery() {
  const [filter, setFilter] = useState<Filter>('All')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<PromptItem | null>(null)

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return PROMPTS.filter((item) => {
      if (filter !== 'All' && item.category !== filter) return false
      if (!q) return true
      return [item.title, item.prompt, ...item.tags].some((text) =>
        text.toLowerCase().includes(q),
      )
    })
  }, [filter, query])

  const filters: Filter[] = ['All', ...CATEGORIES]

  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-6 px-4 pb-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <nav aria-label="Categories" className="-mx-4 overflow-x-auto px-4">
          <ul className="flex gap-2">
            {filters.map((name) => {
              const count =
                name === 'All' ? PROMPTS.length : PROMPTS.filter((p) => p.category === name).length
              const active = filter === name
              return (
                <li key={name}>
                  <button
                    type="button"
                    onClick={() => setFilter(name)}
                    aria-pressed={active}
                    className={cn(
                      'flex items-center gap-1.5 whitespace-nowrap rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
                      active
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground',
                    )}
                  >
                    {name}
                    <span className={cn('text-xs', active ? 'opacity-80' : 'opacity-60')}>
                      {count}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        <label className="relative w-full md:w-72">
          <span className="sr-only">Search prompts</span>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search prompts..."
            className="h-10 w-full rounded-full border border-input bg-card pl-9 pr-4 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
          />
        </label>
      </div>

      {visible.length > 0 ? (
        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
          {visible.map((item) => (
            <PromptCard key={item.id} item={item} onOpen={setSelected} />
          ))}
        </div>
      ) : (
        <p className="py-20 text-center text-muted-foreground">
          No prompts match your search.
        </p>
      )}

      <PromptDialog item={selected} onClose={() => setSelected(null)} />
    </section>
  )
}

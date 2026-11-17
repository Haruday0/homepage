import { useState } from 'react'
import { Card, Surface } from '@heroui/react'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { ArrowUpRight } from '@phosphor-icons/react'
import {
  BackgroundEffects,
  type BackgroundVariant,
} from './components/BackgroundEffects'

const GITHUB_URL = 'https://github.com/Haruday0'

const BACKGROUND_VARIANTS: readonly BackgroundVariant[] = [
  'shooting-stars',
  'light-rays',
  'particles',
]

function pickRandomVariant(): BackgroundVariant {
  return BACKGROUND_VARIANTS[
    Math.floor(Math.random() * BACKGROUND_VARIANTS.length)
  ]
}

function App() {
  const [bgVariant] = useState<BackgroundVariant>(pickRandomVariant)

  return (
    <>
      <BackgroundEffects variant={bgVariant} />

      <main className="relative z-10 flex min-h-dvh touch-pan-down flex-col items-center px-6 pt-[18dvh] pb-16 text-center select-none sm:pt-[20dvh]">
        <h1 className="text-[clamp(1.75rem,1rem+4.5vw,3.75rem)] leading-[1.15] font-normal tracking-tight text-foreground">
          こんにちは、世界。
        </h1>

        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub プロフィール (@Haruday0) を新しいタブで開く"
          className="group mt-10 block w-full max-w-xs touch-manipulation rounded-3xl transition-transform duration-200 active:scale-[0.98] motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus sm:mt-12 sm:max-w-sm"
        >
          <Card className="flex-row items-center justify-between gap-4 border border-white/10 bg-surface/80 p-4 text-left backdrop-blur-md transition-colors group-hover:border-white/25 group-hover:bg-surface-secondary/70 sm:p-5">
            <Surface
              variant="secondary"
              className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-white/10"
            >
              <SiGithub size={20} className="text-foreground" aria-hidden="true" />
            </Surface>

            <div className="min-w-0 flex-1">
              <Card.Title className="text-base font-semibold tracking-tight text-foreground">
                GitHub
              </Card.Title>
              <Card.Description className="truncate font-mono text-xs text-muted">
                @Haruday0
              </Card.Description>
            </div>

            <ArrowUpRight
              size={18}
              className="shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
              aria-hidden="true"
            />
          </Card>
        </a>
      </main>
    </>
  )
}

export default App

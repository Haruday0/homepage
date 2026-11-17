import { useState } from 'react'
import { Link, buttonVariants, cn } from '@heroui/react'
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

      <main className="relative z-10 flex min-h-dvh touch-none flex-col items-center px-6 pt-[18dvh] pb-16 text-center select-none sm:pt-[20dvh]">
        <h1 className="text-[clamp(1.75rem,1rem+4.5vw,3.75rem)] leading-[1.15] font-normal tracking-tight text-foreground">
          こんにちは、世界。
        </h1>

        <Link
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub @Haruday0"
          className={cn(
            buttonVariants({ variant: 'tertiary', size: 'lg' }),
            'group mt-8 touch-manipulation gap-2.5 rounded-full border border-white/10 bg-surface/80 px-5 text-foreground no-underline backdrop-blur-md hover:border-white/25 hover:bg-surface-secondary/70 hover:no-underline sm:mt-10',
          )}
        >
          <SiGithub size={18} aria-hidden="true" />
          <span>@Haruday0</span>
          <ArrowUpRight
            size={16}
            className="text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
            aria-hidden="true"
          />
        </Link>
      </main>
    </>
  )
}

export default App

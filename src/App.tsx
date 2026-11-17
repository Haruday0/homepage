import { useState } from 'react'
import GitHubButton from 'react-github-btn'
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

        <div className="mt-8 touch-manipulation sm:mt-10">
          <GitHubButton
            href={GITHUB_URL}
            data-color-scheme="no-preference: dark; light: dark; dark: dark;"
            data-size="large"
            data-show-count="true"
            aria-label="Follow @Haruday0 on GitHub"
          >
            Follow @Haruday0
          </GitHubButton>
        </div>
      </main>
    </>
  )
}

export default App

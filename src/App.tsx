import { Card, Chip } from '@heroui/react'
import { SiReact, SiTailwindcss, SiVite } from '@icons-pack/react-simple-icons'
import { Terminal } from '@phosphor-icons/react'

function App() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-4xl flex-col justify-center px-6 py-16">
      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="border border-white/10 bg-surface sm:col-span-2">
          <Card.Header className="flex flex-col items-start gap-3">
            <Chip size="sm" variant="soft">
              <Chip.Label className="font-mono text-xs">haruday0.com</Chip.Label>
            </Chip>
            <Card.Title className="text-3xl font-bold tracking-tight text-foreground">
              haruday0.com
            </Card.Title>
            <Card.Description className="text-sm text-muted">
              Vite + React 19 + TypeScript + Tailwind CSS v4 + HeroUI v3
            </Card.Description>
          </Card.Header>
          <Card.Content className="flex flex-wrap items-center gap-3 pt-2 text-xs text-muted">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-2.5 py-1 font-mono">
              <SiVite size={14} aria-hidden="true" />
              Vite
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-2.5 py-1 font-mono">
              <SiReact size={14} aria-hidden="true" />
              React
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-2.5 py-1 font-mono">
              <SiTailwindcss size={14} aria-hidden="true" />
              Tailwind v4
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-2.5 py-1 font-mono">
              <Terminal size={14} aria-hidden="true" />
              HeroUI v3
            </span>
          </Card.Content>
        </Card>
      </div>
    </main>
  )
}

export default App

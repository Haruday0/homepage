import { LightRays } from './effects/light-rays'
import { Particles } from './effects/particles'
import { ShootingStars } from './effects/shooting-stars'
import { StarsBackground } from './effects/stars-background'

export type BackgroundVariant = 'shooting-stars' | 'light-rays' | 'particles'

interface BackgroundEffectsProps {
  variant: BackgroundVariant
}

export function BackgroundEffects({ variant }: BackgroundEffectsProps) {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {variant === 'shooting-stars' && (
        <>
          <StarsBackground starDensity={0.0002} />
          <ShootingStars
            minSpeed={12}
            maxSpeed={28}
            minDelay={900}
            maxDelay={2800}
            starColor="#ffffff"
            trailColor="#71717a"
          />
        </>
      )}

      {variant === 'light-rays' && (
        <LightRays color="rgba(220, 232, 255, 0.18)" />
      )}

      {variant === 'particles' && (
        <Particles
          className="absolute inset-0"
          quantity={90}
          ease={70}
          color="#ffffff"
          refresh
        />
      )}
    </div>
  )
}

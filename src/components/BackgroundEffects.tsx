import { ShootingStars } from './effects/shooting-stars'
import { StarsBackground } from './effects/stars-background'

export function BackgroundEffects() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <StarsBackground starDensity={0.0002} />
      <ShootingStars
        minSpeed={12}
        maxSpeed={28}
        minDelay={900}
        maxDelay={2800}
        starColor="#ffffff"
        trailColor="#71717a"
      />
    </div>
  )
}

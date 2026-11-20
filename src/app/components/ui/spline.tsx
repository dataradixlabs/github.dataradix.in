'use client'

import { Suspense, lazy, useState, useEffect } from 'react'
import { Box } from 'lucide-react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // If user requests reduced motion, show a static, non-GPU intensive placeholder
  if (prefersReducedMotion) {
    return (
      <div className={`w-full h-full flex flex-col items-center justify-center bg-secondary/20 p-8 text-center ${className || ''}`}>
        <Box className="w-16 h-16 text-muted-foreground/40 mb-3" />
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono">
          3D Interactive Scene (Motion Paused)
        </span>
      </div>
    )
  }

  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent animate-spin" />
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  )
}

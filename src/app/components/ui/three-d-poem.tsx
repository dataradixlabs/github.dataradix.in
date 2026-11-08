'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ThreeDPoemProps {
  title?: string
  poemHTML: string
  className?: string
  reversed?: boolean
}

export function ThreeDPoem({ title = "Digital Synergy", poemHTML, className, reversed = false }: ThreeDPoemProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const rotateX = useTransform(scrollYProgress, [0, 1], [20, -20])
  const rotateY = useTransform(scrollYProgress, [0, 1], [-30, 30])

  return (
    <div 
      ref={containerRef}
      className={cn("relative py-24 overflow-hidden bg-background border-y border-border", className)}
    >
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={cn("flex flex-col items-center gap-16", reversed ? "lg:flex-row-reverse" : "lg:flex-row")}>
          
          {/* 3D Scene */}
          <div className="flex-1 w-full flex justify-center perspective-[1000px]">
            <motion.div 
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className="relative w-64 h-64 sm:w-80 sm:h-80"
            >
              {/* Cube Faces */}
              <div className="absolute inset-0 border border-border bg-secondary/50 backdrop-blur-sm transform translate-z-[160px] flex items-center justify-center p-8">
                <div className="text-foreground font-display font-bold text-xl uppercase tracking-widest text-center">
                  {title}
                </div>
              </div>
              <div className="absolute inset-0 border border-border bg-background/80 transform -translate-z-[160px] rotate-y-180 opacity-50" />
              <div className="absolute inset-0 border border-border bg-secondary/30 transform -translate-x-[160px] rotate-y--90 opacity-30" />
              <div className="absolute inset-0 border border-border bg-secondary/30 transform translate-x-[160px] rotate-y-90 opacity-30" />
              <div className="absolute inset-0 border border-border bg-secondary/30 transform -translate-y-[160px] rotate-x-90 opacity-30" />
              <div className="absolute inset-0 border border-border bg-secondary/30 transform translate-y-[160px] rotate-x--90 opacity-30" />
              
              {/* Floating Text Particles/Accents */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ transformStyle: 'preserve-3d' }}>
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-12 -left-12 border border-border bg-background px-4 py-2 text-[10px] uppercase tracking-widest text-muted-foreground"
                  style={{ transform: 'translateZ(200px)' }}
                >
                  Precision
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-12 -right-12 border border-border bg-background px-4 py-2 text-[10px] uppercase tracking-widest text-muted-foreground"
                  style={{ transform: 'translateZ(180px)' }}
                >
                  Scale
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Poem Content */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="prose prose-neutral dark:prose-invert"
            >
              <div 
                className="text-lg sm:text-xl leading-relaxed text-muted-foreground font-mono"
                dangerouslySetInnerHTML={{ __html: poemHTML }}
              />
              
              <div className="mt-12 h-px w-24 bg-foreground" />
              <div className="mt-4 text-xs text-muted-foreground tracking-widest uppercase">
                Digital Architecture Lab &bull; 2026
              </div>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* CSS for transform utilities if not in Tailwind config */}
      <style>{`
        .perspective-[1000px] { perspective: 1000px; }
        .rotate-y--90 { transform: rotateY(-90deg); }
        .rotate-y-90 { transform: rotateY(90deg); }
        .rotate-y-180 { transform: rotateY(180deg); }
        .rotate-x-90 { transform: rotateX(90deg); }
        .rotate-x--90 { transform: rotateX(-90deg); }
        .translate-z-[160px] { transform: translateZ(160px); }
        .translate-z-[180px] { transform: translateZ(180px); }
        .translate-z-[200px] { transform: translateZ(200px); }
        .translate-z-[-160px] { transform: translateZ(-160px); }
        .-translate-z-[160px] { transform: translateZ(-160px); }
        .-translate-x-[160px] { transform: translateX(-160px); }
        .translate-x-[160px] { transform: translateX(160px); }
        .-translate-y-[160px] { transform: translateY(-160px); }
        .translate-y-[160px] { transform: translateY(160px); }
        
        .prose span {
          color: var(--foreground);
          font-weight: 700;
          border-bottom: 1px solid var(--border);
        }
      `}</style>
    </div>
  )
}

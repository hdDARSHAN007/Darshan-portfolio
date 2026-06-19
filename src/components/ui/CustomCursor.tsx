'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)
  const isHovering = useRef(false)

  const springX = useSpring(cursorX, { stiffness: 150, damping: 20, mass: 0.5 })
  const springY = useSpring(cursorY, { stiffness: 150, damping: 20, mass: 0.5 })

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
      dotX.set(e.clientX - 3)
      dotY.set(e.clientY - 3)
    }

    const onEnter = () => { isHovering.current = true }
    const onLeave = () => { isHovering.current = false }

    window.addEventListener('mousemove', move)
    document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', move)
    }
  }, [cursorX, cursorY, dotX, dotY])

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] w-8 h-8 rounded-full border border-violet-400/60 mix-blend-difference hidden md:block"
        style={{ x: springX, y: springY }}
      />
      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] w-1.5 h-1.5 rounded-full bg-violet-400 hidden md:block"
        style={{ x: dotX, y: dotY }}
      />
    </>
  )
}

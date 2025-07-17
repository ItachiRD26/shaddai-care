"use client"

import type { ReactNode } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scaleIn" | "bounceIn"
  delay?: number
  duration?: number
}

const animationClasses = {
  fadeIn: {
    hidden: "opacity-0",
    visible: "opacity-100",
  },
  slideUp: {
    hidden: "opacity-0 translate-y-10",
    visible: "opacity-100 translate-y-0",
  },
  slideLeft: {
    hidden: "opacity-0 -translate-x-10",
    visible: "opacity-100 translate-x-0",
  },
  slideRight: {
    hidden: "opacity-0 translate-x-10",
    visible: "opacity-100 translate-x-0",
  },
  scaleIn: {
    hidden: "opacity-0 scale-95",
    visible: "opacity-100 scale-100",
  },
  bounceIn: {
    hidden: "opacity-0 scale-50",
    visible: "opacity-100 scale-100",
  },
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "slideUp",
  delay = 0,
  duration = 700,
}: AnimatedSectionProps) {
  const { isVisible, elementRef } = useScrollAnimation()
  const animClasses = animationClasses[animation]

  return (
    <section
      ref={elementRef}
      className={`transition-all ease-out ${isVisible ? animClasses.visible : animClasses.hidden} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </section>
  )
}

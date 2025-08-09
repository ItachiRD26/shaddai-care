import { useState, useEffect, useCallback } from 'react'

// Hook optimizado para scroll con debounce
export function useScrollOptimized(threshold: number = 50) {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > threshold
    setIsScrolled(prev => prev !== scrolled ? scrolled : prev)
  }, [threshold])

  useEffect(() => {
    // Throttle scroll events
    let ticking = false
    
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [handleScroll])

  return isScrolled
}

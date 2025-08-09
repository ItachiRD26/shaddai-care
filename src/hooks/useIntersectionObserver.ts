import { useEffect, useRef, useState } from 'react'

export function useIntersectionObserver(threshold: number = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          // Disconnect after first intersection for performance
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '50px' }
    )

    const element = elementRef.current
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [threshold, isVisible])

  return { elementRef, isVisible }
}

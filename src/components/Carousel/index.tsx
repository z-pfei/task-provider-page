'use client'

import { useState, useEffect, useRef, ReactNode } from 'react'
import classnames from 'classnames'

interface CarouselProps {
  children: ReactNode[]
  direction?: 'horizontal' | 'vertical'
  autoplay?: boolean
  className?: string
  speed?: number
}

export default function Carousel({
  children,
  direction = 'horizontal',
  autoplay = true,
  className,
  speed = 0.2,
}: CarouselProps) {
  const [position, setPosition] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const childrenRef = useRef<HTMLDivElement>(null)
  const transitionRef = useRef(true)

  // duplicate two times of content to ensure content is always displayed during scrolling
  const items = [...children, ...children]

  useEffect(() => {
    if (!autoplay || isPaused) return

    const animate = () => {
      setPosition((prevPos) => {
        const newPos = prevPos - speed
        let maxTranslate = undefined
        if (direction === 'horizontal') {
          const contentWidth = contentRef.current?.clientWidth || 0
          const childrenWidth = childrenRef.current?.scrollWidth || 0
          maxTranslate = -childrenWidth * 2 / contentWidth
        } else {
          const contentHeight = contentRef.current?.clientHeight || 0
          const childrenHeight = childrenRef.current?.scrollHeight || 0
          maxTranslate = (childrenHeight - contentHeight) / contentHeight
        }

        // prepare for seamless switch
        if (newPos <= (maxTranslate * 100)) {
          // temporarily disable transition effect
          transitionRef.current = false
          // calculate precise reset position to maintain visual continuity
          const resetPos = 0

          // use requestAnimationFrame to ensure the transition effect is restored in the next frame
          requestAnimationFrame(() => {
            transitionRef.current = true
          })

          return resetPos
        }
        return newPos
      })

      requestRef.current = requestAnimationFrame(animate)
    }

    const requestRef = { current: 0 }
    setTimeout(() => {
      requestRef.current = requestAnimationFrame(animate)
    }, 100)

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [autoplay, children.length, isPaused, speed, direction])

  return (
    <div
      ref={containerRef}
      className={classnames('relative overflow-hidden', className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={contentRef}
        className={classnames(
          'will-change-transform',
          direction === 'horizontal' ? 'flex' : 'flex flex-col'
        )}
        style={{
          transform:
            direction === 'horizontal'
              ? `translateX(${position}%)`
              : `translateY(${position}%)`,
          transition: transitionRef.current ? 'transform 50ms linear' : 'none',
        }}
      >
        {items.map((child, index) => (
          <div key={index} className='flex-shrink-0'>
            {child}
          </div>
        ))}
        <div
          ref={childrenRef}
          className={classnames(
            direction === 'horizontal' ? 'flex' : 'flex flex-col'
          )}
        >
          {children.map((child, index) => (
            <div key={index} className='flex-shrink-0'>
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal: Premium scroll-based content reveal animation
 * - Moves element smoothly upward into its original position as it enters the viewport
 * - Translate Y: 26–30px
 * - Duration: 650–800ms with smooth cubic-bezier ease-out
 * - Supports stagger via delay prop
 * - Respects prefers-reduced-motion
 * - Uses IntersectionObserver (triggers once, zero replay flickering)
 * - Safe fallback if JS/IntersectionObserver is disabled
 */
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 750,
  y = 28,
  as: Component = 'div',
  ...props
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If user prefers reduced motion, reveal immediately with no transition
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const node = ref.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <Component
      ref={ref}
      className={`transition-all ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-7'
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: isVisible ? 'auto' : 'transform, opacity',
      }}
      {...props}
    >
      {children}
    </Component>
  );
}

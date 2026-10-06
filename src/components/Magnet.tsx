import React, { useRef, useEffect } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 100,
  strength = 4,
  activeTransition = 'transform 0.25s ease-out',
  inactiveTransition = 'transform 0.5s ease-in-out',
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let targetX = 0;
    let targetY = 0;
    let isHovered = false;
    let rafId: number | null = null;
    let cachedRect: DOMRect | null = null;

    // Cache rect to avoid synchronous reflows on raw mouse events
    const updateRect = () => {
      if (el) cachedRect = el.getBoundingClientRect();
    };
    updateRect();

    window.addEventListener('scroll', updateRect, { passive: true });
    window.addEventListener('resize', updateRect, { passive: true });

    const handleMouseMove = (e: MouseEvent) => {
      if (!cachedRect) updateRect();
      if (!cachedRect) return;

      const centerX = cachedRect.left + cachedRect.width / 2;
      const centerY = cachedRect.top + cachedRect.height / 2;

      const distLeft = cachedRect.left - padding;
      const distRight = cachedRect.right + padding;
      const distTop = cachedRect.top - padding;
      const distBottom = cachedRect.bottom + padding;

      if (
        e.clientX >= distLeft &&
        e.clientX <= distRight &&
        e.clientY >= distTop &&
        e.clientY <= distBottom
      ) {
        targetX = (e.clientX - centerX) / strength;
        targetY = (e.clientY - centerY) / strength;
        isHovered = true;
      } else if (isHovered) {
        targetX = 0;
        targetY = 0;
        isHovered = false;
      }

      // Schedule direct DOM transform update (Zero React state re-renders)
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          if (el) {
            el.style.transition = isHovered ? activeTransition : inactiveTransition;
            el.style.transform = `translate3d(${targetX.toFixed(2)}px, ${targetY.toFixed(2)}px, 0)`;
          }
          rafId = null;
        });
      }
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
      isHovered = false;
      if (el) {
        el.style.transition = inactiveTransition;
        el.style.transform = 'translate3d(0, 0, 0)';
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('scroll', updateRect);
      window.removeEventListener('resize', updateRect);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: 'translate3d(0, 0, 0)',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};

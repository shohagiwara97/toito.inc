'use client';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { HTMLAttributes, ReactNode, useEffect, useState } from 'react';

interface AnimatedSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  disableMobile?: boolean;
}

export function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fadeUp',
  delay = 0,
  disableMobile = false,
  style,
  ...rest
}: AnimatedSectionProps) {
  const [isMobile, setIsMobile] = useState(true); // デフォルトをtrueに設定してSSR対応
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getAnimationClass = () => {
    // モバイルでdisableMobileがtrueの場合、アニメーションを無効化
    if (disableMobile && isMobile) {
      return 'opacity-100 translate-y-0 translate-x-0 scale-100 !transition-none';
    }
    
    const baseClass = 'transition-all duration-1000 ease-out';
    
    if (!isVisible) {
      switch (animation) {
        case 'fadeUp':
          return `${baseClass} opacity-0 translate-y-12`;
        case 'fadeIn':
          return `${baseClass} opacity-0`;
        case 'slideLeft':
          return `${baseClass} opacity-0 -translate-x-12`;
        case 'slideRight':
          return `${baseClass} opacity-0 translate-x-12`;
        case 'scale':
          return `${baseClass} opacity-0 scale-95`;
        default:
          return `${baseClass} opacity-0 translate-y-12`;
      }
    }
    
    return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div 
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
      style={{ transitionDelay: disableMobile && isMobile ? '0ms' : `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}

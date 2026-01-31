'use client'

import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  threshold?: number | number[];
  rootMargin?: string;
}

/**
 * Hook personalizado para disparar animações quando um elemento fica visível na tela
 * @param options - Configurações do Intersection Observer
 * @returns ref para anexar ao elemento e isVisible para controlar a animação
 */
export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Opcional: desanexar o observer após a primeira visualização
        // observer.unobserve(entry.target);
      }
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px',
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isVisible };
}

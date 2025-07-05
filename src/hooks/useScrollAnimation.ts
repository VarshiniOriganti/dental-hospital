import { useEffect, useRef, useCallback } from 'react';

export const useScrollAnimation = () => {
  const elementsRef = useRef<HTMLElement[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  const addToRefs = useCallback((el: HTMLElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
      // Observe the new element if the observer exists
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    }
  }, []);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-enter');
          // Optional: Unobserve after animation is triggered
          observerRef.current?.unobserve(entry.target);
        }
      });
    };

    // Create new observer
    observerRef.current = new IntersectionObserver(handleIntersect, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const currentObserver = observerRef.current;
    const currentElements = [...elementsRef.current];

    // Observe all current elements
    currentElements.forEach((el) => {
      currentObserver.observe(el);
    });

    // Cleanup function
    return () => {
      currentElements.forEach((el) => {
        currentObserver.unobserve(el);
      });
      currentObserver.disconnect();
    };
  }, []);

  return { addToRefs };
};

'use client'
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function useScrollToHash({ offset = 80 } = {}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.replace('#', '');
    const element = document.getElementById(id);
    if (!element) return;


    setTimeout(() => {
      const header = document.querySelector('nav');
      const headerHeight = header?.offsetHeight || 0;
      const top = element.getBoundingClientRect().top + window.scrollY - headerHeight - offset;

      window.scrollTo({
        top,
        behavior: 'smooth',
      });

 
      element.setAttribute('tabindex', '-1');
      element.focus({ preventScroll: true });
    }, 100);
  }, [pathname, searchParams, offset]);
}
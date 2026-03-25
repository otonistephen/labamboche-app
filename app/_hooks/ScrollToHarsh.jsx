// components/ScrollToHash.jsx   ← create this file
'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay → content/images/fonts need time to load/measure
    const timer = setTimeout(() => {
      const hash = window.location.hash;
      if (!hash) return;

      const id = hash.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 400); // ← 300–600ms usually works best; test in your app

    return () => clearTimeout(timer);
  }, [pathname]); // Re-run when page/route changes

  return null;
}
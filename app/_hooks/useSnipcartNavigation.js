'use client';

import { useEffect } from 'react';

export default function useSnipcartNavigation() {
  useEffect(() => {
    const closeSnipcartCart = () => {
      if (window.Snipcart?.api?.modal?.close) {
        window.Snipcart.api.modal.close();
      }
    };

    // Wait until Snipcart is fully loaded
    const checkSnipcart = setInterval(() => {
      if (window.Snipcart?.api?.modal?.close && window.Snipcart?.events?.on) {
        clearInterval(checkSnipcart);

        // Close cart when using browser back/forward
        window.addEventListener('popstate', closeSnipcartCart);

        // Close cart when clicking internal links (Next.js navigation)
        const handleInternalLinkClick = e => {
          const link = e.target.closest('a');
          if (
            link &&
            link.href &&
            link.href.startsWith(window.location.origin)
          ) {
            closeSnipcartCart();
          }
        };

        document.addEventListener('click', handleInternalLinkClick);

        // Redirect to clean URL when cart is closed
        window.Snipcart.events.on('cart.closed', () => {
          if (window.location.hash === '#snipcart') {
            window.history.replaceState(null, null, window.location.pathname);
          }
        });

        // Cleanup
        return () => {
          window.removeEventListener('popstate', closeSnipcartCart);
          document.removeEventListener('click', handleInternalLinkClick);
          // Note: Snipcart events don't have off, so no cleanup for that
        };
      }
    }, 400);

    return () => clearInterval(checkSnipcart);
  }, []);
}

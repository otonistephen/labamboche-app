'use client';

import { useEffect } from 'react';
import useSnipcartNavigation from '../../_hooks/useSnipcartNavigation';

export default function SnipcartProvider({ children }) {
  useSnipcartNavigation();

  return <>{children}</>;
}
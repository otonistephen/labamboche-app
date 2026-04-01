'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useCartStore } from '@/app/_store/cartStore';

export default function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const clearCart = useCartStore((state) => state.clearCart);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    if (sessionId) {
      console.log('✅ Payment successful! Session ID:', sessionId);
      clearCart();
      setStatus('success');
    } else {
      setStatus('error');
    }
  }, [sessionId, clearCart]);

  if (status === 'loading') {
    return <div className="success-page"><h1>Processing your order...</h1></div>;
  }

  if (status === 'error') {
    return (
      <div className="success-page">
        <h1>Something went wrong</h1>
        <p>No payment session found.</p>
        <Link href="/cart">← Go back to Cart</Link>
      </div>
    );
  }

  return (
    <div className="success-page">
      <div className="container">
        <h1>✅ Thank You for Your Purchase!</h1>
        <h2>Your payment was successful</h2>
        <p>Order confirmed. You will receive a confirmation email shortly.</p>

        {sessionId && (
          <p style={{ fontSize: '14px', color: '#666', marginTop: '20px' }}>
            Transaction Reference: <strong>{sessionId}</strong>
          </p>
        )}

        <div style={{ marginTop: '40px' }}>
          <Link href="/products">
            <button className="continue-shopping-btn">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
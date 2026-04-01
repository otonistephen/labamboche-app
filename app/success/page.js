import { Suspense } from 'react';
import SuccessContent from './SuccessContent';

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="success-page"><h1>Processing your order...</h1></div>}>
      <SuccessContent />
    </Suspense>
  );
}
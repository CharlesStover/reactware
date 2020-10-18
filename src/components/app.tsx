import React, { Suspense, lazy } from 'react';
import { ReactElement } from 'react';

const Lift = lazy(() => import('../games/lift'));

export default function App(): ReactElement {
  return (
    <Suspense fallback="Loading...">
      <Lift />
    </Suspense>
  );
}

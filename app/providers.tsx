'use client';

import { PropsWithChildren } from 'react';

import { AnalyticsContext } from './contexts/analytics-context';

export function Providers({ children }: PropsWithChildren) {
  return (
    <AnalyticsContext>
      {children}
    </AnalyticsContext>
  );
}

import { createContext, useContext } from 'react';

import { type Analytics } from '../types';

const AnalyticsContext = createContext<Analytics | null>(null);

interface AnalyticsProviderProps {
  analytics: Analytics;
  children: React.ReactNode;
}

export const AnalyticsProvider = ({ children, analytics }: AnalyticsProviderProps) => {
  return <AnalyticsContext.Provider value={analytics}>{children}</AnalyticsContext.Provider>;
};

export const useAnalytics = () => {
  const analytics = useContext(AnalyticsContext);

  if (!analytics) {
    throw new Error('No analytics provider found');
  }

  return analytics;
};

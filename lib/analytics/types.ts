import { Product, WithContext } from 'schema-dts';

export interface Analytics {
  product: {
    viewed: (product: WithContext<Product>) => void;
  };
}

export type AnalyticsProvider = Analytics;

export interface AnalyticsConfig {
  providers: AnalyticsProvider[];
}

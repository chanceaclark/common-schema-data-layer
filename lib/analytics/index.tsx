import { type Analytics, type AnalyticsConfig } from './types';

export function Analytics(config: AnalyticsConfig): Analytics {
  return {
    product: {
      viewed: (product) => {
        config.providers.forEach((provider) => {
          provider.product.viewed(product);
        });
      },
    },
  };
}

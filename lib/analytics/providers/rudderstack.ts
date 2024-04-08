import { LoadOptions, RudderAnalytics } from '@rudderstack/analytics-js';

import { type AnalyticsProvider } from '../types';

export interface RudderstackConfig extends LoadOptions {
  writeKey: string;
  dataPlaneUrl: string;
}

export function RudderstackProvider({
  writeKey,
  dataPlaneUrl,
  ...config
}: RudderstackConfig): AnalyticsProvider {
  const rudderAnalytics = new RudderAnalytics();

  rudderAnalytics.load(writeKey, dataPlaneUrl, config);

  return {
    product: {
      viewed: (product) => {
        // @ts-expect-error testing purposes
        rudderAnalytics.page('Product', 'Product viewed', product);
      },
    },
    cart: {
      added: function (product) {
        // You can access the list of products using the symbol
        // this.metadata.products
        // @ts-expect-error testing purposes
        rudderAnalytics.track('Product added', product);
      }
    }
  }
}

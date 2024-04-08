import { Product, WithContext } from 'schema-dts';

interface CartMetadata {
  products: WithContext<Product>[];
}

export interface Analytics {
  product: {
    viewed: (product: WithContext<Product>) => void;
  };
  cart: {
    metadata: CartMetadata;
    added: (product: WithContext<Product>) => void;
  }
}

export interface AnalyticsProvider {
  product: {
    viewed: (product: WithContext<Product>) => void;
  };
  cart: {
    added: (product: WithContext<Product>, metadata: CartMetadata) => void;
  }
};

export interface AnalyticsConfig {
  providers: AnalyticsProvider[];
}

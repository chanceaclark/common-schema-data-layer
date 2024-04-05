import { PropsWithChildren } from 'react';

import { Analytics } from '../../../lib/analytics';
import { RudderstackProvider } from '../../../lib/analytics/providers/rudderstack';
import { AnalyticsProvider } from '../../../lib/analytics/react';

const rudderstack = RudderstackProvider({
  writeKey: process.env.RUDDERSTACK_WRITE_KEY!,
  dataPlaneUrl: process.env.RUDDERSTACK_DATA_PLANE_URL!,
});

const analytics = Analytics({
  providers: [rudderstack],
});

export const AnalyticsContext = ({ children }: PropsWithChildren) => {
  return <AnalyticsProvider analytics={analytics}>{children}</AnalyticsProvider>;
};

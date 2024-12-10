import '@/styles/globals.css';
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ConfigProvider } from 'antd/lib';
import type { AppProps } from 'next/app';
import { useState } from 'react';

import theme from '@/theme/themeConfig';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <ConfigProvider theme={theme}>
          <Component {...pageProps} />
        </ConfigProvider>
      </HydrationBoundary>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

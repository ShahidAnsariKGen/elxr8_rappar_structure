import '@/styles/globals.css';
import { ConfigProvider } from 'antd/lib';
import type { AppProps } from 'next/app';
import theme from '@/theme/themeConfig';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={theme}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

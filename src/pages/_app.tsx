import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';
import type { AppProps } from 'next/app';
import { memo } from 'react';
import { robotoCondensed } from '../utils/fonts';

const MyApp = memo(({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <main className={`${robotoCondensed.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
});

export default MyApp;
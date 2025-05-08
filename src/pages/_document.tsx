import {Head, Html, Main, NextScript} from 'next/document';

import {robotoCondensed} from '../utils/fonts';

export default function Document() {
  return (
    <Html className={robotoCondensed.variable} lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta content="notranslate" name="google" />
      </Head>
      <body className="bg-black font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
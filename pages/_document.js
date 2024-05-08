import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='shortcut icon' href='/favicon_rb.png' />
        <meta name='description' content='FullStack Developer, Web Developer, Frontend Developer'></meta>
        <meta name='keywords' content='Ritendra Bhadauriya,Software Developer, Frontend developer'></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
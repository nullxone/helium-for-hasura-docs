import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5ZEPS2Q5RT"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-5ZEPS2Q5RT');
        `,
          }}
        ></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <body className="dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

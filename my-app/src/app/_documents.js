// app/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preload the CSS file */}
        <link
          rel="preload"
          href="/_next/static/css/app/services/page.css"
          as="style"
          type="text/css"
          crossorigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

"use client";

import WalletConnect from "./components/WalletConnect";
import "./globals.css";
import Landing from "./sections/landing";

export default function RootLayout() {

  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no"
        />
        <link rel="manifest" href="/manifest.json" />
        <title>Fun</title>
      
      </head>
      <body>
        <WalletConnect>
          <Landing />
        </WalletConnect>
      </body>
    </html>
  );
}

"use client";

import { useEffect } from "react";
import "./globals.css";
import Landing from "./sections/landing";

export default function RootLayout() {

  useEffect(() => {
    document.addEventListener('dblclick', function (e) {
      e.preventDefault(); 
    }, { passive: false });

    document.addEventListener('touchstart', function (e) {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    }, { passive: false });
  }, []);

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
        <link rel="icon" href="/img/landing/logo.svg" />
      </head>
      <body>
          <Landing />
      </body>
    </html>
  );
}

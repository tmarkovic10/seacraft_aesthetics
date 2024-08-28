import React from "react";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import Providers from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "@/styles/index.scss";
import LocaleSwitcher from "@/components/LocaleSwitcher";

export const metadata: Metadata = {
  title: {
    default: "Seacraft Aesthetics",
    template: "%s | Seacraft Aesthetics",
  },
  description:
    "Seacraft Aesthetics je mali mobilni tim dolazi na vašu adresu kako bi pripremio vaše plovilo za sezonu ili suhi vez. Oslobađamo vas svih potrebnih radnji, omogućujući vam da svoje slobodno vrijeme posvetite uživanju u plovilu.",
  robots: {
    index: true,
  },
  icons: {
    icon: "/favicons/favicon.ico",
    shortcut: "/favicons/favicon.ico",
    apple: "/favicons/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicons/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicons/favicon-16x16.png",
      },
      {
        rel: "mask-icon",
        url: "/favicons/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <Header>
              <LocaleSwitcher />
            </Header>
            {children}
          </NextIntlClientProvider>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

import { type ReactNode } from "react";

import "@/styles/main.css";

import type { Metadata, Viewport } from "next";
import { Fira_Mono, Lato, Montserrat } from "next/font/google";

const firaMono = Fira_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-mono",
});

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const faviconPath =
  process.env.NODE_ENV === "production" ? "/favicon" : "/favicon/dev";
export const metadata: Metadata = {
  title: {
    template: "%s - CLEVER FUEL Lab",
    default: "CLEVER FUEL Lab",
  },
  description:
    "A safe, affordable hydrogen resource to produce biofuels. Advanced catalysts for H₂-free hydrodeoxygenation.",
  metadataBase: new URL("https://vortico.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_EN",
    url: "/",
    title: "CLEVER FUEL Lab",
    description:
      "A safe, affordable hydrogen resource to produce biofuels. Advanced catalysts for H₂-free hydrodeoxygenation.",
    siteName: "vortico.tech",
  },
  icons: {
    icon: [
      { url: `${faviconPath}/favicon.ico`, sizes: "any" },
      { url: `${faviconPath}/icon.svg`, type: "image/svg+xml" },
    ],
    apple: [{ url: `${faviconPath}/apple-touch-icon.png` }],
  },
  manifest: `${faviconPath}/manifest.json`,
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#00BBD5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${montserrat.variable} ${firaMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="msapplication-TileColor" content="#00BBD5" />
      </head>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.p36ventures.com"),
  title: "P36 Ventures — Capital Advisory & Venture Studio",
  description:
    "P36 structures capital, diligence, and operating infrastructure for companies from formation through execution.",
  openGraph: {
    type: "website",
    siteName: "P36 Ventures",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plex.variable} ${fraunces.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper font-sans font-normal text-ink antialiased">
        {children}
        {/* Vercel Web Analytics: switch on in Vercel → Project → Analytics. No cookies. */}
        <Script src="/_vercel/insights/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

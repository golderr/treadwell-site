import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://treadwellrestoration.com"),
  title: {
    default: "Treadwell Restoration | 24/7 Water Damage Restoration in the Inland Empire",
    template: "%s | Treadwell Restoration",
  },
  description:
    "Water damage mitigation and reconstruction for the Inland Empire. Emergency response 24/7. One call, one team. We handle your insurance. Serving Fontana, Rancho Cucamonga, Ontario, and surrounding cities.",
  keywords: [
    "water damage restoration",
    "water damage cleanup",
    "water extraction",
    "flood cleanup",
    "reconstruction services",
    "mold prevention",
    "Inland Empire water damage",
    "Fontana water damage",
    "Rancho Cucamonga water damage",
    "Ontario water damage",
  ],
  openGraph: {
    title: "Treadwell Restoration | 24/7 Water Damage Restoration",
    description:
      "Water damage mitigation and reconstruction for the Inland Empire. Emergency response 24/7. We handle your insurance. One call, one team.",
    url: "https://treadwellrestoration.com",
    siteName: "Treadwell Restoration",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
  verification: {},
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,400;0,600;0,700;0,800;0,900;1,800;1,900&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

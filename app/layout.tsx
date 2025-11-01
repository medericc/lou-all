import './globals.css';
import { Analytics } from "@vercel/analytics/react";
import Head from 'next/head';
import ServiceWorkerRegister from './ServiceWorkerRegister';

export const metadata = {
  title: "Louann Battiston - Application",
  description: "Statistiques en direct et calendrier de Louann",
   manifest: "/manifest.json",
  appleWebApp: {
    title: "Louann App",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Louann Battiston - Application",
    description: "Statistiques en direct et calendrier de Louann",
    url: "https://louann-application.vercel.app/",
    siteName: "Louann Celerier Application",
    images: [
      {
        url: "https://louann-application.vercel.app/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Louann Battiston - Application",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Louann Battiston - Application",
    description: "Statistiques en direct et calendrier de louann",
    images: ["https://Louann-calendrier.vercel.app/preview.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <Head>
        <link rel="icon" href="/favicon.ico" />
         
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-title" content="Louann Application" />
        <meta name="theme-color" content="#1e40af" />
      </Head>

     <body>{children}

     {/* Analytics */}
        <Analytics />

        {/* ✅ Enregistrement du Service Worker */}
        <ServiceWorkerRegister />
    

     </body>
    </html>
  )
}
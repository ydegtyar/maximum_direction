import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Ліцей Максимум - Вступ 2025",
  description: "Приєднуйтесь до Ліцею Максимум! Ознайомтесь з нашими профільними напрямками для вступу до 10 класу. Обирайте серед напрямків: Інформатика та англійська мова, Іноземна філологія, Математика, Біологія та хімія, Фізична культура та англійська мова.",
  keywords: "ліцей максимум, вступ 2025, 10 клас, профільне навчання, інформатика, іноземна філологія, математика, біологія, хімія, фізична культура",
  authors: [{ name: "Ліцей Максимум" }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Ліцей Максимум - Вступ 2025",
    description: "Приєднуйтесь до Ліцею Максимум! Ознайомтесь з нашими профільними напрямками для вступу до 10 класу.",
    type: "website",
    locale: "uk_UA",
    siteName: "Ліцей Максимум",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ліцей Максимум - Вступ 2025",
    description: "Приєднуйтесь до Ліцею Максимум! Ознайомтесь з нашими профільними напрямками для вступу до 10 класу.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  alternates: {
    canonical: "https://www.school6kr.org.ua",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${manrope.variable} antialiased`}>
          {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import { InitColorSchemeScript } from '@mui/material';
import { Providers } from '@/lib/providers';
import { AppLayout } from '@/shared/ui';
import "./globals.css";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Material UI Next.js App",
  description: "A modern web application built with Next.js and Material-UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable} suppressHydrationWarning>
      <body>
        <InitColorSchemeScript />
        <Providers>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
}

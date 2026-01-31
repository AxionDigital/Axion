import type { Metadata } from 'next';
import { ThemeProvider } from '@/app/components/theme-provider';
import { LanguageProvider } from '@/app/contexts/LanguageContext';
import Navbar from '@/app/components/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Axion - Seu Site. Seu Sucesso. Nossa Missão.',
  description: 'Agência de programação e design especializada em soluções digitais inovadoras',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <link rel="icon" sizes="130x130" href="/logo.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LanguageProvider>
            <Navbar />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Reputation Edge',
  description: 'Modern PR & Public Review Agency',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} !scroll-smooth`}>
      <head />
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}

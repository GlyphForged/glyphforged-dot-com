import { Footer } from './_components/footer';
import Image from "next/legacy/image";
import styles from './page.module.css';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GlyphForged.com',
  description: 'Games, software, and musings',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

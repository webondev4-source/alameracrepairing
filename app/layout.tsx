import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AL Amer AC Repairing - Professional AC Repair Services in Fujairah, UAE',
  description: 'Expert AC repair, installation, and maintenance services in Rifa Dibba Al Fujairah, UAE. 24/7 emergency service. Call 056 451 2008 or 055 919 1235.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


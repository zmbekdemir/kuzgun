import './globals.css';
import { Spectral_SC } from 'next/font/google';

const spectralSC = Spectral_SC({
  subsets: ['latin'],
  weight: ['400', '700'], // choose the weights you need
  variable: '--font-spectral-sc',
  display: 'swap',
});

export const metadata = {
  title: 'KUZGUN',
  description: 'Dark login page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spectralSC.variable}>
      <body>{children}</body>
    </html>
  );
}

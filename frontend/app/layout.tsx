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
  icons: {
    icon: '/icon.png',
  },
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      {/* Default background for SSR; ThemeProvider adjusts after hydration */}
      <body className="min-h-dvh dark">
          {children}
      </body>
    </html>
  );
}

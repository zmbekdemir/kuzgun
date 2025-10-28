import './globals.css';
import { Spectral_SC } from 'next/font/google';
import { ThemeProvider } from "./theme/ThemeProvider";

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
    <html lang="en">
      {/* Default background for SSR; ThemeProvider adjusts after hydration */}
      <body className="min-h-dvh bg-custom-brown">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

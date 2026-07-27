import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import SmoothScroll from '@/components/SmoothScroll';
import ScrollAnimate from '@/components/ScrollAnimate';
import './globals.css';

const bdoGrotesk = localFont({
  src: '../public/fonts/BDOGrotesk-VF-BF648a657078401.ttf',
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Thrivewell Care | Premium Home Care in Scotland',
  description: 'Registered with the Care Inspectorate Scotland. We help families design, match, and coordinate personalized care that actually holds up in real life.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bdoGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body 
        className="min-h-full flex flex-col bg-surface-muted text-text-primary font-sans"
        suppressHydrationWarning
      >
        <SmoothScroll>
          <ScrollAnimate>
            <div className="flex flex-col min-h-screen">
              {/* Navigation Bar */}
              <Navbar />

              {/* Main Content Area */}
              <main className="flex-grow">
                {children}
              </main>

              {/* Shared Footer */}
              <Footer />

              {/* Cookie Consent Banner */}
              <CookieConsent />
            </div>
          </ScrollAnimate>
        </SmoothScroll>
      </body>
    </html>
  );
}

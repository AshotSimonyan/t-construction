import { Suspense } from 'react';
import 'swiper/css/effect-fade';
import '@/public/css/base.css';
import '@/public/css/custom.css';
import '@/public/css/fontawesome-all.min.css';
import '@/public/css/fontello.css';
import '@/public/css/justified.css';
import '@/public/css/magnific-popup.css';
import '@/public/css/nice-select.css';
import '@/public/css/style.css';
import '@/public/css/swiper.css';
import Loading from './loading';
import { Open_Sans, Rubik } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--Rubik',
});
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--OpenSans',
});

export const generateMetadata = async ({ locale }) => {
  const t = await getTranslations(locale);

  // Generate dynamic metadata based on translations
  const metaTitle = t('meta.title');
  const metaDescription = t('meta.description');

  return {
    title: metaTitle,
    description: metaDescription,
  };
};

export default async function RootLayout({ children, locale }) {
  const messages = await getMessages();
  return (
    <html>
      <body className={`${openSans.className} ${rubik.className}`}>
        <NextIntlClientProvider messages={messages}>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
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
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';

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

// export const metadata = {
//   title: {
//     hy: 'Տ-Քնսթրաքշն ՓԲԸ - Շինարարական և Էլեկտրաֆիկացման Ծառայություններ Հայաստանում',
//     en: 'T-Construction LLC - Construction and Electrification Services in Armenia',
//     ru: 'T-Construction - Строительные и электрификационные услуги в Армении',
//   },
//   description: {
//     hy: 'Տ-Քնսթրաքշն ՓԲԸ-ն առաջարկում է առաջատար շինարարական, էլեկտրաֆիկացման և ասֆալտապատման ծառայություններ Հայաստանում՝ ապահովելով որակ, հուսալիություն և անվտանգություն։',
//     en: 'T-Construction LLC offers leading construction, electrification, and paving services in Armenia, ensuring quality, reliability, and safety.',
//     ru: 'T-Construction предлагает передовые строительные, электрификационные и асфальтировочные услуги в Армении, обеспечивая качество, надежность и безопасность.',
//   },
// };

export default async function RootLayout({ children, params }) {
  console.log({ params });
  const messages = await getMessages();
  return (
    <html>
      <body className={`${openSans.className} ${rubik.className}`}>
        {/*<Suspense fallback={<Loading />}>{children}</Suspense>*/}
        <NextIntlClientProvider messages={messages}>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
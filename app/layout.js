import { Suspense } from 'react';
import 'swiper/css/effect-fade';
import '../public/css/base.css';
import '../public/css/custom.css';
import '../public/css/fontawesome-all.min.css';
import '../public/css/fontello.css';
import '../public/css/justified.css';
import '../public/css/magnific-popup.css';
import '../public/css/nice-select.css';
import '../public/css/style.css';
import '../public/css/swiper.css';
import Loading from './loading';
import { Open_Sans, Rubik } from 'next/font/google';

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

const metadata = {
  title: 'Տ-Քնսթրաքշն ՓԲԸ - Շինարարական և Էլեկտրաֆիկացման Ծառայություններ Հայաստանում',
  description:
    'Տ-Քնսթրաքշն ՓԲԸ-ն առաջարկում է առաջատար շինարարական, էլեկտրաֆիկացման և ասֆալտապատման ծառայություններ Հայաստանում՝ ապահովելով որակ, հուսալիություն և անվտանգություն։',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${openSans.className} ${rubik.className}`}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}

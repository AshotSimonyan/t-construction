'use client';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

export default function Breadcumb({ CurrentPage }) {
  const lang = useLocale();
  const t = useTranslations('homepage');

  return (
    <>
      <div className='industify_fn_pagetitle'>
        <div className='container'>
          <div className='title_holder'>
            <h3>{CurrentPage}</h3>
            <div className='industify_fn_breadcrumbs'>
              <ul>
                <li>
                  <Link href={`/${lang}`} title={t('breadcrumb')}>
                    {t('breadcrumb')}
                  </Link>
                </li>
                <li className='separator'>
                  <span></span>
                </li>
                <li>
                  <span className='bread-current'>{CurrentPage}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
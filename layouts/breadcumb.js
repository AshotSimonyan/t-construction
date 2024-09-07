'use client';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Breadcumb({ CurrentPage }) {
  const lang = useLocale();
  return (
    <>
      <div className='industify_fn_pagetitle'>
        <div className='container'>
          <div className='title_holder'>
            <h3>{CurrentPage}</h3>
            <div className='industify_fn_breadcrumbs'>
              <ul>
                <li>
                  <Link href={`/${lang}`} title='Home'>
                    Գլխավոր
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
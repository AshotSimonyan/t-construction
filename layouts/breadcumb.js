'use client';
import Link from 'next/link';

export default function Breadcumb({ CurrentPage }) {
  return (
    <>
      <div className='industify_fn_pagetitle'>
        <div className='container'>
          <div className='title_holder'>
            <h3>{CurrentPage}</h3>
            <div className='industify_fn_breadcrumbs'>
              <ul>
                <li>
                  <Link href='/' title='Home'>
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

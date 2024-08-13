'use client';

import React from 'react';
import Link from 'next/link';

export default function DesktopHeader() {
  return (
    <>
      <div className='industify_fn_header'>
        {/* Header: Top Panel */}
        <div className='industify_fn_toppanel'>
          <div className='left_panel'>
            <div className='info'>
              <a href='tel:+37444001496'>+374 44 001 496</a>
            </div>
            <div className='info'>
              <a href='mailto:info@tconstruction.am'>info@tconstruction.am</a>
            </div>
            <div className='info'>
              <span>Վահրամ Փափազյան 8</span>
            </div>
          </div>
        </div>
        {/* /Header: Top Panel */}

        {/* Header: Bottom Panel */}
        <div className='header_inner'>
          <div className='menu_logo'>
            <Link href='/'>
              <img
                className='desktop_logo'
                src='/img/logo-light.svg'
                alt='«Տ-Քնսթրաքշն» ՓԲԸ - Հայաստանում շինարարական և էլեկտրաֆիկացման առաջատար ընկերություն
'
              />
              <img
                className='desktop_logo_dark'
                src='/img/logo.svg'
                alt='«Տ-Քնսթրաքշն» ՓԲԸ - Հայաստանում շինարարական և էլեկտրաֆիկացման առաջատար ընկերություն
'
              />
            </Link>
          </div>
          <div className='menu_nav'>
            <ul className='industify_fn_main_nav vert_nav'>
              <li>
                <Link href='/'>ԳԼԽԱՎՈՐ</Link>
              </li>
              <li>
                <Link href='/services/101'>ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ</Link>
              </li>
              <li>{/*<Link href="/gallery">ՊԱՏԿԵՐԱՍՐԱՀ</Link>*/}</li>
              <li>
                <Link href='/contact'>ՀԵՏԱԴԱՐՁ ԿԱՊ</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* /Header: Bottom Panel */}
      </div>
      <div className='my-class'></div>
    </>
  );
}
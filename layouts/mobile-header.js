'use client';
import React, { useState, useEffect } from 'react';
import MetisMenu from 'metismenujs';
import Link from 'next/link';

export default function MobileHeader() {
  const [isMobileMenu, setMobileMenu] = useState(false);
  const MobileMenuTrueFalse = () => setMobileMenu(!isMobileMenu);

  useEffect(() => {
    new MetisMenu('#metismenu');
  }, []);

  return (
    <>
      <div className='industify_fn_mobilemenu_wrap'>
        <div className='industify_fn_toppanel'>
          <div className='left_panel'>
            <div className='info'>
              <a href='tel:+37444001496'>+374 44 001 496</a>
            </div>
            <div className='info'>
              <a href='mailto:info@tconstruction.am'>info@tconstruction.am</a>
            </div>
            {/*<div className='info'>*/}
            {/*  <span>Վահրամ Փափազյան 8</span>*/}
            {/*</div>*/}
          </div>
        </div>
        {/* LOGO & HAMBURGER */}
        <div className='logo_hamb'>
          <div className='in'>
            <div className='menu_logo'>
              <Link href='/'>
                <img
                  src='/img/logo-light.svg'
                  alt='«Տ-Քնսթրաքշն» ՓԲԸ - Հայաստանում շինարարական և էլեկտրաֆիկացման առաջատար ընկերություն'
                />
              </Link>
            </div>
            <div
              onClick={MobileMenuTrueFalse}
              className={
                !isMobileMenu
                  ? 'hamburger hamburger--collapse-r'
                  : 'hamburger hamburger--collapse-r is-active'
              }
            >
              <div className='hamburger-box'>
                <div className='hamburger-inner'></div>
              </div>
            </div>
          </div>
        </div>
        {/* /LOGO & HAMBURGER */}
        {/* MOBILE DROPDOWN MENU */}
        <div className={!isMobileMenu ? 'mobilemenu' : 'mobilemenu opened d-block'}>
          <div>
            <nav>
              <ul className='mmenu' id='metismenu'>
                <li>
                  <Link href='/'>ԳԼԽԱՎՈՐ</Link>
                </li>
                <li>
                  <Link href='/services/101'>ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ</Link>
                </li>
                {/*<li>*/}
                {/*  <Link href='/gallery'>ՊԱՏԿԵՐԱՍՐԱՀ</Link>*/}
                {/*</li>*/}
                <li>
                  <Link href='/contact'>ՀԵՏԱԴԱՐՁ ԿԱՊ</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* /MOBILE DROPDOWN MENU */}
      </div>
    </>
  );
}
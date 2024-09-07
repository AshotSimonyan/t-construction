'use client';
import React, { useState, useEffect } from 'react';
import MetisMenu from 'metismenujs';
import Link from 'next/link';
import LanguagePicker from '@/components/Language/Language';
import { useLocale, useTranslations } from 'next-intl';

export default function MobileHeader() {
  const [isMobileMenu, setMobileMenu] = useState(false);
  const lang = useLocale();
  const t = useTranslations('header');
  const nav = t.raw('nav');

  useEffect(() => {
    new MetisMenu('#metismenu');
  }, []);

  const MobileMenuTrueFalse = () => setMobileMenu(!isMobileMenu);

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
              <Link href={`/${lang}`}>
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
                  <Link href={`/${lang}`}>{nav.home}</Link>
                </li>
                <li>
                  <Link href={`/${lang}/services/101`}>{nav.services}</Link>
                </li>
                {/*<li>*/}
                {/*  <Link href='/gallery'>ՊԱՏԿԵՐԱՍՐԱՀ</Link>*/}
                {/*</li>*/}
                <li>
                  <Link href={`/${lang}/contact`}>{nav.contact}</Link>
                </li>
              </ul>
            </nav>
            <LanguagePicker />
          </div>
        </div>
        {/* /MOBILE DROPDOWN MENU */}
      </div>
    </>
  );
}
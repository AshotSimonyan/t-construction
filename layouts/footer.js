'use client';
import React from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

export default function Footer() {
  const lang = useLocale();
  const t = useTranslations('footer'); // Fetch footer translations from the separate footer section

  return (
    <>
      <footer className='industify_fn_footer'>
        <div className='top_footer'>
          <div className='top_footer_img' style={{ background: 'url(/img/footer/bg.jpg)' }}></div>
          {/* TRIPLE WIDGET */}
          <div className='footer_widget'>
            <div className='container'>
              <div className='inner'>
                <ul className='widget_area'>
                  <li>
                    <div className='item'>
                      <div className='logo'>
                        <Link href={`/${lang}`}>
                          <img
                            src='/img/logo-light.svg'
                            alt='«Տ-Քնսթրաքշն» ՓԲԸ - Հայաստանում շինարարական և էլեկտրաֆիկացման առաջատար ընկերություն'
                          />
                        </Link>
                      </div>
                      <div className='textwidget'>
                        <p>{t('description')}</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <div className='wid-title'>
                        <span>{t('usefulLinks')}</span>
                      </div>
                      <div className='widget_nav_menu'>
                        <ul className='menu'>
                          <li>
                            <Link href={`/${lang}`}>{t('nav.home')}</Link>
                          </li>
                          <li>
                            <Link href={`/${lang}/services/101`}>{t('nav.services')}</Link>
                          </li>
                          <li>
                            <Link href={`/${lang}/contact`}>{t('nav.contact')}</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <div className='wid-title'>
                        <span>{t('contactUs')}</span>
                      </div>
                      <div className='industify_fn_widget_business_hours'>
                        <div>
                          <ul>
                            <li>
                              <div className='day_item'>
                                <span className='day'>{t('address.label')}:</span>
                                <span className='hours'>{t('address.value')}</span>
                              </div>
                            </li>
                            <li>
                              <div className='day_item'>
                                <span className='day'>{t('phone.label')}:</span>
                                <a href='tel:+37444001496'>
                                  <span className='hours'>{t('phone.value')}</span>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className='day_item'>
                                <span className='day'>{t('email.label')}:</span>
                                <a href='mailto:info@tconstruction.am'>
                                  <span className='hours'>{t('email.value')}</span>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /TRIPLE WIDGET */}
        </div>
        {/* BOTTOM */}
        <div className='footer_bottom'>
          <div className='container'>
            <div className='footer_bottom_in'>
              <div className='footer_copyright'>
                <p>
                  &copy; {t('copyright')} {new Date().getFullYear()}
                </p>
              </div>
              {/*<a href="#"className="industify_fn_totop">*/}
              {/*    <span className="top"></span>*/}
              {/*    <span className="text">To Top</span>*/}
              {/*</a>*/}
            </div>
          </div>
        </div>
        {/* /BOTTOM */}
      </footer>
    </>
  );
}
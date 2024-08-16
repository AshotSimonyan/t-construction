import React from 'react';
import Link from 'next/link';

export default function Footer() {
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
                        <Link href='/'>
                          <img
                            src='/img/logo-light.svg'
                            alt='«Տ-Քնսթրաքշն» ՓԲԸ - Հայաստանում շինարարական և էլեկտրաֆիկացման առաջատար ընկերություն'
                          />
                        </Link>
                      </div>
                      <div className='textwidget'>
                        <p>
                          «Տ-Քնսթրաքշն» ՓԲԸ-ն իրականացնում է բարձրակարգ շինարարական, էլեկտրաֆիկացման
                          և ասֆալտապատման ծառայություններ՝ ապահովելով որակ, հուսալիություն և
                          անվտանգություն:
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <div className='wid-title'>
                        <span>Օգտակար Հղումներ</span>
                      </div>
                      <div className='widget_nav_menu'>
                        <ul className='menu'>
                          <li>
                            <Link href='/'>ԳԼԽԱՎՈՐ</Link>
                          </li>
                          <li>
                            <Link href='/services/101'>ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ</Link>
                          </li>
                          {/*<li>
                                                        <Link href="/gallery">ՊԱՏԿԵՐԱՍՐԱՀ</Link>
                                                    </li>*/}
                          <li>
                            <Link href='/contact'>ՀԵՏԱԴԱՐՁ ԿԱՊ</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <div className='wid-title'>
                        <span>Կապ Մեզ Հետ</span>
                      </div>
                      <div className='industify_fn_widget_business_hours'>
                        <div>
                          <ul>
                            <li>
                              <div className='day_item'>
                                <span className='day'>հասցե:</span>
                                <span className='hours'>Վահրամ Փափազյան 8</span>
                              </div>
                            </li>
                            <li>
                              <div className='day_item'>
                                <span className='day'>հեռախոս:</span>
                                <a href='tel:+37444001496'>
                                  {' '}
                                  <span className='hours'>+374 44 001 496</span>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className='day_item'>
                                <span className='day'>Էլ. հասցե:</span>
                                <a href='mailto:info@tconstruction.am'>
                                  <span className='hours'>info@tconstruction.am</span>
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
                <p>&copy; Տ-Քնսթրաքշն {new Date().getFullYear()}</p>
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
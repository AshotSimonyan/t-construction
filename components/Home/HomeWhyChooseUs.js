'use client';
import { Checked } from '@/public/svg/icon';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

const rightImage = '/img/service/small.webp';

export default function HomeWhyChooseUs() {
  const lang = useLocale();
  const t = useTranslations('homepage.whyChooseUs');

  return (
    <>
      <div className='service_section'>
        {/* <!-- About with Rating Shortcode --> */}
        <div className='fn_cs_about_with_rating'>
          <div className='container'>
            <div className='awr_inner'>
              <div className='left_part'>
                <div className='title_holder'>
                  <h3>{t('title')}</h3>
                  <p>{t('description1')}</p>
                  <p>{t('description2')}</p>
                </div>
                <div className='contact_left'>
                  <Link href={`/${lang}/contact`}>
                    <span className='text'>{t('contactText')}</span>
                    <span className='arrow'></span>
                  </Link>
                </div>
              </div>
              <div className='right_part'>
                <div className='r_inner'>
                  <div className='top_section'>
                    <div className='badge_holder'>
                      <div className='badge_left'>
                        <div className='b_title'>
                          <h3>{t('badgeTitle')}</h3>
                        </div>
                      </div>
                      <div
                        className='badge_right'
                        style={{ backgroundImage: `url(${rightImage})` }}
                      ></div>
                    </div>
                  </div>
                  <div className='bottom_section'>
                    <div className='list'>
                      <ul>
                        {t.raw('listItems').map((item, index) => (
                          <li key={index}>
                            <div className='item'>
                              <span className='icon'>
                                <Checked className='fn__svg' />
                              </span>
                              <p>{item}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /About with Rating Shortcode --> */}
      </div>
    </>
  );
}
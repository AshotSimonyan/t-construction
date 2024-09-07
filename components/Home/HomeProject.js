'use client';
import { Arrow_r } from '@/public/svg/icon';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

export default function HomeProject() {
  const lang = useLocale();
  const t = useTranslations('homepage.services'); // Get service translations

  const services = t.raw('list'); // Retrieve the list of services from translations

  return (
    <>
      <div className='fn_cs_project_sticky'>
        <div className='container'>
          <div className='inner'>
            <div className='left_part'>
              <div className='fn_cs_sticky_section'>
                <h3>{t('title')}</h3>
                <p>{t('description')}</p>
              </div>
            </div>
            <div className='right_part'>
              <div className='fn_cs_sticky_section'>
                <ul>
                  {services.map((service) => (
                    <li key={service.id}>
                      <div className='item'>
                        <div className='img_holder'>
                          <img src='/img/thumb/560-375.jpg' alt='' />
                          <div
                            className='abs_img'
                            style={{ backgroundImage: `url(${service.image})` }}
                          >
                            <Link href={`/${lang}/services/${service.id}`}></Link>
                          </div>
                        </div>
                        <div className='title_holder'>
                          <h3>
                            <Link href={`/${lang}/services/${service.id}`}>{service.title}</Link>
                          </h3>
                          <p>
                            <Link href={`portfolioSinglePage${service.id}`}>
                              <span className='text'>Տեսնել ավելին</span>
                              <span className='arrow'>
                                <Arrow_r className='fn__svg' />
                              </span>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
'use client';
import { useTranslations } from 'next-intl';

export default function HomeAbout() {
  const t = useTranslations('homepage.about'); // Fetch the about section translations

  return (
    <>
      <div className='about_section'>
        {/* <!-- About Shortcode --> */}
        <div className='fn_cs_about'>
          <div className='container'>
            <div className='a_inner'>
              <div className='leftpart'>
                <div className='title_holder'>
                  <h3 className='title'>{t('title')}</h3>
                  <p>{t('paragraph1')}</p>
                  <p>{t('paragraph2')}</p>
                </div>
              </div>
              <div className='rightpart'>
                <div
                  className='r_inner'
                  id='scene'
                  style={{
                    transform: 'translate3d(0px, 0px, 0px)',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <div
                    className='layer border'
                    data-depth='0.3'
                    style={{
                      position: 'relative',
                      display: 'block',
                      left: '0px',
                      top: '0px',
                      transform: 'translate3d(21.2782px, -19.0075px, 0px)',
                      transformStyle: 'preserve-3d',
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <span className='span1'></span>
                    <span className='span2'></span>
                    <img src='img/thumb/500-560.jpg' alt='' />
                  </div>
                  <div
                    className='img_holder layer'
                    data-depth='0.5'
                    style={{
                      position: 'absolute',
                      display: 'block',
                      left: '0px',
                      top: '0px',
                      transformStyle: 'preserve-3d',
                      backfaceVisibility: 'hidden',
                      transform: 'translate3d(35.4636px, -31.6792px, 0px)',
                    }}
                  >
                    <img src='img/thumb/500-560.jpg' alt='' />
                    <div
                      className='abs_img'
                      data-bg-img='img/about/right.jpg'
                      style={{ backgroundImage: 'url(img/about/right.jpeg)' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /About Shortcode --> */}
      </div>
    </>
  );
}
'use client';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslations } from 'next-intl';

// register Swiper custom elements
register();

export default function HomeSlider() {
  const t = useTranslations('homepage');
  const sliderData = t.raw('sliderData'); // Fetch the array of slider data directly

  console.log(t.raw('sliderData'));
  return (
    <>
      <div
        className='industify_slider_alpha'
        data-desc-show='yes'
        data-category-show='yes'
        data-nav-types='square'
        data-autoplay-switch='enabled'
        data-autoplay-time='8000'
        data-effect='cards'
        data-progress='enabled'
        data-box-pos='cr'
        data-img-effect='enabled'
        data-text-effect='enabled'
      >
        {/* <!-- Alpha Slider: navigation --> */}
        <div className='owl_control'>
          <div className='fn_prev'>
            <span>
              <span className='a'></span>
              <span className='b'></span>
              <span className='c'></span>
            </span>
          </div>
          <div className='fn_next'>
            <span>
              <span className='a'></span>
              <span className='b'></span>
              <span className='c'></span>
            </span>
          </div>
        </div>
        {/* <!-- /Alpha Slider: navigation --> */}

        {/* <!-- Alpha Slider: pagination --> */}
        <div className='swiper-pagination'></div>
        {/* <!-- /Alpha Slider: pagination --> */}

        {/* <!-- Alpha Slider: wrapper --> */}
        <Swiper
          spaceBetween={2}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: '.fn_prev',
            nextEl: '.fn_next',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className='custom-class'
        >
          {sliderData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className='item'>
                <div
                  className='img_holder'
                  style={{ backgroundImage: `url(/img/slider/${index + 1}.jpg)` }}
                ></div>
                <div className='title_holder'>
                  <div className='inner'>
                    <div className='in'>
                      <h3>
                        <span>{slide.title}</span>
                      </h3>
                      <div className='desc'>
                        <span>{slide.description}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <!-- /Alpha Slider --> */}
    </>
  );
}
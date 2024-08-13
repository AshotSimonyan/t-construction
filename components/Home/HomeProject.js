import { Arrow_r } from '@/public/svg/icon';
import Link from 'next/link';
import { services } from '@/constants/data';

export default function HomeProject() {
  return (
    <>
      <div className='fn_cs_project_sticky'>
        <div className='container'>
          <div className='inner'>
            <div className='left_part'>
              <div className='fn_cs_sticky_section'>
                <h3>Մեր Ծառայությունները</h3>
                <p>
                  Մենք իրականացնում ենք բազմաբնույթ նախագծեր՝ ապահովելով բարձր որակ, հուսալիություն
                  և անվտանգություն:
                </p>
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
                            style={{ backgroundImage: `url(/img/portfolio/${service.id}.jpg)` }}
                          >
                            <Link href={`portfolioSinglePage${service.id}`}></Link>
                          </div>
                        </div>
                        <div className='title_holder'>
                          <h3>
                            <Link href={`portfolioSinglePage${service.id}`}>{service.title}</Link>
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
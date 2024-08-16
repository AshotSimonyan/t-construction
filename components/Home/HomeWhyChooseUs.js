import { Arrow_r, Certificate, Checked, Stars } from '@/public/svg/icon';
import Link from 'next/link';

const rightImage = '/img/service/small.webp';

export default function HomeWhyChooseUs() {
  const data = [
    'Լավագույն մասնագետները ոլորտում.',
    'Շինարարական ոլորտի ամենափորձառու ընկերություններից մեկը.',
    'Իրականացրել ենք բազմաթիվ հաջողված նախագծեր.',
    'Ընկերությունն ունի բոլոր անհրաժեշտ ռեսուրսները.',
  ];
  return (
    <>
      <div className='service_section'>
        {/* <!-- About with Rating Shortcode --> */}
        <div className='fn_cs_about_with_rating'>
          <div className='container'>
            <div className='awr_inner'>
              <div className='left_part'>
                <div className='title_holder'>
                  <h3>Ինչու՞ Մեզ Ընտրել</h3>
                  <p>«Տ-Քնսթրաքշն» ՓԲ ընկերությունը հիմնադրվել է 2016թ. ապրիլ ամսին:</p>
                  <p>
                    Կազմակերպությունն իր գործունեության պատմության ընթացքում կարողացել է ապացուցել,
                    որ հուսալի գործընկեր է: Մեզ հետ աշխատանքը միշտ հարմար է և փոխշահավետ, ինչն էլ
                    նախադրյալ է երկարաժամկետ ու շարունակական համագործակցության, որի ապացույցը մեր
                    հաճախորդների անընդհատ աճող ցանկն է: Մենք առանձնանում ենք ոլորտում օպտիմալ գնի և
                    բարձր որակի համադրությամբ: Ընկերությունն ունի բոլոր անհրաժեշտ ռեսուրսները,
                    ցանկացած նախագիծ առաջնային քայլերից մինչև շահագործման հանձնում կյանքի կոչելու
                    համար:
                  </p>
                </div>
                <div className='contact_left'>
                  <Link href='/contact'>
                    <span className='text'>Կապ մեզ հետ</span>
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
                          <h3>Շինարարական ոլորտի վստահելի առաջնորդ</h3>
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
                        {data.map((item, index) => (
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
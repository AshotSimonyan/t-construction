import { Arrow_r } from '@/public/svg/icon';
import Link from 'next/link';

export default function HomePrinciples() {
  const data = [
    {
      title: 'Որակ',
      description:
        'Մենք ապահովում ենք ծառայությունների բարձր որակը՝ աշխատելով լավագույն նյութերով և տեխնոլոգիաներով՝ ամեն նախագծում։',
      number: '01',
    },
    {
      title: 'Հուսալիություն',
      description:
        'Մենք վստահություն ենք ներշնչում մեր հաճախորդներին՝ կատարելով մեր պարտավորությունները ճիշտ ժամանակին և բարձր որակով։',
      number: '02',
    },
    {
      title: 'Անվտանգություն',
      description:
        'Մենք հատուկ ուշադրություն ենք դարձնում անվտանգության ապահովմանը մեր բոլոր ծրագրերում՝ սկսած նախագծման փուլից մինչև վերջնական իրականացում։',
      number: '03',
    },
  ];
  return (
    <>
      <div className='fn_cs_principles_modern'>
        <div className='container'>
          <div className='inner'>
            <div className='shape'>
              <span className='shape1'></span>
              <span className='shape2'></span>
            </div>
            <ul className='fn_cs_miniboxes'>
              {data.map((item, index) => (
                <li key={index}>
                  <div className='item'>
                    <div className='title_holder'>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <span className='icon'></span>
                    </div>
                    <div className='number_holder'>{item.number}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

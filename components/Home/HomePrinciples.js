'use client';
import { useTranslations } from 'next-intl';

export default function HomePrinciples() {
  const t = useTranslations('homepage');
  const principles = t.raw('principles');

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
              {principles.map((item, index) => (
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
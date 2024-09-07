'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

// Helper function to render descriptions from JSON
const renderDescription = (description) => {
  return description.map((block, index) => {
    if (block.type === 'paragraph') {
      return <p key={index}>{block.content}</p>;
    }
    if (block.type === 'list') {
      return (
        <ol key={index}>
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex}>
              <strong>{item.strong}</strong>
              <p>{item.content}</p>
            </li>
          ))}
        </ol>
      );
    }
    return null;
  });
};

export default function ServicesSingle({ service }) {
  const lang = useLocale();
  const t = useTranslations('servicesPage');

  const currentService = t.raw('services').find((s) => s.id === service.id);

  return (
    <>
      <div className='industify_fn_sidebarpage'>
        <div className='container'>
          <div className='s_inner'>
            {/* Main Sidebar: Left */}
            <div className='industify_fn_leftsidebar'>
              {/* Single Service */}
              <div className='industify_fn_service_single'>
                <div className='img_holder'>
                  <img src={service.image} alt={currentService.title} />
                </div>
                <div className='desc_holder'>{renderDescription(currentService.description)}</div>
              </div>
              {/* /Single Service */}
            </div>

            {/* Main Sidebar: Right */}
            <div className='industify_fn_rightsidebar'>
              {/* Service List */}
              <div className='service_list_as_function'>
                <div className='title'>
                  <h3>{t('allServicesTitle')}</h3>
                </div>
                <div className='list_holder'>
                  <ul>
                    {t.raw('services').map((service) => (
                      <li key={service.id}>
                        <Link href={`/${lang}/services/${service.id}`}>{service.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* /Service List */}
            </div>
            {/* Main Sidebar: Right */}
          </div>
        </div>
      </div>
    </>
  );
}
import Link from 'next/link';
import { services } from '@/constants/data';

export default function ServicesSingle({ service }) {
  return (
    <>
      <div className='industify_fn_sidebarpage'>
        <div className='container'>
          <div className='s_inner'>
            {/* Main Sidebar: Left  */}
            <div className='industify_fn_leftsidebar'>
              {/* Single Service  */}

              <div className='industify_fn_service_single'>
                <div className='img_holder'>
                  <img src={service.images[0]} alt='' />
                </div>

                <div className='desc_holder'>{service.description}</div>
              </div>
              {/* /Single Service  */}
            </div>

            {/* Main Sidebar: Right  */}
            <div className='industify_fn_rightsidebar'>
              {/* Service List  */}
              <div className='service_list_as_function'>
                <div className='title'>
                  <h3>Բոլոր Ծառայությունները</h3>
                </div>
                <div className='list_holder'>
                  <ul>
                    {services.map((service) => (
                      <li key={service.id}>
                        <Link href={`/services/${service.id}`}>{service.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* /Service List  */}
            </div>
            {/* Main Sidebar: Right  */}
          </div>
        </div>
      </div>
    </>
  );
}
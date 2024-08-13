import Layout from '@/layouts/layout';
import Link from 'next/link';

export const metadata = {
  title: 'Տ-Քնսթրաքշն» ՓԲԸ - Էջը չի գտնվել',
};

export default function notFound() {
  return (
    <>
      <Layout>
        <div className='industify_fn_error_page'>
          <div className='container'>
            <div className='error_box max550'>
              <div className='title_holder'>
                <h1>404</h1>
                <h3>Էջը չի գտնվել</h3>
              </div>
              <div className='contact_left'>
                <Link href='/'>ՎԵՐԱԴԱՌՆԱԼ ԳԼԽԱՎՈՐ</Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
import HomeAbout from '@/components/Home/HomeAbout';
import HomePrinciples from '@/components/Home/HomePrinciples';
import HomeSlider from '@/components/Home/HomeSlider';
import HomeWhyChooseUs from '@/components/Home/HomeWhyChooseUs';
import Layout from '@/layouts/layout';
import HomeProject from '@/components/Home/HomeProject';

export default function Home() {
  // #0e2424
  return (
    <>
      <Layout className={'transdark'}>
        <HomeSlider />

        {/* <!-- Principles Modern --> */}
        <HomePrinciples />
        {/* <!-- /Principles Modern --> */}

        {/* <!-- Service Section --> */}
        <HomeWhyChooseUs />
        {/* <!-- /Service Section --> */}

        {/* <!-- Project Sticky Full --> */}
        {/*<HomeProject />*/}
        {/* <!-- /Project Sticky Full --> */}

        {/* <!-- Project Sticky Full --> */}
        <HomeProject />
        {/* <!-- /Project Sticky Full --> */}

        {/* <!-- About Section --> */}
        <HomeAbout />
        {/* <!-- /About Section --> */}
      </Layout>
    </>
  );
}
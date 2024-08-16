import HomeAbout from '@/components/Home/HomeAbout';
import HomePrinciples from '@/components/Home/HomePrinciples';
import HomeSlider from '@/components/Home/HomeSlider';
import HomeWhyChooseUs from '@/components/Home/HomeWhyChooseUs';
import Layout from '@/layouts/layout';
import HomeProject from '@/components/Home/HomeProject';

export default function Home() {
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

//main color #1a4691
//orange -> #00358f
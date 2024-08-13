import HomeAbout from '@/components/Home/HomeAbout';
import HomeBlog from '@/components/Home/HomeBlog';
import HomeCTA from '@/components/Home/HomeCTA';
import HomePrinciples from '@/components/Home/HomePrinciples';
import HomeProject from '@/components/Home/HomeProject';
import HomeServices from '@/components/Home/HomeServices';
import HomeSlider from '@/components/Home/HomeSlider';
import HomeTetimonial from '@/components/Home/HomeTetimonial';
import HomeWhyChooseUs from '@/components/Home/HomeWhyChooseUs';
import Layout from '@/layouts/layout';
import Home2Project from '@/components/Home2/Home2Project';

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
        <Home2Project />
        {/* <!-- /Project Sticky Full --> */}

        {/* <!-- About Section --> */}
        <HomeAbout />
        {/* <!-- /About Section --> */}
      </Layout>
    </>
  );
}

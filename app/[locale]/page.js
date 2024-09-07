'use client';
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
//#d24e1a #d24e1a orange -> #00358f

//#111724 -> 0f1d3b darker ->#0c1831

//rgba(15, 29, 59, 0.9) rgb(26 70 145 / 40%) #4882e5
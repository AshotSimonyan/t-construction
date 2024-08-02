import HomeAbout from "@/components/Home/HomeAbout";
import HomeBlog from "@/components/Home/HomeBlog";
import HomeCTA from "@/components/Home/HomeCTA";
import HomePrinciples from "@/components/Home/HomePrinciples";
import HomeProject from "@/components/Home/HomeProject";
import HomeServices from "@/components/Home/HomeServices";
import HomeSlider from "@/components/Home/HomeSlider";
import HomeTetimonial from "@/components/Home/HomeTetimonial";
import HomeWhyChooseUs from "@/components/Home/HomeWhyChooseUs";
import Layout from "@/layouts/layout";



export default function Home() {
    return (
        <>
            <Layout className={"transdark"}>

                <HomeSlider />

                {/* <!-- Principles Modern --> */}
                <HomePrinciples />
                {/* <!-- /Principles Modern --> */}

                {/* <!-- About Section --> */}
                <HomeAbout />
                {/* <!-- /About Section --> */}

                {/* Services */}
                <HomeServices />
                {/* /Services */}

                {/* <!-- Service Section --> */}
                <HomeWhyChooseUs />
                {/* <!-- /Service Section --> */}

                {/* <!-- Call to Action --> */}
                <HomeCTA />
                {/* <!-- /Call to Action --> */}

                {/* <!-- Testimonial Section --> */}
                <HomeTetimonial />
                {/* <!-- /Testimonial Section --> */}

                {/* <!-- Project Sticky Full --> */}
                <HomeProject />
                {/* <!-- /Project Sticky Full --> */}

                {/* <!-- Blog Section --> */}
                <HomeBlog />
                {/* <!-- /Blog Section --> */}

            </Layout >
        </>
    )
}

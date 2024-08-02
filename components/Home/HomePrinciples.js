import { Arrow_r } from "@/public/svg/icon";
import Link from "next/link";

export default function HomePrinciples() {
    return (
        <>
            <div className="fn_cs_principles_modern">
                <div className="container">
                    <div className="inner">
                        <div className="shape"><span className="shape1"></span><span className="shape2"></span></div>
                        <ul className="fn_cs_miniboxes">
                            <li>
                                <div className="item">
                                    <div className="title_holder">
                                        <Link href="/principles#Honesty"></Link>
                                        <h3>Honesty</h3>
                                        <p>Be humble in all dealings with our partners, clients and team members. True wisdom and understanding belong to the humble.</p>
                                        <span className="icon">
                                            <Arrow_r className="fn__svg" />
                                        </span>
                                    </div>
                                    <div className="number_holder">01</div>
                                </div>
                            </li>
                            <li>
                                <div className="item">
                                    <div className="title_holder">
                                        <Link href="/principles#Passion"></Link>
                                        <h3>Passion</h3>
                                        <p>Success is when we can achieve results in the things we are passionate about and feel as though we are making a difference.</p>
                                        <span className="icon">
                                            <Arrow_r className="fn__svg" />
                                        </span>
                                    </div>
                                    <div className="number_holder">02</div>
                                </div>
                            </li>
                            <li>
                                <div className="item">
                                    <div className="title_holder">
                                        <Link href="/principles#Qualiy"></Link>
                                        <h3>Quality Work</h3>
                                        <p>We ensure that all projects are done with utmost professionalism using quality materials while offering clients the support and accessibility.</p>
                                        <span className="icon">
                                            <Arrow_r className="fn__svg" />
                                        </span>
                                    </div>
                                    <div className="number_holder">03</div>
                                </div>
                            </li>
                        </ul >
                    </div >
                </div >
            </div >
        </>
    )
}

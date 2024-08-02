'use client'
import Link from 'next/link';
import { useState } from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Vk } from '../public/svg/social/IconSocial';


const background = "/img/call.png"

export default function DesktopHeader() {

    // const [isActive, setActive] = useState(false);
    // const activeTrueFalse = () => setActive(!isActive)
    // const [isSelect, setSelect] = useState("USD");

    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);

    const [isSelect, setSelect] = useState("ENG");


    return (
        <>
            <div className="industify_fn_header">

                {/* <!-- Header: Top Panel --> */}
                <div className="industify_fn_toppanel">
                    <div className="left_panel">
                        <div className="info">
                            <Link href="tel:07787744741">(0778) 774 - 474 -1</Link>
                        </div>
                        <div className="info">
                            <Link href="mailto:rendycoder.com@gmail.com">trendycoder.com@gmail.com</Link>
                        </div>
                        <div className="industify_fn_social_list">
                            <ul>
                                <li>
                                    <Link href="#" target="_blank" rel="noreferrer">
                                        <Facebook className="fn__svg" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" target="_blank" rel="noreferrer">
                                        <Twitter className="fn__svg" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" target="_blank" rel="noreferrer">
                                        <Instagram className="fn__svg" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" target="_blank" rel="noreferrer">
                                        <Vk className="fn__svg" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" target="_blank" rel="noreferrer">
                                        <Linkedin className="fn__svg" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div >
                {/* <!-- /Header: Top Panel --> */}

                {/* <!-- Header: Bottom Panel --> */}
                <div className="header_inner">
                    <div className="menu_logo">
                        <Link href="/">
                            <img className="desktop_logo" src="/img/logo-light.png" alt="Industry HTML Template" />
                            <img className="desktop_logo_dark" src="/img/logo-dark.png" alt="Industry HTML Template" />
                        </Link>
                    </div>
                    <div className="menu_nav">
                        <ul className="industify_fn_main_nav vert_nav">
                            <li className="menu-item-has-children">
                                <Link href="/">Home</Link>
                                <ul className="sub-menu">
                                    <li><Link href="/">Home Alpha</Link></li>
                                    <li><Link href="/home2">Home Beta</Link></li>
                                    <li><Link href="/home3">Home Gamma</Link></li>
                                    <li><Link href="/home4">Home Delta</Link></li >
                                </ul >
                            </li >
                            <li>
                                <Link href="/portfolio">Projects</Link>
                            </li >
                            <li className="menu-item-has-children">
                                <Link href="/services">Our Services</Link>
                                <ul className="sub-menu">
                                    <li><Link href="/services/serviceSinglePage9">Aerospace and Defense</Link></li>
                                    <li><Link href="/services/serviceSinglePage8">Automative Manufacturing</Link></li >
                                    <li><Link href="/services/serviceSinglePage7">Chemical Industry</Link></li >
                                    <li><Link href="/services/serviceSinglePage6">Oil and Gas Industry</Link></li >
                                    <li><Link href="/services/serviceSinglePage5">Energy &#038; Commodities</Link></li >
                                    <li><Link href="/services/serviceSinglePage4">Medical Devices</Link></li >
                                    <li><Link href="/services/serviceSinglePage3">Housewares &#038; Home Decor</Link></li >
                                    <li><Link href="/services/serviceSinglePage2">Textiles &#038; Apparel</Link></li >
                                    <li><Link href="/services/serviceSinglePage1">Construction &#038; Engineering</Link></li >
                                </ul >
                            </li >
                            <li className="menu-item-has-children">
                                <Link href="#">Pages</Link>
                                <ul className="sub-menu">
                                    <li><Link href="/gallery">Gallery</Link></li>
                                    <li><Link href="/404">404 Page</Link></li >
                                    <li><Link href="/principles">Our Principles</Link></li >
                                    <li><Link href="/services">Our Services</Link></li >
                                    <li><Link href="blog/blogFullPage">Blog Full</Link></li >
                                    <li><Link href="/protected">Protected Page</Link></li >
                                </ul >
                            </li >
                            <li>
                                <Link href="/blog">Blog</Link>
                            </li >
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li >
                        </ul >
                    </div >
                    <div className="toll_free_lang">
                        {/* <div className="lang_switcher">
                            <span onClick={activeTrueFalse} className="click">{isSelect}</span>
                        </div> */}
                        {/* <div className={isActive ? "industify_fn_moving_lang opened" : "industify_fn_moving_lang"} style={{ "position": "absolute", "left": "1281.16px", "top": "105.085px" }}>
                            <ul onClick={activeTrueFalse}>
                                <li onClick={() => setSelect("Eng")}><span>Eng</span></li>
                                <li onClick={() => setSelect("Spa")}><span>Spa</span></li>
                                <li onClick={() => setSelect("Rus")}><span>Rus</span></li>
                            </ul>
                        </div> */}
                        <div onClick={toggleTrueFalse} className={`nice-select ${isToggled ? "open" : ""}`}>
                            <span className="current">{isSelect}</span>
                            <ul className="list">
                                <li onClick={() => setSelect("ENG")} className={`option ${isSelect == "ENG" && "selected focus"}`}>ENG</li>
                                <li onClick={() => setSelect("SPA")} className={`option ${isSelect == "SPA" && "selected focus"}`}>SPA</li>
                                <li onClick={() => setSelect("RUS")} className={`option ${isSelect == "RUS" && "selected focus"}`}>RUS</li>
                            </ul>
                        </div>

                        <div className="toll_free">
                            <span className="shape1"></span>
                            <span className="shape2"></span>
                            <span className="shape3"></span>
                            <div className="tf_in">
                                <div className="img_holder" style={{ backgroundImage: `url(${background})` }}></div>
                                <p><span>Toll Free:</span> 1-800-987-6543</p>
                            </div>
                        </div>

                    </div>
                </div >
                {/* <!-- /Header: Bottom Panel --> */}

            </div >
            <div className="my-class"></div>
        </>
    )
}

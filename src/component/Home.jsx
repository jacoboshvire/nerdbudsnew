import React from 'react';
import { NavLink } from 'react-router-dom';
import array from './ab.jsx'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Home() {
    var [navbar, setNavbar] = useState(false)

    var [clickmenu, setclickmenu] = useState(false)
    var [menubar, setmenubar] = useState(false)
    var [mainmenus, setmainmenus] = useState(false)
    var [abtMenu, setabtMenu] = useState(false)
    var [can, setcan] = useState(false)
    var [abt, setabt] = useState(false)
    useEffect(() => {
        Aos.init({
            duration: 1500 
        });
    }, [])

    var abtMenu = () =>{
        if (!abt){
            setabt(true)
        } else {
            setabt(false)
        }
    }

    var changenav = () =>{
        if (window.scrollY >= 100){
            setNavbar(true)
        } else{
            setNavbar(false)
        }
    }

    var mainmenubar = () =>{
        if (!clickmenu){
            setmenubar(true)
            setmainmenus(true)
        } else {
            setmenubar(false)
            setmainmenus(false)
        }
    }

    
    var maincan = () =>{
        if (clickmenu){
            setmenubar(true)
            setmainmenus(true)
        } else {
            setmenubar(false)
            setmainmenus(false)
        }
    }

    // window.addEventListener("click", mainmenubar)

    window.addEventListener("scroll", changenav);
  return (
    <div>

            <div>
        <div className={mainmenus ? "hidden" : "mainmenu"} >
            <div id="cen" onClick={maincan}>
                <h2>
                    &#x2715;
                </h2>
            </div>
            <div id="inside_mainmenu">
                <div className="mainNav">
                    <ul>Home</ul>
                    <ul>About</ul>
                    <ul>Contacts</ul>
                </div>
            </div>
        </div>
        <header>
            <nav className={navbar ? "navbar active" : "navbar"}>
                <div className="firstNav">
                    <div className="image">
                        <svg width="19" height="35" viewBox="0 0 29 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.1523 30.8579V33.2892C21.1523 36.8433 18.2005 39.8777 14.4061 39.9963C10.439 40.1203 7.18141 37.1466 7.18141 33.4606V30.8735C7.18142 30.8694 7.18318 30.8654 7.1863 30.8625C7.18942 30.8596 7.19365 30.8579 7.19806 30.8579H21.1523Z" fill="#333333"/>
                            <path d="M14.7191 0.0108722C22.1102 0.273512 28.1116 5.94518 28.3273 12.8664C28.4776 17.6874 25.8776 21.949 21.8883 24.3817C21.6225 24.5438 21.4565 24.8154 21.4571 25.1124V28.3561C21.4571 28.4694 21.4333 28.5816 21.387 28.6862C21.3407 28.7909 21.2728 28.8859 21.1872 28.966C21.1017 29.0461 21.0001 29.1096 20.8883 29.153C20.7766 29.1963 20.6567 29.2186 20.5358 29.2186H7.79771C7.67672 29.2186 7.55691 29.1963 7.44513 29.153C7.33335 29.1096 7.23178 29.0461 7.14623 28.966C7.06067 28.8859 6.99281 28.7909 6.94651 28.6862C6.90021 28.5816 6.87638 28.4694 6.87638 28.3561V25.1116C6.87638 24.8146 6.70999 24.5429 6.44415 24.3808C2.56527 22.0149 0.000173569 17.9198 0.000173569 13.2627C0.000173569 5.76686 6.64347 -0.276745 14.7191 0.0108722Z" fill="#333333"/>
                            <path d="M10.1134 10.0354C11.9021 10.0354 13.376 11.3178 13.5434 12.952H14.7906C14.958 11.318 16.4319 10.0354 18.2206 10.0354C20.1212 10.0354 21.6675 11.4829 21.6675 13.262C21.6675 15.0411 20.1212 16.4888 18.2206 16.4888C16.4319 16.4888 14.958 15.2063 14.7906 13.5722H13.5433C13.3759 15.2063 11.902 16.4888 10.1132 16.4888C8.2126 16.4888 6.66634 15.0412 6.66634 13.262C6.66634 11.4828 8.21276 10.0354 10.1134 10.0354ZM18.2206 15.8685C19.7559 15.8685 21.0047 14.6993 21.0047 13.2622C21.0047 11.8251 19.7559 10.6561 18.2206 10.6561C16.6854 10.6561 15.4366 11.8252 15.4366 13.2622C15.4366 14.6992 16.6854 15.8683 18.2206 15.8683V15.8685ZM10.1134 15.8685C11.6486 15.8685 12.8975 14.6993 12.8975 13.2622C12.8975 11.8251 11.6486 10.6561 10.1134 10.6561C8.5781 10.6561 7.32927 11.8252 7.32927 13.2622C7.32927 14.6992 8.57816 15.8683 10.1134 15.8683V15.8685Z" fill="white"/>
                        </svg>      
                        <h1>
                            Nerdbuds
                        </h1>
                    </div>
                    <div className="mainNav">
                        <ul>Home</ul>
                        <ul>About</ul>
                        <ul>Contacts</ul>
                    </div>
                </div>
                <div className="signin">
                    <NavLink  to={'/'} className="sign1">
                        login
                    </NavLink>
                    <NavLink  to={'/sign'} className="sign2">
                        Signin
                    </NavLink>
                </div>
                <div id="menubar" className='menubar' onClick={mainmenubar}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>
        </header>
        <br />
        <br />
        <br />
        <br />
        <div className="mainPath1">
            <div id="text">
                <div id="mainText">
                    <h1 data-aos="fade-up"
                        data-aos-duration="3000">
                        The Digital Revolution
                    </h1>
                </div>
                <div id="minText" data-aos="fade-right">
                    <p>
                    We take your startups to the next level with our bespoke services deeply embedded with strict attention to design and quality ,giving nothing but the best to our clientele and bringing them into the digital revolution.
                    </p>
                </div>
                <br />
                <br />
                <div id="mainInk" data-aos="zoom-in">
                    <NavLink  to={'/'} className="sign1">
                        login
                    </NavLink>
                    <br />
                    <br />
                    <br />
                    <br />
                    <NavLink  to={'/'} id="sign3">
                            Signin
                    </NavLink>
                    
                </div>
            </div>
            <img src="/image.svg" alt="the" data-aos="fade-left" date-aos-delay="1000"/>
        </div>
        <br />
        <br />
        <br />
        <div className="mainPath2">
            <div id="main2Text" data-aos="fade-up" data-aos-duration="3000">
                <h2>
                We Provide you with some of the Best experience in the digital space
                </h2>
                <p>
                Nerdbuds is driven to give you an impeccable experience with our softwares and services taking your business to the top and setting you apart from the competition.
                </p>
                <br />
                <NavLink  to={'/sign'} id="sign4">
                    Signin
                </NavLink>
            </div>
            <div id="main2Abt" >
                <div id="card" data-aos="zoom-in"   data-aos-delay="50">
                    <div className="maincardText">
                        <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit deleniti explicabo necessitatibus dicta ut laudantium sit quae repellat corrupti non
                        </p>
                    </div>
                    <div className="subcardText">
                        <div id="imgCard">
                            <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="19.9999" cy="23.3333" rx="13.3333" ry="13.3333" stroke="#5583C3" stroke-width="5"/>
                                <path d="M20 23.3333L20 18.3333" stroke="#5583C3" stroke-width="5" stroke-linecap="round"/>
                                <path d="M29.1666 12.5L31.6666 10" stroke="#5583C3" stroke-width="5" stroke-linecap="round"/>
                                <path d="M16.7803 3.95099C16.9702 3.7738 17.3887 3.61722 17.9708 3.50555C18.553 3.39387 19.2663 3.33334 20 3.33334C20.7338 3.33334 21.4471 3.39387 22.0292 3.50555C22.6114 3.61722 23.0299 3.7738 23.2198 3.95099" stroke="#5583C3" stroke-width="5" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <h3>
                            We meet up with schedule
                        </h3>
                    </div>
                </div>
                {/* card2 */}
                <div id="card" data-aos="zoom-in"   data-aos-delay="100">
                    <div className="maincardText">
                        <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit deleniti explicabo necessitatibus dicta ut laudantium sit quae repellat corrupti non
                        </p>
                    </div>
                    <div className="subcardText">
                        <div id="imgCard">
                            <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.75 6.66666H16.25C10.9467 6.66666 8.29505 6.66666 6.64752 8.34033C5 10.014 5 12.7077 5 18.0952V21.9047C5 27.2922 5 29.986 6.64752 31.6596C8.29505 33.3333 10.9467 33.3333 16.25 33.3333H23.75C29.0533 33.3333 31.705 33.3333 33.3525 31.6596C35 29.986 35 27.2922 35 21.9047V18.0952C35 12.7077 35 10.014 33.3525 8.34033C31.705 6.66666 29.0533 6.66666 23.75 6.66666Z" stroke="#FAC026" stroke-width="5"/>
                                <path d="M11.6667 13.3333H16.6667" stroke="#FAC026" stroke-width="5" stroke-linecap="round"/>
                                <path d="M25 24.6667V22C25 21.0572 25 20.5858 25.2929 20.2929C25.5858 20 26.0572 20 27 20H33C33.9428 20 34.4142 20 34.7071 20.2929C35 20.5858 35 21.0572 35 22V24.6667C35 25.6095 35 26.0809 34.7071 26.3738C34.4142 26.6667 33.9428 26.6667 33 26.6667H27C26.0572 26.6667 25.5858 26.6667 25.2929 26.3738C25 26.0809 25 25.6095 25 24.6667Z" stroke="#FAC026" stroke-width="5"/>
                            </svg>
                        </div>
                        <h3>
                            We give the best offers
                        </h3>
                    </div>
                </div>
                {/* card3 */}
                <div id="card" data-aos="zoom-in"   data-aos-delay="150">
                    <div className="maincardText">
                        <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit deleniti explicabo necessitatibus dicta ut laudantium sit quae repellat corrupti non
                        </p>
                    </div>
                    <div className="subcardText">
                        <div id="imgCard">
                        <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 6.25C14.2067 6.25 9.58337 10.7788 9.58337 16.2766C9.58337 19.6176 10.9516 22.4989 13.3923 24.2934C13.9302 24.6889 14.3904 25.2787 14.5666 26.027C14.7113 26.6412 14.8768 27.3895 15.0408 28.1826L24.9593 28.1826C25.1232 27.3895 25.2888 26.6412 25.4334 26.027C25.6097 25.2787 26.0699 24.6889 26.6078 24.2934C29.0485 22.4989 30.4167 19.6176 30.4167 16.2766C30.4167 10.7788 25.7934 6.25 20 6.25ZM24.4812 30.6826L15.5188 30.6826C15.7029 31.7452 15.8472 32.7516 15.8909 33.474C15.937 34.2347 16.5055 34.9164 17.3437 35.0975L17.6704 35.1681C19.2044 35.4995 20.7957 35.4995 22.3297 35.1681L22.6564 35.0975C23.4946 34.9164 24.0631 34.2347 24.1091 33.474C24.1529 32.7516 24.2972 31.7452 24.4812 30.6826ZM7.08337 16.2766C7.08337 9.3186 12.9068 3.75 20 3.75C27.0933 3.75 32.9167 9.3186 32.9167 16.2766C32.9167 20.3163 31.2441 23.9876 28.0887 26.3076C27.9448 26.4134 27.8846 26.5247 27.8669 26.6002C27.6695 27.4379 27.4292 28.5466 27.21 29.6716C26.9054 31.2353 26.6574 32.7521 26.6046 33.625C26.4878 35.5553 25.0677 37.1342 23.1843 37.5411L22.8577 37.6117C20.9757 38.0183 19.0244 38.0183 17.1424 37.6117L16.8158 37.5411C14.9324 37.1342 13.5123 35.5553 13.3955 33.625C13.3427 32.7521 13.0947 31.2353 12.79 29.6716C12.5709 28.5466 12.3305 27.4379 12.1332 26.6002C12.1155 26.5247 12.0553 26.4134 11.9114 26.3076C8.75599 23.9876 7.08337 20.3163 7.08337 16.2766Z" fill="#535353" stroke="#FAC026" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </div>
                        <h3>
                            we come up with great ideas
                        </h3>
                    </div>
                </div>
                {/* card4 */}
                <div id="card">
                    <div className="maincardText">
                        <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit deleniti explicabo necessitatibus dicta ut laudantium sit quae repellat corrupti non
                        </p>
                    </div>
                    <div className="subcardText">
                        <div id="imgCard">
                            <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0001 20.4166C17.4687 20.4166 15.4167 22.4687 15.4167 25C15.4167 27.5313 17.4687 29.5833 20.0001 29.5833C22.5314 29.5833 24.5834 27.5313 24.5834 25C24.5834 22.4687 22.5314 20.4166 20.0001 20.4166ZM17.9167 25C17.9167 23.8494 18.8495 22.9166 20.0001 22.9166C21.1506 22.9166 22.0834 23.8494 22.0834 25C22.0834 26.1506 21.1506 27.0833 20.0001 27.0833C18.8495 27.0833 17.9167 26.1506 17.9167 25Z" fill="#5583C3"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0001 2.08331C14.7073 2.08331 10.4167 6.37392 10.4167 11.6666V12.538L10.372 12.5524C7.45444 13.5003 5.16706 15.7877 4.2191 18.7052C3.74931 20.1511 3.74958 21.8865 3.75003 24.7302V25.2697C3.74958 28.1135 3.74931 29.8489 4.2191 31.2947C5.16706 34.2123 7.45444 36.4996 10.372 37.4476C11.8178 37.9174 13.5532 37.9171 16.3969 37.9167H23.6032C26.4469 37.9171 28.1823 37.9174 29.6281 37.4476C32.5457 36.4996 34.833 34.2123 35.781 31.2947C36.2508 29.8489 36.2505 28.1135 36.2501 25.2697V24.7302C36.2505 21.8864 36.2508 20.1511 35.781 18.7052C34.833 15.7877 32.5457 13.5003 29.6281 12.5524L29.5834 12.538V11.6666C29.5834 6.37392 25.2928 2.08331 20.0001 2.08331ZM16.5268 12.0833C15.0614 12.0833 13.8919 12.0832 12.9167 12.1384V11.6666C12.9167 7.75463 16.088 4.58331 20.0001 4.58331C23.9121 4.58331 27.0834 7.75463 27.0834 11.6666V12.1384C26.1082 12.0832 24.9387 12.0833 23.4733 12.0833H16.5268ZM11.8744 14.7555C12.8704 14.5877 14.2136 14.5833 16.6667 14.5833H23.3334C25.7865 14.5833 27.1297 14.5877 28.1257 14.7555C28.4011 14.8019 28.6386 14.8595 28.8556 14.93C31.012 15.6307 32.7027 17.3213 33.4034 19.4778C33.7346 20.4973 33.75 21.8006 33.75 25C33.75 28.1994 33.7346 29.5027 33.4034 30.5222C32.7027 32.6786 31.012 34.3693 28.8556 35.07C27.8361 35.4012 26.5328 35.4166 23.3334 35.4166H16.6667C13.4673 35.4166 12.164 35.4012 11.1445 35.07C8.98808 34.3693 7.29741 32.6786 6.59674 30.5222C6.26548 29.5027 6.25005 28.1994 6.25005 25C6.25005 21.8006 6.26548 20.4973 6.59674 19.4778C7.29741 17.3213 8.98808 15.6307 11.1445 14.93C11.3615 14.8595 11.599 14.8019 11.8744 14.7555Z" fill="#5583C3"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0001 20.4166C17.4687 20.4166 15.4167 22.4687 15.4167 25C15.4167 27.5313 17.4687 29.5833 20.0001 29.5833C22.5314 29.5833 24.5834 27.5313 24.5834 25C24.5834 22.4687 22.5314 20.4166 20.0001 20.4166ZM17.9167 25C17.9167 23.8494 18.8495 22.9166 20.0001 22.9166C21.1506 22.9166 22.0834 23.8494 22.0834 25C22.0834 26.1506 21.1506 27.0833 20.0001 27.0833C18.8495 27.0833 17.9167 26.1506 17.9167 25Z" stroke="#5583C3" stroke-width="3"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0001 2.08331C14.7073 2.08331 10.4167 6.37392 10.4167 11.6666V12.538L10.372 12.5524C7.45444 13.5003 5.16706 15.7877 4.2191 18.7052C3.74931 20.1511 3.74958 21.8865 3.75003 24.7302V25.2697C3.74958 28.1135 3.74931 29.8489 4.2191 31.2947C5.16706 34.2123 7.45444 36.4996 10.372 37.4476C11.8178 37.9174 13.5532 37.9171 16.3969 37.9167H23.6032C26.4469 37.9171 28.1823 37.9174 29.6281 37.4476C32.5457 36.4996 34.833 34.2123 35.781 31.2947C36.2508 29.8489 36.2505 28.1135 36.2501 25.2697V24.7302C36.2505 21.8864 36.2508 20.1511 35.781 18.7052C34.833 15.7877 32.5457 13.5003 29.6281 12.5524L29.5834 12.538V11.6666C29.5834 6.37392 25.2928 2.08331 20.0001 2.08331ZM16.5268 12.0833C15.0614 12.0833 13.8919 12.0832 12.9167 12.1384V11.6666C12.9167 7.75463 16.088 4.58331 20.0001 4.58331C23.9121 4.58331 27.0834 7.75463 27.0834 11.6666V12.1384C26.1082 12.0832 24.9387 12.0833 23.4733 12.0833H16.5268ZM11.8744 14.7555C12.8704 14.5877 14.2136 14.5833 16.6667 14.5833H23.3334C25.7865 14.5833 27.1297 14.5877 28.1257 14.7555C28.4011 14.8019 28.6386 14.8595 28.8556 14.93C31.012 15.6307 32.7027 17.3213 33.4034 19.4778C33.7346 20.4973 33.75 21.8006 33.75 25C33.75 28.1994 33.7346 29.5027 33.4034 30.5222C32.7027 32.6786 31.012 34.3693 28.8556 35.07C27.8361 35.4012 26.5328 35.4166 23.3334 35.4166H16.6667C13.4673 35.4166 12.164 35.4012 11.1445 35.07C8.98808 34.3693 7.29741 32.6786 6.59674 30.5222C6.26548 29.5027 6.25005 28.1994 6.25005 25C6.25005 21.8006 6.26548 20.4973 6.59674 19.4778C7.29741 17.3213 8.98808 15.6307 11.1445 14.93C11.3615 14.8595 11.599 14.8019 11.8744 14.7555Z" stroke="#5583C3" stroke-width="3"/>
                            </svg>
                        </div>
                        <h3>
                            we make sure to secury
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="mainPath3">
            {/* <div id="mincntent">
            </div> */}
            <div id="partnal">
                <h1>
                    our partnals
                </h1>
            </div>
            <div id="theCom">

            </div>
                
        </div>
        <div className="mainPath4">
            <img src="/GSM.svg" alt="gsm" />
            <div id="text_path4" data-aos="fade-up">
                <div id="t_text">
                    <h2>
                    WE ARE SET ON MANAGEMENTING YOUR BUSINESS ISSUE, PORTFOLIO ETC
                    </h2>
                    <p>
                    Managing websites can be like raising kids, that's why we at 
                    Nerdbuds take the stress of handling websites out of your hand so you can focus on your next business move. 
                    We provide adequate management services, monitoring and keep an eye on your apps and websites.
                    </p>
                    <br />
                    <br />
                    <NavLink  to={'/sign'} id="sign4">
                        Signin
                    </NavLink>
                </div>
                <div id="b_text" data-aos="fade-up">
                    <h2>
                        MAKE YOUR BUSINESS GROW WITH US
                    </h2>
                    <p>
                    Building world class startups require world class services. Elevate your startup with our bespoke services set with standards not to be found anywhere else.
                    </p>
                    <br />
                    <br />
                    <NavLink  to={'/sign'} id="sign4">
                        Signin
                    </NavLink>
                </div>
            </div>
        </div>
        <div className="mainPath5" data-aos="fade-up">
            <div id="tit">
                <h2>
                    Our Tools
                </h2>
            </div>
            <Splide options={{
                perPage: 6,
                perMove: 1,
                arrows: false,
                pagination: false,
                drag: 'free',
                type: 'loop',
                autoplay: true,
                transition: 500,
                width: 1200
                }} id="svg_img">
                
                {array.map(function(array){
                    return(
                    <SplideSlide id="img_t">
                        {array}
                    </SplideSlide>
                    )
                })}
            
            </Splide>
        </div>
        <div className="mainPath6">
            <div id="inside">
                <div id="text" data-aos="fade-up">
                    <h1>
                        WE HOPE YOU HAVE JOY USING OUR SERVICES
                    </h1>
                    <br />
                    <br />
                    <NavLink  to={'/'} id="sign4">
                        Signin
                    </NavLink>
                </div>
                <div id="imgPath" >

                </div>
            </div>
        </div>
        <footer>
            <div id="inside_ft">
                <div id="inside_ft2" data-aos="fade-up">
                <div id="abt">
                    <h2>
                        About us
                    </h2>
                    <p>
                    We take your startups to the next level with our bespoke services deeply embedded with strict attention to design and quality ,giving nothing but the best to our clientele and bringing them into the digital revolution.
                    </p>
                </div>
                <div id="navigate">
                    <h2>
                    Navigations
                    </h2>
                    <div id="nav_ist">
                    <ul>Home</ul>
                    <ul>About</ul>
                    <ul>Contacts</ul>
                    <div id="nav_nav">
                        <br />
                        <NavLink  to={'/'} className="sign1">
                            login
                        </NavLink>
                        <br />
                        <br />
                        <br />
                        <NavLink  to={'/sign'} className="sign2">
                            Signin
                        </NavLink>
                    </div>
                    </div>
                </div>
                <div id="cnt">
                    <h2>
                    Contact
                    </h2>
                    <div id="cnt_ist">
                    <ul>
                    <svg width="25" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.643 20.9762L19.0572 19.562L19.0572 19.562L17.643 20.9762ZM22.357 20.9762L20.9428 19.562L20.9428 19.562L22.357 20.9762ZM6.66667 10.3333H33.3333V6.33331H6.66667V10.3333ZM33 9.99998V30H37V9.99998H33ZM33.3333 29.6666H6.66667V33.6666H33.3333V29.6666ZM7 30V9.99998H3V30H7ZM6.66667 29.6666C6.85076 29.6666 7 29.8159 7 30H3C3 32.025 4.64162 33.6666 6.66667 33.6666V29.6666ZM33 30C33 29.8159 33.1492 29.6666 33.3333 29.6666V33.6666C35.3584 33.6666 37 32.025 37 30H33ZM6.66667 6.33331C5.6547 6.33331 4.73529 6.74591 4.07394 7.40726L6.90237 10.2357C6.84424 10.2938 6.75816 10.3333 6.66667 10.3333V6.33331ZM4.07394 7.40726C3.4126 8.0686 3 8.98801 3 9.99998H7C7 10.0915 6.9605 10.1776 6.90237 10.2357L4.07394 7.40726ZM33.3333 10.3333C33.2418 10.3333 33.1558 10.2938 33.0976 10.2357L35.9261 7.40726C35.2647 6.74591 34.3453 6.33331 33.3333 6.33331V10.3333ZM33.0976 10.2357C33.0395 10.1775 33 10.0915 33 9.99998H37C37 8.98801 36.5874 8.0686 35.9261 7.40726L33.0976 10.2357ZM16.2288 22.3904C18.3116 24.4732 21.6884 24.4732 23.7712 22.3904L20.9428 19.562C20.4221 20.0827 19.5779 20.0827 19.0572 19.562L16.2288 22.3904ZM4.07395 10.2357L16.2288 22.3904L19.0572 19.562L6.90236 7.40725L4.07395 10.2357ZM23.7712 22.3904L35.9261 10.2357L33.0976 7.40725L20.9428 19.562L23.7712 22.3904Z" fill="#333333"/>
                    </svg>
                    Nerdbudsltd@Gmail.Com
                    </ul>
                    <ul>
                    <svg width="25" height="25" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.6241 24.0285L28.6247 23.9788C28.6243 23.9953 28.6241 24.0119 28.6241 24.0285H30.6241ZM30.6241 27.9802L28.6241 27.9802L28.6241 27.9884L30.6241 27.9802ZM7.01182 4.37513L7.01182 2.37513L7.00994 2.37513L7.01182 4.37513ZM10.9714 4.37513V6.37513C10.978 6.37513 10.9845 6.3751 10.991 6.37503L10.9714 4.37513ZM12.7186 5.01206L11.416 6.52971L11.416 6.52971L12.7186 5.01206ZM12.2649 14.7946L10.8521 13.3789C10.2138 14.0159 10.0808 15.0012 10.5271 15.7846L12.2649 14.7946ZM20.184 22.6981L19.1969 24.4375C19.9788 24.8812 20.9605 24.7487 21.5968 24.1137L20.184 22.6981ZM29.9992 22.2601L31.5239 20.9657L31.5239 20.9657L29.9992 22.2601ZM14.6458 11.8187L16.6016 12.2367L16.6016 12.2367L14.6458 11.8187ZM23.1657 20.3219L23.5821 22.278L23.5821 22.278L23.1657 20.3219ZM27.7468 30.6147L27.9265 28.6228C27.8662 28.6174 27.8058 28.6147 27.7453 28.6147L27.7468 30.6147ZM4.3853 7.24673L6.3853 7.2483C6.38535 7.18757 6.38263 7.12686 6.37715 7.06637L4.3853 7.24673ZM28.6241 24.0285V27.9802H32.6241V24.0285H28.6241ZM7.01182 6.37513H10.9714V2.37513H7.01182V6.37513ZM10.991 6.37503C11.1474 6.3735 11.2984 6.4288 11.416 6.52971L14.0212 3.49441C13.1674 2.76163 12.0765 2.36418 10.9518 2.37522L10.991 6.37503ZM10.5271 15.7846C12.5844 19.3955 15.5798 22.3848 19.1969 24.4375L21.1711 20.9586C18.1796 19.2609 15.7031 16.7892 14.0026 13.8045L10.5271 15.7846ZM28.4746 23.5544C28.5755 23.6733 28.6286 23.8243 28.6247 23.9788L32.6235 24.0782C32.6518 22.9406 32.2601 21.8329 31.5239 20.9657L28.4746 23.5544ZM11.416 6.52971C11.4569 6.5648 11.626 6.75366 11.8461 7.21383C12.0508 7.64159 12.2407 8.17972 12.3925 8.76339C12.7208 10.0264 12.7619 11.0642 12.6899 11.4008L16.6016 12.2367C16.8714 10.9742 16.6392 9.20118 16.2638 7.75695C16.0636 6.98697 15.794 6.19732 15.4544 5.48758C15.1304 4.81025 14.6707 4.05188 14.0212 3.49441L11.416 6.52971ZM23.5821 22.278C23.9228 22.2055 24.9695 22.2474 26.2386 22.5772C26.8255 22.7297 27.3659 22.9206 27.7945 23.1261C28.0073 23.2281 28.1734 23.3246 28.2956 23.409C28.3556 23.4505 28.3997 23.4854 28.4305 23.5123C28.4457 23.5255 28.4566 23.5359 28.4641 23.5434C28.4715 23.5508 28.4747 23.5546 28.4746 23.5544L31.5239 20.9657C30.966 20.3086 30.2033 19.845 29.5238 19.5192C28.8113 19.1776 28.0179 18.9067 27.2446 18.7058C25.7933 18.3286 24.0134 18.0966 22.7494 18.3657L23.5821 22.278ZM21.5968 24.1137C21.8508 23.8602 22.1061 23.577 22.309 23.3557C22.5288 23.1161 22.7147 22.918 22.8978 22.7456C23.2803 22.3853 23.487 22.2983 23.5821 22.278L22.7494 18.3657C21.5936 18.6117 20.7372 19.2858 20.1555 19.8336C19.8565 20.1152 19.585 20.4079 19.3609 20.6522C19.12 20.9149 18.945 21.109 18.7712 21.2824L21.5968 24.1137ZM12.6899 11.4008C12.6702 11.4931 12.5841 11.6984 12.2229 12.0806C12.0501 12.2633 11.8516 12.4489 11.6115 12.6682C11.3898 12.8707 11.1061 13.1254 10.8521 13.3789L13.6777 16.2102C13.8515 16.0367 14.0459 15.862 14.3092 15.6216C14.554 15.398 14.8473 15.127 15.1294 14.8286C15.678 14.2484 16.3546 13.3928 16.6016 12.2367L12.6899 11.4008ZM27.7453 28.6147C15.6932 28.6241 6.37587 19.2233 6.3853 7.2483L2.3853 7.24515C2.37413 21.4204 13.4734 32.6259 27.7484 32.6147L27.7453 28.6147ZM28.6241 27.9884C28.6247 28.1313 28.5597 28.3019 28.4057 28.4435C28.2532 28.5838 28.0778 28.6365 27.9265 28.6228L27.5672 32.6066C30.271 32.8505 32.635 30.6567 32.6241 27.9721L28.6241 27.9884ZM6.37715 7.06637C6.36388 6.91983 6.41458 6.74752 6.55404 6.59573C6.69485 6.44247 6.86674 6.37526 7.0137 6.37513L7.00994 2.37513C4.33939 2.37764 2.14895 4.72676 2.39345 7.42708L6.37715 7.06637Z" fill="#333333"/>
                    </svg>
                    Call Us
                    </ul>
                    </div>
                </div>
                <div id="sca">
                    <div id="sca_svg">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.8997 9.09998C28.5041 9.09998 28.1174 9.21728 27.7885 9.43704C27.4596 9.6568 27.2033 9.96916 27.0519 10.3346C26.9005 10.7001 26.8609 11.1022 26.9381 11.4902C27.0153 11.8781 27.2058 12.2345 27.4855 12.5142C27.7652 12.7939 28.1215 12.9844 28.5095 13.0616C28.8975 13.1387 29.2996 13.0991 29.665 12.9477C30.0305 12.7964 30.3429 12.54 30.5626 12.2111C30.7824 11.8822 30.8997 11.4955 30.8997 11.1C30.8997 10.5695 30.689 10.0608 30.3139 9.68577C29.9388 9.31069 29.4301 9.09998 28.8997 9.09998V9.09998ZM36.5663 13.1333C36.5339 11.7505 36.2749 10.3823 35.7997 9.08331C35.3759 7.97187 34.7163 6.96544 33.8663 6.13331C33.041 5.27902 32.0323 4.62361 30.9163 4.21665C29.6208 3.72691 28.2511 3.462 26.8663 3.43331C25.0997 3.33331 24.533 3.33331 19.9997 3.33331C15.4663 3.33331 14.8997 3.33331 13.133 3.43331C11.7483 3.462 10.3786 3.72691 9.08301 4.21665C7.96914 4.62773 6.96123 5.28258 6.13301 6.13331C5.27872 6.95861 4.6233 7.96738 4.21634 9.08331C3.72661 10.3789 3.46169 11.7486 3.43301 13.1333C3.33301 14.9 3.33301 15.4666 3.33301 20C3.33301 24.5333 3.33301 25.1 3.43301 26.8666C3.46169 28.2514 3.72661 29.6211 4.21634 30.9166C4.6233 32.0326 5.27872 33.0414 6.13301 33.8666C6.96123 34.7174 7.96914 35.3722 9.08301 35.7833C10.3786 36.273 11.7483 36.538 13.133 36.5666C14.8997 36.6666 15.4663 36.6666 19.9997 36.6666C24.533 36.6666 25.0997 36.6666 26.8663 36.5666C28.2511 36.538 29.6208 36.273 30.9163 35.7833C32.0323 35.3764 33.041 34.7209 33.8663 33.8666C34.7201 33.0376 35.3802 32.0303 35.7997 30.9166C36.2749 29.6176 36.5339 28.2495 36.5663 26.8666C36.5663 25.1 36.6663 24.5333 36.6663 20C36.6663 15.4666 36.6663 14.9 36.5663 13.1333V13.1333ZM33.5663 26.6666C33.5542 27.7246 33.3626 28.7728 32.9997 29.7666C32.7336 30.492 32.3061 31.1474 31.7497 31.6833C31.2091 32.2342 30.5551 32.6607 29.833 32.9333C28.8392 33.2962 27.791 33.4878 26.733 33.5C25.0663 33.5833 24.4497 33.6 20.0663 33.6C15.683 33.6 15.0663 33.6 13.3997 33.5C12.3012 33.5206 11.2073 33.3514 10.1663 33C9.47598 32.7134 8.85193 32.288 8.33301 31.75C7.77982 31.2146 7.35775 30.5586 7.09968 29.8333C6.69277 28.8252 6.46708 27.7532 6.43301 26.6666C6.43301 25 6.33301 24.3833 6.33301 20C6.33301 15.6166 6.33301 15 6.43301 13.3333C6.44048 12.2517 6.63792 11.1799 7.01634 10.1666C7.30975 9.46317 7.76012 8.83608 8.33301 8.33331C8.83936 7.76026 9.46515 7.30514 10.1663 6.99998C11.1823 6.63339 12.253 6.44178 13.333 6.43331C14.9997 6.43331 15.6163 6.33331 19.9997 6.33331C24.383 6.33331 24.9997 6.33331 26.6663 6.43331C27.7243 6.44545 28.7725 6.63706 29.7663 6.99998C30.5237 7.28107 31.2035 7.73806 31.7497 8.33331C32.2958 8.84528 32.7226 9.4712 32.9997 10.1666C33.3701 11.1815 33.5618 12.2529 33.5663 13.3333C33.6497 15 33.6663 15.6166 33.6663 20C33.6663 24.3833 33.6497 25 33.5663 26.6666ZM19.9997 11.45C18.3094 11.4533 16.6579 11.9575 15.2541 12.899C13.8503 13.8405 12.757 15.177 12.1124 16.7396C11.4678 18.3022 11.3009 20.0208 11.6327 21.6782C11.9644 23.3356 12.7801 24.8575 13.9765 26.0516C15.1729 27.2457 16.6964 28.0583 18.3544 28.3869C20.0125 28.7154 21.7308 28.5452 23.2921 27.8975C24.8535 27.2499 26.1878 26.154 27.1266 24.7484C28.0653 23.3427 28.5663 21.6903 28.5663 20C28.5685 18.8752 28.3483 17.761 27.9184 16.7216C27.4885 15.6822 26.8573 14.738 26.0611 13.9434C25.265 13.1488 24.3196 12.5194 23.2793 12.0915C22.2391 11.6636 21.1245 11.4456 19.9997 11.45V11.45ZM19.9997 25.55C18.902 25.55 17.829 25.2245 16.9163 24.6146C16.0036 24.0048 15.2922 23.138 14.8721 22.1239C14.4521 21.1097 14.3422 19.9938 14.5563 18.9172C14.7705 17.8406 15.2991 16.8517 16.0752 16.0755C16.8514 15.2994 17.8403 14.7708 18.9169 14.5566C19.9935 14.3425 21.1094 14.4524 22.1236 14.8724C23.1377 15.2925 24.0045 16.0039 24.6143 16.9166C25.2242 17.8293 25.5497 18.9023 25.5497 20C25.5497 20.7288 25.4061 21.4505 25.1272 22.1239C24.8483 22.7972 24.4395 23.4091 23.9241 23.9244C23.4088 24.4398 22.7969 24.8486 22.1236 25.1275C21.4502 25.4064 20.7285 25.55 19.9997 25.55V25.55Z" fill="#333333"/>
                        </svg>
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M34.833 3.33331H5.16634C4.68011 3.33331 4.2138 3.52647 3.86998 3.87028C3.52616 4.2141 3.33301 4.68042 3.33301 5.16665V34.8333C3.33301 35.0741 3.38043 35.3125 3.47256 35.5349C3.5647 35.7573 3.69974 35.9594 3.86998 36.1297C4.04022 36.2999 4.24232 36.435 4.46476 36.5271C4.68719 36.6192 4.92558 36.6666 5.16634 36.6666H21.133V23.75H16.7997V18.75H21.133V15C21.0432 14.1196 21.1472 13.2302 21.4375 12.3942C21.7279 11.5582 22.1976 10.7959 22.8138 10.1607C23.43 9.52544 24.1776 9.03271 25.0044 8.71704C25.8311 8.40137 26.7169 8.2704 27.5997 8.33331C28.8969 8.32533 30.1935 8.39211 31.483 8.53331V13.0333H28.833C26.733 13.0333 26.333 14.0333 26.333 15.4833V18.7H31.333L30.683 23.7H26.333V36.6666H34.833C35.0738 36.6666 35.3122 36.6192 35.5346 36.5271C35.757 36.435 35.9591 36.2999 36.1294 36.1297C36.2996 35.9594 36.4347 35.7573 36.5268 35.5349C36.6189 35.3125 36.6663 35.0741 36.6663 34.8333V5.16665C36.6663 4.92589 36.6189 4.68749 36.5268 4.46506C36.4347 4.24263 36.2996 4.04052 36.1294 3.87028C35.9591 3.70004 35.757 3.565 35.5346 3.47287C35.3122 3.38073 35.0738 3.33331 34.833 3.33331V3.33331Z" fill="#333333"/>
                        </svg>
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M36.6663 9.66665C35.4136 10.2101 34.0887 10.5694 32.733 10.7333C34.1633 9.87885 35.2351 8.53462 35.7497 6.94998C34.4056 7.75009 32.9343 8.31381 31.3997 8.61665C30.3739 7.50427 29.008 6.76381 27.516 6.5114C26.0241 6.25899 24.4906 6.50891 23.156 7.22197C21.8214 7.93502 20.7612 9.07087 20.1417 10.4514C19.5223 11.8319 19.3785 13.379 19.733 14.85C17.0154 14.7125 14.3571 14.0049 11.9308 12.7731C9.50445 11.5413 7.36442 9.8128 5.64967 7.69998C5.04824 8.75026 4.73221 9.93969 4.73301 11.15C4.73088 12.274 5.0067 13.381 5.53593 14.3726C6.06516 15.3642 6.83137 16.2095 7.76634 16.8333C6.67964 16.8037 5.61615 16.5121 4.66634 15.9833V16.0666C4.67449 17.6415 5.22633 19.1651 6.22853 20.3799C7.23073 21.5947 8.62177 22.4261 10.1663 22.7333C9.57177 22.9143 8.95447 23.0097 8.33301 23.0167C7.90283 23.0116 7.47371 22.9726 7.04967 22.9C7.48952 24.2547 8.34071 25.4386 9.4848 26.2869C10.6289 27.1353 12.009 27.6059 13.433 27.6333C11.0283 29.5254 8.05948 30.5581 4.99967 30.5666C4.44257 30.5685 3.8859 30.5351 3.33301 30.4667C6.45706 32.4837 10.0977 33.5545 13.8163 33.55C16.3825 33.5766 18.9282 33.0917 21.3049 32.1234C23.6815 31.1552 25.8414 29.7231 27.6583 27.9108C29.4753 26.0985 30.9129 23.9423 31.8873 21.5682C32.8616 19.194 33.3531 16.6495 33.333 14.0833C33.333 13.8 33.333 13.5 33.333 13.2C34.6408 12.2247 35.7688 11.029 36.6663 9.66665V9.66665Z" fill="#333333"/>
                        </svg>
                        </a>

                    </div>
                    <div id="cyp">
                        &copy; Nerdbudsltd 2022
                    </div>
                </div>
                </div>
                
            </div>
        </footer>
        </div>
        

    </div>
  )
}

export default Home

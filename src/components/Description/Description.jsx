import React from "react";
import bannerDescripiton from '../../assets/img/description/description-banner.jpg'
import bannerDescripitonMobile from '../../assets/img/description/description__banner-mobile.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Description = () => {

    const BannerDescripiton = window.innerWidth > 1024 ? bannerDescripiton : bannerDescripitonMobile;

    return (
        <>
            <div id="Description-main" className="description">
                <div className='description-container'>
                    <h2 className="description-title" data-aos="fade-right">Who we are </h2>
                    <p className='description-paragraph' data-aos="fade-right">Lorem ipsum dolor sit amet consectetur. Pellentesque arcu ut in arcu at nascetur. Maecenas congue at integer massa tincidunt morbi lacus. Egestas vestibulum erat sed non. Viverra magna convallis nec convallis orci integer quam neque. Arcu non venenatis nec amet amet volutpat tempor orci adipiscing. Eu etiam dignissim diam non dictum tellus massa adipiscing nisi.

                        At quis in tellus bibendum senectus habitasse sed est odio. Lacus non etiam elementum amet gravida nec tempor nibh turpis. Mauris pulvinar viverra eget tempus elit urna dui dolor mi. Eu tempor ipsum eu facilisis lacus id hendrerit.</p>
                    <div className='description-btn-container'>
                        <a href="#Contact-main" style={{ textDecoration: 'none' }}><button className="description-btn" data-aos="fade-down">Contact Us</button></a>
                    </div>
                </div>
                <div className="description--img" data-aos="fade-left">
                    <img className='description-img' src={BannerDescripiton} alt="" />
                </div>
            </div>
        </>
    );
};

export default Description;

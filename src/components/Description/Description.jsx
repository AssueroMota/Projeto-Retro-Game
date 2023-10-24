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
            <div className="description">
                <div className='description-container'>
                    <h2 className="description-title" data-aos="fade-right">Who we are </h2>
                    <p className='description-paragraph' data-aos="fade-right">Karty serves as a third party beverage cart partner for golf courses. We collaborate with courses to optimize their beverage cart operations. Our commitment lies in boosting course profitability without imposing additional costs, all with the aim of enhancing the overall player experience.</p>
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

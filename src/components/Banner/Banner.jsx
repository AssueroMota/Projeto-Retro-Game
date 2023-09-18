
import React from "react";
import bannerMain from '../../assets/img/banner/bannerMain.jpg'
import bannerMobile from '../../assets/img/banner/banner__Mobile.png'
import play from '../../assets/img/banner/banner__play.svg'
import movie from '../../assets/img/banner/1080p.mp4'


const Banner = () => {

    // const logoMovie = window.innerWidth > 1024 ? bannerMain : bannerMobile;

    return (
        <div id="banner" className='banner-container'>
            <img className='bannerMain' src={bannerMain} alt="" />
            {/* <video className='bannerMain' autoPlay loop muted>
                <source src={movie} type="video/mp4" />
                
            </video> */}
            <p className='play' alt="">
            Where golf comes to life
            </p>
        </div>
    )
}

export default Banner;
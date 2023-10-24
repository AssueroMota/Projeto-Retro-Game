import React from "react";
import golf from '../../assets/img/what/golf_course.svg'


const What = () => {

    const WhatWeDo = [
        {
            img: golf,
            title: 'Premium Refreshment Cart Service',
            describe: 'What if golf courses could rely on a premium refreshment cart service that specializes in making that portion of their course experience as exceptional as possible? Thats where Karty comes in.'
        },
        {
            img: golf,
            title: 'Elevating Beverage Cart Experiences',
            describe: 'Karty offers golf courses a premium beverage cart service including a vetted staffing and training process, a wide range of inventory, and a dedication to course experience.'
        }, {
            img: golf,
            title: 'Revolutionizing Golf Course Refreshments',
            describe: 'Its widely recognized that beverage cart services on contemporary golf courses have room for improvement'
        }
        , {
            img: golf,
            title: 'Dedicated Beverage Cart Partners',
            describe: 'Kartys objective is to take the beverage cart service from a minor and passable detail of the course and elevate it to a significant and exhilarating part of the game. We strive to ultimately revolutionize the way golf is played around the world.'
        },
        // {
        //     img: golf,
        //     title: 'Modern Golfers Beverage Service',
        //     describe: ' Golf courses will benefit from a dependable partner dedicated to improving their overall course experience. Players, in turn, will enjoy a premium service that aligns with the expectations of todays modern golfer.'
        // }
    ]


    return (
        <>
            <div className="What-Container" id="What-container-main">
                <div className="What-Container-title">
                    <h2 className="What-title">What We Do</h2>
                </div>
                <div className="What-Service">
                    {WhatWeDo.map((what, index) => {
                        return (
                            <div key={index} className="What-Service-container">
                                <div className="Service-img-Container">
                                    <img className="Service-img" src={what.img} alt="" />
                                </div>
                                <h3 className="Service-Title">{what.title}</h3>
                                <p className="Service-describe">{what.describe}</p>
                            </div>
                        )
                    }
                    )}
                </div>
                <div className="what">
                    <div className="What-container-btn">
                        <p className="What-Btn">Contact Us</p>
                    </div>
                </div>

            </div>
        </>
    )
}
export default What;
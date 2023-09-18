import React from "react";
import golf from '../../assets/img/what/golf_course.svg'


const What = () => {

    const WhatWeDo = [
        {
            img: golf,
            title: 'Service Name',
            describe: 'Lorem ipsum dolor sit amet consectetur. Pellentesque arcu ut in arcu at nascetur. Maecenas congue at integer massa tincidunt morbi lacus. Egestas vestibulum erat sed non.'
        },
        {
            img: golf,
            title: 'Service Name',
            describe: 'Lorem ipsum dolor sit amet consectetur. Pellentesque arcu ut in arcu at nascetur. Maecenas congue at integer massa tincidunt morbi lacus. Egestas vestibulum erat sed non.'
        }, {
            img: golf,
            title: 'Service Name',
            describe: 'Lorem ipsum dolor sit amet consectetur. Pellentesque arcu ut in arcu at nascetur. Maecenas congue at integer massa tincidunt morbi lacus. Egestas vestibulum erat sed non.'
        }
        , {
            img: golf,
            title: 'Service Name',
            describe: 'Lorem ipsum dolor sit amet consectetur. Pellentesque arcu ut in arcu at nascetur. Maecenas congue at integer massa tincidunt morbi lacus. Egestas vestibulum erat sed non.'
        },
        {
            img: golf,
            title: 'Service Name',
            describe: 'Lorem ipsum dolor sit amet consectetur. Pellentesque arcu ut in arcu at nascetur. Maecenas congue at integer massa tincidunt morbi lacus. Egestas vestibulum erat sed non.'
        }
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
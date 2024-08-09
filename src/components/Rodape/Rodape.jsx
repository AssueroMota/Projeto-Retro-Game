
import call from '../../assets/img/rodape/call.svg';
import clock from '../../assets/img/rodape/clock.svg';
import facebook from '../../assets/img/rodape/facebook.svg';
import flower from '../../assets/img/rodape/flower-logo.png';
import location from '../../assets/img/rodape/location.svg';
import logo from '../../assets/img/rodape/logo.svg';
import mail from '../../assets/img/rodape/mail.svg';
import twitter from '../../assets/img/rodape/twitter.svg';
import instagram from '../../assets/img/rodape/instagram.svg';
import whatsapp from '../../assets/img/rodape/whatsapp.svg';
import linkedin from '../../assets/img/rodape/linkedin.svg';
import img from '../../assets/img/rodape/image.png';
import imgOne from '../../assets/img/rodape/image.png';
import imgTwo from '../../assets/img/rodape/image2.png';
import imgThree from '../../assets/img/rodape/image3.png';
import imgFour from '../../assets/img/rodape/image4.png';
import imgFive from '../../assets/img/rodape/image5.png';


import React from "react";


const Rodape = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-links">
                    <span className="footer-link">Empresa</span>
                    <span className="footer-link">Equipe</span>
                    <span className="footer-link">Termos de Serviço</span>
                </div>

                <div className="footer-social-media">
                    <img src={twitter} alt="twitter" className="footer-icon" />
                    <img src={facebook} alt="facebook" className="footer-icon" />
                    <img src={instagram} alt="instagram" className="footer-icon" />
                    <img src={whatsapp} alt="whatsapp" className="footer-icon" />
                    <img src={linkedin} alt="linkedin" className="footer-icon" />
                </div>
            </div>

            <div className="footer-middle">
                <div className="footer-contact">
                    <div className='footer-contact-main'>
                        <h2 className="footer-title">Fale Conosco</h2>
                        <div className='footer-contact-container'>
                            <div className='footer-contact-container-main'>
                                <div className="footer-contact-item">
                                    <img className="footer-contact-icon" src={call} />
                                    <div className='footer-contact-content'>
                                        <p className="footer-contact-label">Telefone / Whatsapp</p>
                                        <p className="footer-contact-detail">(31) 98106-1715</p>
                                    </div>
                                </div>
                                <div className="footer-contact-item">
                                    <img className="footer-contact-icon" src={mail} />
                                    <div className='footer-contact-content'>
                                        <p className="footer-contact-label">Email</p>
                                        <p className="footer-contact-detail">contato@espacoamarelo.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className='footer-contact-container-main'>
                                <div className="footer-contact-item">
                                    <img className="footer-contact-icon" src={location} />
                                    <div className='footer-contact-content'>
                                        <p className="footer-contact-label">Localização</p>
                                        <p className="footer-contact-detail">R. Ceará, 1221 - Funcionários, Belo Horizonte - MG</p>
                                    </div>
                                </div>

                                <div className="footer-contact-item">
                                    <img className="footer-contact-icon" src={clock} />
                                    <div className='footer-contact-content'>
                                        <p className="footer-contact-label">Horário de atendimento</p>
                                        <p className="footer-contact-detail">8:00 h - 18:00 h</p>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-line"></div>
                        </div>
                    </div>
                    <div className="footer-about">
                        <div className="footer-about-containter-title">
                            <img src={logo} alt="Logo" className="footer-about-logo" />
                            <div className="footer-about-title-container">
                                <p className="footer-about-title-one"> Terapia Ocupacional</p>
                                <p className="footer-about-title-two">Espaço Amar.elo </p>
                            </div>
                        </div>
                        <div>
                            <p className="footer-about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                            <p className="footer-about-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </div>
                        {/* <div className="footer-line"></div> */}
                    </div>
                    <div className="footer-follow">
                        <div className="footer-follow-main">
                            <img src={flower} alt="Logo" className="footer-follow-logo" />
                            <div className="footer-follow-content" >
                                <div className="footer-follow-content-text" >
                                    <p className="footer-follow-brand">Espaço Amar.elo</p>
                                    <p className="footer-follow-description">Terapia Ocupacional</p>
                                </div>
                                <button className="footer-follow-button">Follow Us</button>
                            </div>
                        </div>
                        <div className="footer-line"></div>
                        <div className="footer-gallery">
                            <div className="footer-gallery-container">
                                <img src={img} alt="Image 1" className="footer-gallery-image" />
                                <img src={imgOne} alt="Image 2" className="footer-gallery-image" />
                                <img src={imgTwo} alt="Image 3" className="footer-gallery-image" />
                            </div>
                            <div className="footer-gallery-container">
                                <img src={imgThree} alt="Image 4" className="footer-gallery-image" />
                                <img src={imgFour} alt="Image 5" className="footer-gallery-image" />
                                <img src={imgFive} alt="Image 6" className="footer-gallery-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-line-main">
                <div className="footer-line"></div>
                <p className="footer-copyright">All rights reserved. Copyright © 2024 by Logo</p>
            </div>
        </div>
    )
}

export default Rodape;

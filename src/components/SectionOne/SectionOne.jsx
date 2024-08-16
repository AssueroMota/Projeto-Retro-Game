import React from "react";
import MainPhoto from '../../assets/img/sectionOne/MainPhoto.svg';
import MainPhotoMobile from '../../assets/img/sectionOne/MainPhotoMobile.png';
import facebook from '../../assets/img/sectionOne/facebook.svg';
import twiter from '../../assets/img/sectionOne/twiter.svg';
import instagram from '../../assets/img/sectionOne/instagram.svg';


const SectionOne = () => {

    const logoToShow = window.innerWidth > 1024 ? MainPhoto : MainPhotoMobile;

    return (
        <section className="section-one">
            <div className="section-one__content">
                <h1 className="section-one__title">Terapia Ocupacional no Desenvolvimento Infantil</h1>
                <p className="section-one__description">
                    Descubra como a terapia ocupacional pode ajudar seu filho a desenvolver habilidades motoras, sociais, emocionais e de auto-cuidado.
                </p>
                <div className="section-one__container__midias">
                    <button className="section-one__cta-button">Explore nosso Trabalho</button>
                    <div className="section-one__socialmedias">
                        <div className="face">
                            <a href="https://facebook.com/seu_usuario" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}>
                                <img src={facebook} alt="facebook" />
                            </a>
                        </div>
                        <div className="twiter">
                            <a href="https://twitter.com/seu_usuario" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}>
                                <img src={twiter} alt="twiter" />
                            </a>
                        </div>
                        <div className="insta">
                            <a href="https://instagram.com/seu_usuario" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}>
                                <img src={instagram} alt="instagram" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <img className="section-one__image" src={logoToShow} alt="Ilustração de Terapia Ocupacional" />
        </section>
    );
};

export default SectionOne;

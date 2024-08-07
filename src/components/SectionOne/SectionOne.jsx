import React from "react";
import MainPhoto from '../../assets/img/sectionOne/Main-Photo.svg';
import facebook from '../../assets/img/sectionOne/facebook.svg';
import twiter from '../../assets/img/sectionOne/twiter.svg';
import instagram from '../../assets/img/sectionOne/instagram.svg';

const SectionOne = () => {
    return (
        <section className="section-one">
            <div className="section-one__content">
                <h1 className="section-one__title">Terapia Ocupacional no Desenvolvimento Infantil</h1>
                <p className="section-one__description">
                    Descubra como a terapia ocupacional pode ajudar seu filho a desenvolver habilidades motoras, sociais, emocionais e de auto-cuidado.
                </p>
                <button className="section-one__cta-button">Explore nosso Trabalho</button>
                <div className="section-one__socialmedias">
                    <div className="face">
                        <img src={facebook} alt="facebook" />
                    </div>
                    <div className="twiter">
                        <img src={twiter} alt="twiter" />
                    </div>
                    <div className="insta">
                        <img src={instagram} alt="instagram" />
                    </div>
                </div>
            </div>
            <img className="section-one__image" src={MainPhoto} alt="Ilustração de Terapia Ocupacional" />
        </section>
    );
};

export default SectionOne;

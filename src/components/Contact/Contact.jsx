import React from "react";
import logo from '../../assets/img/contact/logo.svg';
import line from '../../assets/img/contact/line.svg';
import location from '../../assets/img/contact/location.svg';
import call from '../../assets/img/contact/call.svg';
import mail from '../../assets/img/contact/mail.svg';
import img1 from '../../assets/img/contact/img1.png';
import img2 from '../../assets/img/contact/img2.png';
import img3 from '../../assets/img/contact/img3.png';
import img4 from '../../assets/img/contact/img4.png';
import img5 from '../../assets/img/contact/img5.png';
import aviao from '../../assets/img/contact/aviao.svg';
import Header from "../Header/Header";
import Rodape from "../Rodape/Rodape";
import SectionThree from "../SectionThree/SectionThree";

const Contact = () => {
    const contactItems = [
        {
            icon: location,
            title: "Localização",
            subline: line,
            details: [
                "Seg a Sex de 8:00 h - 18:00 h",
                "R. Ceará, 1221 - Funcionários, Belo Horizonte - MG"
            ]
        },
        {
            icon: call,
            title: "Telefone/Whatsapp",
            subline: line,
            details: [
                "Seg a Sex de 8:00 h - 18:00 h",
                "Telefone: (31) 9 8106-1715"
            ]
        },
        {
            icon: mail,
            title: "Email",
            subline: line,
            details: [
                "Como podemos te ajudar?",
                "Contato: contato@espacoamarelo.com"
            ]
        }
    ];

    return (
        <div className="contact-container">
            <Header />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div className="contact-header">
                <h2 className="contact-header-title">Fale Conosco</h2>
                <img src={logo} alt="Header Image" className="contact-header-line" />
            </div>

            <div className="contact-main-middle">
                <div className="contact-info">
                    {contactItems.map((item, index) => (
                        <div key={index} className="contact-item">
                            <div className="contact-item-header">
                                <img src={item.icon} alt={`${item.title} Icon`} className="img-header" />
                                <div className="contact-item-header-text">
                                    <h3>{item.title}</h3>
                                    <img src={item.subline} alt="Subline" className="underline" />
                                </div>
                            </div>
                            <div className="contact-item-content">
                                {item.details.map((detail, idx) => (
                                    <p key={idx}>{detail}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="contact-middle">
                    <div className="contact-map">
                        <iframe
                            // src="https://www.google.com/maps/embed?pb=!1m19!1m12!1m3!1d63190.38171962932!2d-34.9503488!3d-8.1625088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m4!3e1!4m0!4m1!2sR.%20Cear%C3%A1%2C%201221%20-%20Funcion%C3%A1rios%2C%20Belo%20Horizonte%20-%20MG!5e0!3m2!1sen!2sbr!4v1723239923848!5m2!1sen!2sbr"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d60009.193831998666!2d-43.95653311046954!3d-19.94232288215977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1723240393717!5m2!1sen!2sbr"
                            width="1920"
                            height="1080"
                            style={{ border: "24" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa da Localização"
                            aria-label="Mapa mostrando a localização do escritório em R. Ceará, 1221 - Funcionários, Belo Horizonte - MG"
                        ></iframe>
                    </div>

                    <section className="contact-form">
                        <img src={aviao} alt="Form Icon" className="aviao" />
                        <h2 className="contact-form-title">Fale Conosco</h2>
                        <p className="contact-form-fed">Feedbacks</p>
                        <form className="contact-form-main">
                            <input type="email" placeholder="Email" className="input-email" />
                            <input type="text" placeholder="Nome" className="input-name" />
                            <input type="tel" placeholder="Telefone" className="input-phone" />
                            <textarea placeholder="Mensagem" className="input-message"></textarea>
                            <button type="submit" className="submit-button">Enviar Mensagem</button>
                        </form>
                    </section>
                </div>
            </div>
            <section className="contact-social">
                <img src={img1} alt="Social Icon 1" />
                <img src={img2} alt="Social Icon 2" />
                <img src={img3} alt="Social Icon 3" />
                <img src={img4} alt="Social Icon 4" />
                <img src={img5} alt="Social Icon 5" />
            </section>
            
            <SectionThree />
            <Rodape />
        </div>
    );
};

export default Contact;

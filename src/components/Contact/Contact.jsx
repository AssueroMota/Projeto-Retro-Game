import React, { useEffect, useState } from "react";
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
import minimap from "../../assets/img/contact/mapmini.svg";
import icon from "../../assets/img/contact/IconMsg.svg";
import iconName from "../../assets/img/contact/iconName.svg";
import icontwo from "../../assets/img/contact/telephone.svg";
import iconfour from "../../assets/img/contact/iconfour.svg";
import changeMail from "../../assets/img/contact/changemail.svg"; // Imagem para o email
import changeName from "../../assets/img/contact/changename.svg"; // Imagem para o nome
import changeTel from "../../assets/img/contact/changetelephone.svg"; // Imagem para o telefone
import changeMsg from "../../assets/img/contact/changemsg.svg"; // Imagem para a mensagem

const Contact = () => {
    // Estados para gerenciar os valores dos inputs
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    // Estados para gerenciar as imagens dos ícones dos inputs
    const [emailIcon, setEmailIcon] = useState(icon);
    const [nameIcon, setNameIcon] = useState(iconName);
    const [phoneIcon, setPhoneIcon] = useState(icontwo);
    const [messageIcon, setMessageIcon] = useState(iconfour);

    // Estados para gerenciar a submissão do formulário
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [emailError, setEmailError] = useState('');

    // Função para validar o e-mail
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    // Função para alterar a imagem ao focar
    const handleFocus = (type) => {
        switch (type) {
            case 'email':
                setEmailIcon(changeMail);
                break;
            case 'name':
                setNameIcon(changeName);
                break;
            case 'phone':
                setPhoneIcon(changeTel);
                break;
            case 'message':
                setMessageIcon(changeMsg);
                break;
            default:
                break;
        }
    };

    // Função para alterar a imagem ao desfocar
    const handleBlur = (type) => {
        switch (type) {
            case 'email':
                setEmailIcon(icon);
                break;
            case 'name':
                setNameIcon(iconName);
                break;
            case 'phone':
                setPhoneIcon(icontwo);
                break;
            case 'message':
                setMessageIcon(iconfour);
                break;
            default:
                break;
        }
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (event) => {
        event.preventDefault();

        // Valida o e-mail
        if (!validateEmail(email)) {
            setEmailError('E-mail inválido');
            return;
        }
        
        setEmailError(''); // Limpa o erro, se houver

        setIsSubmitting(true);

        // Simulação de envio de dados
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setEmail('');
            setName('');
            setPhone('');
            setMessage('');
            setTimeout(() => setSubmitSuccess(false), 3000); // Limpa a mensagem de sucesso após 3 segundos
        }, 1000);
    };

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
    
    useEffect(() => {
        AOS.init({
            duration: 700, // Duração da animação
        });
    }, []);
    return (
        <div className="contact-container">
            <Header />

            <div className="contact-header">
                <h2 className="contact-header-title" data-aos="fade-down">Fale Conosco</h2>
                <img src={logo} alt="Header Image" className="contact-header-line" data-aos="fade-up"/>
            </div>

            <div className="contact-main-middle">
                <div className="contact-info" data-aos="flip-down">
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
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d60009.193831998666!2d-43.95653311046954!3d-19.94232288215977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1723240393717!5m2!1sen!2sbr"
                            width="1920"
                            height="1080"
                            className="responsive-map"
                            style={{ border: "6px" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa da Localização"
                            aria-label="Mapa mostrando a localização do escritório em R. Ceará, 1221 - Funcionários, Belo Horizonte - MG"
                        ></iframe>
                    </div>
                    <img
                        src={minimap}
                        alt="Mapa Estático"
                        className="static-map"
                    />

                    <section className="contact-form" data-aos="fade-left">
                        <img src={aviao} alt="Form Icon" className="aviao" />
                        <h2 className="contact-form-title">Fale Conosco</h2>
                        <p className="contact-form-fed">Feedbacks, Recomendações ou Dúvidas</p>
                        
                        <form
        action="https://formsubmit.co/assueromota@hotmail.com"  // Substitua pelo seu e-mail
        method="POST"
        className="contact-form-main"
        onSubmit={handleSubmit} 
    >
                            <div className="input-group">
                                <div className="input-wrapper">
                                    <img
                                        src={emailIcon}
                                        alt="Email Icon"
                                        className="input-icon"
                                    />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder=""
                                        className="input-email"
                                        required
                                        onFocus={() => handleFocus('email')}
                                        onBlur={() => handleBlur('email')}
                                    />
                                    <label htmlFor="email" className="floating-label">Email</label>
                                    {emailError && <span className="error-message">{emailError}</span>}
                                </div>
                            </div>
                            <div className="input-group">
                                <div className="input-wrapper">
                                    <img
                                        src={nameIcon}
                                        alt="Nome Icon"
                                        className="input-icon"
                                    />
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder=""
                                        className="input-name"
                                        required
                                        onFocus={() => handleFocus('name')}
                                        onBlur={() => handleBlur('name')}
                                    />
                                    <label htmlFor="name" className="floating-label">Nome</label>
                                </div>
                            </div>
                            <div className="input-group">
                                <div className="input-wrapper">
                                    <img
                                        src={phoneIcon}
                                        alt="Telefone Icon"
                                        className="input-icon highlight"
                                    />
                                    <input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder=""
                                        className="input-phone"
                                        required
                                        onFocus={() => handleFocus('phone')}
                                        onBlur={() => handleBlur('phone')}
                                    />
                                    <input type="hidden" name="_subject" value="New submission!"></input>
                                    <input type="hidden" name="_captcha" value="false"></input>
                                    <label htmlFor="phone" className="floating-label">Telefone</label>
                                </div>
                            </div>
                            <div className="input-group">
                                <div className="input-wrapper">
                                    <img
                                        src={messageIcon}
                                        alt="Mensagem Icon"
                                        className="input-icon-text"
                                    />
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder=""
                                        className="input-message"
                                        required
                                        onFocus={() => handleFocus('message')}
                                        onBlur={() => handleBlur('message')}
                                    ></textarea>
                                    <label htmlFor="message" className="floating-label-msg">Mensagem</label>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="submit-button"
                                disabled={isSubmitting || emailError !== ''}
                            >
                                {isSubmitting ? 'Enviando...' : (submitSuccess ? 'Mensagem enviada com sucesso!' : 'Enviar Mensagem')}
                            </button>
                        </form>
                    </section>
                </div>
            </div>
            <section className="contact-social">
                <h3 className="contact-social-title">Galeria</h3>
                <img src={img1} alt="Social Icon 1" data-aos="fade-left"/>
                <img src={img2} alt="Social Icon 2" data-aos="zoom-in"/>
                <img src={img3} alt="Social Icon 3" data-aos="zoom-in"/>
                <img src={img4} alt="Social Icon 4" data-aos="zoom-in"/>
                <img src={img5} alt="Social Icon 5" data-aos="fade-right"/>
            </section>

            <SectionThree />
            <Rodape />
        </div>
    );
};

export default Contact;

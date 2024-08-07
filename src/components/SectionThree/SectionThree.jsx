import React from "react";
import email from "../../assets/img/sectionThree/email.svg";


const SectionThree = () => {
    return (
        <section className="newsletter-section">
            <div className="newsletter-container">
                <h1 className="newsletter-title">Inscreva-se na nossa newsletter</h1>
                <p className="newsletter-description">
                    Receba as últimas novidades, dicas úteis e atualizações exclusivas diretamente no seu e-mail para ficar por dentro de tudo que acontece no Espaço Amarelo.
                </p>
                <div className="newsletter-form">
                    <div className="newsletter-input-container">
                        <input
                            type="email"
                            className="newsletter-input"
                            placeholder="Seu e-mail"
                        />
                        <img src={email} alt="Ícone de e-mail" className="newsletter-input-icon" />
                    </div>
                    <button className="newsletter-button">Inscrever-se</button>
                </div>
            </div>
        </section>
    );
};

export default SectionThree;

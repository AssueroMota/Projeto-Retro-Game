import React, { useState } from 'react';
import emailIcon from '../../assets/img/sectionThree/email.svg';

const SectionThree = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    // Função para validar o e-mail
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Função para lidar com mudanças no input de e-mail
    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);

        if (value === '') {
            setEmailError('O e-mail é obrigatório.');
        } else if (!validateEmail(value)) {
            setEmailError('O e-mail inserido não é válido.');
        } else {
            setEmailError('');
        }
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateEmail(email)) {
            setEmailError('Por favor, insira um e-mail válido.');
            return;
        }

        setIsSubmitting(true);
        // Simulação de envio de dados
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setEmail('');
            setEmailError('');
            setTimeout(() => setSubmitSuccess(false), 3000); // Limpa a mensagem de sucesso após 3 segundos
        }, 1000);
    };

    return (
        <section className="newsletter-section">
            <div className="newsletter-container">
                <h1 className="newsletter-title">Inscreva-se na nossa newsletter</h1>
                <p className="newsletter-description">
                    Mantenha-se atualizado com as últimas novidades, dicas exclusivas e atualizações diretamente no seu e-mail. Fique por dentro de tudo o que acontece no Espaço Amarelo.
                </p>
                <form className="newsletter-form" onSubmit={handleSubmit}>
                    <div className="newsletter-input-container">
                        <input
                            type="email"
                            className="newsletter-input"
                            placeholder="Seu e-mail"
                            value={email}
                            onChange={handleEmailChange}
                            aria-label="Endereço de e-mail"
                        />
                        <img src={emailIcon} alt="Ícone de e-mail" className="newsletter-input-icon" />
                    </div>
                    {emailError && <p className="newsletter-error">{emailError}</p>}
                    <button
                        type="submit"
                        className="newsletter-button"
                        disabled={isSubmitting || emailError !== ''}
                    >
                        {isSubmitting ? 'Enviando...' : (submitSuccess ? 'Inscrição realizada com sucesso!' : 'Inscrever-se')}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default SectionThree;

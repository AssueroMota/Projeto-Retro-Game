import React, { useEffect } from "react";
import logo from '../../assets/img/sectionTwo/Logo.svg';
import imgToShowMobile from '../../assets/img/sectionTwo/LogoMobile.png';
import trio from '../../assets/img/sectionTwo/trio.png';
import check from '../../assets/img/sectionTwo/check.svg';
import workdays from '../../assets/img/sectionTwo/workdays.png';
import workdays2 from '../../assets/img/sectionTwo/workdays2.png';
import workdays3 from '../../assets/img/sectionTwo/workdays3.png';
import workdays4 from '../../assets/img/sectionTwo/workdays4.png';



const SectionTwo = (props) => {
    
    useEffect(() => {
        AOS.init({
            duration: 700, // Duração da animação
        });
    }, []);

    const imgToShow = window.innerWidth > 1024 ? trio : trio;

    const research = [
        {
            img: workdays,
            title: 'Reabilitação Cognitiva e Motora',
            description: 'Desenvolvemos programas de reabilitação para melhorar funções cognitivas e motoras que possam estar comprometidas devido a lesões, doenças ou condições neurológicas. Isso pode incluir exercícios para coordenação, memória e habilidades de resolução de problemas.'
        },
        {
            img: workdays2,
            title: 'Adaptação de Ambiente',
            description: 'Ajudamos a adaptar e modificar o ambiente do cliente para tornar as atividades diárias mais acessíveis e seguras. Isso pode envolver a recomendação de equipamentos adaptativos, ajustes no ambiente doméstico ou de trabalho, e treinamento para o uso de novas tecnologias.'
        },
        {
            img: workdays3,
            title: 'Treinamento de Habilidades de Vida Diária',
            description: 'Oferecemos treinamento individualizado para melhorar a capacidade do cliente de realizar tarefas do dia a dia, como higiene pessoal, alimentação e gerenciamento doméstico, com o objetivo de promover maior independência e autossuficiência.'
        },
        {
            img: workdays4,
            title: 'Avaliação Funcional',
            description: 'Realizamos uma avaliação detalhada das habilidades e limitações do cliente para identificar necessidades específicas e criar um plano de tratamento personalizado. Esta avaliação pode incluir análise de atividades diárias, habilidades motoras e cognitivas, e adaptação de ambientes.'
        }
    ];

    return (
        <section className="team-section" id={props.id}>
            <div className="team-header">
                <h1 className="team-title" data-aos="fade-down">Equipe Especializada no Desenvolvimento Infantil</h1>
                <img className="team-header-image" src={logo} alt="Equipe" data-aos="fade-up"/>
            </div>
            <div className='team-subtitle'>
                <p className="team-description" data-aos="zoom-in">
                    Confie em nossa equipe experiente para guiar seu filho em cada passo do caminho para uma vida mais independente e satisfatória.
                </p>
            </div>
            <div className="team-experience">
                <div className="team-experience-model-main">
                    <img className="team-experience-image" src={imgToShow} alt="Experiência" data-aos="fade-right"/>
                    <div className="team-experience-summary" data-aos="fade-up">
                        <div className="team-experiencie-title">
                            <span className="experience-years">+ 06</span>
                            <span className="experience-label">Anos de Experiência</span>
                        </div>
                        <p className="experience-description">
                            Nossa equipe tem paixão pelo que faz, garantindo cuidados com qualidade.
                        </p>
                    </div>
                </div>
                <div className="team-experience-details" data-aos="fade-left">
                    <div className="experience-item">
                        <img className="experience-item-image" src={check} alt="Detalhe 1" />
                        <span className="experience-item-years">+ 06</span>
                        <p className="experience-item-description">Anos de experiência</p>
                    </div>
                    <div className="experience-item">
                        <img className="experience-item-image" src={check} alt="Detalhe 2" />
                        <span className="experience-item-years">+ 200</span>
                        <p className="experience-item-description">Crianças atendidas</p>
                    </div>
                    <div className="experience-item">
                        <img className="experience-item-image" src={check} alt="Detalhe 3" />
                        <span className="experience-item-years">+ XX</span>
                        <p className="experience-item-description">xxxxxxxxxxxxxx</p>
                    </div>
                    <div className="experience-item">
                        <img className="experience-item-image" src={check} alt="Detalhe 4" />
                        <span className="experience-item-years">+ XX</span>
                        <p className="experience-item-description">xxxxxxxxxxxxxx</p>
                    </div>
                </div>
            </div>
            <div className="team-section-two" id="space">
                <div className="team-header-two">
                    <h1 className="team-title-two" data-aos="fade-down">Nosso espaço</h1>
                    {/* <img className="team-header-image-two" src={logo} alt="Equipe" /> */}
                </div>
                <div className="team-header-subtitle">
                    <p className="team-header-content" data-aos="fade-up">
                        Descubra como nosso espaço acolhedor e bem equipado foi cuidadosamente planejado
                        para oferecer as mais diversas experiências que auxiliam nos avanços terapêuticos dos objetivos traçados junto a familia,
                        através de uma experiência positiva e eficaz de desenvolvimento e bem-estar.
                    </p>
                </div>

                <div className="research-section" >
                    {research.map((item, index) => (
                        <div key={index} className="research-item" data-aos="flip-right">
                            <img src={item.img} alt={item.title} className="research-item-image" />
                            <div className="research-section-content">
                                <h3 className="research-item-title">{item.title}</h3>
                                <p className="research-item-description">{item.description}</p>
                            </div>
                            <div className="research-bg-item"></div>
                            <div className="research-bg-item-two"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SectionTwo;

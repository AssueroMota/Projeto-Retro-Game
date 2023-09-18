
import React, { useState } from 'react';

const Contact = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [formEnviado, setFormEnviado] = useState(true);
    const [erros, setErros] = useState({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: '',
    });
    const validarFormulario = () => {
        let errosNovos = {};
        if (nome.trim() === '') {
            errosNovos.nome = 'Field required';
        } else if (nome.trim().length <= 10) {
            errosNovos.nome = 'Name must be more than 10 characters';
        }
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            errosNovos.email = 'Invalid email';
        }
        if (telefone.trim() === '') {
            errosNovos.telefone = 'Field required';
        }
        if (assunto === '') {
            errosNovos.assunto = 'Select a subject';
        }
        if (mensagem.trim() === '') {
            errosNovos.mensagem = 'Field required, Enter your message';
        }
        setErros(errosNovos);
        return Object.keys(errosNovos).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formularioValido = validarFormulario();

        if (formularioValido) {
            try {
                const response = await fetch('https://rich-jade-leopard-shoe.cyclic.app/sendemail', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: nome,
                        email: email,
                        phone: telefone,
                        subject: assunto,
                        message: mensagem
                    })
                });

                if (response.ok) {
                    setFormEnviado(true);

                    setNome('');
                    setEmail('');
                    setTelefone('');
                    setAssunto('');
                    setMensagem('');
                } else {

                }
            } catch (error) {
                console.error('Erro ao enviar o email:', error);

            }
        } else {

        }
    };

    return (
        <div className='Contact-container' id='Contact-main'>
            <div className='Contact-container-2'>
                <div className='Contact-container-title'>
                    <h2 className='Contact-title'>Contact Us</h2>

                </div>
                <div className='Contact-Form'>
                    <form onSubmit={handleSubmit}>
                        <div className='Contact'>
                            <div className='Contact-Name'>
                                <label className='Contact-Label-Name'>Name</label>
                                <input
                                    className={`Contact-Input-Name ${formEnviado && erros.nome ? 'error-border' : ''}`}
                                    placeholder='Enter your name'
                                    type="text"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                                {formEnviado && erros.nome && (
                                    <span className="error-message">{erros.nome}</span>
                                )}
                                {/* <input className='Contact-Input-Name' placeholder={nameCt} type="text" value={nome} onChange={(e) => setNome(e.target.value)} /> */}
                            </div>
                            <div className='Contact-Email'>
                                <label className='Contact-Label-Email'>E-mail</label>
                                <input
                                    className={`Contact-Input-Email ${formEnviado && erros.email ? 'error-border' : ''}`}
                                    placeholder='Example@email.com'
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {formEnviado && erros.email && (
                                    <span className="error-message">{erros.email}</span>
                                )}
                                {/* <input className='Contact-Input-Email' placeholder={emailCt} type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
                            </div>
                        </div>
                        <div className='Contact'>
                            <div className='Contact-tel'>
                                <label className='Contact-Label-Tel'>Phone</label>
                                <input
                                    className={`Contact-Input-Tel ${formEnviado && erros.telefone ? 'error-border' : ''}`}
                                    placeholder='(11) 0000-0000'
                                    type="tel"
                                    value={telefone}
                                    onChange={(e) => setTelefone(e.target.value)}
                                />
                                {formEnviado && erros.telefone && (
                                    <span className="error-message">{erros.telefone}</span>
                                )}
                                {/* <input className='Contact-Input-Tel' placeholder='(11) 0000-0000' type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} /> */}
                            </div>
                            <div className='Contact-Subject'>
                                <label className='Contact-Label-Subject'>Subject</label>
                                <select
                                    className={`Contact-Select-Subject ${formEnviado && erros.assunto ? 'error-border' : ''}`}
                                    value={assunto}
                                    onChange={(e) => setAssunto(e.target.value)}
                                >
                                    <option value="">Select...</option>
                                    <option value="opcao1">OPÇAO</option>
                                    <option value="opcao2">OPÇAO</option>
                                    <option value="opcao3">OPÇAO</option>
                                </select>
                                {formEnviado && erros.assunto && (
                                    <span className="error-message">{erros.assunto}</span>
                                )}
                            </div>
                        </div>
                        <div className='Contact-2'>
                            <div className='Contact-Text'>
                                <label className='Contact-Text-Label'>Message</label>
                                <textarea
                                    className={`Contact-Text-Area ${formEnviado && erros.mensagem ? 'error-border' : ''}`}
                                    placeholder='Enter your message'
                                    value={mensagem}
                                    onChange={(e) => setMensagem(e.target.value)}
                                />
                                {formEnviado && erros.mensagem && (
                                    <span className="error-message">{erros.mensagem}</span>
                                )}
                                {/* <textarea className='Contact-Text-Area' placeholder={msg} value={mensagem} onChange={(e) => setMensagem(e.target.value)} /> */}
                            </div>
                        </div>
                        <div className='Contact-btn-container' >
                            <div className='Contact-btn'>
                                <button type="submit" className='Contact-Send'>Submit</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta o formulario, feedback e agendamento para a página Contato */

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './style.css';

export default function SecaoContatoFormulario() {

    const [remetenteNome, setRemetenteNome] = useState('');
    const [remetenteEmail, setRemetenteEmail] = useState('');
    const [remetenteCelular, setRemetenteCelular] = useState('');
    const [remetenteAssunto, setRemetenteAssunto] = useState('');
    const [remetenteMensagem, setRemetenteMensagem] = useState('');

    //será executada pelo form
    const SendEmail = (e) => {
        e.preventDefault();

        var templateParams = {
            remetenteNome: remetenteNome,
            remetenteEmail: remetenteEmail,
            remetenteCelular: remetenteCelular,
            remetenteAssunto: remetenteAssunto,
            remetenteMensagem: remetenteMensagem
        };

        emailjs.send('service_casa_da_noiva', 'template_casa_da_noiva', templateParams, 'STyo0BYl8_59vaemH')
            .then(function (response) {
                console.log('Success!!!!', response.status, response.text);
            }, function (error) {
                console.log('Failed...', error);
            });
        console.log(templateParams);
    }

    return (

        /* Container apenas do Agendamento e FeedBack */
        <section className="secaoContatoFormulario">
            <div className="boxAgFeed">
                <p className='textoAgFeed'>Atendimento apenas com hora marcada. Venha nos conhecer!</p>
                <a className="linkAgFeed"
                    target="_blank"
                    rel='noreferrer'
                    href="https://wa.me/5542999901300?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio!">
                    Quero agendar
                    <img className='imgAgFeed' src="/assets/iconeCalendarioContato.png" alt='Ícone de Agendamento' />
                </a>
            </div>

            {/* Container apenas do formulário */}
            <div className="containerFormulario" id="contato">

                <h1 className='tituloFormulario'>Entre em contato</h1>
                <form className="formulario" onSubmit={SendEmail}>

                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" name="nome" required
                        onChange={(e) => { setRemetenteNome(e.target.value); }} value={remetenteNome}
                    />

                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" name="email" required
                        onChange={(e) => { setRemetenteEmail(e.target.value); }} value={remetenteEmail}
                    />

                    <label htmlFor="celular">Celular</label>
                    <input type="tel" id="celular" patern="\([0-9]{2}\) [0-9]{5}-[0-9]{4}" name="celular"
                        onChange={(e) => { setRemetenteCelular(e.target.value); }} value={remetenteCelular}
                    />

                    <label htmlFor="assunto">Assunto</label>
                    <input type="text" id="assunto" name="assunto" required
                        onChange={(e) => { setRemetenteAssunto(e.target.value); }} value={remetenteAssunto}
                    />

                    <label htmlFor="mensagem">Mensagem</label>
                    <textarea type="text" id="mensagem" name="mensagem" required
                        onChange={(e) => { setRemetenteMensagem(e.target.value); }} value={remetenteMensagem}
                    />

                    <button type="submit">Enviar</button>
                </form>
            </div>

            {/* <div className='box-feedback-whatsapp'> */}
            <div className="boxAgFeed">
                <p className='textoAgFeed'>Se você já é nossa noivinha, deixe aqui seu feedback.</p>
                <a className="linkAgFeed" target="_blank" rel='noreferrer' href="https://docs.google.com/forms/d/e/1FAIpQLSfmUNOTGZVAlsjg1UEjGs5lOhoA84B2_0dyiPziSdbsbo6sAw/viewform">
                    Feedback
                    <img className='imgAgFeed' src="/assets/iconeFeedback.png" alt='Ícone de Feedback' />
                </a>
                {/* </div> */}
            </div>
        </section>
    );
}
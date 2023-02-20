/* Desenvolvido por - Bruno Marcondes */

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import styles from './ComponentsContactForm.module.css'


export default function ComponentsContactForm() {


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
                alert("Sua mensagem foi enviada com sucesso.");
            }, function (error) {
                console.log('Failed...', error);
            });
        console.log(templateParams);
    }
    return (
        <>
            <form className={styles.contactForm} onSubmit={SendEmail}>

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
        </>
    );
}
/* Desenvolvido por - Bruno Marcondes */

import React, { useState, useRef } from "react";

import { useForm } from "react-hook-form";
import { isAlpha, isEmail, isMobile } from "validator";

import emailjs from "@emailjs/browser";

import styles from "./ComponentsContactForm.module.css";

export default function ComponentsContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [remetenteNome, setRemetenteNome] = useState("");
  const [remetenteEmail, setRemetenteEmail] = useState("");
  const [remetenteCelular, setRemetenteCelular] = useState("");
  const [remetenteAssunto, setRemetenteAssunto] = useState("");
  const [remetenteMensagem, setRemetenteMensagem] = useState("");

  const form = useRef();

  const SendEmail = (e) => {
    e.preventDefault();

    var templateParams = {
      remetenteNome: remetenteNome,
      remetenteEmail: remetenteEmail,
      remetenteCelular: remetenteCelular,
      remetenteAssunto: remetenteAssunto,
      remetenteMensagem: remetenteMensagem,
    };

    emailjs
      .send(
        "service_casa_da_noiva",
        "template_casa_da_noiva",
        templateParams,
        "STyo0BYl8_59vaemH"
      )
      .then(
        function (response) {
          console.log("Success!!!!", response.status, response.text);
        },
        function (error) {
          console.log("Failed...", error);
        }
      );
    console.log(templateParams);
  };

  return (
    <>
      <form
        className={styles.contactForm}
        ref={form}
        onSubmit={handleSubmit(SendEmail)}
      >
        {/* Input Nome */}
        <div className={styles.formLabelError}>
          <div>
            <label>Nome</label>
          </div>
          <div>
            {errors?.name?.type === "required" && (
              <p className={styles.errorMsg}>Campo Obrigatório</p>
            )}
            {errors?.name?.type === "validate" && (
              <p className={styles.errorMsg}>
                Dados Inválidos. Digite apenas letras.
              </p>
            )}
          </div>
        </div>

        <input
          className={errors?.name && `${styles.inputError}`}
          type="text"
          placeholder="Digite seu nome"
          {...register("name", {
            required: true,
            validate: (value) => isAlpha(value),
          })}
          onChange={(e) => {
            setRemetenteNome(e.target.value);
          }}
          value={remetenteNome}
        />

        {/* Input E-mail */}
        <div className={styles.formLabelError}>
          <div>
            <label>E-mail</label>
          </div>
          <div>
            {errors?.email?.type === "required" && (
              <p className={styles.errorMsg}>Campo Obrigatório</p>
            )}
            {errors?.email?.type === "validate" && (
              <p className={styles.errorMsg}>Formato de E-mail inválido</p>
            )}
          </div>
        </div>

        <input
          className={errors?.email && `${styles.inputError}`}
          type="email"
          placeholder="Digite seu e-mail"
          {...register("email", {
            required: true,
            validate: (value) => isEmail(value),
          })}
          onChange={(e) => {
            setRemetenteEmail(e.target.value);
          }}
          value={remetenteEmail}
        />

        {/* Input Celular */}
        <label>Celular</label>
        <input
          className={errors?.celular && `${styles.inputError}`}
          type="tel"
          placeholder="Digite seu celular"
          {...register("celular", {
            required: true,
            validate: (value) => isMobile(value),
          })}
          onChange={(e) => {
            setRemetenteCelular(e.target.value);
          }}
          value={remetenteCelular}
        />
        {/* {errors?.celular?.type === "required" && (
          <p className={styles.errorMsg}>Campo Obrigatório</p>
        )} */}
        {errors?.celular?.type === "validate" && (
          <p className={styles.errorMsg}>Número inválido.</p>
        )}

        {/* Input Assunto */}
        <label>Assunto</label>
        <input
          className={errors?.assunto && `${styles.inputError}`}
          type="text"
          placeholder="Digite o assunto"
          {...register("assunto", { required: true })}
          onChange={(e) => {
            setRemetenteAssunto(e.target.value);
          }}
          value={remetenteAssunto}
        />
        {errors?.assunto?.type === "required" && (
          <p className={styles.errorMsg}>Campo Obrigatório</p>
        )}

        {/* Input Mensagem */}
        <label>Mensagem</label>
        <textarea
          className={errors?.mensagem && `${styles.inputError}`}
          type="text"
          placeholder="Digite a mensagem"
          {...register("mensagem", { required: true })}
          onChange={(e) => {
            setRemetenteMensagem(e.target.value);
          }}
          value={remetenteMensagem}
        />
        {errors?.mensagem?.type === "required" && (
          <p className={styles.errorMsg}>Campo Obrigatório</p>
        )}
        {/* <button onClick={() => handleSubmit(SendEmail)()}>Enviar</button> */}
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

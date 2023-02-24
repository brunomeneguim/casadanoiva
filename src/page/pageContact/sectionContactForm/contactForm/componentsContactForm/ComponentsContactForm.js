/* Desenvolvido por - Bruno Marcondes */

import React, { useState } from "react";

import { useForm } from "react-hook-form";

import emailjs from "@emailjs/browser";

import styles from "./ComponentsContactForm.module.css";

export default function ComponentsContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      remetenteNome: "",
      remetenteEmail: "",
      remetenteCelular: "",
      remetenteAssunto: "",
      remetenteMensagem: "",
    },
  });

  const [remetenteNome, setRemetenteNome] = useState("");
  const [remetenteEmail, setRemetenteEmail] = useState("");
  const [remetenteCelular, setRemetenteCelular] = useState("");
  const [remetenteAssunto, setRemetenteAssunto] = useState("");
  const [remetenteMensagem, setRemetenteMensagem] = useState("");

  const SendEmail = async (e) => {
    const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
    await sleep(5000);
    // e.preventDefault();

    const templateParams = {
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
          // setRemetenteNome("");
          // setRemetenteEmail("");
          // setRemetenteCelular("");
          // setRemetenteAssunto("");
          // setRemetenteMensagem("");
        },
        function (error) {
          console.log("Failed...", error);
        }
      );
    console.log(templateParams);
  };

  return (
    <div
      className={
        isSubmitSuccessful
          ? `${styles.form} ${styles.formActive}`
          : `${styles.form}`
      }
    >
      <h1 className={styles.msgSent}>Mensagem Enviada com Sucesso.</h1>
      <div className={`${styles.form}`}>
        <form className={styles.contactForm} onSubmit={handleSubmit(SendEmail)}>
          {isSubmitting}
          {/* Input Nome */}
          <div className={styles.formLabelError}>
            <div>
              <label>Nome</label>
            </div>
            <div>
              {errors?.name?.type === "required" && (
                <p className={styles.errorMsg}>Campo Obrigatório</p>
              )}
            </div>
          </div>

          <input
            className={errors?.name && `${styles.inputError}`}
            type="text"
            placeholder="Digite seu nome"
            {...register("name", {
              required: true,
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
            </div>
          </div>

          <input
            className={errors?.email && `${styles.inputError}`}
            type="email"
            placeholder="Digite seu e-mail"
            {...register("email", {
              required: true,
            })}
            onChange={(e) => {
              setRemetenteEmail(e.target.value);
            }}
            value={remetenteEmail}
          />

          {/* Input Celular */}
          <div className={styles.formLabelError}>
            <label>Celular</label>
          </div>

          <input
            className={errors?.celular && `${styles.inputError}`}
            type="tel"
            placeholder="(00) 00000-0000"
            {...register("celular")}
            onChange={(e) => {
              setRemetenteCelular(e.target.value);
            }}
            value={remetenteCelular}
          />

          {/* Input Assunto */}
          <div className={styles.formLabelError}>
            <div>
              <label>Assunto</label>
            </div>
            <div>
              {errors?.assunto?.type === "required" && (
                <p className={styles.errorMsg}>Campo Obrigatório</p>
              )}
            </div>
          </div>

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

          {/* Input Mensagem */}
          <div className={styles.formLabelError}>
            <div>
              <label>Mensagem</label>
            </div>
            <div>
              {errors?.mensagem?.type === "required" && (
                <p className={styles.errorMsg}>Campo Obrigatório</p>
              )}
            </div>
          </div>

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
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </div>
  );
}

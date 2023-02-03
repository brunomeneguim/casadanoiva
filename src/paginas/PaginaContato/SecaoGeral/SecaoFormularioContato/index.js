import './style.css';

/* FUNÇÃO QUE EXPORTA A SECAO FORMULARIO PARA A SECAO GERAL */
export default function SecaoFormularioContato() {
    return (

        /* INICIO SEÇÃO FORMULÁRIO */
        <div className="secao-formulario">

            <h1>Entre em contato</h1>

            {/* INICIO CONTAINER FORMULÁRIO */}
            <div className="container-formulario">

                <h2>Envie-nos uma mensagem</h2>

                {/* INICIO FORMULÁRIO */}
                <form className="formulario"
                    method="POST"
                    action="">

                    <label for="nome">Nome</label>
                    <input type="text"
                        id="nome"
                        name="nome"
                        required>
                    </input>

                    <label for="email">E-mail</label>
                    <input type="email"
                        id="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        name="email"
                        required>
                    </input>

                    <label for="celular">Celular</label>
                    <input type="tel"
                        id="celular"
                        patern="\([0-9]{2}\) [0-9]{5}-[0-9]{4}"
                        name="celular"
                        required>
                    </input>

                    <label for="assunto">Assunto</label>
                    <input type="text"
                        id="assunto"
                        name="assunto"
                        required>
                    </input>

                    <label for="mensagem">Mensagem</label>
                    <textarea type="text"
                        id="mensagem"
                        name="mensagem"
                        required>
                    </textarea>

                    <button type="submit">Enviar</button>

                </form>
                {/* FIM FORMULÁRIO */}

            </div>
            {/* FIM CONTAINER FORMULÁRIO */}

        </div>
        /* FIM SEÇÃO FORMULÁRIO */
    )
}
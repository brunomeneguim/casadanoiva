import './style.css';

/* FUNÇÃO QUE EXPORTA A SECAO FORMULARIO PARA A SECAO GERAL */
export default function SecaoFormularioContato() {
    return (


        <div className="secao-formulario" >

            <div className="container-formulario" id="contato">
            
                {/* <h2>Envie-nos uma mensagem</h2> */}
                <h1>Entre em contato</h1>
                <form className="formulario"
                    method="POST"
                    action="https://formsubmit.co/brunomeneguim@hotmail.com">

                    <label htmlFor="nome">Nome</label>
                    <input type="text"
                        id="nome"
                        name="nome"
                        required>
                    </input>

                    <label htmlFor="email">E-mail</label>
                    <input type="email"
                        id="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        name="email"
                        required>
                    </input>

                    <label htmlFor="celular">Celular</label>
                    <input type="tel"
                        id="celular"
                        patern="\([0-9]{2}\) [0-9]{5}-[0-9]{4}"
                        name="celular"
                        required>
                    </input>

                    <label htmlFor="assunto">Assunto</label>
                    <input type="text"
                        id="assunto"
                        name="assunto"
                        required>
                    </input>

                    <label htmlFor="mensagem">Mensagem</label>
                    <textarea type="text"
                        id="mensagem"
                        name="mensagem"
                        required>
                    </textarea>

                    <button type="submit">Enviar</button>
                    <input type="hidden" name="_next" value="/"></input>
                    <input type="hidden" name="_captcha" value="false"></input>
                </form>
            </div>
        </div>
    )
}
import './style.css';

/* FUNÇÃO QUE EXPORTA A SECAO PERGUNTAS PARA A SECAO GERAL */
export default function SecaoPerguntas() {
    return (

        /* INICIO SECAO PERGUNTAS */
        <section className="secao-perguntas">

            {/* INICIO CONTAINER PERGUNTAS */}
            <div className="container-perguntas">

                <div className="card-perguntas">

                    <h2>Você trabalha com pacotes de preços?</h2>

                    <p>Sim. Por causa do código de ética do psicólogo não é autorizado divulgar
                        os valores das sessões por aqui. Porém no pacote mensal (4 sessões) o valor é
                        diferenciado, com desconto comparado ao valor da sessão individual.
                        Se você tem interesse em fazer terapia, me chama no chat que te passo os valores!
                    </p>

                </div>

                <div className="card-perguntas">

                    <h2>Qual abordagem utiliza em sessão?</h2>

                    <p>Trabalho com a Terapia Cognitivo-Comportamental, que é
                        uma abordagem da Psicologia baseada em evidências, com métodos
                        e técnicas científicas para ajudar os pacientes na resolução
                        de seus problemas, tratamento de transtornos mentais e auxílio
                        no alcanço de uma vida mais leve e relacionamentos saudáveis.
                    </p>

                </div>

                <div className="card-perguntas">

                    <h2>Quanto tempo dura cada sessão?</h2>

                    <p>As sessões são feitas semanais com duração de 50 minutos cada.
                        O ambiente terapêutico que ofereço é de respeito e sigilo.
                        Para que a terapia tenha ainda mais eficácia, há também o fornecimento de planos
                        de ação para que o paciente possa aplicar durante a semana sobre o que foi conversado em sessão.
                    </p>

                </div>

            </div>
            {/* FIM CONTAINER PERGUNTAS */}

        </section>
        /* FIM SECAO PERGUNTAS */
    );
}
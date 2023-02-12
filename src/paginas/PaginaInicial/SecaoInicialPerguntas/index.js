/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta a Seção Perguntas para a página Inicial */

import './style.css';

export default function SecaoInicialPerguntas() {
    return (

        <section className="secaoInicialPerguntas">
            <div className="containerInicialPerguntas">
                <div className="boxInicialPerguntas">
                    <h2 className='subtituloPerguntas'>Você trabalha com pacotes de preços?</h2>
                    <p className='textoPerguntas'>Sim. Por causa do código de ética do psicólogo não é autorizado divulgar
                        os valores das sessões por aqui. Porém no pacote mensal (4 sessões) o valor é
                        diferenciado, com desconto comparado ao valor da sessão individual.
                        Se você tem interesse em fazer terapia, me chama no chat que te passo os valores!
                    </p>
                </div>
                <div className="boxInicialPerguntas">
                    <h2 className='subtituloPerguntas'>Qual abordagem utiliza em sessão?</h2>
                    <p className='textoPerguntas'>Trabalho com a Terapia Cognitivo-Comportamental, que é
                        uma abordagem da Psicologia baseada em evidências, com métodos
                        e técnicas científicas para ajudar os pacientes na resolução
                        de seus problemas, tratamento de transtornos mentais e auxílio
                        no alcanço de uma vida mais leve e relacionamentos saudáveis.
                    </p>
                </div>
                <div className="boxInicialPerguntas">
                    <h2 className='subtituloPerguntas'>Quanto tempo dura cada sessão?</h2>
                    <p className='textoPerguntas'>As sessões são feitas semanais com duração de 50 minutos cada.
                        O ambiente terapêutico que ofereço é de respeito e sigilo.
                        Para que a terapia tenha ainda mais eficácia, há também o fornecimento de planos
                        de ação para que o paciente possa aplicar durante a semana sobre o que foi conversado em sessão.
                    </p>
                </div>
            </div>
        </section>
    );
}
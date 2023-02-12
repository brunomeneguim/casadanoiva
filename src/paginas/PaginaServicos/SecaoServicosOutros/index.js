/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta a Seção Outros para a Página Serviços */

import "./style.css";

export default function SecaoServicosOutros() {
    return (
        /* Container que agrupa os três serviços*/
        <section className="secaoServicosOutros" id="outros">

            {/* Container de cada Serviço separado */}
            <div className="containerOutrosServicos">

                {/* Container dos componentes de cada serviço */}
                <div className="boxOutrosServicos">
                    <h1 className="tituloOutrosServicos">Sapatos</h1>
                    <p className="textoOutrosServicos">Sim. Por causa do código de ética do psicólogo não é autorizado divulgar
                        os valores das sessões por aqui. Porém no pacote mensal (4 sessões) o valor é
                        diferenciado, com desconto comparado ao valor da sessão individual.
                        Se você tem interesse em fazer terapia, me chama no chat que te passo os valores!
                    </p>
                    <img className="imagemOutrosServicos"
                        src="/assets/imgServicos/Sapatos/imgServicoSapato.jpg"
                        alt="Imagem Sapato" />
                </div>
            </div>

            <div className="containerOutrosServicos">
                <div className="boxOutrosServicos">
                    <h1 className="tituloOutrosServicos">Costureira</h1>
                    <p className="textoOutrosServicos">Sim. Por causa do código de ética do psicólogo não é autorizado divulgar
                        os valores das sessões por aqui. Porém no pacote mensal (4 sessões) o valor é
                        diferenciado, com desconto comparado ao valor da sessão individual.
                        Se você tem interesse em fazer terapia, me chama no chat que te passo os valores!
                    </p>
                    <img className="imagemOutrosServicos"
                        src="/assets/imgServicos/Costureira/imgServicoCostureira.jpg"
                        alt="Imagem Costureira" />
                </div>
            </div>

            <div className="containerOutrosServicos">
                <div className="boxOutrosServicos">
                    <h1 className="tituloOutrosServicos">Lavanderia</h1>
                    <p className="textoOutrosServicos">Sim. Por causa do código de ética do psicólogo não é autorizado divulgar
                        os valores das sessões por aqui. Porém no pacote mensal (4 sessões) o valor é
                        diferenciado, com desconto comparado ao valor da sessão individual.
                        Se você tem interesse em fazer terapia, me chama no chat que te passo os valores!
                    </p>
                    <img className="imagemOutrosServicos"
                        src="/assets/imgServicos/Lavanderia/imgServicoLavanderia.jpg"
                        alt="Imagem Lavanderia" />
                </div>
            </div>
        </section>
    );
}

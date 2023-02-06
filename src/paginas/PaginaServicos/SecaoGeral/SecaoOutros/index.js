import "./style.css";

export default function SecaoOutros() {
    return (
        <section className="secao-outros">
            <div className="container-servicos">
                <div className="card-outros" id="outros">
                    <h1 className="outros-titulo">Sapatos</h1>
                    <p className="outros-paragrafo">Sim. Por causa do código de ética do psicólogo não é autorizado divulgar
                        os valores das sessões por aqui. Porém no pacote mensal (4 sessões) o valor é
                        diferenciado, com desconto comparado ao valor da sessão individual.
                        Se você tem interesse em fazer terapia, me chama no chat que te passo os valores!
                    </p>
                    <img className="imagem-servico"
                        src="/assets/imgServicos/Outros/imgServicoSapato.jpg"
                        alt="Imagem Sapato" />
                </div>
            </div>

            <div className="container-servicos">
                <div className="card-outros" id="outros">
                    <h1 className="outros-titulo">Costureira</h1>
                    <p className="outros-paragrafo">Sim. Por causa do código de ética do psicólogo não é autorizado divulgar
                        os valores das sessões por aqui. Porém no pacote mensal (4 sessões) o valor é
                        diferenciado, com desconto comparado ao valor da sessão individual.
                        Se você tem interesse em fazer terapia, me chama no chat que te passo os valores!
                    </p>
                    <img className="imagem-servico"
                        src="/assets/imgServicos/Outros/imgServicoCostureira.jpg"
                        alt="Imagem Costureira" />
                </div>
            </div>

            <div className="container-servicos">
                <div className="card-outros" id="outros">
                    <h1 className="outros-titulo">Lavanderia</h1>
                    <p className="outros-paragrafo">Sim. Por causa do código de ética do psicólogo não é autorizado divulgar
                        os valores das sessões por aqui. Porém no pacote mensal (4 sessões) o valor é
                        diferenciado, com desconto comparado ao valor da sessão individual.
                        Se você tem interesse em fazer terapia, me chama no chat que te passo os valores!
                    </p>
                    <img className="imagem-servico"
                        src="/assets/imgServicos/Outros/imgServicoLavanderia.jpg"
                        alt="Imagem Lavanderia" />
                </div>
            </div>

        </section>
    );
}

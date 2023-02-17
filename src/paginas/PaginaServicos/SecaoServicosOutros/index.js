/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta a Seção Outros para a Página Serviços */

import "./style.css";

export default function SecaoServicosOutros() {
    return (
        /* Container que agrupa os três serviços*/
        <section className="secaoServicosOutros" id="outros">

            {/* Container de cada Serviço separado */}
            <div className="containerOutrosServicos">

                {/* Container dos components de cada serviço */}
                <div className="boxOutrosServicos">
                    <h1 className="tituloOutrosServicos">Sapatos</h1>
                    <p className="textoOutrosServicos">O sapato de noiva também é uma peça importante na composição do look.
                        Aqui na Casa da Noiva você encontra opções de sapatos brancos tanto de salto alto como salto baixo, para
                        aquelas noivas que preferem conforto no seu grande dia.
                    </p>
                    <img className="imagemOutrosServicos"
                        src="/assets/imgServicos/Sapatos/imgServicoSapato.jpg"
                        alt="Imagem Sapato" />
                </div>
            </div>

            <div className="containerOutrosServicos">
                <div className="boxOutrosServicos">
                    <h1 className="tituloOutrosServicos">Costureira</h1>
                    <p className="textoOutrosServicos">Nosso serviço de costura é ofertado por uma profissional que trabalha há mais
                        de 10 anos com ajustes de vestidos de noiva. Esse serviço é incluso gratuitamente para as noivas que fecham
                        contrato conosco, mas se você já tem o vestido e quiser apenas ajustar ou customizar conosco, também temos esse
                        serviço à parte. Venha fazer um orçamento conosco.
                    </p>
                    <img className="imagemOutrosServicos"
                        src="/assets/imgServicos/Costureira/imgServicoCostureira.jpg"
                        alt="Imagem Costureira" />
                </div>
            </div>

            <div className="containerOutrosServicos">
                <div className="boxOutrosServicos">
                    <h1 className="tituloOutrosServicos">Lavanderia</h1>
                    <p className="textoOutrosServicos">Nosso serviço de lavanderia profissional é ofertado gratuitamente para as noivas
                        que fecham contrato conosco. Entregamos o vestido e acessórios no dia do seu casamento limpo e passado, e lavamos
                        também depois do casamento. Os produtos utilizados são próprios para lavagem de peças brancas e delicadas, assim
                        como o ferro profissional que não queima tecidos. Também oferecemos este serviço à parte pelo valor de R$ 200,00.
                    </p>
                    <img className="imagemOutrosServicos"
                        src="/assets/imgServicos/Lavanderia/imgServicoLavanderia.jpg"
                        alt="Imagem Lavanderia" />
                </div>
            </div>
        </section>
    );
}

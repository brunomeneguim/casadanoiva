/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta a Seção Perguntas para a página Inicial */

import './style.css';

export default function SecaoInicialPerguntas() {
    return (

        <section className="secaoInicialPerguntas">
            <div className="containerInicialPerguntas">
                <div className="boxInicialPerguntas">
                    <h2 className='subtituloPerguntas'>Quais são os valores de locação dos vestidos?</h2>
                    <p className='textoPerguntas'>Como nossa prioridade é ser um diferencial nos valores,
                        além de cobrirmos qualquer orçamento, nossos vestidos de noiva estão na faixa de R$
                        500,00 à R$ 2.500,00 dependendo do modelo. Parcelamos também no cartão de crédito até
                        10x (mais juros), parcelamento no PIX até um mês antes do casamento, ou também 5% de desconto à vista.
                    </p>
                </div>
                <div className="boxInicialPerguntas">
                    <h2 className='subtituloPerguntas'>Como faço para marcar um horário?</h2>
                    <p className='textoPerguntas'>Você pode agendar um horário para conhecer nosso ateliê pelo Whatsapp
                        (42) 99990-1300. A Thaisa nossa atendente irá te responder e tirar suas dúvidas agendando um horário
                        que fique melhor para você. Nosso ambiente é muito aconchegante, então se quiser pode trazer também sua
                        família e amigos para a prova do vestido, será um prazer recebê-los!
                    </p>
                </div>
                <div className="boxInicialPerguntas">
                    <h2 className='subtituloPerguntas'>Quanto tempo dura um atendimento?</h2>
                    <p className='textoPerguntas'>Como cada atendimento é personalizado, então depende muito. Mas geralmente
                        para provar vestidos de noiva o atendimento pode durar entre 30 minutos a 2 horas. Caso seja para provar
                        véus e/ou acessórios o atendimento pode ser mais rápido, porém orientamos que traga junto o seu vestido
                        de noiva para melhor escolher os acessórios que combinem no seu look.
                    </p>
                </div>
            </div>
        </section>
    );
}
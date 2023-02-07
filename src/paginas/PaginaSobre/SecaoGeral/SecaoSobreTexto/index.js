import './style.css';

/* FUNÇÃO QUE EXPORTA A SECAO BANNER TEXTO PARA A SECAO GERAL */
export default function SecaoSobreTexto() {
    return (

        <div className='secao-sobre-texto' id='sobre'>
            <div className='container-texto'>
                <h1>Minha história</h1>
                <h2>PSICOLOGIA COMO PROPÓSITO DE VIDA</h2>
                <div className='container-paragrafos'>
                    <p className='sobre-texto'>
                        Imagine acordar todas as manhãs sentindo que você pode ajudar a transformar vidas!
                        Não é uma sensação maravilhosa?
                        Desde a adolescência tinha essa vontade dentro de mim de ajudar
                        as pessoas a se tornarem sua melhor versão, e foi aí que decidi pela Psicologia.
                    </p>

                    <p className='sobre-texto'>
                        Como sempre gostei de estudar, minha formação não parou apenas na faculdade.  Tenho
                        pós-graduação em Saúde Mental, sou especialista em Psicologia Organizacional e do
                        Trabalho, tenho formação em Terapia Cognitivo-Comportamental e formação em Terapia
                        de Casal. Além de também ser especialista em cada paciente meu.
                    </p>

                    <p className='sobre-texto'>
                        Meu objetivo é orientar meus pacientes para o alcance de vidas mais leves, e
                        relacionamentos
                        mais saudáveis.
                    </p>

                    <p className='sobre-texto'>
                        A vida pode ser difícil e, às vezes, a ajuda de um psicólogo profissional
                        pode ser muito efetiva. Me dedico ao bem-estar dos meus pacientes e posso
                        fornecer a você as ferramentas necessárias para desenvolver maior autoconhecimento,
                        autoconfiança e autoestima para alcançar seus objetivos de vida e se tornar sua
                        melhor versão.
                    </p>
                </div>
            </div>
        </div>
    );
}
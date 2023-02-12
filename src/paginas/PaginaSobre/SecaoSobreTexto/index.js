/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta os paragráfos para a página Sobre */

import './style.css';

export default function SecaoSobreTexto() {
    return (
        <>
            {/* Container do Titulo, subtitulo e paragráfos */}
            <div className='containerSobreTexto'>

                <h1 className='tituloSobre'>Minha história</h1>
                <h2 className='subtituloSobre'>PSICOLOGIA COMO PROPÓSITO DE VIDA</h2>

                {/* Container apenas dos paragráfos */}
                <div className='containerParagrafos'>
                    <p className='sobreParagrafo'>
                        Imagine acordar todas as manhãs sentindo que você pode ajudar a transformar vidas!
                        Não é uma sensação maravilhosa?
                        Desde a adolescência tinha essa vontade dentro de mim de ajudar
                        as pessoas a se tornarem sua melhor versão, e foi aí que decidi pela Psicologia.
                    </p>

                    <p className='sobreParagrafo'>
                        Como sempre gostei de estudar, minha formação não parou apenas na faculdade.  Tenho
                        pós-graduação em Saúde Mental, sou especialista em Psicologia Organizacional e do
                        Trabalho, tenho formação em Terapia Cognitivo-Comportamental e formação em Terapia
                        de Casal. Além de também ser especialista em cada paciente meu.
                    </p>

                    <p className='sobreParagrafo'>
                        Meu objetivo é orientar meus pacientes para o alcance de vidas mais leves, e
                        relacionamentos
                        mais saudáveis.
                    </p>

                    <p className='sobreParagrafo'>
                        A vida pode ser difícil e, às vezes, a ajuda de um psicólogo profissional
                        pode ser muito efetiva. Me dedico ao bem-estar dos meus pacientes e posso
                        fornecer a você as ferramentas necessárias para desenvolver maior autoconhecimento,
                        autoconfiança e autoestima para alcançar seus objetivos de vida e se tornar sua
                        melhor versão.
                    </p>
                </div>
            </div>
        </>
    );
}
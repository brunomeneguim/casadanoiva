import './style.css';

/* FUNÇÃO QUE EXPORTA A SECAO SLIDER PARA A SECAO GERAL */
export default function SecaoSlider() {
    return (

        /* INICIO SECAO SLIDER */
        <section className="secao-slider">

            {/* INICIO CONTAINER SLIDER */}
            <div className="slider">

                {/* INICIO CONTAINER SLIDES - RADIO BUTTONS E FOTOS */}
                <div className="slides">

                    {/* RADIO BUTTONS */}
                    <input type="radio" name="radio-btn" id="radio1" />
                    <input type="radio" name="radio-btn" id="radio2" />
                    <input type="radio" name="radio-btn" id="radio3" />
                    <input type="radio" name="radio-btn" id="radio4" />

                    {/* IMAGENS */}
                    <div className="slide first">

                        <img src="/assets/imgSlider1.jpg"
                            alt="Imagem 1" />

                    </div>

                    <div className="slide">

                        <img src="/assets/imgSlider2.jpg"
                            alt="Imagem 2" />

                    </div>

                    <div className="slide">

                        <img src="/assets/imgSlider3.jpg" alt="Imagem 3" />

                    </div>

                    <div className="slide">

                        <img src="/assets/imgSlider4.jpg"
                            alt="Imagem 4" />

                    </div>
                </div>
                {/* FIM CONTAINER SLIDES */}
                <div className='container-navigation'>
                    <div className="navigation-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        <div className="auto-btn3"></div>
                        <div className="auto-btn4"></div>
                    </div>

                    {/* NAVEGACAO MANUAL */}
                    <div className="manual-navigation">
                        <label for="radio1" className="manual-btn"></label>
                        <label for="radio2" className="manual-btn"></label>
                        <label for="radio3" className="manual-btn"></label>
                        <label for="radio4" className="manual-btn"></label>
                    </div>
                </div>



            </div>
            {/* FIM CONTAINER SLIDER */}

        </section>
        /* FIM SECAO SLIDER */
    );
}



/* FUNCAO PARA IMAGEM TROCAR AUTOMATICAMENTE */

/*
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 4500)

function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}

*/





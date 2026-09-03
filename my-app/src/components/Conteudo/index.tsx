import React from 'react'
import imgQuadrado from "../../img/aaaaa.png"

export default function Conteudo() {
    return (
        <main>
            <h2>Bem-vindo à minha aplicação React!</h2>
            <section>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium doloribus veritatis distinctio quam eos nesciunt adipisci nulla. Fuga nesciunt recusandae exercitationem omnis! Minus odit omnis itaque atque inventore, pariatur ducimus?</p>
            </section>

            <section>


                <figure>
                    <img
                        src="https://placehold.co/600x400/FF0000/FFFFFF/png"
                        alt="Imagem ilustrativa do conteúdo" width={200}
                    />

                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>
            </section>

            <section>
                <h2>Imagem de referência externa</h2>
                <figure>
                    <img
                        src={imgQuadrado}
                        alt="Imagem ilustrativa do conteúdo" width={200}
                    />

                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>
            </section>

            <section>
                <h2>Imagem de referência estática</h2>
                <figure>
                    <img
                        src="/png.png"
                        alt="Imagem ilustrativa do conteúdo" width={200}
                    />

                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>
            </section>
        </main>
    )
}


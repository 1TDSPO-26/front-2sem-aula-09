import imgQuadrado from "../../img/quadrado.png"

export default function Conteudo() {
    return (
        <main>
            <section>
                <h2>Imagem com referência externa</h2>

                <figure>
                    <img src="https://placehold.co/600x400/FF0000/FFFFFF/png" alt="Imagem ilustrativa do conteúdo" width={200} />

                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>
            </section>

            <section>

                <h2>Imagem com referência externa</h2>

                <figure>
                    <img src={imgQuadrado} alt="Imagem ilustrativa do conteúdo" width={200} />

                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>
            
            </section>

            <section>

                <h2>Imagem com referência externa</h2>

                <figure>
                    <img src="/quadrado-2.png" alt="Imagem ilustrativa do conteúdo" width={200} />

                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>

            </section>

        </main>
    )
}
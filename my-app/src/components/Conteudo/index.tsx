import imgQuadrado from "../../img/quadrado.png";

export default function Conteudo() {
    return (
        <main>
            <section>
                <h2>Conteúdo aleatório</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nisi voluptatum accusamus facere quod. Esse tempore beatae hic earum fuga odio sint et ea consectetur a? Vero quis voluptatem consequatur.</p>
            </section>

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
                <h2>Imagem com referência interna</h2>
                <figure>
                    <img src={imgQuadrado} alt="Imagem ilustrativa do conteúdo" width={200} />
                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>
            </section>

            <section>
                <h2>Imagem com referência estática</h2>
                <figure>
                    <img src="/quadrado.png" alt="Imagem ilustrativa do conteúdo" width={200} />
                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>
            </section>

        </main>
    )
}
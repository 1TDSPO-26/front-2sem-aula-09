import imgQuadrado from "../../img/quadrado.png";

export default function Conteudo() {
    return (
        <main>
            <section>
                <h2>Conteúdo aleatório</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In animi, necessitatibus vel obcaecati rerum eos quae doloremque odio placeat veritatis omnis, assumenda corporis quo sed.
                </p>
            </section>
                <h2>Imagem com referência externa</h2>
                <figure>
                    <img src="https://placehold.co/600x400/123456/FFFFFF/png" alt="Imagem ilustrativa do conteúdo" />
                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>
            <section>

            </section>
            <section>
                <h2>Imagem com referência interna</h2>
                <figure>
                    <img src={imgQuadrado} alt="Imagem ilustrativa do conteúdo" />
                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>
            </section>
        </main>
    )
}
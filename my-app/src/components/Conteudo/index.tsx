import imgPng from "../../img/png.png";


export default function Conteudo() {
    return (
        <main>
            <section>
                <h1>Conteúdo Aleatório</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sunt facere a perferendis omnis, culpa qui numquam aut corporis vel soluta sapiente quisquam sed accusamus accusantium voluptatum quasi officiis quae.

                </p>

            </section>
            <section>
                <h2>
                    Imagem com referência interna
                </h2>
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
                <h2>
                    Imagem com referência externa
                </h2>
                <figure>
                    <img
                        src={imgPng}
                        alt="Imagem ilustrativa do conteúdo" width={200}
                    />

                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>
            </section>
            <section>
                <h2>
                    Imagem com referência estática
                </h2>
                <figure>
                    <img
                        src="/png (1).png"
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
import imgQuadrado from "../../img/quadrado.png"

export default function Conteudo() {
    return (
        <main>
            <section>
                <h2>Conteúdo</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat vero sed sapiente amet mollitia, praesentium veniam quisquam nesciunt eum repellendus est molestias fugit? Dolores iste voluptas rem quisquam excepturi quaerat ullam rerum quam voluptate dolore incidunt voluptatem impedit facere, totam id iusto nobis sit cupiditate quae autem, doloremque dignissimos. Quis.</p>        
            </section>
            <section>
                <h2>Imagem com referência externa</h2>
            <figure>
                <img
                    src="https://placehold.co/600x400/4b0081/4b0081/png"
                    alt="Imagem ilustrativa do conteúdo"
                />

                <figcaption>
                    Imagem utilizada para representar o conteúdo da aplicação.
                </figcaption>
            </figure>
            </section>

            <section>
                <h2>Imagem com referência interna</h2>
                <figure>
                    <img src="/quadrado2.png
                    " alt="Imagem ilustrativa do conteudo" width={200} />

                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>
            </section>
            <section>
                <h2>Imagem com referência estática</h2>
                <figure>
                    <img src={imgQuadrado} alt="Imagem ilustrativa do conteudo" width={200} />

                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>
            </section>
        </main>
    )
}
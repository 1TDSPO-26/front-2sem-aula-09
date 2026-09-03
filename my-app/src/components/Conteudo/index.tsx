import imgSquad from '../../img/quadrado.png';

export default function Conteudo
    () {
    return (
        <main>
            <h2>Conteúdo principal</h2>
            <section>
                <figure>
                    <img src="https://placehold.co/600x400/FccFFF0/oooFFFF/png" alt="Imagem ilustrativa do conteúdo" />
                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>
            </section>

            <section>
                <figure>
                    <img src={imgSquad} alt="Imagem ilustrativa" />
                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>

            </section>

            <section>
                <figure>
                    <img src="/favicon.png" alt="Imagem ilustrativa do conteúdo" />
                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>   
            </section>

        </main>
    )
}

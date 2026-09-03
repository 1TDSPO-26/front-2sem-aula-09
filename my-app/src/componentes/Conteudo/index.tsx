import imgQuadrado from "../../img/quadrado.png";

export default function Conteudo() {
    return (
        <main>
            <section>
                <h2>Conteúdo Aleatorio</h2>
                <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur officiis odio at ratione natus voluptatibus nisi velit deleniti repellendus inventore, assumenda culpa sunt accusantium perferendis, esse beatae exercitationem quaerat maxime!</h3>
            </section>
            <section>
                <h2>Imagem com referencia externa</h2>
                <figure>
                    <img
                        src="https://placehold.co/600x400/FF0000/FFFFFF/png"
                        alt="Imagem ilustrativa do conteúdo"/>
                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>
            </section>
            <section>
                <h2>Imagem com referencia interna</h2>
                <figure>
                    <img
                        src={imgQuadrado}
                        alt="Imagem ilustrativa do conteúdo"/>
                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>
            </section>  
            <section>
                <h2>Imagem com referencia estática</h2>
                <figure>
                    <img
                    src="/favicon.png" alt="Imagem ilustrativa do conteúdo"/>
                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>
            </section>            
        </main>
    )
}
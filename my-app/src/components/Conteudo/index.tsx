import imgQuadrado from "../../img/imgquadrado.png"

export default function Conteudo() {
  return (
    <main>
      <h2>Conteúdo principal</h2>

      <figure>
        <img
          src="https://placehold.co/600x400/005477/FFFFFF/png"
          alt="Imagem ilustrativa do conteúdo"
        />

        <figcaption>
          Imagem utilizada para representar o conteúdo da aplicação.
        </figcaption>
      </figure>

      <section>
        <h2>Imagem com referencia externa</h2>
        <figure>
        <img 
            src={imgQuadrado}
            alt="Imagem ilustrativa do conteúdo"
        />

        <figcaption>
          Imagem utilizada para representar o conteúdo da aplicação.
        </figcaption>
      </figure>
      </section>

      <section>
        <h2>Imagem com referencia estatica</h2>
        <figure>
        <img 
            src="/quadrado-2.png"
            alt="Imagem ilustrativa do conteúdo"
        />

        <figcaption>
          Imagem utilizada para representar o conteúdo da aplicação.
        </figcaption>
      </figure>
      </section>

      <h2>Second Content</h2>
      <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut earum expedita ullam odit non aperiam. Quam quibusdam fugiat numquam nulla est! Porro necessitatibus laborum quidem eligendi corporis exercitationem quibusdam obcaecati!
      </section>
    </main>
  )
}
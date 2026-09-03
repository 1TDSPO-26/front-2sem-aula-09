import imgQuadro from '../../img/quadrado.png'

export default function Conteudo() {
  return (
    <main>
      <section>
        <h2>Imagem com referência externa</h2>
        <figure>
          <img
            src="https://placehold.co/600x400/000000/FFFFFF/png"
            alt="Imagem ilustrativa do conteúdo"
            width={200}
          />
          <figcaption>
            Imagem utilizada para representar o conteúdo da aplicação.
          </figcaption>
        </figure>
      </section>

      <section>
        <h2>Imagem com referência interna</h2>
        <figure>
          <img
            src={imgQuadro}
            alt="Imagem ilustrativa do conteúdo"
            width={200}
          />
          <figcaption>
            Imagem utilizada para representar o conteúdo da aplicação.
          </figcaption>
        </figure>
      </section>

      <section>
        <h2>Outra imagem com referência interna</h2>
        <figure>
          <img
            src={imgQuadro}
            alt="Outra imagem ilustrativa do conteúdo"
            width={200}
          />
          <figcaption>
            Imagem utilizada para representar o conteúdo da aplicação.
          </figcaption>
        </figure>
      </section>
    </main>
  )
}
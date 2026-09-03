import React from 'react'
import imgQuadrado from "../../img/quadrado.png"

export default function Conteudo() {
  return (
    <main>
        <section>
            <h2>Conteudo aleatorio</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis soluta similique eum natus, voluptate quis exercitationem aperiam! Corrupti, voluptates necessitatibus.</p>
        </section>
        <section>
            <h2>Imagem com referência externa</h2>

              <figure>
                  <img
                      src="https://placehold.co/600x400/BBBBBB/FFFFFF/png" alt="Imagem ilustrativa do conteúdo"/>

                  <figcaption>
                      Imagem utilizada para representar o conteúdo da aplicação.
                  </figcaption>
              </figure>
        </section>
          <section>
              <h2>Imagem com referência interna</h2>

              <figure>
                  <img
                      src={imgQuadrado} alt="Imagem ilustrativa do conteúdo" />

                  <figcaption>
                      Imagem utilizada para representar o conteúdo da aplicação.
                  </figcaption>
              </figure>
          </section>
          <section>
              <h2>Imagem com referência estática</h2>

              <figure>
                  <img
                      src="/quadrado-2.png" alt="Imagem ilustrativa do conteúdo" />

                  <figcaption>
                      Imagem utilizada para representar o conteúdo da aplicação.
                  </figcaption>
              </figure>
          </section>
    </main>
  )
}

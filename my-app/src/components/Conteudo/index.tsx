import imgQuadrado from "../../img/quadrado.png";


export default function Conteudo() {
  return (
    <main>
      <section>
        <h1>Conteudo Aleatorio</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas et
          natus sit delectus porro, deserunt error alias ad. Assumenda, officiis
          minus ducimus, possimus quam quasi earum nemo quaerat reiciendis nisi
          enim, veniam vel eveniet facere officia inventore dicta quis. Sint
          saepe a nostrum repellendus illo est inventore eos quo nulla. Ab quas
          neque cumque facilis in. Sequi ratione iure dolore cum eos at quod
         
        </p>
      </section>
      <section>
        <h2>Imagem com referencia externa</h2>
        <figure>
          <img src="https://placehold.co/600x400/FF0000/FFFFFF/png"
            alt="Imagem ilustrativa do conteúdo"/>

          <figcaption>
            Imagem utilizada para representar o conteúdo da aplicação.
          </figcaption>
        </figure>
      </section>
      <section>
        <h2>Imagem com referencia interna</h2>
        <figure>
          <img src={imgQuadrado}
            alt="Imagem ilustrativa do conteúdo"/>

          <figcaption>
            Imagem utilizada para representar o conteúdo da aplicação.
          </figcaption>
        </figure>
      </section>
      <section>
        <h2>Imagem com referencia estatica</h2>
        <figure>
          <img src="/quadrado-2.png"
            alt="Imagem ilustrativa do conteúdo"/>

          <figcaption>
            Imagem utilizada para representar o conteúdo da aplicação.
          </figcaption>
        </figure>
      </section>
      

    </main>
  );
}

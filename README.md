# Aula — 8 de setembro de 2026
# Exercício — Lâmpada: variável comum versus `useState`

## Objetivo

Neste exercício, você criará duas lâmpadas:

1. Uma controlada por uma variável comum;
2. Outra controlada pelo Hook `useState`.

O objetivo é observar que uma variável comum pode mudar na memória, mas não atualiza automaticamente a interface. O `useState`, além de guardar o valor, solicita uma nova renderização do componente.

> **Hook** é uma função especial do React. O `useState` permite criar e atualizar o estado de um componente.

## Resultado esperado

A página deverá apresentar duas seções:

* Lâmpada controlada por variável comum;
* Lâmpada controlada por `useState`.

Ao clicar no primeiro botão, o valor será alterado somente no console.

Ao clicar no segundo botão, a imagem deverá alternar entre:

* Lâmpada acesa;
* Lâmpada apagada.

## 1. Organizar as imagens

Coloque as duas imagens dentro da pasta `public/images`:

```text
public/
└── images/
    ├── lampada-acesa.png
    └── lampada-apagada.png
```

Os arquivos da pasta `public` podem ser acessados diretamente pelo navegador.

Exemplo:

```tsx
<img src="/images/lampada-acesa.png" alt="Lâmpada acesa" />
```

## 2. Criar o componente

Crie a seguinte estrutura:

```text
src/
└── components/
    └── Lampada/
        └── index.tsx
```

No arquivo `src/components/Lampada/index.tsx`, comece com:

```tsx
import { useState } from 'react'

export default function Lampada() {
  let lampadaComumAcesa = false

  const [lampadaStateAcesa, setLampadaStateAcesa] =
    useState(false)

  function alternarVariavelComum() {
    lampadaComumAcesa = !lampadaComumAcesa
    console.log('Variável comum:', lampadaComumAcesa)
  }

  function alternarUseState() {
    // TODO: utilizar setLampadaStateAcesa para inverter o estado.
  }

  return (
    <main>
      <h1>Variável comum versus useState</h1>

      <section>
        <h2>Lâmpada com variável comum</h2>
        <p>Estado:{lampadaComumAcesa ? ' acesa' : ' apagada'}</p>
        <img
          src={lampadaComumAcesa ? '/images/lampada-acesa.png' : '/images/lampada-apagada.png'}
          alt="Lâmpada controlada por variável comum"
          width="250"
        />
        <div>
          <button onClick={alternarVariavelComum} type="button">
            Alternar variável comum
          </button>
        </div>
        <p>Observe o console depois de pressionar o botão.</p>
      </section>

      <hr />

      <section>
        <h2>Lâmpada com useState</h2>
        <p>Estado:{lampadaStateAcesa ? ' acesa' : ' apagada'}</p>
        <img
          src={lampadaStateAcesa ? '/images/lampada-acesa.png' : '/images/lampada-apagada.png'}
          alt="Lâmpada controlada pelo useState"
          width="250"
        />
        <div>
          <button aria-pressed={lampadaStateAcesa} onClick={alternarUseState} type="button">
            {lampadaStateAcesa ? 'Apagar lâmpada' : 'Acender lâmpada'}
          </button>
        </div>
      </section>
    </main>
  )
}
```

## 3. Completar a função do `useState`

Dentro da função `alternarUseState`, utilize `setLampadaStateAcesa` para inverter o valor atual do estado:

```tsx
function alternarUseState() {
  setLampadaStateAcesa(
    (estadoAtual) => !estadoAtual,
  )
}
```

## 4. Utilizar o componente no App

Abra o arquivo `src/App.tsx` e importe o componente:

```tsx
import Lampada from './components/Lampada'

export default function App() {
  return <Lampada />
}
```

## 5. Executar o projeto

No terminal, execute:

```bash
npm run dev
```

Abra o endereço apresentado pelo Vite no navegador.

## 6. Testar a variável comum

1. Abra o console do navegador;
2. Pressione o botão **Alternar variável comum**;
3. Observe os valores apresentados no console;
4. Confira se a imagem foi alterada na página.

O valor da variável mudará no console, mas a imagem continuará apagada. Isso acontece porque uma variável comum não informa ao React que a interface precisa ser renderizada novamente.

## 7. Testar o `useState`

Pressione o botão da segunda lâmpada. A cada clique, a lâmpada deverá alternar entre acesa e apagada.

# Reis Burger — Manual de manutenção

Site da Reis Burger. O cardápio ainda precisa ser carregado (vagas "a preencher"); horário e tempo de entrega ainda não foram informados: preencha `openingHours`, `storeHours` e `deliveryTime` em `src/data/config.js` quando tiver os dados.

> **Administração:** feita editando arquivos do projeto. Não existe painel com login nem banco de dados. O estoque NÃO baixa sozinho quando alguém pede pelo WhatsApp: altere manualmente.

## Onde editar
- **Dados da loja:** `src/data/config.js` (nome, logotipo, slogan, WhatsApp, Instagram, endereço, mapa, horário, entrega).
- **Categorias e produtos:** `src/data/products.js`.
- **Vídeo de abertura:** `public/videos/abertura.mp4` (troque pelo vídeo do cliente, mantendo o nome).
- **Fotos:** `public/images/<categoria>/`.
- **Título da aba do navegador:** `index.html` (`<title>`).

## 1. Abrir o projeto
Instale o [Node.js](https://nodejs.org) (versão LTS) e o VS Code. Abra a pasta, abra o terminal e rode `npm install` (primeira vez). Para ver o site: `npm run dev`.

## 2. Dados da loja (`config.js`)
```js
name: "Reis Burger",
logo: { text: "REIS ", accent: "BURGER" },  // accent aparece em dourado
slogan: { before: "Onde a qualidade ", highlight: "reina", after: "." },
whatsapp: "5511999999999",   // 55 + DDD + número, só dígitos. Vazio = pedido desativado
instagram: "https://www.instagram.com/usuario/",
mapsUrl: "https://www.google.com/maps/search/?api=1&query=ENDERECO",
```
Links vazios ficam sem ação até serem preenchidos.

## 3. Horário e bloqueio de pedidos fora do expediente
`openingHours` é o texto do rodapé. Para bloquear pedidos fora do horário, preencha `storeHours` (hora cheia e fuso), por exemplo `{ open: 17, close: 23, timeZone: "America/Sao_Paulo" }`. Com `storeHours: null` o site nunca bloqueia e não mostra "aberto/fechado". Não há servidor: a regra vale no site e usa o relógio do aparelho (só o fuso é fixo).

## 4. Cadastrar produtos
O cardápio vem com vagas vazias (`pending: true`) em cada categoria. Para preencher uma vaga: troque `name`, `description`, `price`, apague `"pending": true` e ponha `"available": true`. Vagas não usadas devem ser apagadas, ou use `showPending: false` em `config.js` ao publicar.

## 5. Descontos
```js
price: 30.0, promotionalPrice: 24.0, discountActive: true   // liga: mostra preço riscado e % OFF
discountActive: false                                       // desliga (nada é apagado)
```

## 6. Esgotado e estoque
`available: false` = ESGOTADO · `"unavailable"` = indisponível · `true` = à venda. Com `stockManaged: true, stockQuantity: 20` o cliente não passa de 20 no carrinho; 0 = esgotado.

## 7. Fotos
Coloque o arquivo na pasta da categoria (sem espaços/acentos) e informe o caminho em `image`, ex.: `"/images/combos/meu-combo.jpg"`. Sem foto aparece um espaço reservado. `LISTA-DE-FOTOS.txt` lista os nomes das vagas.

## 8. Categorias e adicionais
Lista `categories` no topo de `products.js`: a ordem é a ordem das seções; `name` é o título, `short` o botão, `subtitle` a frase abaixo. O `id` deve ser igual ao nome da pasta de imagens e ao `category` dos produtos. Adicionais são itens da categoria `adicionais`; para liberar num produto: `allowedAddons: ["id-do-adicional"]`.

## 9. GitHub e Vercel
Envie o projeto a um repositório novo (Add file > Upload files, ou `git push`). Na Vercel: Add New > Project > Import > Deploy (Vite, build `npm run build`, saída `dist`). Cada atualização enviada ao GitHub publica sozinha.

## Estrutura do código
- `src/App.jsx` monta a página; `src/components/`: `MenuCategory`, `ProductCard`, `CategoryNav`, `Cart`, `Hero`.
- `src/lib/`: `pricing.js` (preço, desconto, estoque), `hours.js` e `useStoreOpen.js` (horário).
- `src/styles/`: `base.css`, `menu.css`, `cart.css`.

## Problemas comuns
- Foto não aparece: nome/pasta/extensão diferentes do campo `image` (maiúsculas importam).
- Tela branca: veja o erro no terminal; costuma faltar vírgula ou aspas em `products.js`.

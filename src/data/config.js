// CONFIGURAÇÕES GERAIS DA LOJA — Reis Burger.
export const config = {
  name: "Reis Burger",
  logo: { text: "REIS ", accent: "BURGER" }, // "accent" aparece em dourado
  slogan: { before: "Onde a qualidade ", highlight: "reina", after: "." }, // "highlight" em dourado
  whatsapp: "5571987523172", // só números: 55 + DDD + número
  instagram: "https://instagram.com/reisburgeroficial",
  address: "Av. Flaviano Guimarães, 170, Itaberaba - BA, 46880-000",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Av.%20Flaviano%20Guimar%C3%A3es%20170%2C%20Itaberaba%20BA%2046880-000",
  openingHours: "", // ainda não informado. Ex.: "Todos os dias, das 18h às 23h". Vazio = não aparece no site
  // Bloqueio automático de pedidos fora do horário. Deixe null até o horário ser informado.
  // Exemplo: { open: 18, close: 23, timeZone: "America/Sao_Paulo" }
  storeHours: null,
  deliveryTime: "", // ainda não informado. Ex.: "Tempo de entrega: 30 a 60 minutos". Vazio = não aparece
  deliveryFee: "A confirmar com a loja",
  paymentInfo: "A confirmar com a loja",
  showPending: true, // true = mostra vagas "a preencher"; false = esconde (use quando o cardápio estiver completo)
};

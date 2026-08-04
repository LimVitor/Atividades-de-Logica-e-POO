let maca;
let valorCompra;

const botao4 = document.getElementById('atividade4');

botao4.addEventListener('click', () => {
  maca = parseInt(prompt('Olá! Quantas maçãs você gostaria?'));
  if (maca < 12) {
    valorCompra = maca * 1.3;
  } else {
    valorCompra = maca * 1;
  }
  alert(`Valor total da compra: R$${valorCompra}`);
});

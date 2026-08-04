let custoDistribuidor = 0.28;
let custoImposto = 0.45;

const botao = document.getElementById('atividade1');

botao.addEventListener('click', () => {
  let custoFabrica = parseFloat(prompt('Digite o valor do carro'));
  let custoFinal =
    (custoDistribuidor + custoImposto) * custoFabrica + custoFabrica;
  alert(`Custo total do carro: R$${custoFinal}`);
});

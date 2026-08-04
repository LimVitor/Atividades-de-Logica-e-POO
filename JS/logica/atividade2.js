const salario = 1600;
const comissao = 200; //200 por carro vendido

const botao2 = document.getElementById('atividade2');

botao2.addEventListener('click', () => {
  let carrosVendidos = parseInt(
    prompt('Digite a quantidade de carros vendidos'),
  );
  let vendas = carrosVendidos * comissao;
  alert(`Valor das vendas: R$${vendas}`);
  let vendasTotal = vendas * 0.05 + vendas;
  alert(`Vendas + 5%: R$${vendasTotal}`);
  let SalarioFinal = salario + vendasTotal;
  alert(`Salário Final: R$${SalarioFinal}`);
});

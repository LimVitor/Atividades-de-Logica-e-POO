//Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.

const arrSize = 501;
let arr = [];

const botao8 = document.getElementById('atividade8');

botao8.addEventListener('click', () => {
  for (let i = 1; i < arrSize; i++) {
    arr.push(i);
  }
  const parArray = arr.filter((valor) => valor % 2 == 0);
  let total = parArray.reduce((totalSoma, item) => totalSoma + item, 0);
  alert(total);
 
});
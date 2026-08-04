let valorA;
let valorB;

const botao5 = document.getElementById('atividade5');

botao5.addEventListener('click', () => {
  let valorA = parseFloat(prompt('Digite um número'));
  let valorB = parseFloat(prompt('Digite um número'));
  if (valorA > valorB) {
    alert(`O maior valor é ${valorA}`);
  } else if (valorA < valorB) {
    alert(`O maior valor é ${valorB}`);
  } else {
    alert('Os valores são iguais');
  }
});

const botao3 = document.getElementById('atividade3');

botao3.addEventListener('click', () => {
  let grausF = parseFloat(prompt('Digite a temperatura em Fahrenheit'));
  let grausC = ((grausF - 32) * 5) / 9;
  alert(grausC);
});

//Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.

const botao7 = document.getElementById('atividade7');

botao7.addEventListener('click', () => {
  let valorX = parseFloat(prompt('Insira o valor de X'));
  let valorY = parseFloat(prompt('Insira o valor de Y'));
  let valorZ = parseFloat(prompt('Insira o valor de Z'));

  let valores = [valorX, valorY, valorZ];
  const maior = Math.max(...valores);
  alert(`O maior número é: ${maior}`);
  const novoArray = valores.filter((valor) => valor != maior);
  const segundoMaior = Math.max(...novoArray);
  alert(`O 2º maior número é: ${segundoMaior}`);
  const resultadoFinal = maior + segundoMaior;
  alert(`O resultado final é ${resultadoFinal}`);
});

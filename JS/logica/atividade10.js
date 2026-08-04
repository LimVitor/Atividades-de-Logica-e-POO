const empregado = [
  { nome: 'Josénildeson', anoDeNascimento: 1965, anoEntrou: 1990 },
];

let aposentadoria;
let id = empregado.findIndex((item) => item.nome === 'Josénildeson');
let ingresso = empregado[0].anoEntrou;

const botao10 = document.getElementById('atividade10');

botao10.addEventListener('click', () => {
  let anoAtual = parseInt(prompt('Digite o ano atual'));
  let idade = anoAtual - empregado[id].anoDeNascimento;
  let tempoTrabalhado = anoAtual - ingresso;

  if (
    idade >= 65 ||
    tempoTrabalhado >= 35 ||
    (idade >= 65 && tempoTrabalhado >= 25)
  ) {
    aposentadoria = 'requerer aposentadoria';
  } else {
    aposentadoria = 'não requerer';
  }

  alert(
    `A idade de ${empregado[0].nome} é ${idade} anos e ele trabalhou por ${tempoTrabalhado} anos, portanto ${aposentadoria}`,
  );
});

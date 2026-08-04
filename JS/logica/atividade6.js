const botao6 = document.getElementById('atividade6');

botao6.addEventListener('click', () => {
  let inicio = parseInt(prompt('Digite o horário do início do jogo'));
  let final = parseInt(prompt('Digite o horário do fim do jogo'));

  let duracao;

  if (inicio === final) {
    duracao = 24;
    alert(duracao);
  } else if (final < inicio) {
    final += 24;
    duracao = final - inicio;
    alert(Math.abs(duracao));
  } else if (final - inicio > 24) {
    alert('Tempo máximo excedido');
  } else {
    duracao = final - inicio;
    alert(Math.abs(duracao));
  }
});

let lista = [];
let pesquisa;

const botao9 = document.getElementById('atividade9');

botao9.addEventListener('click', () => {
  for (let n = 0; n < 20; n++) {
    let nome = prompt('Digite um nome');
    lista.push(nome);
    lista.sort();
  }
  alert(`${lista} (${lista.length})`);

  pesquisa = prompt('Pesquisa um nome');
  if (lista.includes(pesquisa)) {
    alert(`${pesquisa} foi encontrado(a) no índice ${lista.indexOf(pesquisa)}`);
  } else {
    alert(`${pesquisa} não foi encontrado(a)`);
  }
});

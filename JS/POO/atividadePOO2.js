class Veiculo {
  constructor(marca, modelo, diaria) {
    this.marca = marca;
    this.modelo = modelo;
    this.diaria = diaria;
  }
}

class Carro extends Veiculo {
  #diaria;
  constructor(marca, modelo, diaria, portas) {
    super(marca, modelo, diaria);
    this.portas = portas;
  }
  descricao() {
    alert(
      `Esse carro é um ${this.modelo}, ${this.portas} portas, da marca ${this.marca}, sua diária é de R$${this.diaria}.`,
    );
  }

  calcularAluguel(dias) {
    let aluguel = this.diaria * dias;
  }
  getDiaria() {
    this.diaria = parseFloat(prompt('Digita o valor da diária'));
    return diaria;
    alert(`Diária ${diaria}`);
  }
}

class Moto extends Veiculo {
  #diaria;
  constructor(marca, modelo, diaria, cilindradas) {
    super(marca, modelo, diaria);
    this.cilindradas = cilindradas;
  }
  descricao() {
    alert(
      `Essa moto é uma ${this.modelo}, de ${this.cilindradas} cc, da marca ${this.marca}, sua diária é de R$ ${this.diaria}.`,
    );
  }

  calcularAluguel(dias) {
    let aluguel = this.diaria * dias;
  }

  getDiaria() {
    this.diaria = parseFloat(prompt('Digita o valor da diária'));
    return diaria;
    alert(`Diária ${diaria}`);
  }
}

const Carroca = new Carro('BYD', 'SEALION 7', 300, 4);
const Motoca = new Moto('Kawasaki', 'Ninja 650', 500, 649);

class locadora {
  constructor() {
    this.listaVeiculos = [];
  }
  adicionarVeiculos(transporte) {
    let transporteEscolhido = transporte;
    let modeloEscolhido = transporte.marca;
    this.listaVeiculos.push(modeloEscolhido);
    alert(`${modeloEscolhido} adicionado com sucesso!`);
  }

  listarVeiculos() {
    alert(this.listaVeiculos);
  }

  calcularTotal(dias) {
    let totalDias = Carroca.dias + Motoca.dias;
    alert(`Total do aluguel: R$${totalDias}`);
  }

  removerVeiculo(modelo) {
    const item = alert(prompt('Qual modelo deseja remover?'));
    if (item === modelo) {
      listaVeiculos.filter((i) => i !== item);
      alert(listaVeiculos);
    } else {
      alert('Item não encontrado.');
    }
  }
}

const local = new locadora();

const botao12 = document.getElementById('atividadePOO2');

botao12.addEventListener('click', () => {
  marcaEscolhida = prompt('Escolha a marca do Veiculo: BYD | Kawasaki');

  if (marcaEscolhida === Carroca.marca) {
    Carroca.descricao();
    local.adicionarVeiculos(Carroca);
  } else if (marcaEscolhida === Motoca.marca) {
    Motoca.descricao();
    local.adicionarVeiculos(Motoca);
  } else {
    alert('Veículo não encontrado');
  }

  local.listarVeiculos();

  let consuta = parseInt(
    prompt(
      'Digite: 1 - p/ Calcular aluguel | 2 - p/ Ver total da locadora | 3 - p/ Remover item',
    ),
  );

  switch (consulta) {
    case 1:
      
      break;
    case 2:
      break;
    case 3:
      break;
    default:
      alert('Indisponível');
  }
});

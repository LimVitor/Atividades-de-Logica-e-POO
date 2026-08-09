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
  getDiaria() {
    return this.diaria;
    alert(`Diária = R$${this.diaria}`);
  }

  calcularAluguel(dias) {
    let aluguel = this.diaria * dias;
    alert(`Aluguel de R$${aluguel}`);
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

  getDiaria() {
    return this.diaria;
    alert(`Diária = R$${this.diaria}`);
  }

  calcularAluguel(dias) {
    let aluguel = this.diaria * dias;
    alert(`Aluguel de R$${aluguel}`);
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
    alert(`Carrinho: ${this.listaVeiculos}`);
  }

  calcularTotal(dias) {
    let totalDias = (Carroca.diaria + Motoca.diaria) * dias;
    alert(`Total do aluguel: R$${totalDias}`);
  }

  removerVeiculo(modelo) {
  
     this.listaVeiculos = this.listaVeiculos.filter((i) => i !== modelo);
      alert(`Carrinho: ${this.listaVeiculos}`);
   
  }
}

const local = new locadora();

const botao12 = document.getElementById('atividadePOO2');

botao12.addEventListener('click', () => {
  let marcaEscolhida = prompt('Escolha a marca do Veiculo: BYD | Kawasaki');

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

  let consulta = parseInt(
    prompt(
      'Digite: 1 - p/ Calcular aluguel | 2 - p/ Ver total da locadora | 3 - p/ Remover item | 4 - p/ Sair',
    ),
  );

  switch (consulta) {
    case 1:
      let periodo = parseInt(prompt('Digita a quantidade de dias do aluguel'));
      if (marcaEscolhida === Carroca.marca) {
        Carroca.calcularAluguel(periodo);
      } else if (marcaEscolhida === Motoca.marca) {
        Motoca.calcularAluguel(periodo);
      } else {
        alert('Erro');
      }
      break;
    case 2:
      let periodoTotal = parseInt(
        prompt('Digita a quantidade de dias do aluguel'),
      );
      local.calcularTotal(periodoTotal);
      break;
    case 3:
      let marcaCarro = prompt('Digite a marca do carro para remover');
      local.removerVeiculo(marcaCarro);
      break;
    default:
      alert('Clique OK para sair');
  }
});

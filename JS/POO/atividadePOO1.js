class funcionario {
  constructor(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
  }
}

class desenvolvedor extends funcionario {
   #salario;
  constructor(nome, cargo, salario, linguagem) {
    super(nome, cargo, salario);
    this.linguagem = linguagem;
  }

  apresentar() {
    alert(`O funcionário escolhido é ${this.nome}`);
  }

  verSalario() {
    alert(`R$${this.salario}`);
  }

  calcularBonus() {
    let extra = parseFloat(prompt('Digite o valor do bônus'));
    let bonus = extra + this.salario;
    alert(`Salário final de: R$${bonus}`);
  }

  aumentarSalario(valor) {
    let novoSalario = this.salario + valor;
    this.salario = novoSalario;
    alert(`O salário aumentou para R$${this.salario}`);
  }
}

class designer extends funcionario {
   #salario;
  constructor(nome, cargo, salario, ferramenta) {
    super(nome, cargo, salario);
    this.ferramenta = ferramenta;
  }

  apresentar() {
    alert(`O funcionário escolhido é ${this.nome}`);
  }

  verSalario() {
    alert(`R$${this.salario}`);
  }

  calcularBonus() {
    let extra = parseFloat(prompt('Digite o valor do bônus'));
    let bonus = extra + this.salario;
    alert(`Salário final de: R$${bonus}`);
  }

  aumentarSalario(valor) {
    let novoSalario = this.salario + valor;
    this.salario = novoSalario;
    alert(`O salário aumentou para R$${this.salario}`);
  }
}

const designerGrafico = new designer('Karina', 'Designer', 1600, 'Photoshop');
const desenvolvedorFull = new desenvolvedor(
  'Aleçandre',
  'Desenvolvedor',
  2500,
  'JavaScript',
);

const botao11 = document.getElementById('atividadePOO1');

botao11.addEventListener('click', () => {
  funcionario.nome = prompt('Escolha o funcionário: Karina | Aleçandre');
  if (funcionario.nome === designerGrafico.nome) {
    funcionario = designerGrafico;
    designerGrafico.apresentar();
  } else if (funcionario.nome === desenvolvedorFull.nome) {
    funcionario = desenvolvedorFull;
    desenvolvedorFull.apresentar();
  } else {
    alert('Funcionário não encontrado');
  }
  let codigo = parseInt(
    prompt(
      'Digite: 1 - p/ Ver salário | 2 - p/ Calcular bônus | 3 - p/ Aumentar salário',
    ),
  );
  switch (codigo) {
    case 1:
      funcionario.verSalario();
      break;
    case 2:
      funcionario.calcularBonus();
      break;
    case 3:
      funcionario.aumentarSalario(parseFloat(prompt('Digite um valor')));
      break;
    default:
      alert('Indisponível');
  }
});

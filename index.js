class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = '';

    switch (this.tipo) {
      case 'mago':
        ataque = 'magia'
        break;

      case 'guerreiro':
        ataque = 'espada'
        break;

      case 'monge':
        ataque = 'artes marciais'
        break;

      case 'ninja':
        ataque = 'shuriken'
        break;
    
      default:
        break;
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`)
  }
}

const mago = new Heroi('Maria', 23, 'mago');
const guerreiro = new Heroi('João', 32, 'guerreiro');
const monge = new Heroi('Ana', 27, 'monge');
const ninja = new Heroi('Lucas', 25, 'ninja');

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
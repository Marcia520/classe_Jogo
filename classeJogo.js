// Definição da classe Heroi
class Heroi {
  // Construtor da classe
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método para atacar
  atacar() {
    let ataque;

    switch (this.tipo) {
      case 'mago':
        ataque = 'usando magia!';
        break;
      case 'guerreiro':
        ataque = 'usando espada!';
        break;
      case 'monge':
        ataque = 'usando artes marciais!';
        break;
      case 'ninja':
        ataque = 'usando shuriken!';
        break;
      default:
        ataque = 'usando um ataque indefinido';
    }

    console.log(`O ${this.tipo} atacou ${ataque}`);
  }
}

// Função principal
function main() {
  // Entrada fixa (substitua com as entradas desejadas)
  const nomeHeroi = 'Herói Exemplo';
  const idadeHeroi = 25;
  const tipoHeroi = 'guerreiro';

  // Criando uma instância da classe Heroi com base nas entradas
  const heroiPersonalizado = new Heroi(nomeHeroi, idadeHeroi, tipoHeroi);

  // Chamando o método atacar para o heroi personalizado
  heroiPersonalizado.atacar();
}

// Chamando a função principal
main();
// novo recurso do ES2015

//destruction a partir de um objeto

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000,
    }
}

const {nome, idade } = pessoa // chaves n são para criar objetos, sao para a desestruturação
console.log(nome, idade)

const { nome: n, idade: i} = pessoa //nova forma de "tirar", com variaveis
console.log(n , i)

//se tirar uma atributo q n existe dentro do objeto

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

// ele n vai criar endereco, lembrar que console.log acessa apenas as variáveis atribuidas (duvida)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log( logradouro, numero, cep)

// irá dar erro caso vc tentar acessar algo que a 'pessoa' n foi atrubuida ex..
const { conta: { ag, num} } = pessoa
console.log(ag, num)

// um sera pra usar a técnica para para objeto e no outro irá substituir pelo arrey
// irei passar um objeto para essa funcao e dentro da funcao vai acessar o objeto
// ira tirar o min e max sem usar o atributo 'ponto(.)'

function rand({ min = 0 , max = 1000}) {
    const valor = Math.random() * ( max - min) + min
    return Math.floor(valor) //A função Math.floor(x) retorna o menor número inteiro dentre o número "x".
}

const obj = { max: 50, min: 40}
console.log(rand(obj))
console.log(rand({ min: 955}))
console.log(rand({}))
//console.log(rand())
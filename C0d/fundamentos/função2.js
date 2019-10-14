//armazenamento uma funcao em uma constante / variavel

const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

//armazenando uma funcao arrow (forma reduzida em uma funcao)(2015) em uma variavel
const soma = (a, b) =>{
    return a + b
}

console.log(soma(2, 3))

//retorno implícito, (importante!) usado para executar uma unica sentenca(linha) de codigo
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

//caso tenha um unico parametro, vc ainda pode reduzir ainda mais o codigo

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')

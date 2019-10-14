//função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)


    Bruno
}

imprimirSoma(2, 3)
imprimirSoma(2)   // NaN = not a number
imprimirSoma(2, 10, 4, 5, 6, 7)
imprimirSoma()  // NaN = not a number


//função com retorno

function soma(a, b = 1){
    return a * b

}

console.log(soma(2, 3))
console.log(soma(1))


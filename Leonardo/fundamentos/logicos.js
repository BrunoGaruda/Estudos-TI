function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 
    //ou simbolo do pipe 2x, | 1x eh uma comparação bit a bit (convertendo os valores para numeros bit)        
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete
    //operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }

}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))


/*

V e V -> V  // 'e' somente será verdadeiro se todos forem verdadeiros
V e F -> F
F e ? -> F

V ou ? -> V  // apenas um tem q ser verdadeiro para ser verdadeiro
F ou V -> V
F ou F -> F

V xor V -> F  // iguais F e diferentes V
V xor F -> V
F xor V -> V
F xor F -> F

!V -> F
!F -> V

*/

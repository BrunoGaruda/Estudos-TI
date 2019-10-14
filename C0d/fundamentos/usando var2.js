var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

/* Neste caso a variavel usa a mesma ideia da aula anterior (usando var1), 
mas aqui usa-se o mesmo nome para as variaveis 'numero', mas em scopos
diferentes. A variavel dentro scopo se sobresai a variavel fora do scopo.
*/


var numero = 1
{
    let numero = 2 
    console.log('dentro =', numero)
}
console.log('fora =', numero)

/*
 let tem escopo de "bloco", ele estara visivel dentro do bloco e não interfere qm esta fora ou dentro do scopo
 mesmo sendo 'var' ou 'let' qm esteja fora do escopo, seguindo o exemplo abaixo.
*/

/*    let numero = 1
    {
        let numero = 2 
        console.log('dentro =', numero)
    }
    console.log('fora =', numero)
*/

/* mesmo usando 'let' nos dois casos, o let permite que leia os 2 numeros msm sendo do mesmo nome mas
em scopos diferentes.
*/

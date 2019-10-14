var funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i) 
    })
}

/*agora como a variavel 'let' tem escopo de bloco
ela obedece ao scopo e a funcao
*/

funcs[2]()
funcs[6]()
funcs[8]()
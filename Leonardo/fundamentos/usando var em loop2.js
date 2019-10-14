var funcao = [] //funcs e funcao sao a msma coisa (array)



for (var i = 0; i < 10; i++){
    funcao.push(function(){
        console.log(i) 
    })
}

/*como a variavel 'var' n tem escopo de bloco
ela n obedece o scopo ignorando a funcao
*/

funcao[2]()
funcao[8]()
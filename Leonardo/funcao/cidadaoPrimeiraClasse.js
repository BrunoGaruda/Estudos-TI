//Função em JS é First-Class Object (Citizens)
//higher-order function

//criar de forma literal
function fun1() { }

//Armazenar em uma variável
const fun2 = function ()  { }

//Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0] (2, 3))  // indice [0], qr dizer q ele pegou a primeira função

//Armazenar em um atributo de objeto 
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar( )) 

// Passar função como param
function run(fun) { //função com nome run e (fun) como parâmetro
    fun()
}

run(function () { console.log('Executando...') })

//Uma função pode retornar/conter uma outra função
function soma(a, b){
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)
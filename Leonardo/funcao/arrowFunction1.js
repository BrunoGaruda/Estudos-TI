let dobro = function  (a) {
    return 2 * 2
}

dobro = (a) => {  //arrow sempre é função anônima, se qr chama-la depois vc tem q armazenar em variavel ou const
    return 2 * a
}

dobro = a => 2 * a //return implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //possiu um parâmetro
console.log(ola())
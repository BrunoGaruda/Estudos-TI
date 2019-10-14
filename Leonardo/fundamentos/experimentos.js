let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)  // global == window
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)


//criando uma variavel maluca: sem var e let
abc = 3 // cria uma variavel diretamente no global
console.log(global.abc)

module.exports = { e: 456, f: false, g: 'teste' } 
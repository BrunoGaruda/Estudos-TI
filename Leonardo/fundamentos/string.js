const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))
console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")


console.log(escola.replace(3, 'e'))

console.log(escola.replace( /\d/, 'e'))  //comando adicional de reject que substitui todas as letras e dígitos pela letra 'e'

console.log(escola.replace( /\w/g, 'e')) //igualmente so q substitui todas pela letra 'e'

console.log('Ana,Maria,Pedro'.split(','))
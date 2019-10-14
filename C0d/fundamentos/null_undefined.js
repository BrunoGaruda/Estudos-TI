let valor //não inicializado
console.log(valor)

valor = null //ausência de valor diferente de undefined que ainda n foi atribuida
console.log(valor)
//console.log(valor.toString())   //vai dar um erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined, deixe que o programa defina
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null //sem preço (produto gratuito)
console.log(!!produto.preco)
console.log(produto)

// null e undefined são falsos (false)
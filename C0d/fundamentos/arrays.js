const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4]= 10
console.log(valores)
console.log(valores.length) //length fala a quantidade de elementos presentes no array

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) //pop retira o ultimo elemento
delete valores[0] //delete deleta o arrey que vc selecionou
console.log(valores)

console.log(typeof valores)  //indica qual a classe do elemento, neste caso valores

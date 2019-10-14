const prod1 = {}
prod1.nome = 'Celular op'
prod1.preco = 4998.90   //Preço com Ç aparece como uma string ' ', e preco sem Ç aparece sem ser string (pesquisar)
prod1['Desconto legal'] = 0.4 // Evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}
console.log(prod2)
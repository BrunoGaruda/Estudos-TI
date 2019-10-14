// arrey
// ter cuidade se vc esta usando um arrey ou operador destruction
// n se confundir [] do lado esquerdo é destruction, direito é atrubuindo um arrey
const [a] = [10]
console.log(a)

const [n1 , , n3, , n5 , n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)  // n1 = 10, n3 = 9, n4 = ignorado pois n foi chamado no console, n5= esta fora do array, n6 estaria fora tb mas foi atrubuido 0

const [ , [, nota] ] = [[ , 8, 8 ], [9, 6, 8]]
console.log(nota)
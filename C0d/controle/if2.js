// o bloco {} é opcional dentro do IF so q fica com uma unica sentença de codigo if

function teste1(num) {
    if(num > 7)
        console.log(num)
        
    console.log('Final') // neste caso como esta fora do if, vai mostrar idependente do if
}


teste1(6)
teste1(8) 

function teste2(num){
    if(num > 7); { // cuidado com o ;, n usar com as estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)
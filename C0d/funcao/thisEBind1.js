const pessoa= {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional o orientação a objeto

const falarDePessoa = pessoa.falar.bind(pessoa)  //sempre o bind é o metodo pra amarrar um objeto para o dono do This.
falarDePessoa()


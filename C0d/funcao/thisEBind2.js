function Pessoa() {
    this.idade = 0

    const self = this //self nunca irá mundar, n importa qm o chame
    setInterval(function(){
        self.idade++  
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa
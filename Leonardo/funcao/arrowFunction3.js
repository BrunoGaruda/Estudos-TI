let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) //estara mexendo no scopo global

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)

//o this de uma funcao arrow é um this associado ao contexto no qual foi escrita, sem variação , msm com bind

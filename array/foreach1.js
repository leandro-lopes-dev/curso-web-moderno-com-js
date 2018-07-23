const aprovados = [`Agatha` , `Aldo` , `Daniel` , `Raquel`]

aprovados.forEach(function(nome, indice){

    console.log(`${indice + 1} - ${nome}`)

})

var quebra = `-------------------------`
console.log(quebra)

aprovados.forEach(nome => console.log(nome))

var quebra = `-------------------------`
console.log(quebra)

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)


var quebra = `-------------------------`
console.log(quebra)
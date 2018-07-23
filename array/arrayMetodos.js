const pilotos = [`Vettel` , `Alonso` , `Raikkonen` , `Massa`]
pilotos.pop() // remove o último elemento do array
console.log(pilotos)

pilotos.push(`Verstappen`) // método push adiciona um elemento ma última posição da lista
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift(`Hamilton`) // adiciona um elemento na 1º posição do array
console.log(pilotos)

// splice pode adicionar e remover elementos


// adicionar
pilotos.splice(2 , 0, `Bottas`  , `Massa`)
console.log(pilotos)

// remover
pilotos.splice(3, 1) // removo o 3º elemento
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)


const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)

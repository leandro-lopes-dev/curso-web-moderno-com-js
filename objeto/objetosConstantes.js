// pessoa -> 123 -> {...}
const pessoa = {nome: 'joao'}
pessoa.nome = 'Pedro'
console.log(pessoa.nome)

// pessoa -> 456 -> {...}
// pessoa = {nome:'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)

const pessoaConstante = Object.freeze ({nome:'Joao'})
console.log(pessoaConstante)
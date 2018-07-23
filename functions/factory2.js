function criarProduto (nome, preco){

    return{

        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 1490.90))
console.log(criarProduto('Samsung' , 1299.00))
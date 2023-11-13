
/* Mapear o arrays do carrinho */
const carrinho = [
    {nome: 'Caneta', qtde: '10', preco: '7.99'},
    {nome: 'Impressora', qtde: '0', preco: '649.50'},
    {nome: 'Caderno', qtde: '4', preco: '27.10'},
    {nome: 'Lápis', qtde: '3', preco: '5.82'},
    {nome: 'Tesoura', qtde: '1', preco: '19.20'},
    
]
// Filter
const getNome = item => item.nome
const qtdMaiorQueZero = item => item.qtde > 0 
//const qtdMaiorIguakQueZero = item => item.qtde >= 0
//const qtdMuitoGrande = item => item.qtde >= 1000
const nomeitensValido = carrinho
    .filter = carrinho.filter(qtdMaiorQueZero) 
    .map(getNome)

console.log(nomeitensValido) 

// Função Filter

Array.prototype.meuFilter = function(fn) {
    const novoArray = []

    for(let i =0; i < this.length; i++) {
        if(fn(this[i], i, this)) {
            novoArray.push(this[i])
        }
    }

    return novoArray
}

const nomeitensValido2 = carrinho
    .meuFilter(qtdMaiorQueZero) 
    .map(getNome)

console.log(nomeitensValido2) 
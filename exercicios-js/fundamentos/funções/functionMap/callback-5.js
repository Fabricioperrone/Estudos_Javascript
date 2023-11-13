const carrinho = [
    {nome: 'Caneta', qtde: '10', preco: '7.99'},
    {nome: 'Impressora', qtde: '0', preco: '649.50'},
    {nome: 'Caderno', qtde: '4', preco: '27.10'},
    {nome: 'Lápis', qtde: '3', preco: '5.82'},
    {nome: 'Tesoura', qtde: '1', preco: '19.20'},
    
]

// pegar o total de cada um dos elementos qtd * preco mais somar todos a partir do REDUCE

const getTotal = item => item.qtde * item.preco
const somar = (acc, el) => {
    console.log(acc, el)
    return acc + el
}

const totais = carrinho.map(getTotal)

console.log(totais)   
const totalGeral = totais.reduce(somar, 0)
    

console.log(totalGeral)


// exemplo clean code

const getTotal2 = item => item.qtde * item.preco
const somar2 = (acc, el) => acc +el
   
const totalGeral2 = carrinho
    .map(getTotal2)
    .reduce(somar2)

console.log(totalGeral2)


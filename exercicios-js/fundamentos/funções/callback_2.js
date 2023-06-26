const fs = require('fs')
const path = require('path')

const camimho = path.join(__dirname,  'dados.txt')

console.log(__dirname)

function exibirConteudo(_, conteudo){
    console.log(conteudo.toString())
}

console.log("Inicio")
//fs.readFile(camimho, {}, exibirConteudo)
fs.readFile(camimho,  exibirConteudo)
fs.readFile(camimho, (_,conteudo) => console.log(conteudo.toString()))
console.log("Fim")

console.log("Inicio...sync")
const conteudo = fs.readFileSync(camimho)
console.log(conteudo.toString())
console.log("Fim Sync...")


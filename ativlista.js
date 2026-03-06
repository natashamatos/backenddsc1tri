// Listas
// índice: sempre começa em 0
//                    0           1           2            3
const maquiagens = ["Corretivo", "Blush", "Iluminador", "Agua micelar",   "Base",   "Gloss",   "Lip Tint",    ""]
const valores = [    24     ,     26   ,      12    ,     31    ]
let contador = 0 // variável de início
while(contador < maquiagens.length){ // condição de parada
    console.log(maquiagens[contador] + " - R$ " + valores[contador])
    contador = contador + 1 // controle do laço
}
// Adicionar novos elementos na lista
maquiagens.push("MakeByNat")
valores.push(25)
console.log(maquiagens)
// Remover o último
maquiagens.pop()
valores.pop()
console.log(maquiagens)
// Remover um item específico ou adicionar
maquiagens.splice(2, 1) // remove a partir do índice 2, 1 elemento só
console.log(maquiagens)
maquiagens.splice(2, 2) // remove a partir do 2, 2 elementos
console.log(maquiagens)
maquiagens.splice(0, 1, "MakeByNat") // remove o indice 0 e adiciona um novo
console.log(maquiagens)
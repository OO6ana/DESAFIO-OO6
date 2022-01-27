// Crie um objeto que receba ao menos três propriedades sobre você.

let aboutMe = {
    nome: "Ana Luiza",
    idade: 15,
    natural: "Rio de Janeiro, Queimados"
}
console.log(aboutMe)

// Adicione uma nova propriedade sem alterar seu objeto inicial.

aboutMe.foodFav = "Lasanha"
console.log(aboutMe)

// Remova uma propriedade desse objeto.

delete aboutMe.natural
console.log(aboutMe)

//Mostre no console todas as propriedades desse objeto.

console.log(aboutMe)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 

let cadastro = [
    {
        nome: "Daniel",
        idade: 20,
        telefone: 555555555,
        conhecidos: ["Lucas", "Nalim","Babi","Lisa"]
    },
    {
        nome: "Lisa",
        idade: 20,
        telefone: 555555555,
        conhecidos: ["Daniel", "Nalim","Babi", "Lucas"]
    },
    {
        nome: "Babi",
        idade: 20,
        telefone: 555555555,
        conhecidos: ["Daniel", "Nalim","Lisa", "Lucas"]
    },
    {
        nome: "Nalim",
        idade: 16,
        telefone: 555555555,
        conhecidos: ["Daniel", "Lucas","Babi", "Lisa"]
    },
    {
        nome: "Lucas",
        idade: 22,
        telefone: 555555555,
        conhecidos: ["Daniel", "Nalim","Babi", "Lisa"]
    },
]
console.log(cadastro)

//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

// Mostre no console o nome de um amigo de cada lista.

console.log(cadastro[0].conhecidos[0])
console.log(cadastro[1].conhecidos[1])
console.log(cadastro[2].conhecidos[2])
console.log(cadastro[3].conhecidos[3])
console.log(cadastro[4].conhecidos[1])
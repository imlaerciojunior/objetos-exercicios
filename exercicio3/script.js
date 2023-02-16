//EXERCICIO 3

const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

//a)

const copiaPokemon1 = {
    ...pokemon1,

}

const trocaNomePokemon = copiaPokemon1.nome = "Squirtle"

const trocaTipoPokemon = copiaPokemon1.tipo = "Água"


//b)

pokemon1.ataques = []

//c)

const ataque = {
    nome: "Investida",
    dano: 40,
    tipo: "normal",
    precisao: 100
}

const adicionandoAtaque = pokemon1.ataques.push(ataque)


//d)

copiaPokemon1.ataques = [...pokemon1.ataques]

//e) 

pokemon1.ataques.push(
    {
        nome: "Folha Navalha",
        dano: 45,
        tipo: "Grama",
        precisão: 100
    }
)

//f)

copiaPokemon1.ataques.push(
    {
        nome: "Jato de Água",
        dano: 40,
        tipo: "Água",
        precisão: 100

    }
)

//g)

console.log(pokemon1)
console.log(copiaPokemon1)
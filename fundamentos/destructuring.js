// Novo recurso ES2015

const pessoa = {

    nome: 'Ana',
    idade: 5,
    numero: 'NUMERO contexto 1',
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa

//const { nome: n, idade: i } = pessoa  usando apelido
//console.log(n, i)

// const { sobrenome, bemHumorada = true } = pessoa Valor default

const { numero: nr_contexto1, endereco: { logradouro, numero } } = pessoa

console.log(nr_contexto1, logradouro, numero)

console.log(nome)
console.log(idade)


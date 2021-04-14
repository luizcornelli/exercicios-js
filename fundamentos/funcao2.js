// Armazenando uma funcao em uma variavel 

const imprimirSoma = function(a, b) {

    console.log(a + b)
}

imprimirSoma(1, 2)

// Armazenando uma funcao arrow em uma variavel 
const soma = (a, b) => {
    return a + b
}

console.log(soma(5, 5))

const subtracao = (a, b) => a + b

console.log(subtracao(100, 20))

const imprimirInput = a => console.log(a)

imprimirInput('Hehehehe')


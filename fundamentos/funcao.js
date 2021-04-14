
// Funcao sem retorno 
function imprimirSoma(a, b)
{
    console.log(a + b)
}

imprimirSoma(5)

imprimirSoma(2, 3)

imprimirSoma(1, 2, 3, 4, 5, 6, 7)

// Funcao com retorno 
function soma(a, b = 1) {

    return a + b
}

console.log(soma(2))
console.log(soma(10, 2))
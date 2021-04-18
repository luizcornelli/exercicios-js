Number.prototype.entreDoisNumeros = function (inicio, fim) {
    
    return this >= inicio && this <= fim 
}

const imprimirResultado = function(nota) {

    if(nota.entreDoisNumeros(9, 10)) {
        console.log('Quadro de Honra')
    } 
    else if(nota.entreDoisNumeros(7, 8.99)) {
        console.log('Aprovado')
    }
    else if(nota.entreDoisNumeros(4, 6.99)) {
        console.log('Recuperação')
    }
    else if(nota.entreDoisNumeros(0, 3.99)) {
        console.log('Reprovado')
    } 
    else {
        console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(5)
imprimirResultado(8.9)
imprimirResultado(2.3)
imprimirResultado(-99)
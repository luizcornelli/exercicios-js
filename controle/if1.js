function soBoaNoticia(nota) {

    if(nota >= 7) {
        console.log(`Aprovado com ${nota}`)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {

    if(valor){ // Se o valor não é booleano ele faz uma conversão pra booleano 
        console.log(`É verdade... ${valor}`)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo(Object)
seForVerdadeEuFalo({})
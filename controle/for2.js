const notas = [1, 2, 9, 4, 4.3]

for(let i in notas) {

    console.log(`Indice ${ i } - Notas ${ notas[i] }`)
}

const pessoa = {

    nome: 'Ana', 
    sobrenome: 'Rosa', 
    idade: 34, 
    peso: 100
}

for(let atributo in pessoa) {

    console.log(`${ atributo } ${ pessoa[atributo] }`)
}

//console.log(peso)
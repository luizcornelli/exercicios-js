function rand( {min=0, max=1000} ) { // fazendo destructuring diretamente na função 

    const valor = Math.random() * (max - min) + min;

    return Math.floor(valor)
}


const obj = {
    min: 0, 
    max: 4000
}

console.log(rand(obj))
console.log(rand({ min: 0, max: 4000 }))
console.log(rand({ min:0 }))
console.log(rand({}))
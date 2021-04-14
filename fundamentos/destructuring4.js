
function rand( [min=0, max=1000] ){

    if(min > max){
        [min, max] = [max, min]
    }

    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand( [1000000, 3333] ))

console.log(rand( [3333] ))


const a = [1000000, 3333]

console.log(rand( a ))
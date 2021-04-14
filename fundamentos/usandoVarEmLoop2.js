const funcs = []

for(var i=0; i < 10; i++){

    funcs.push( () => { // Adicionando função ao array
        console.log(i) 
    } )
}

funcs[2]()
funcs[9]()
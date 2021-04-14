console.log(Math.ceil(8.4))
const obj = {}

obj.nome = 'Lula'

obj['nome2'] = 'Bola'

function Obj(nome){

    this.nome = nome

    this.exec = ( () => {
        
        if(this.nome == 'Cadeira') {
            console.log('exec cadeira')
        } else if(this.nome == 'Armario') {
            console.log('exec Armario')
        }
        
    })
}

const obj2 = new Obj('Cadeira')

const obj3 = new Obj('Armario')


console.log(obj2.nome)
console.log(obj3.nome)
obj2.exec()
obj3.exec()
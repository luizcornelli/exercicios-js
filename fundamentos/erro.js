
function tratarErroELancar(erro){
  //  console.log(typeof Error)
  //  throw new Error('...')
  // throw 10
  // throw true
  // throw 'Oi'
  throw {
      nome: erro.name, 
      message: erro.message,
      data: new Date
  }
}



function falarNomeGritando(obj) {

    try {
        console.log(obj.name.toUpperCase() + ' !!!')
    } catch(e) {
        tratarErroELancar(e)
    } finally {
       console.log('final') 
    }
}

let obj = {
    nome: 'José'
}

falarNomeGritando(obj)
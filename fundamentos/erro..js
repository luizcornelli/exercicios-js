
function tratarErroELancar(erro) {
    //throw new Error('Erro no processamento')
    //throw 10
    //throw 'Mensagem'

    throw {
        msg: erro.name
    }
}

function imprimirNomeGritado(pbj){

    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }

    catch(e) {
        tratarErroELancar(e)
    } finally {
        console.log('terminou o processamento')
    }
    
}

const obj = {

    nome: 'Roberto'
}

imprimirNomeGritado(obj)
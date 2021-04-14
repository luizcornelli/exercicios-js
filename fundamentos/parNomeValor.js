const saudacao = 'Opa'; // contexto léxico (aonde foi declarado fisicamente no código seu dado)

function exec() {
    const saudacao = 'Falaaa'

    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor

const cliente = {

    nome: 'Pedro',
    idade: 32,
    endereco: {   
        nome: 'Muito Legal'     
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
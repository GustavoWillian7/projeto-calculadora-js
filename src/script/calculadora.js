function insert(num) {
    var numero = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = numero + num
}

function insertOp(num) {
    var numero = document.getElementById('res').innerHTML
    if (numero.endsWith('+') || numero.endsWith('-') || numero.endsWith('/') || numero.endsWith('*')) {
        alert('[ERRO] Por favor, digite um número antes de tentar inserir outra operação!')
    } else {
        document.getElementById('res').innerHTML = numero + num
    }
}

function limpar() {
    document.getElementById('res').innerHTML = ""
}

function voltar() {
    var resultado = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = resultado.substring(0, resultado.length - 1)
}

function calcular() {
    var resultado = document.getElementById('res').innerHTML
    if (resultado) {
        document.getElementById('res').innerHTML = eval(resultado)
    } else {
        document.getElementById('res').innerHTML = ""
    }
}
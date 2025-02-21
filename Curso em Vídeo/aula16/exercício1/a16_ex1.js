var numeros = []
var lista = document.getElementById('lista_resultado')
var resultado = document.getElementById('resultado')

function isNumero(n) {
    if (n < 1 || n > 100) {
        return false
    }
    return true
}

function inLista(n, l) {
    if (l.indexOf(n) != -1) {
        return true
    }
    return false
}

function adicionarNum() {
    num = Number(document.getElementById('entrada_numero').value)
    entrada = document.getElementById('entrada_numero')

    if (isNumero(num) && !inLista(num, numeros)) {
        numeros.push(num)
        var item = document.createElement('option')
        item.text = `Número ${num} adicionado`
        lista.appendChild(item)
        resultado.innerHTML = ''
    } else {
        alert('Valor inválido ou já adicionado à lista!')
    }

    entrada.value = ''
    entrada.focus()
}

function finalizar() {
    var tamanho = numeros.length
    if (tamanho == 0) {
        alert('Insira ao menos um valor à lista!')
    } else {
        resultado.innerHTML = ''

        var maior = numeros[0]
        var menor = numeros[0]
        var soma = 0
        var media = 0

        for (i = 0; i < tamanho; i++) {

            if (maior < numeros[i]) {
                maior = numeros[i]
            }

            if (menor > numeros[i]) {
                menor = numeros[i]
            }

            soma += numeros[i]
        }

        media = soma / tamanho

        resultado.innerHTML += `<p>Total de números adicionados: ${tamanho}; </p>`
        resultado.innerHTML += `<p>Maior número adicionado: ${maior};</p>`
        resultado.innerHTML += `<p>Menor número adicionado: ${menor};</p>`
        resultado.innerHTML += `<p> Soma dos números adicionados: ${soma};</p>`
        resultado.innerHTML += `<p>Média números adicionados: ${media};</p>`

    }

}

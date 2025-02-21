function gerarTabudada() {
    var numero = Number(document.getElementById('entrada_numero').value)

    if (numero == 0) {
        alert('O campo "número não foi preenchido."')
    } else {
        var lista = document.getElementById('lista_resultado')

        lista.innerHTML = ''

        for (var i = 0; i <= 10; i++) {
            var item = document.createElement('option')
            item.text = `${numero} x ${i} = ${numero * i}`
            lista.append(item)
        }
    }
}

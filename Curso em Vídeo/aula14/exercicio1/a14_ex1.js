function contar() {
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var resultado = document.querySelector('div#resultado')

    if(passo == '0'){
        alert('O passo deve ser maior que 0!')
        return false
    }

    if(inicio > fim){
        alert('O inicio deve ser menor ou igual ao o fim!')
        return false
    }
    
    if (inicio == '' || fim == '') {
        alert('Algum dos dados estão faltando!')
    } else {
        var texto_resultado = document.createElement('span')

        resultado.innerHTML = 'Contando:<br>'
        resultado.append(texto_resultado)

        for (var inicio; inicio <= fim; inicio += passo) {
            texto_resultado.innerHTML += `${inicio} \u{1F449} `
        }

        texto_resultado.innerHTML += `\u{1F3C1}`
    }


}
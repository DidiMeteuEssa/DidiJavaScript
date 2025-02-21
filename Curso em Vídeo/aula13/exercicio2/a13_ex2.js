function verificaIdade() {
    var hoje = new Date()
    hoje = Number(hoje.getFullYear())
    var ano = document.getElementById("ano_nascimento").value


    if (ano == '' || ano > hoje) {
        alert('Verifique os dados e tente novamente!')

    } else {
        var img = document.createElement('img');
        img.setAttribute('id', 'imagem')

        var res = document.querySelector('div#resultado')

        ano = Number(ano)
        var idade = hoje - ano

        var sexo = document.querySelector('input[name="sexo"]:checked').value

        var sexo_escrito

        if (sexo == 'Masculino') {
            sexo_escrito = 'homem'
        } else {
            sexo_escrito = 'mulher'
        }

        res.innerHTML = `Detectamos ${sexo_escrito} de ${idade} anos.`

        if (sexo_escrito == 'homem') {
            if (idade < 4) {
                img.setAttribute('src', 'https://acdn.mitiendanube.com/stores/001/890/899/products/141-3dbd722fc12b75c93016760697035474-1024-1024.png')
            } else if (idade < 16) {
                img.setAttribute('src', 'https://imgs.extra.com.br/1560051502/1xg.jpg')
            } else if (idade < 18) {
                img.setAttribute('src', 'https://img.myloview.com.br/posters/feche-acima-do-retrato-emocional-do-menino-adolescente-caucasiano-tiro-na-cabeca-do-cara-bonito-adolescente-engracado-do-corte-isolado-no-fundo-branco-crianca-olhando-para-a-camera-700-144043884.jpg')
            } else if (idade < 40) {
                img.setAttribute('src', 'https://img.freepik.com/fotos-premium/jovem-e-bonito-homem-adulto-sentindo-se-feliz-positivo-e-bem-sucedido-comemorando-a-vitoria-conquistas-ou-boa-sorte_1194-290428.jpg')
            } else {
                img.setAttribute('src', 'https://thumbs.dreamstime.com/b/homem-de-neg%C3%B3cios-na-camisa-e-no-la%C3%A7o-brancos-8065399.jpg')
            }
        } else {
            if (idade < 4) {
                img.setAttribute('src', 'https://cdn.dooca.store/1707/products/mg-7665-1.jpg?v=1637058135')
            } else if (idade < 16) {
                img.setAttribute('src', 'https://imgs.extra.com.br/1560051517/1xg.jpg')
            } else if (idade < 18) {
                img.setAttribute('src', 'https://images.pexels.com/photos/3926827/pexels-photo-3926827.jpeg?auto=compress&cs=tinysrgb&w=600')
            } else if (idade < 40) {
                img.setAttribute('src', 'https://static.vecteezy.com/ti/fotos-gratis/t2/16417528-retrato-de-tiro-na-cabeca-de-mulher-adulta-jovem-em-branco-foto.jpg')
            } else {
                img.setAttribute('src', 'https://img.freepik.com/fotos-premium/retrato-de-uma-mulher-atraente-e-elegante-senior_488220-61522.jpg')
            }
        }

        res.appendChild(img)

    }


}
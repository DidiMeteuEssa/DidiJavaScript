var agora = new Date()
hora = agora.getHours()


var img = document.getElementById("imagem_horas")
var texto = document.getElementById("texto_horas")

texto.innerHTML = `Agora são ${hora} horas.`

if (hora >= 12 && hora < 18) {
    img.src = "https://cdn.pixabay.com/photo/2015/03/22/16/31/sol-684868_1280.jpg "
    document.body.style.backgroundColor = "#ED9172"
} else {
    if (hora >= 18) {
        img.src = "https://encontrocomcristo.com.br/wp-content/uploads/2013/02/ora%C3%A7%C3%A3o-da-noite-300x300.jpg"
        document.body.style.backgroundColor = "#2C2A33"
    }

}



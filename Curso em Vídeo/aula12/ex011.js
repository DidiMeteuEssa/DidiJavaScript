var idade = 15
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota!')
} else {
    if (idade < 18) {
        console.log('Vota opcionalmente!')
    } else {
        console.log('Vota!')
    }
}


const img = document.getElementById("imagem")

function acender(){
    // Este bloco faz com que sempre que a constante img se encontre no estado x ela vá para o estado y
    if(img.src.match("img/lampada-apagada.png")){
        img.src = ("img/lampada-acesa.png")
        document.body.style.background = 'white'
        document.body.style.color = 'black'
    }
    else if(img.src.match("img/lampada-acesa.png")){
        img.src = ("img/lampada-apagada.png")
        document.body.style.background = 'rgb(41, 39, 39)'
        document.body.style.color = 'white'

    }
}

function quebrada(){
    // Esse bloco faz com que sempre que o usuário aperte duas vezes seguidas em cima da imagem ou no botão, a lampada quebre. 
    img.src = ("img/lampada-quebrada.png")
    document.body.style.background = 'rgb(41, 39, 39)'
    document.body.style.color = 'white'

}
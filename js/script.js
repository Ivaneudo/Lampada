const img = document.getElementById("imagem")

function acender(){
    // Este bloco faz com que sempre que a constante img se encontre no estado x ela vá para o estado y
    if(img.src.match("img/lampada-apagada.jpg")){
        img.src = ("img/lampada-acesa.jpg")
    }
    else if(img.src.match("img/lampada-acesa.jpg")){
        img.src = ("img/lampada-apagada.jpg")
    }
}

function quebrada(){
    // Esse bloco faz com que sempre que o usuário aperte duas vezes seguidas em cima da imagem ou no botão, a lampada quebre. 
    img.src = ("img/lampada-quebrada.jpg")
}
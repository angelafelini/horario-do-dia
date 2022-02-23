function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var sds = window.document.getElementById('saudacao')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        //BOM DIA!
        sds.innerHTML = 'Bom dia!'
        img.src = 'manha.jpg'
        document.body.style.background = '#d6bf59'
    } else if(hora >= 12 && hora < 18) {
        //BOA TARDE!
        sds.innerHTML = 'Boa tarde!'
        img.src = 'tarde.jpg'
        document.body.style.background = '#3db19d'
    } else {
        //BOA NOITE!
        img.src = 'noite.jpg'
        sds.innerHTML = 'Boa noite!'
        document.body.style.background = '#3d2752'
    }
}



window.addEventListener("scroll",function(){
    var aside  = this.document.querySelector("aside");
    aside.classList.toggle("abajo",window.scrollY>0)
})

window.addEventListener("scroll",function(){
    let animate = document.getElementById("image");
    let position = animate.getBoundingClientRect().top;
    console.log(position);
    let tamaño = this.window.innerHeight/1;

    if(position < tamaño){
        animate.style.animation = 'cambio1 .5s ease-in-out 0.5s 1 normal both'
    }else{
        animate.style.animation = 'none'
    }
})

window.addEventListener("scroll",function(){
    let animate2 = document.getElementById("misi");
    let position2 = animate2.getBoundingClientRect().top;
    console.log(position2);
    let tamaño2 = this.window.innerHeight/1;

    if(position2 < tamaño2){
        animate2.style.animation = 'cambio2 .5s ease-in-out 0.5s 1 normal both'
    }else{
        animate2.style.animation = 'none'
    }
})

window.addEventListener("scroll",function(){
    let animate3 = document.getElementById("car");
    let position3 = animate3.getBoundingClientRect().top;
    console.log(position3);
    let tamaño3 = this.window.innerHeight/1;

    if (position3 < tamaño3) {
        animate3.style.animation = 'cambio4 1s ease-in-out 0.5s 1 normal both'
    }else{
        animate3.style.animation = 'none'
    } 
})

window.addEventListener("scroll",function(){
    let animate4 = document.getElementById("visi");
    let position4 = animate4.getBoundingClientRect().top;
    console.log(position4);
    let tamaño4 = this.window.innerHeight/1;

    if (position4 < tamaño4) {
        animate4.style.animation = 'cambio3 1s ease-in-out 0.5s 1 normal both'
    }else{
        animate4.style.animation = 'none'
    } 
})


jQuery(Document).ready(function(){

    $('#abrir').click(function( ){
            $('#menu-movil').animate( {
                right: 0
            },300);
            $('#abrir').hide();
            $('#cerrar').show();
            event.preventDefault();
        });
    
        $('#cerrar').click(function(){
            $('#menu-movil').animate({
                right: '-50%'
            },300);
            $('#abrir').show();
            $('cerrar').hide();
            event.preventDefault();
        });
});
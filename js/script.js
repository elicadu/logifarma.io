jQuery(Document).ready(function(){

$('#abrir').click(function(){
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

$('#link-puntodeatencion').click(function(){
    $('#q_somos.html').animate({
        right: 0
    },100);
    
});
$('#link-quienes').click(function(){
    $('#titu').animate({
        right: 0
    },100);
    
});
$('#link-pqr').click(function(){
    $('#pqr.html').animate({
        right: 0
    },100);
    
});

});

window.addEventListener("scroll",function(){
    var aside  = this.document.querySelector("aside");
    aside.classList.toggle("abajo",window.scrollY>0)
})

jQuery(Document).ready(function(){

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
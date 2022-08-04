jQuery(Document).ready(function(dort7){

    $('#abrir').click(function(dort8){
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
var readyBlock = false;

//Verifica con jquery que el documento cargó y oculta el gif de carga
$(document).ready(function() {
	$("#loadGif").fadeOut("slow");;
});


/*Scroll para mostrar elementos */
$(window).scroll(function(event) {
    let scrollTop = $(window).scrollTop();

    if(scrollTop >= 320 && readyBlock == false){
        addBlock(1);
        readyBlock = true;
    }

    if(scrollTop >= 1010 && readyBlock == true){
        addBlock(2);
        readyBlock=false;
    }
});

function addBlock(number){
    $('#b'+number).css('display','flex');
    $('#b'+number).addClass('slideInRight');
}

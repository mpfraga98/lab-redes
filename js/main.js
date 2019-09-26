let readyBlock = false;

//Verifica con jquery que el documento cargó y oculta el gif de carga
$(document).ready(function() {
	$("#loadGif").fadeOut("slow");;
});


/*Scroll para mostrar elementos */
$(window).scroll(function(event) {
    let scrollTop = $(window).scrollTop();

    if(scrollTop >= 320 && readyBlock == false){
        addBlock(1,"r");
        readyBlock = true;
    }

    if(scrollTop >= 900 && readyBlock == true){
        addBlock(2,"l");
        readyBlock = false;
    }

    if(scrollTop >= 1260 && readyBlock == false){
        addBlock(3,"r");
        readyBlock = true;
    }
});

function addBlock(number,side){
    $('#b'+number).css('display','flex');

    if(side === "r"){
        $('#b'+number).addClass('slideInRight');
    }else{
        $('#b'+number).addClass('slideInLeft');
    }
}

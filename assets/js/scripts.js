$(function(){

    //Acá incorporamos la función para poder desplazarnos a las secciones que escojamos que son quienes somos destacados y contacto.
    $("a").click(function(event){
        if (this.hash !== "") {
            event.preventDefault();

            var gato = this.hash;

            $("html, body").animate({
                scrollTop: $(gato).offset().top
            }, 600, function(){
                window.location.hash = gato;
            });
        }
    })
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)})

    //asignamos un toggle para poder aparecer y desaparecer los textos de las recetas relacionadas al hace click en su titulo.

    $("#card1").click(function() {
        $("#p1").toggle();
    });
    
    $("#card2").click(function() {
        $("#p2").toggle();
    });
    
    $("#card3").click(function() {
        $("#p3").toggle();
    });
    $("#card4").click(function() {
        $("#p4").toggle();
    });
});
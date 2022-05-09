function entrar(){
    let entrando = document.getElementById("entrando");
    let principal = document.getElementById("principal");
    let dentro = document.getElementById("dentro");
    /*entrando.style.setProperty('opacity', '1');*/
    entrando.style.setProperty('animation-timing-function', 'linear');
    entrando.style.setProperty('animation-duration', '2s');
    entrando.style.setProperty('animation-name', 'cargando');

    
    dentro.style.setProperty('animation-timing-function', 'linear');
    dentro.style.setProperty('animation-duration', '2s');
    dentro.style.setProperty('animation-delay', '2s');
    dentro.style.setProperty('animation-fill-mode', 'forwards');
    dentro.style.setProperty('animation-name', 'dentro');
    
    principal.style.setProperty('display', 'none');
}
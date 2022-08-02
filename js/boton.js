document.getElementById("boton-subir").addEventListener("click", scrollBoton);

function scrollBoton(){
    var currentscroll = document.documentElement.scrollTop;

    if(currentscroll > 0){
        window.requestAnimationFrame(scrollBoton);
        window.scrollTo(0, currentscroll - (currentscroll/20));
        botoSubir.style.transform = "scale(0)";
    }
}

botoSubir = document.getElementById("boton-subir");

window.onscroll = function(){
  var scroll = document.documentElement.scrollTop;

  if (scroll > 500){

      botoSubir.style.transform = "scale(1)";

  }else if(scroll < 500){

      botoSubir.style.transform = "scale(0)";
  }
}


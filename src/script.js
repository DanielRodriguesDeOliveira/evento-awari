var modal = document.getElementById('formulario');

var btnReservar = document.getElementById('reservar');

btnReservar.onclick = function() {
  modal.style.display = 'block'
}

var span = document.getElementsByClassName('fechar')[0];

span.onclick = function() {
  modal.style.display = 'none';
}

var btnEnviar = document.getElementById('enviar');

btnEnviar.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event){
  if(event.target == modal){
      modal.style.display = 'none';
  }
}

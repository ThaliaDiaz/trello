window.addEventListener('load', function() {
/* Definiendo variables*/
  var input = document.getElementById('input');
  var container = document.getElementById('container');
  
  /* Mostrando el form cuando le doy clic al botón*/
  input.addEventListener('click', function(event) {
    input.value = '';
    var div = document.getElementById('board');
    var button = document.getElementById('button');
    var close = document.getElementById('cross');
    div.setAttribute('class', 'board-insert-list');
    input.setAttribute('class', 'list-name-input insert-list-input');
    button.setAttribute('class', 'button-insert-list');
    close.setAttribute('class', 'fa fa-times fa-2x');
  });
});
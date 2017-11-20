window.addEventListener('load', function() {
/* Definiendo variables*/
  var input = document.getElementById('input');
  var container = document.getElementById('container');
  
  /* Mostrando el form cuando le doy clic al placeholder*/
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

  /* Muestra el cuadro con la lista agregada*/
  button.addEventListener('click', function(event) {
    /* validamos que el campo no se me permita ingresar vacíoss*/
    if (input.value === '' || isNaN(input.value) !== true) {

    } else {
      var nextBoard = document.createElement('div');
      nextBoard.setAttribute('id', 'div');
      nextBoard.setAttribute('class', 'board-insert-list');
      var nameList = document.createElement('p');
      nameList.innerHTML = input.value;
      nameList.setAttribute('class', 'text name-list');
      container.insertBefore(nextBoard, container.lastElementChild);
      nextBoard.appendChild(nameList);

      /* Creando texto que me permitirá crear nueva tarea */
      var task = document.createElement('div');
      task.setAttribute('class', 'text line');
      task.innerHTML = 'Añadir una tarjeta...';
      nextBoard.appendChild(task);
      input.value = '';

      /* Guardando una tarea*/ 
      task.addEventListener('click', function(event) {
        event.preventDefault();
        task.setAttribute('class', 'button-list-name');
        /* creando contenedor de tarjetas*/ 
        var form = document.createElement('board');
        var textArea = document.createElement('textarea');
        textArea.setAttribute('id', 'tarjeta');
        textArea.setAttribute('class', 'textarea-tarjeta');
        form.appendChild(textArea);

        /* Creando el boton añadir*/ 
        var saveButton = document.createElement('button');
        saveButton.setAttribute('type', 'submit');
        saveButton.setAttribute('class', 'button-insert-list');
        saveButton.setAttribute('value', 'Añadir');
        saveButton.textContent = 'Añadir';
        var containerForm = document.createElement('div');
        containerForm.appendChild(form);
        containerForm.appendChild(saveButton);
        nextBoard.appendChild(containerForm);
        textArea.focus();

        /** Agregando una nueva tarea */
        saveButton.addEventListener('click', function(event) {
          /* creando un contenedor*/ 
          var nextTask = document.createElement('div');
          nextTask.setAttribute('class', 'text');
          nextTask.setAttribute('id', 'nextTask');
          /* validamos que no ingrese texto vacío */
          if (textArea.value === '' || isNaN(textArea.value) !== true) {
            
          } else {
            nextTask.innerHTML = textArea.value;
            nextBoard.insertBefore(nextTask, nextBoard.lastElementChild);
            textArea.value = '';
            textArea.focus();
          }
        });
      });
    }
  });
});
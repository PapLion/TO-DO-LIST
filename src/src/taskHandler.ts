//[X]Hacer que detecte todos los elementos en el html
//[X]Hacer que detecte el contenido en el input
//[X]Hacer que detecte cuando se presiona enter
//[X]Hacer que se detecte cuando se le de click al botón
//[X]Al darle click al boton o presionar enter; se añade el contenido del input como un elemento li de una ul

export function taskHandler() {
  const input = document.getElementById("add-task") as HTMLInputElement;
  const buttonAdd = document.getElementById("add-task-button") as HTMLButtonElement;
  const ul = document.getElementById("task-list") as HTMLUListElement;

  function agregarElementoLista(texto: string) {
      // Crear el botón <button> con "X"
      const botonEliminar = document.createElement("button");
      botonEliminar.textContent = "X";

      // Agregar clase al <button>
      botonEliminar.classList.add("mi-button-clase"); // Reemplaza "mi-button-clase" con el nombre que desees

      // Crear el elemento <li>
      const li = document.createElement("li");
      li.textContent = texto;

      // Agregar clase al <li>
      li.classList.add("mi-li-clase"); // Reemplaza "mi-li-clase" con el nombre que desees


      // Agregar un evento de clic al botón para eliminar el <li> correspondiente
      botonEliminar.addEventListener("click", () => {
          li.remove();
      });

      // Agregar el botón como hijo del <li>
      li.appendChild(botonEliminar);

      // Agregar el <li> al <ul>
      ul.appendChild(li);


      input.value = "";
  }

  document.addEventListener("keydown", (event) => {
      if (event.key == "Enter") {
          agregarElementoLista(input.value);
      }
  });

  if (buttonAdd) {
      buttonAdd.addEventListener("click", () => {
          agregarElementoLista(input.value);
      });
  }
}

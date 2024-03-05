import { taskHandler } from './taskHandler';
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
<h1>To do List</h1>
<input type="text" name="Tasks" id="add-task">
<button type="button" id="add-task-button">Add Tasks</button>
<ul id="task-list"></ul>
<p>No hay tareas pendientes</p>
</div>
`
document.addEventListener("DOMContentLoaded", () => {
   taskHandler();
});
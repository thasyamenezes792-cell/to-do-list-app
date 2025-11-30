// script.js — To-Do List Interaktif
error.textContent = 'Masukkan tugas terlebih dahulu.';
input.focus();
return;
}
error.textContent = '';
addTodo(value);
input.value = '';
input.focus();
});


// Event delegation: tangani klik pada tombol di dalam list
list.addEventListener('click', (e) => {
const actionBtn = e.target.closest('button[data-action]');
if(!actionBtn) return;


// DOM traversing: dari tombol ke list item terdekat
const li = actionBtn.closest('li.todo-item');
if(!li) return;
const id = li.dataset.id;
const action = actionBtn.dataset.action;
if(action === 'toggle'){
toggleTodo(id);
} else if(action === 'delete'){
// konfirmasi singkat sebelum hapus
if(confirm('Hapus tugas ini?')){
deleteTodo(id);
}
}
});


// keyboard accessibility: tekan Enter pada teks tugas untuk toggle
list.addEventListener('keydown', (e) => {
if(e.key === 'Enter'){
const focused = document.activeElement;
if(focused && focused.classList.contains('todo-text')){
const li = focused.closest('li.todo-item');
if(li) toggleTodo(li.dataset.id);
}
}
});


// ===== init =====
function init(){
loadTodos();
render();
}


init();

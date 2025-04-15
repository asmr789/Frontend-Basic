let todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const div = document.createElement('div');
    div.className = 'todo-item';
    div.innerHTML = `
      <span>${todo}</span>
      <button class="btn btn-danger btn-sm" onclick="deleteTodo(${index})">Xoá</button>
    `;
    todoList.appendChild(div);
  });
}

function addTodo() {
  const input = document.getElementById('todoInput');
  const value = input.value.trim();
  if (value) {
    todos.push(value);
    saveTodos();
    renderTodos();
    input.value = '';
  } else {
    alert('Vui lòng nhập nội dung!');
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  saveTodos();
  renderTodos();
}

renderTodos();
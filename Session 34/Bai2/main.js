let courses = JSON.parse(localStorage.getItem('courses')) || [];
  let editId = null;

  function saveToLocalStorage() {
    localStorage.setItem('courses', JSON.stringify(courses));
  }

  function renderTable() {
    const table = document.getElementById('taskTable');
    table.innerHTML = '';
    courses.forEach((course, index) => {
      const row = `<tr>
        <td>${index + 1}</td>
        <td>${course.content}</td>
        <td>${course.dueDate}</td>
        <td>${course.status}</td>
        <td>${course.assignedTo}</td>
        <td>
          <button class="btn btn-warning btn-sm me-1" onclick="editTask(${course.id})">Sửa</button>
          <button class="btn btn-danger btn-sm" onclick="deleteTask(${course.id})">Xoá</button>
        </td>
      </tr>`;
      table.innerHTML += row;
    });
  }

  function resetForm() {
    document.getElementById('content').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementById('status').value = 'Pending';
    document.getElementById('assignedTo').value = '';
    editId = null;
  }

  document.getElementById('submitBtn').addEventListener('click', () => {
    const content = document.getElementById('content').value;
    const dueDate = document.getElementById('dueDate').value;
    const status = document.getElementById('status').value;
    const assignedTo = document.getElementById('assignedTo').value;

    if (!content || !dueDate || !assignedTo) {
      alert('Vui lòng điền đầy đủ thông tin');
      return;
    }

    if (editId) {
      const index = courses.findIndex(c => c.id === editId);
      courses[index] = { id: editId, content, dueDate, status, assignedTo };
    } else {
      const id = Date.now();
      courses.push({ id, content, dueDate, status, assignedTo });
    }

    saveToLocalStorage();
    renderTable();
    resetForm();
  });

  function editTask(id) {
    const course = courses.find(c => c.id === id);
    document.getElementById('content').value = course.content;
    document.getElementById('dueDate').value = course.dueDate;
    document.getElementById('status').value = course.status;
    document.getElementById('assignedTo').value = course.assignedTo;
    editId = id;
  }

  function deleteTask(id) {
    if (confirm('Bạn có chắc chắn muốn xoá?')) {
      courses = courses.filter(c => c.id !== id);
      saveToLocalStorage();
      renderTable();
    }
  }

  renderTable();
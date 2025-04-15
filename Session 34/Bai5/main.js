let employees = JSON.parse(localStorage.getItem("employees")) || [];

function renderEmployees() {
  const list = document.getElementById("employeeList");
  list.innerHTML = "";
  employees.forEach((emp, index) => {
    const row = `<tr>
      <td>${index + 1}</td>
      <td>${emp.name}</td>
      <td>${emp.position}</td>
    </tr>`;
    list.innerHTML += row;
  });
}

function addEmployee() {
  const name = document.getElementById("name").value.trim();
  const position = document.getElementById("position").value.trim();

  if (name === "" || position === "") {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  employees.push({ name, position });
  localStorage.setItem("employees", JSON.stringify(employees));
  renderEmployees();

  document.getElementById("name").value = "";
  document.getElementById("position").value = "";
}
window.onload = renderEmployees;
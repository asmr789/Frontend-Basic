let tasksList = [
  { id: 1, taskName: "Learn JavaScript" },
  { id: 2, taskName: "Learn React" },
  { id: 3, taskName: "Learn Node" },
];
function showTask() {
  const list = document.getElementById("myUL");
  list.innerHTML = "";
  tasksList.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.taskName;
    const span = document.createElement("span");
    span.textContent = "×";
    span.className = "close";
    li.appendChild(span);
    list.appendChild(li);
  });
}
showTask();
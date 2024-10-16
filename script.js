const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  const taskText = inputBox.value.trim();
  if (taskText === "") {
    alert("You must write something here!");
  } else {
    createTaskElement(taskText);
  }
  inputBox.value = "";
  saveData();
}

function createTaskElement(taskText) {
  let li = document.createElement("li");
  li.textContent = taskText;
  listContainer.appendChild(li);

  let span = document.createElement("span");
  span.innerHTML = "   \u00d7";
  li.appendChild(span);
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

inputBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  const data = localStorage.getItem("data");
  if (data) {
    listContainer.innerHTML = data;
  }
}

showTask();
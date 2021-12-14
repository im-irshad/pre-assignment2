let form = document.getElementById("addButton");
let tasks = document.getElementById("TaskList");
let removeAll = document.getElementById("rmvButton");
//////////
form.addEventListener("click", addTask);
tasks.addEventListener("click", compDelTask);
removeAll.addEventListener("click", emptyList);

function addTask(e) {
  e.preventDefault();
  var newTsk = document.getElementById("newTask").value;
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(newTsk));
  tasks.appendChild(li);
  var cross = document.createElement("span");
  cross.className = "crossButton";
  cross.innerHTML = "&#9587";
  li.appendChild(cross);
  document.getElementById("newTask").value = "";
}

function compDelTask(e) {
  var tick = document.createElement("span");
  console.log(tick);

  if (e.target.classList.contains("crossButton")) {
    console.log("task clicked");
    let delTask = e.target.parentElement;
    //console.log(delTask);
    tasks.removeChild(delTask);
  } else if (e.target.style.backgroundColor !== "green") {
    tick.className = "tickButton";
    tick.innerHTML = "&#10003";
    e.target.style.backgroundColor = "green";
    e.target.style.textDecoration = "line-through";
    e.target.appendChild(tick);
  } else if (e.target.style.backgroundColor === "green") {
    e.target.style.backgroundColor = "";
    e.target.style.textDecoration = "none";

    let tickDelete = e.target.lastElementChild;
    console.log(tickDelete);
    e.target.removeChild(tickDelete);
  }
}

function emptyList() {
  console.log("remove tasks");
  let ul = document.getElementById("TaskList");
  ul.innerHTML = "";
}

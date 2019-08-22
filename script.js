(() => {
  //DOM vaariables
  const form = document.getElementById("form");
  const todoList = document.getElementById("todoList");
  const todoInput = document.getElementById("todoInput");
  const filter = document.getElementById("filter");

  // listeners
  form.addEventListener("submit", addTaskToList);
  todoList.addEventListener("click", bindEvents, true);
  filter.addEventListener("input", filterTodoItems);

  // functions
  function addTaskToList(event) {
    event.preventDefault();
    renderTodoItems(todoInput.value);
    todoInput.value = "";
  }

  function renderTodoItems(value) {
    const li = document.createElement("li");
    li.classList.add("list-item");
    li.innerHTML = `
      <label class="label">${value}</label>
      <input type="text" class="input-edit" value="${value}">
      <div>
        <button class="item-button btn-edit">Edit</button>
        <button class="item-button btn-remove">Remove</button>
      </div>`;
    todoList.appendChild(li);
  }

  function bindEvents(event) {
    const isButtonEdit = event.target.classList.contains("btn-edit");
    const isButtonRemove = event.target.classList.contains("btn-remove");
    // Edit list item
    if (isButtonEdit) {
      editListItem(event.target);
    }
    // Remove list item
    else if (isButtonRemove) {
      removeListItem(event.target);
    }
  }

  function editListItem(target) {
    const listItem = target.parentElement.parentElement;
    const label = listItem.querySelector(".label");
    const input = listItem.querySelector(".input-edit");
    const buttonEdit = listItem.querySelector(".btn-edit");
    const isEditing = listItem.classList.contains("isEditing");

    if (isEditing) {
      input.classList.remove("active");
      buttonEdit.textContent = "Edit";
      label.textContent = input.value;
      label.classList.remove("hide");
    } else {
      input.classList.add("active");
      buttonEdit.textContent = "Save";
      label.classList.add("hide");
    }

    listItem.classList.toggle("isEditing");
  }

  function removeListItem(target) {
    target.parentNode.parentNode.remove();
  }

  function filterTodoItems() {
    const todos = document.querySelectorAll(".list-item .label");
    const value = this.value.toLowerCase();
    todos.forEach(todo => {
      const todoText = todo.textContent.toLowerCase();
      if (todoText.includes(value)) {
        todo.parentElement.style.display = "";
      } else {
        todo.parentElement.style.display = "none";
      }
    });
  }
})();

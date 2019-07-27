(function() {
  //DOM vaariables
  const form = document.getElementById("form");
  const taskList = document.getElementById("taskList");
  const todoInput = document.getElementById("todoInput");

  let arrayOfItems = [];
  // listeners
  form.addEventListener("submit", addTaskToList);
  taskList.addEventListener("click", itemBtnListeners);

  // functions
  function addTaskToList(e) {
    e.preventDefault();
    arrayOfItems.push(todoInput.value);
    createTodoItems();
    todoInput.value = "";
  }

  function createTodoItems() {
    let items = "";
    arrayOfItems.forEach(item => {
      items += `<li class="list-item">
          <label>${item}</label>
          <input type="text" class="inputEdit">
          <div>
            <button class="item-button edit-btn">Edit</button>
            <button class="item-button remove-btn">Remove</button>
          </div>
        </li>`;
    });
    appendItemToList(items);
  }

  function appendItemToList(items) {
    taskList.innerHTML = items;
  }

  function itemBtnListeners(e) {
    if (e.target.classList.contains("remove-btn")) {
      e.target.parentElement.parentElement.remove();
    }
    if (e.target.classList.contains("edit-btn")) {
      console.log("Edit");
    }
  }
})();

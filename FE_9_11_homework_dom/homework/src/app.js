let form = document.getElementById('form');
let zero = 0;
let limit = 10;
let toDoList = document.querySelector('.list');
let item = document.getElementById('item');
let limitList = function limitList() {
    if (document.querySelectorAll('.list_items').length === limit) {
        document.getElementById('max_limit').style.display = 'block';
        form.disabled = true;
        item.disabled = true;
    } else {
        document.getElementById('max_limit').style.display = 'none';
        form.disabled = false;
        item.disabled = false;
    }
}
let checkFor = function checkFor() {
    if (document.getElementById('item').value.trim().length === zero) {
        document.getElementById('form').disabled = true;
    } else {
        document.getElementById('form').disabled = false;
    }
}

form.addEventListener('mousedown', addItem);
form.addEventListener('mouseup', limitList);
form.onmouseup = checkFor;
item.addEventListener('input', checkFor);
form.disabled = true;

// Add Item to the List

function addItem(e) {
    e.preventDefault();
    let newItem = document.getElementById('item').value;
    let li = document.createElement('li');
    li.setAttribute('draggable', 'true');
    li.setAttribute('class', 'list_items')
    li.appendChild(document.createTextNode(newItem));
    item.value = '';

// Generate Delete Button

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete_btn';
    deleteBtn.innerHTML = '<i class="material-icons" id="del">delete</i>';
    li.appendChild(deleteBtn);
    toDoList.appendChild(li);

// Add Delete Function

    deleteBtn.addEventListener('mousedown', removeItem);
    function removeItem() {
        toDoList.removeChild(li);
    }
    deleteBtn.addEventListener('mouseup', limitList);

// Generate Check Button

    let checkBtn = document.createElement('button');
    checkBtn.className = 'check_btn';
    checkBtn.innerHTML = '<i class="material-icons" id="check">crop_square</i>';
    li.insertBefore(checkBtn, li.childNodes[zero]);

// Check Button Onclick Function

    checkBtn.addEventListener('click', checked);
    function checked() {
        checkBtn.innerHTML = '<i class="material-icons" id="checked">done</i>';
    }

}

// Drag'n'Drop

let drag = null;

toDoList.addEventListener('dragstart', e => {
  drag = e.target;
});

toDoList.addEventListener('dragover', e => {
  if (e.target.className === 'list_items') {
    e.preventDefault();
    e.target.style.transform = 'translate(10px)';
  }
});

toDoList.addEventListener('dragleave', e => {
  e.target.style.transform = '';
});

toDoList.addEventListener('drop', e => {
  if (e.target.className === 'list_items') {
    e.preventDefault();
    e.target.style.transform = '';
    toDoList.insertBefore(drag, e.target);
  }
});


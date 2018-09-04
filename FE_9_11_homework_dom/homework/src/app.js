let button = document.getElementById('button');
let zero = 0;
let limit = 10;
let toDoList = document.querySelector('.list');
let inputText = document.getElementById('input-text');
let limitList = function limitList() {
    if (document.querySelectorAll('.list_items').length === limit) {
        document.getElementById('max_limit').style.display = 'block';
        button.disabled = true;
        inputText.disabled = true;
    } else {
        document.getElementById('max_limit').style.display = 'none';
        button.disabled = false;
        inputText.disabled = false;
    }
}
let checkFor = function checkFor() {
    if (document.getElementById('input-text').value.trim().length === zero) {
        document.getElementById('button').disabled = true;
    } else {
        document.getElementById('button').disabled = false;
    }
}

button.addEventListener('mousedown', addItem);
button.addEventListener('mouseup', limitList);
button.onmouseup = checkFor;
inputText.addEventListener('input', checkFor);
button.disabled = true;

// Add Item to the List

function addItem(e) {
    e.preventDefault();
    let newItem = document.getElementById('input-text').value;
    let li = document.createElement('li');
    li.setAttribute('draggable', 'true');
    li.setAttribute('class', 'list_items')
    li.appendChild(document.createTextNode(newItem));
    inputText.value = '';

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
        e.target.style.borderTop = '1px solid black';
    }
});

toDoList.addEventListener('dragleave', e => {
    e.target.style.borderTop = '';
});

toDoList.addEventListener('drop', e => {
    if (e.target.className === 'list_items') {
        e.preventDefault();
        e.target.style.borderTop = '';
        toDoList.insertBefore(drag, e.target);
    }
});


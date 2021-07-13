// getting all required elements
const inputBox = document.querySelector(".inputbox input");
const addBtn = document.querySelector(".inputbox button");
const todoList = document.querySelector(".todoList");

// onkeyup event
inputBox.onkeyup = () => {
    let userEnteredValue = inputBox.value; //getting user entered value
    if (userEnteredValue.trim() != 0) { //if the user value isn't only spaces
        addBtn.classList.add("active"); //active the add button
    } else {
        addBtn.classList.remove("active"); //unactive the add button
    }
}

showTasks(); //calling showTask function

addBtn.onclick = () => { //when user click on plus icon button
    let userEnteredValue = inputBox.value; //getting input field value
    let getLocalStorageData = localStorage.getItem("New Todo"); //getting localstorage
    if (getLocalStorageData == null) { //if localstorage has no data
        listArray = []; //create a blank array
    } else {
        listArray = JSON.parse(getLocalStorageData);  //transforming json string into a js object
    }
    listArray.push(userEnteredValue); //pushing or adding new value in array
    localStorage.setItem("New Todo", JSON.stringify(listArray)); //transforming js object into a json string
    showTasks(); //calling showTask function
    addBtn.classList.remove("active"); //unactive the add button once the task added
}

function showTasks() {
    let getLocalStorageData = localStorage.getItem("New Todo");
    if (getLocalStorageData == null) {
        listArray = [];
    } else {
        listArray = JSON.parse(getLocalStorageData);
    }

    let newLiTag = "";
    listArray.forEach((element, index) => {
        newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
    inputBox.value = ""; //once task added leave the input field blank
}

// delete task function
function deleteTask(index) {
    let getLocalStorageData = localStorage.getItem("New Todo");
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index, 1); //delete or remove the li
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks(); //call the showTasks function
}


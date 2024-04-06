const inputs = document.querySelector('#addProject');
const listContainer = document.querySelector('#list-container');
const addBtn = document.querySelector('#btn');

addBtn.addEventListener('click' , () => {
    if(inputs.value === ''){
        alert("You must write something")
        // console.log("enter something")

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputs.value;
        listContainer.appendChild(li);


        let closeBtn = document.createElement('span')
        closeBtn.innerHTML = "\u00d7";
        li.appendChild(closeBtn);
        inputs.value = ""
        saveData();
        // console.log(li);
    }
})
listContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('tasks')
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem('data' , listContainer.innerHTML);

}
// display 
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();
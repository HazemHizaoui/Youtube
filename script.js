const btndark=document.getElementById("darkMode");
const change=document.getElementById("change");
const actBox = document.getElementById("activebox");
const actBtn = document.getElementById("activebtn");
const addTodo = document.getElementById("addTodo");
const todoInput = document.getElementById("todo");
const afficher = document.getElementById("afficher");
const addition = document.getElementById("addition");
const rest = document.getElementById("result");
const un = document.getElementById("un");
const deux = document.getElementById("deux");
let res = 0;



btndark.addEventListener("click",function(){
    document.body.classList.toggle("dark-mode");
    if (btndark.textContent === "mode sombre"){
        btndark.textContent="mode clair";}else{
            btndark.textContent="mode sombre";
        }

});





change.addEventListener("click",function(){   
    if(change.textContent === "change textt"){
        change.textContent="valiiiiiiiidéé";
    } else {
        change.textContent="change textt";
    }
});

actBtn.addEventListener("click", function () {
    actBox.classList.toggle("activee");

    if (actBtn.textContent === "active") {
        actBtn.textContent = "non connectée";
    } else {
        actBtn.textContent = "active";
    }
});

addTodo.addEventListener("click", function () {
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
        const li = document.createElement("li");
        li.textContent ="✅ " + todoText;
        afficher.appendChild(li);
        todoInput.value = "";
    
    li.addEventListener("click", function () {
    li.remove();
    });
}
});

document.writeln("<h1>tu peu effacer les taches en cliquant dessus apres les ajouter</h1>");
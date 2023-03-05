const item = document.querySelector('#item');
const todoBox = document.querySelector('#to-do-box');

item.addEventListener(
    "keyup", 
    function (event) {
        if(event.key == 'Enter'){
            addToDO(this.value)
            this.value = ""
        };
    }
)

const addToDO = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${item}
    <i class="fas fa-trash"></i>`;

    listItem.addEventListener("click", function () {
        this.classList.toggle("done");
        // listItem.innerHTML = "Completed"
    })

    listItem.querySelector("i").addEventListener("click", function(){
        listItem.remove();
    })

    todoBox.appendChild(listItem);
}


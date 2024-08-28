let btn = document.querySelector("button");
let task = document.querySelector("input");
let ul  = document.querySelector("ul");

btn.addEventListener("click",function(){
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = task.value;
        let delbtn = document.createElement("button");
        delbtn.classList.add("delete");
        delbtn.innerText = "delete"; 
    li.appendChild(delbtn);
    task.value = " ";

});
ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listitem = event.target.parentElement;
        console.log(listitem);
        listitem.remove();
    }
})


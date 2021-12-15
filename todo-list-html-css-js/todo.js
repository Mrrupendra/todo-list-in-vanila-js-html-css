function addTodo(){
    var input = document.getElementById("inp").value;
    var div = document.getElementById("todo");
    let divSub = document.createElement("div");

    var h1 = document.createElement("h1");
    let butt = document.createElement("button");
    butt.textContent = "remove";

    butt.addEventListener('click', function(){
        divSub.style.display = "none";
    })
    butt.style.border = "none";
    butt.style.width = "15%"
    butt.style.padding = "0.8%";
    butt.style.backgroundColor = "teal";
    butt.style.color = "white";
    butt.style.cursor = "pointer"
    

    divSub.innerHTML = input;
    divSub.style.width = "40%";
    divSub.style.padding = "1%";
    divSub.style.border = "1px solid teal";
    divSub.style.color = "teal";
    divSub.style.fontSize = "20px";
    divSub.style.fontWeight = "600";
    divSub.style.margin = "auto";
    divSub.style.marginTop = "2%"
    div.style.marginTop = "10%"
    divSub.style.display = "flex";
    divSub.style.justifyContent = "space-between"
    divSub.append(h1,butt);
    div.appendChild(divSub);
}
const taskwrite=document.getElementById("taskwrite");
const inputbox=document.getElementById( "inputbox");

function addtask(){
    if(inputbox.value.trim()=== ""){
        alert("you must write something");
    }
    else {
    const li= document.createElement("li");
    taskwrite.appendChild(li);
    li.classList.add(
        "flex",
        "justify-between"
    );
    //li.textContent=inputbox.value;
    li.append(inputbox.value);


    const button=document.createElement("button");
    button.classList.add(
        "ml-5",            // Margin to the left (space between text and ❌)
        "text-red-500",    // Red color
        "cursor-pointer",  // Show pointer cursor on hover
        "hover:text-red-700", // Darker red on hover
        "font-bold",       // Bold look
        "text-lg",         
         
      );
    li.appendChild(button);
    button.append("x");
    //onclick(x)="removetask()";
    button.onclick=function(){
        li.remove();
    }
    li.onclick=function(){
          li.classList.add(
             "line-through"
          )
    }

inputbox.value = "";
}

inputbox.addEventListener("keypress",function(e){
    if(e.key==="Enter"){
        addtask();
    }
});



}


let list = document.querySelector("nav ul");
list.textContent = " ";
let heading = document.querySelector("h1");
let select = document.querySelector("select");

select.addEventListener("change" , function(){
    let choice = select.value;
    let days = 31;

    if(choice === "February"){
        days = 28;
    }
    else if((choice === "April") || (choice === "June") || (choice === "September") || (choice === "November")){
        days = 30;
    }
    else if(choice === " "){
        days = 0;
    }
    else{
        days = 31;
    }
 
    months(days , choice);
});

function months(days , choice){
    heading.textContent = choice;
    list.textContent = " ";
    for(let i=1 ; i<=days ; i+=1){ //new way of writing for loop
      let li_element = document.createElement("li");
            li_element.textContent = i;
            list.appendChild(li_element);
    }
}
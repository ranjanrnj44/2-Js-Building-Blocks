let select = document.querySelector("select");

select.addEventListener("change" , function(){
    let choice = select.value; // try putting the choice inside the function sd defined now, if put globally it will not work
    switch(choice){
        case "red":
            update_c("red" , "cyan");
              break;
        case "yellow":
            update_c("yellow" , "darkred");
              break;
        case "royalblue":
            update_c("royalblue" , "white");
              break;
        case "teal":
            update_c("teal" , "yellow");
              break;
        case "grey":
            update_c("grey" , "black");
              break;
    }
});

function update_c(bg , txt){
    document.body.style.backgroundColor = bg;
    document.body.style.color = txt;
}
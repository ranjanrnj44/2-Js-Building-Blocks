//initialize variables
let select = document.querySelector(`select`);
let list = document.querySelector(`nav ul`);
let heading = document.querySelector(`h1`);

//changing backgroundColor start
        function random_clr(clr){
            return Math.floor(Math.random()*clr);
        }
        select.addEventListener(`change` , function(){
            let changing = `rgb(${random_clr(200)} ${random_clr(100)} ${random_clr(150)})`;
                            document.body.style.backgroundColor = changing;
        });
//changing backgroundColor end

//changing month functionality start
select.addEventListener(`change` , function(){
    let choice = select.value;
    let days = 31;
        if(choice === `February`){
            days = 28
        }
        else if((choice === `April`) || (choice === `June`) || (choice === `September`) || (choice === `November`)){
            days = 30
        }
        else{
            days = 31;
        }
    make_decesion(days , choice);
});

function make_decesion(days , choice){
    heading.textContent = choice;
    list.textContent = ` `;
    for(let i = 1 ; i <= days ; i++){
        let days_count = document.createElement("li");
                         days_count.textContent = i; //if given days you'll see all numbers in all li element
                         list.appendChild(days_count);
    }
}
//changing month functionality end
let list = document.querySelector("section");

let i=10;
while(i>=0){
    let para = document.createElement("p");
    if(i === 10){
        para.textContent = `CountDown starts... ${i}`;
    }
    else if(i === 0){
        para.textContent = `Blast Off`;
    }
    else{
        para.textContent = `${i}`;
    }
    list.appendChild(para);
    
    i--;
}
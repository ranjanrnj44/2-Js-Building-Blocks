let machineActive = true;
let pwd = "cheese";
let machineResult;
let PwdResult;

let container = document.querySelector(".container");
container.textContent = " ";

if (machineActive) {
    machineResult = "On!";

    if ((pwd === "cheese") ? PwdResult = "Logged-In Successful" : PwdResult = "Machine is ON, But unsuccessful");
} else {
    alert("Machine is not ACTIVE, it is FALSE");
}

//create element
let para1 = document.createElement("p");
para1.textContent = machineResult;
container.appendChild(para1);

let para2 = document.createElement("p");
para2.textContent = PwdResult;
container.appendChild(para2);
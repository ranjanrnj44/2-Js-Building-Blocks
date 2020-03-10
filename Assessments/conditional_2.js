let machineStatus = true;
let score = 97;
let response;
let container = document.querySelector(".container");
container.textContent = " ";

if (machineStatus) {
    if ((score < 0) && (score > 100)) {
        response = "No the values are either <0 || >100";
    } else if ((score >= 0) && (score <= 19)) {
        response = "Values are 0 to 19";
    } else if ((score >= 20) && (score <= 39)) {
        response = "Values are 20 to 39";
    } else if ((score >= 40) && (score <= 69)) {
        response = "Values are 40 to 69";
    } else if ((score >= 70) && (score <= 89)) {
        response = "Values are 70 to 89";
    } else if ((score >= 90) && (score <= 100)) {
        response = "Values are 90 to 100";
    }
} else {
    response = "Try setting the value of machineStatus as TRUE";
}

let para = document.createElement("p");
para.textContent = score;
container.appendChild(para);

let new_ele = document.createElement("p");
new_ele.textContent = response;
container.appendChild(new_ele);
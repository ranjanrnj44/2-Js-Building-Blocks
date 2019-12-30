let admit = document.querySelector(".admit");
let refuse = document.querySelector(".refuse");
let peoples = ["a","b","c","dec","e","feb"];

admit.textContent = `Admit : `;
refuse.textContent = `Refuse : `;

let i=0;

do{
  if((peoples[i] === "dec") || (peoples[i] === "feb")){
    refuse.textContent+= peoples[i] + `,`;
  }
  else{
    admit.textContent+= peoples[i] + ',';
  }
  i++;
}while(i<peoples.length);

admit.textContent = admit.textContent.slice(0 , admit.textContent.length-1) + `.`;
refuse.textContent = refuse.textContent.slice(0 , admit.textContent.length) + `.`;
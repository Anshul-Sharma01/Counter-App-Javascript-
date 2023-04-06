let finalVal=0;

let decrement=document.querySelector(".dment");
console.log(decrement);

function decValue(){
    finalVal=finalVal-1;
    finalValue.textContent=finalVal
}

decrement.addEventListener("click",decValue)



let increment=document.querySelector(".iment");
console.log(increment);

function incValue(){
    finalVal=finalVal+1;
    finalValue.textContent=finalVal;
}

increment.addEventListener("click",incValue);




let finalValue=document.querySelector(".final_value");
console.log(finalValue);


let Reset=document.querySelector(".Rst");
console.log(Reset);

function resetVal(){
    finalVal=0;
    finalValue.textContent=finalVal;
}

Reset.addEventListener("click",resetVal);
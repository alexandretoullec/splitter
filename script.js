let bill = document.querySelector("#bill");
let numberOfPeople = document.querySelector("#numberOfPeople");

let five = document.querySelector("#five");
let ten = document.querySelector("#ten");
let fifteen = document.querySelector("#fifteen");
let twenty = document.querySelector("#twenty");
let twentyFive = document.querySelector("#twentyFive");
let custom = document.querySelector("#custom");

let tipAmount = document.querySelector("#tipAmount");
let total = document.querySelector("#total");

let reset = document.querySelector("#reset");

five.addEventListener('click',()=>{
    if(numberOfPeople.value === 0 ){
        alert("Number of people must be be an integer above 0")
    }else{
        tipAmount.textContent = (bill.value*0.05/numberOfPeople.value).toFixed(2);
        total.textContent = (bill.value/numberOfPeople.value + bill.value*0.05/numberOfPeople.value).toFixed(2);

    }
});

ten.addEventListener('click',()=>{
    if(numberOfPeople.value === 0 ){
        alert("Number of people must be be an integer above 0")
    }else{
        tipAmount.textContent = (bill.value*0.10/numberOfPeople.value).toFixed(2);
        total.textContent = (bill.value/numberOfPeople.value + bill.value*0.10/numberOfPeople.value).toFixed(2);

    }
});

fifteen.addEventListener('click',()=>{
    if(numberOfPeople.value === 0 ){
        alert("Number of people must be be an integer above 0")
    }else{
        tipAmount.textContent = (bill.value*0.15/numberOfPeople.value).toFixed(2);
        total.textContent = (bill.value/numberOfPeople.value + bill.value*0.15/numberOfPeople.value).toFixed(2);

    }
});

twenty.addEventListener('click',()=>{
    if(numberOfPeople.value === 0 ){
        alert("Number of people must be be an integer above 0")
    }else{
        tipAmount.textContent = (bill.value*0.20/numberOfPeople.value).toFixed(2);
        total.textContent = (bill.value/numberOfPeople.value + bill.value*0.2/numberOfPeople.value).toFixed(2);

    }
});

twentyFive.addEventListener('click',()=>{
    if(numberOfPeople.value === 0 ){
        alert("Number of people must be be an integer above 0")
    }else{
        tipAmount.textContent = (bill.value*0.25/numberOfPeople.value).toFixed(2);
        total.textContent = (bill.value/numberOfPeople.value + bill.value*0.25/numberOfPeople.value).toFixed(2);

    }
});

custom.addEventListener('click',()=>{
    let customTip = prompt('please enter your custom tip in %!!')

    if(numberOfPeople.value === 0 ){
        alert("Number of people must be be an integer above 0")
    }else{
        tipAmount.textContent = (bill.value*customTip/100/numberOfPeople.value).toFixed(2);
        total.textContent = (bill.value/numberOfPeople.value + bill.value*customTip/100/numberOfPeople.value).toFixed(2);

    }
});

reset.addEventListener('click',()=>{
    numberOfPeople.value=0;
    bill.value=0;
    tipAmount.textContent="$0.00";
    total.textContent="$0.00";
})




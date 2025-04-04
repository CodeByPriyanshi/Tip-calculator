let calculate=document.getElementById("calculate");
calculate.addEventListener("click",function(){
    let result;
    let amount=document.getElementById("amount").value;
    let tip= document.getElementById("tip").value;
    let display =document.getElementById("result");
    result=amount*tip/100;    
    display.innerText = parseInt(amount)+result;
})
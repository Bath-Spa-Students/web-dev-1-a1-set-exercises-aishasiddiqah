window.onload=()=>{
    const inputs = document.querySelectorAll("input");
}

//creating a function that will calculate the total price by multiplying two input values
function calculateTotal(){
    const petrol=document.querySelector('#petrol').value;
    const liter=document.querySelector('#liter').value;

    if(!petrol || !liter) return;

    document.querySelector('#total').innerText = petrol * liter;
}

window.onload=()=>{
    const inputs = document.querySelectorAll("input");
}

function calculateTotal(){
    const petrol=document.querySelector('#petrol').value;
    const liter=document.querySelector('#liter').value;

    if(!petrol || !liter) return;

    document.querySelector('#total').innerText = petrol * liter;
}

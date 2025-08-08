document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    
    const cashOutInput = document.getElementById('input-cash-out').value;
    console.log(cashOutInput);

    const cashOutPinNumber = document.getElementById('input-cash-out-pin-number').value;
    console.log(cashOutPinNumber);

    if(cashOutPinNumber === '1234'){
        console.log("Your Money Is Cashing Out.");

        const balance = document.getElementById('amount-balance').innerText;

        const cashOutMoneyNumber = parseFloat(cashOutInput);
        const cashOutBalanceNumber = parseFloat(balance);
        
        const newBalance = cashOutBalanceNumber - cashOutMoneyNumber;
        document.getElementById('amount-balance').innerText = newBalance;
    }
    else{
        alert('Failed To Add Your Money! Please try again!');
    }
})
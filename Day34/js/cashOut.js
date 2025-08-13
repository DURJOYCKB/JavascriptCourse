document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    
    const cashOutInput = document.getElementById('input-cash-out').value;
    console.log(cashOutInput);

    const cashOutPinNumber = document.getElementById('input-cash-out-pin-number').value;
    console.log(cashOutPinNumber);

     if(isNaN(cashOutInput)){
        alert('Fail to cash out Money');
        return;
    }

    if(cashOutPinNumber === '1234'){
        console.log("Your Money Is Cashing Out.");

        const balance = document.getElementById('amount-balance').innerText;

    if(cashOutInput > balance){
        alert('You dont have enough money');
        return;
    }

        const cashOutMoneyNumber = parseFloat(cashOutInput);
        const cashOutBalanceNumber = parseFloat(balance);
        
        const newBalance = cashOutBalanceNumber - cashOutMoneyNumber;
        document.getElementById('amount-balance').innerText = newBalance;

        const p =document.createElement('p');
        p.innerText = `cash out: ${cashOutMoneyNumber} Tk. New Balance : ${newBalance} Tk.`;

        document.getElementById('show-transaction-history').appendChild(p);
    }
    else{
        alert('Failed To Add Your Money! Please try again!');
    }
})
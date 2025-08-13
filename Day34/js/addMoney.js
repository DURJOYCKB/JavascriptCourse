document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    const addPinNumber = document.getElementById('input-pin-number').value;
    console.log(addPinNumber);

    if(isNaN(addMoneyInput)){
        alert('Fail to add Money');
        return;
    }

    if(addPinNumber === '1234'){
        console.log("Your Money Is Adding.");

        const balance = document.getElementById('amount-balance').innerText;

        const addMoneyNumber = parseFloat(addMoneyInput);
        const addBalanceNumber = parseFloat(balance);
        
        const newBalance = addMoneyNumber + addBalanceNumber;
        document.getElementById('amount-balance').innerText = newBalance;


        const p =document.createElement('p');
        p.innerText = `added: ${addMoneyNumber} Tk. New Balance : ${newBalance} Tk.`;

        document.getElementById('show-transaction-history').appendChild(p);
    }
    else{
        alert('Failed To Add Your Money! Please try again!');
    }
})
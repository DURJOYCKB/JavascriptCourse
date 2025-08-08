//console.log("button clicking file added");

document.getElementById('btn-login').addEventListener('click', function(event){
   // event.preventDefault();
    console.log('login button clicked');

    const phoneNumber = document.getElementById('phone-number').value;
   // console.log(phoneNumber);

    const PinNumber = document.getElementById('pin-number').value;
    //console.log(PinNumber);

    if(phoneNumber === '5' && PinNumber === '1234'){
        console.log("You are logged in.");
        window.location.href = '/Day34/home.html';
    }
    else{
        alert('Wrong phone or pin number.');
    }
})
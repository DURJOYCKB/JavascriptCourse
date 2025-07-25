console.log("Hello from Js");
console.log(document.body);

const sections= document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.backgroundColor = 'lightgray';
}
const fruitsContainer = document.getElementById('fruits-container');
fruitsContainer.style.backgroundColor = 'lightblue';

const flowerContainer = document.getElementById('flower-container');
flowerContainer.style.backgroundColor = 'orange';

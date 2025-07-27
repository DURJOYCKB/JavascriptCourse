console.log("hello");

//Option-1:directly set on the HTML element
//<button onclick="document.body.style.backgroundColor='skyblue'">make colorfull</button>

//Option-2:Add onclick function on the HTML element
//<button onclick="makeColor()">make color</button>
 function makeColor(){
            document.body.style.backgroundColor='purple';
        }

//Option-3:
const makeOrangeButton = document.getElementById('make-orange');
makeOrangeButton.onclick = makeOrange;

function makeOrange(){
    document.body.style.backgroundColor = 'orange';
}

//Option-4:
 const yellowButton = document.getElementById('make-yellow');
        yellowButton.addEventListener('click', makeYellow);

        function makeYellow(){
        document.body.style.backgroundColor = 'yellow';
}
//Option-4(Final):
document.getElementById('make-pink').addEventListener('click', function(){
    document.body.style.backgroundColor = 'pink';
})


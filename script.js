'use strict';

var btn;
var select = document.querySelectorAll('.selected');
var display = document.getElementById('display');

// console.log(select);

for(let i=0; i<select.length; i++){
    btn = select[i];
    // console.log(btn);
    btn.addEventListener('click', (event)=>{
        // console.log(event.target.value);
        if(event.target.value == 'AC'){
            display.value = '';
        }
        else if (event.target.value == 'DE') {
            display.value = display.value.toString().slice(0,-1);
        }
        else if (event.target.value == '=') {
           display.value = eval(display.value);
        }
        else{
            display.value += event.target.value;
        }
    })
}

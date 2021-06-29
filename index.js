let displayScreen = document.getElementById("display-screen");
let displayScreenValue = "";


let buttons = document.querySelectorAll('button');
for(items of buttons){
    items.addEventListener('click',function(event){
        calculate(event.target.innerText);
    });
}

document.addEventListener("keypress",function(event){
    if(!document.getElementById('btn'+event.key)){
        alert("Only Numbers are allowed");
    }
    else{
        calculate(event.key);
    }
});

function calculate(key){
    console.log('key pressed is : '+key);
    
    if(key == 'x'){
        key = '*';
        displayScreenValue += key;
        displayScreen.value = displayScreenValue;
    }
    else if(key == 'C'){
        displayScreenValue = "";
        displayScreen.value = displayScreenValue;
    }
    else if(key == "="){
        displayScreenValue = eval(displayScreenValue);
        displayScreen.value = eval(displayScreenValue);
    }
    else{
        displayScreenValue += key;
        displayScreen.value = displayScreenValue;
    }


}
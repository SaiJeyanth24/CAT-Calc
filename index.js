const start=document.getElementById('start');
const reset=start.previousElementSibling;
const value1=document.getElementById('a');
const value2=a.nextElementSibling.nextElementSibling;
const input=document.getElementById('value');
let sum=0;

const generateRandom = () =>{
    const a=Math.trunc((Math.random()*90)+10);
    const b=Math.trunc((Math.random()*90)+10);
    sum=a+b;
    value1.textContent=a;
    value2.textContent=b;
}


const resetAll = () =>{
    value1.textContent='?';
    value2.textContent='?';
    sum=0;
}

const next = () =>{
    input.value='';
    input.style.backgroundColor='white';
    generateRandom();
}

const validate = (event) => {
    if(event.keyCode===13){
        if(+(input.value)===sum){
            input.style.backgroundColor='#9ADE7B';
            setTimeout(next,200);
        }
        else{
            input.style.backgroundColor='#F1A7A7';
        }
    }

}


start.addEventListener('click',generateRandom);
reset.addEventListener('click',resetAll);
input.addEventListener('keypress',validate);
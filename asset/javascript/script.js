let passDistans=document.getElementById('job-distans');
let countBtn=document.getElementById('count-btn');
let passShift=document.getElementById('pass-shift');
let result=document.getElementById('result');
let resultTwo=document.getElementById('result-2');


countBtn.addEventListener('click', countAll)

function countAll(){
let pass=parseInt(passShift.value);
let distans=parseInt(passDistans.value);

let everyThing = pass*distans*18.50;

result.innerHTML=`Du kommer att få tillbaka ${everyThing-11000} Kr i reseersättning`;
result.style.display="block";
resultTwo.innerHTML=`Du skriver summan ${everyThing} Kr i deklarationen.`;
resultTwo.style.display="block";

}


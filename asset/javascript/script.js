let passDistans=document.getElementById('job-distans');
let countBtn=document.getElementById('count-btn');
let passShift=document.getElementById('pass-shift');
let result=document.getElementById('result');
let resultTwo=document.getElementById('result-2');


countBtn.addEventListener('click', countAll)

function countAll(){
let pass=parseInt(passShift.value);
let distans=parseInt(passDistans.value);
let summanm=pass*distans*18.50;
let everyThing = pass*distans*18.50-11000

result.innerHTML=`Du kommer att få tillbaka ${Math.round(everyThing*0.30)} Kr i reseersättning`;
result.style.display="block";
resultTwo.innerHTML=`Du skriver summan ${Math.round(summanm)} Kr i deklarationen.`;
resultTwo.style.display="block";

}


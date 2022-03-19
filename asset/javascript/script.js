let passDistans=document.getElementById('job-distans');
let countBtn=document.getElementById('count-btn');
let passShift=document.getElementById('pass-shift');
let result=document.getElementById('result');
let resultTwo=document.getElementById('result-2');


countBtn.addEventListener('click', countAll)

function countAll(){
let pass=parseFloat(passShift.value);
let distans=parseFloat(passDistans.value);
let summanm=pass*distans*18.50;
let everyThing = pass*distans*18.50-11000
if(everyThing<0)
{
    result.innerHTML=('Du har tyvärr ingen rätt till ersättning')
    result.style.display="block";
    resultTwo.style.display="none";
}
else if(everyThing>0){
result.innerHTML=`Du kommer att få tillbaka ${Math.round(everyThing*0.30)} Kr i reseersättning`;
result.style.display="block";
resultTwo.innerHTML=`Du skriver summan ${Math.round(summanm)} Kr i deklarationen.`;
resultTwo.style.display="block";
}
}


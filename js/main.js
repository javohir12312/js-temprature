let elForm = document.querySelector(".form")
let elInput = document.querySelector(".enter-number-degree")
let speakDegree = document.querySelector(".enter-degree")
let resultOne = document.querySelector(".result-1")
let resultTwo = document.querySelector(".result-2")


elForm.addEventListener('submit', function(evt){
  evt.preventDefault();

  let inputVall = elInput.value;
  let speakDegreeVall = speakDegree.value;

  if(speakDegreeVall == 'fahrenheit') {
    resultOne.textContent = `Celsius` + Math.floor(((`${inputVall}`) -32 ) / 1.8);
    resultTwo.textContent = `Kelvin ` + Math.floor((((`${inputVall}`) - 32 ) / 1.8 ) + 273.15);
  }
  if(speakDegreeVall == 'Celsius') {
    resultOne.textContent = `Kelvin` + Math.floor((`${inputVall}`) + 273.15);
    resultTwo.textContent = `fahrenheit ` + Math.floor(((`${inputVall}`) * 1.8) +32 );
  }
  if(speakDegreeVall == 'Kelvin') {
    resultTwo.textContent = `Celsius` + Math.floor(((`${inputVall}`) -274.15) * 1.8 +32);
    resultOne.textContent = `fahrenheit ` + Math.floor((`${inputVall}`) -273.15);
  }

})
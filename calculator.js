let buttons = document.getElementsByClassName("btn");
const display = document.getElementById("result");
const historydisplay = document.getElementById("history");
const deleteBtn = document.getElementById("delete");
const modBtn = document.getElementById("modbtn");
const result = document.getElementById("result");
const e = 2.71828;
const pi = 3.14159265359;
const piBtn = document.getElementById("pie");
const eBtn = document.getElementById("ebtn");
const equate = document.getElementById("equals");

// Delete button
deleteBtn.addEventListener("click", function() {
    let displayValue = display.value;
    display.value = displayValue.substring(0, displayValue.length - 1);
  });

// Calculate Mod
function calMod(a,b) {
    return a%b;
}
modBtn.addEventListener("click", function() {
    const a = parseFloat(document.getElementById("input1").result);
    const b = parseFloat(document.getElementById("input2").result);
    document.getElementById("output").value = calMod(a, b);
});

// Pi Button
piBtn.addEventListener("click", function() {
    display.value = Math.PI;
});

// e Button
eBtn.addEventListener("click", function(){
  // document.getElementById("result").value += e;
  display.value = Math.E;
});

// Equate
equate.addEventListener("click",function() {
  document.getElementById('result').value=eval(document.getElementById('result').value);
});

try {
  if(display.trim() == '') throw "Empty";
} catch (error) {
  
}



// History
const historyList = document.getElementById("history");
let history = [];

// Perform calculation and update history
function performCalculation(calculation, result) {
  history.push({ calculation, result });
  updateHistoryDisplay();
}

// Update the display of the history container
function updateHistoryDisplay() {
  let historyItems = "";
  for (let i = 0; i < history.length; i++) {
    historyItems += `<li>${history[i].calculation} = ${history[i].result}</li>`;
  }
  historyList.innerHTML = historyItems;
  document.getElementById("result").innerText = historyItems;
}

display.addEventListener("click", function() {
    document.getElementById('result').value=eval(document.getElementById('result').value);
});

historydisplay.addEventListener("click", function() {
    document.getElementById('history').value=document.getElementById(display+historydisplay).value;
});

// function displayExp() {
//     document.getElementById('result').value=eval(document.getElementById('result').value);
// }
// function displayHist() {
//     document.getElementById('history')=document.getElementById("history").value = display+historydisplay;
// }

console.log(buttons);
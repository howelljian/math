function add()
{
  var number1= Number(document.getElementById("no1").value);
  var number2= Number(document.getElementById("no2").value);
  
  var answer= number1 + number2;
  
  document.getElementById("answer").innerHTML = answer;
}

function subtract()
{
  var number1= Number(document.getElementById("no1").value);
  var number2= Number(document.getElementById("no2").value);
  
  var answer= number1 - number2;
  
  document.getElementById("answer").innerHTML = answer;
}

function multiply()
{
  var number1= Number(document.getElementById("no1").value);
  var number2= Number(document.getElementById("no2").value);
  
  var answer= number1 * number2;
  
  document.getElementById("answer").innerHTML = answer;
}

function divide()
{
  var number1= Number(document.getElementById("no1").value);
  var number2= Number(document.getElementById("no2").value);
  
  var answer= number1 / number2;
  
  document.getElementById("answer").innerHTML = answer;
}

                             
var stack = [];
var total = 0;

var textbox = document.getElementById("textbox")

var buttonClear = document.getElementById("clear")
buttonClear.onclick = function(e) {
  textbox.value = "";

}

var button7 = document.getElementById("num-7")
button7.onclick = function(e) {
  stack.push(button7.value);
  textbox.value += button7.value;
}

var button8 = document.getElementById("num-8")
button8.onclick = function(e) {
  stack.push(button8.value);
  textbox.value += button8.value;
}

var button9 = document.getElementById("num-9")
button9.onclick = function(e) {
  stack.push(button9.value);
  textbox.value += button9.value;
}

var buttonMinus = document.getElementById("minus")
buttonMinus.onclick = function(e) {
  stack.push(buttonMinus.value);
  textbox.value += buttonMinus.value;
}

var button4 = document.getElementById("num-4")
button4.onclick = function(e) {
  stack.push(button4.value);
  textbox.value += button4.value;
}

var button5 = document.getElementById("num-5")
button5.onclick = function(e) {
  stack.push(button5.value);
  textbox.value += button5.value;
}

var button6 = document.getElementById("num-6")
button6.onclick = function(e) {
  stack.push(button6.value);
  textbox.value += button6.value;
}

var buttonPlus = document.getElementById("plus")
buttonPlus.onclick = function(e) {
  stack.push(buttonPlus.value);
  textbox.value += buttonPlus.value;
}

var button1 = document.getElementById("num-1")
button1.onclick = function(e) {
  stack.push(button1.value);
  textbox.value += button1.value;
}

var button2 = document.getElementById("num-2")
button2.onclick = function(e) {
  stack.push(button2.value);
  textbox.value += button2.value;
}

var button3 = document.getElementById("num-3")
button3.onclick = function(e) {
  stack.push(button3.value);
  textbox.value += button3.value;
}

var button0 = document.getElementById("num-0")
button0.onclick = function(e) {
  stack.push(button0.value);
  textbox.value += button0.value;
}

var buttonEquals = document.getElementById("equals")
buttonEquals.onclick = function(e) {

  var leftExpression = '';
  var rightExpression = '';
  var seenCommand = '';

  for (var i=0; i < stack.length; i++) {

    if (stack[i] == '+') {
      seenCommand = '+';
      continue;
    }

    if (stack[i] == '-') {
      seenCommand = '-';
      continue;
    }

    if (!seenCommand) {
      leftExpression += stack[i];
    } else {
      rightExpression += stack[i];
    }
  }

  if (seenCommand == '+') {
    total = Number(leftExpression) +
      Number(rightExpression);
  } else {
    total = Number(leftExpression) -
      Number(rightExpression);
  }
    textbox.value = '';
    textbox.value += total;
  stack = [];
  leftExpression = '';
  rightExpression = '';
  seenCommand = '';

} 

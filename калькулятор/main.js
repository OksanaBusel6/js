let input = document.querySelector('.calc__input');
let numButtons = document.querySelectorAll('.calc__btn--light');
let span = document.querySelector('span');
let btnAll = document.querySelectorAll('.calc__btn');
let prev_input = 0;
let next_input;
let x = 0;
let prev_res;

for (let i = 0; i < numButtons.length; i++) {
  let numBtn = numButtons[i];
  numBtn.addEventListener('click', function(){
    if (x == 5) {
      input.value = '';
      x++;
    }
    if (i != 9) {
      input.value += this.innerHTML; 
    }else{
      input.value *= -1;
    }
  });
  
}

for (let i = 0; i < 10; i++) {
  let numCode = 'Numpad' + i;
  document.addEventListener('keydown', function(e){
    if (e.code == numCode) {
      if (x == 5) {
        input.value = '';
        x++
      }
    }
  });
}

btnAll[2].addEventListener('click', function(){
  input.value = '';
  x = 0;
  prev_res = 0;
  prev_input = 0;
  span.innerHTML = '';
});

let sum = (a,b) => a + b;
let diff = (a,b) => a - b;
let prod = (a,b) => a * b;
let quot = (a,b) => a / b;
let choice = function (x, a, b){
  switch (x) {
    case 1:
      return sum(a,b);
    case 2:
      return diff(a,b);
    case 3:
      return prod(a,b);
    case 4:
      return quot(a,b);
  }
}

function add(){
  prev_input = +input.value;

  if (x == 0 || x >= 5) {
    prev_res = prev_input;
    span.innerHTML = prev_res + '+';
  }else{
    prev_res = choice(x, prev_res, prev_input);
  }
  span.innerHTML = prev_res + '+';
  input.value = '';
  x = 1;
}

function sub(){
  prev_input = +input.value;

  if (x == 0 || x >= 5) {
    prev_res = prev_input;
  }else{
    prev_res = choice(x, prev_res, prev_input);
  }
  span.innerHTML = prev_res + '-';
  input.value = '';
  x = 2;
}

function mul(){
  prev_input = +input.value;

  if (x == 0 || x >= 5) {
    prev_res = prev_input;
  }else{
    prev_res = choice(x, prev_res, prev_input);
  }
  span.innerHTML = prev_res + '*';
  input.value = '';
  x = 3;
}

function divious(){
  prev_input = +input.value;
  if (x == 0 || x >= 5) {
    prev_res = prev_input;
  }else{
    prev_res = choice(x, prev_res, prev_input);
  }
  span.innerHTML = prev_res + '/';
  input.value = '';
  x = 4;
}

function result(){
  prev_input = +input.value;
  if (x == 0 || x >= 5) {
    prev_res = prev_input;
  }else{
    prev_res = choice(x, prev_res, prev_input);
  }
  span.innerHTML = '';
  input.value = prev_res;
  x = 5;
}

document.addEventListener('keydown', function(e){
  if (e.code == 'NumpadDivide') {
    divious();
  } else if (e.code == 'NumpadMultiply') {
    mul();
  } else if (e.code == 'NumpadAdd') {
    add();
  } else if (e.code == 'NumpadSubtract') {
    sub();
  } else if (e.code == 'NumpadEnter') {
    result();
  }
});


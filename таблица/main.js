let container = document.querySelector('.container');
let btnAddRow = document.querySelector('.product__btn--row');
let btnAddTable = document.querySelector('.product__btn--table');
let btnRes = document.querySelector('.product__btn--result');

function addTr(j, newTd) {
  newTd.className = 'poruct__item';
  switch (j) {
    case 0:
      let newArea = document.createElement('textarea');
      newArea.className = 'product__textarea';
      newTd.appendChild(newArea);
      break;
    case 1:
      let newInput = document.createElement('input');
      newInput.className = 'product__input product__input--num';
      newInput.type = 'text';
      newTd.appendChild(newInput);
      break;
  }

}

function addRow(btn) {
  let newRow = document.createElement('tr');
  newRow.className = 'product__items product__content';
  for (let i = 0; i < 2; i++) {
    let newTd = document.createElement('td');
    addTr(i, newTd);
    newRow.appendChild(newTd);
  }
  let thisPar = btn.previousElementSibling;
  let tBody = thisPar.querySelector('tbody');
  let trResult = tBody.querySelector('.product__items--result');
  tBody.insertBefore(newRow, trResult);
}

function btnClose(btn){
  let parBtn = btn.parentElement;
  container.removeChild(parBtn);
}

function addTable() {
  let div = document.createElement('div');
  div.className = 'product';
  let newBtnClose = document.createElement('button');
  newBtnClose.style = 'width: 30px; height: 30px; border: none; background-color: transparent; font-size: 16px; display: block; margin: 10px 5px 5px auto; cursor: pointer';
  newBtnClose.innerHTML = 'X';
  newBtnClose.addEventListener('click', function(){ btnClose(newBtnClose); });
  let newTab = document.createElement('table');
  newTab.className = 'product__table';
  let newTbody = document.createElement('tbody');
  for (let i = 0; i < 3; i++) {
    let newTr = document.createElement('tr');
    newTr.className = 'product__items';
    let newBtn = document.createElement('button');
    newBtn.className = 'product__btn';
    switch (i) {
      case 0:
        newBtn.className += ' product__btn--row';
        newBtn.innerHTML = 'Add row';
        newBtn.addEventListener('click', function () { addRow(newBtn); });
        break;
      case 1:
        newTr.className += ' product__content';
        newBtn.className += ' product__btn--table';
        newBtn.innerHTML = 'Add table';
        newBtn.addEventListener('click', function () { addTable(); });
        break;
      case 2:
        newTr.className += ' product__items--result';
        newBtn.className += ' product__btn--result';
        newBtn.innerHTML = 'Result';
        newBtn.addEventListener('click', function () { addResult(newBtn); });
        break;
    }
    for (let j = 0; j < 2; j++) {
      let newTd = document.createElement('td');
      switch (i) {
        case 0:
          newTd = document.createElement('td');
          newTd.className = 'poruct__title';
          switch (j) {
            case 0:
              newTd.innerHTML = 'Название';
              break;
            case 1:
              newTd.innerHTML = 'Цена, грн.';
              break;
          }
          break;
        case 1:
          addTr(j, newTd);
          break;
        case 2:
          newTd = document.createElement('td');
          newTd.className = 'poruct__item';
          let newInput = document.createElement('input');
          newInput.className = 'product__input'
          newInput.type = 'text';
          newInput.readOnly = true;
          switch (j) {
            case 0:
              newInput.value = 'Result';
              break;
            case 1:
              newInput.className += ' product__input--result';
              break;
          }
          newTd.appendChild(newInput);
          break;
      }
      newTr.appendChild(newTd);
    }
    newTbody.appendChild(newTr);
    div.appendChild(newBtn);
  }
  newTab.appendChild(newTbody);
  div.insertBefore(newTab, div.firstChild);
  div.insertBefore(newBtnClose, div.firstChild);
  container.appendChild(div);
}

function addResult(btn) {
  let thisPar = btn.parentElement;
  let thisInputs = thisPar.querySelectorAll('.product__input--num');
  let thisRes = thisPar.querySelector('.product__input--result');
  thisRes.value = getSum(thisInputs);
  let resAll = document.querySelectorAll('.product__input--result');
  let allRes = getSum(resAll);
  document.querySelector('.product__resAll').innerHTML = `Result all = ${allRes}`
}


btnAddRow.addEventListener('click', function () { addRow(btnAddRow); });
btnRes.addEventListener('click', function () { addResult(btnRes); });
btnAddTable.addEventListener('click', function () { addTable(); });


function getSum(arrInput) {
  let sum = 0;
  for (let i = 0; i < arrInput.length; i++) {
    sum += +(arrInput[i].value);
  }
  return sum;
}






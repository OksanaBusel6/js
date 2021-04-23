export class Module {
  choseNum(num) {
    changeNum(num); 
  }
  startGame() {
    const names = start();
    return names;
  }
  clickTd(that) {
    const tdWin = moveUser(that);
    return tdWin;
  }
  closeGame() {
     let names = close();
     return names;
  }
}


/* -----------------------------------------ModuleUser.js------------------------------------------ */
let game = false;

class User{
  constructor() {
    this.name = 'name';
    this.num = 0;
    this.active = 0;
  }
}

const user1 = new User();
const user2 = new User();

function changeNum(num) {
  user1.active = 1;
  if (num == 1) {
    user1.num = 1;
    user2.num = 2;
  } else {
    user1.num = 2;
    user2.num = 1;
  }
  game = true;
}


function start() {
  if (!game) {
    return 'error';
  }

  let inputsName = document.querySelectorAll('.name__input');
  user1.name = inputsName[0].value.trim() || 'Первый игрок';
  user2.name = inputsName[1].value.trim() || 'Второй игрок';
  return [user1.name, user2.name];
}

/* -----------------------------------------Game-------------------------------------------------------- */
let over;

function moveUser(that) {
  let thisAttr = that.getAttribute('data-num');
  if (+thisAttr) {
    over = 0;
    return {win: 0};
  }

  if (over > 0) {
    return {win: 0};
  }
  
  let result;
  let active, notActive;
  
  if (user1.active == 1) {
    active = user1;
    notActive = user2;
  } else {
    active = user2;
    notActive = user1;
  }
  
  that.setAttribute('data-num', active.num);
  let tdAll = document.querySelectorAll('td');
  let tdAttr = attr(tdAll);
  
  result = win(+active.num, tdAttr);

  if (result > 0) {
    over = 1;
    return {win: 1, num: active.num, name: active.name};
  } else {
    let every = tdAttr.every((x) => x > 0);
    if (every) {
      over = 2;
      return {win: 2, num: active.num, name: 'Ничья!'};
    } else {
      over = -1; 
      active.active = 0;
      notActive.active = 1;
      return {win: -1, num: active.num, name: notActive.name};
    }
    
                     
  }
}


function attr(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i].getAttribute('data-num');
  }
  return newArr;
}

function win(num, arr) {
  if ((arr[0] == num && arr[1] == num && arr[2] == num) ||
    (arr[3] == num && arr[4] == num && arr[5] == num) ||
    (arr[6] == num && arr[7] == num && arr[8] == num) ||
    (arr[0] == num && arr[3] == num && arr[6] == num) ||
    (arr[1] == num && arr[4] == num && arr[7] == num) ||
    (arr[2] == num && arr[5] == num && arr[8] == num) ||
    (arr[0] == num && arr[4] == num && arr[8] == num) ||
    (arr[2] == num && arr[4] == num && arr[6] == num)) {
    return num;
  } else {
    return 0;
  }
}

function close() {
  user1.active = 1;
  user2.active = 0;

  over = 0;

  return [user1.name, user2.name];
}

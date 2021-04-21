/* Задача. Створити об’єкт «Клієнт»
Клієнт

Поля(властивості)
ПІБ
Номер рахунку
Кількість коштів

Методи (дії)
Зняття грошей з рахунку
Додавання грошей на рахунок
 */

function Client(name, number, sum) {
  this.name = name,
    this.number = number,
    this.sum = sum /*,
  this.addToSum = (val) => this.sum += val,
  this.subFromSum = (val) => this.sum -= val */
}

Client.prototype.addToSum = function (val) {
  return this.sum += val;
};
Client.prototype.subFromSum = function (val) { return this.sum -= val };

let client1 = new Client('Вася', 'UA385492600914552', 200);
client1.addToSum(200);
client1.subFromSum(400);


/* Задача. Створити об’єкт «Рулетка»
Рулетка

Поля(властивості)
Масив, у якому зберігаються бали ігрового барабану

Методи (дії)
Метод для випадкового визначення кількості балів
Виведення ігрового барабану на екран (у формі таблиці)

 */

let roul = {
  ball: [10, 20, 30,  80, '', 40, 70, 60, 50],
  balRand: function () {
    let num = (1 + Math.floor(Math.random() * 8)) * 10;
    return num;
  },
  createTable: function () {
    let table = document.createElement('table');
    table.style = 'border-collapse: collapse;';

    for (let i = 0, count = 0; i < 3; i++) {
      let tr = document.createElement('tr');

      for (let j = 0; j < 3; j++) {
        let td = document.createElement('td');
        td.innerText = this.ball[count++];
        td.style = 'border: 2px solid #000; width: 100px; height: 100px; text-align: center;';
        tr.appendChild(td);
      }

      table.appendChild(tr);
    }
    document.body.appendChild(table);
  }

}

roul.createTable();

let btn = document.createElement('button');
btn.style = 'margin-top: 15px; display: inline-block; padding: 20px; font-size: 24px;';
btn.innerHTML = 'start';
btn.addEventListener('click', addRand);
document.body.appendChild(btn);

function addRand() {

  let numRand = roul.balRand();
  let td = document.querySelectorAll('td');
  td[4].innerHTML = '';
  let index = [0, 1, 2, 5, 8, 7, 6, 3];
  

  for (let i = 0, time = 0; i < 3; i++) {

    for (let j = 0; j < 8; j++) {
      time += 100;
      let tdWin = td[index[j]].innerHTML;
      setTimeout(function tdColor(){
        td.forEach((x, i, arr) => { arr[i].style.backgroundColor = '#fff'; });
        td[index[j]].style.backgroundColor = 'green';
        if (i == 2 && +tdWin == numRand) {
            td[4].innerHTML = numRand;
            td[4].style.backgroundColor = 'grey';
        }
      }, time);
      if (i == 2 && +tdWin == numRand) {
          break;
      }

    }
    
  }
}
  
  
  /* let start = Date.now();
  let i = 0; */

 /*  let timer = setInterval(function () {

    let time = Date.now() - start;
    
    td.forEach((x, i, arr) => { arr[i].style.backgroundColor = '#fff'; });
    
    let index = [0, 1, 2, 5, 8, 7, 6, 3];
    let j;
    
    
    if (i < 7) {
      j = index[i++];
    }else{
      j = index[i];
      i = 0;
    }
    let tdText = td[j].innerHTML;

    td[j].style = 'border: 2px solid #000; width: 50px; height: 50px; text-align: center; background-color: green;';


    if (time >= 3000) {
      if (+tdText == numRand) {
        td[4].innerHTML = numRand;
        td[4].style.backgroundColor = 'gray';
        clearInterval(timer);
        return;
      }
    }

  }, 100);
} */

/* Задача. Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
Тир
Поля(властивості)
Масив, у якому зберігається поле з зайцями

Методи (дії)
Метод пострілу (задається позиція пострілу)
Виведення ігрового поля
 */
/* 
let tir = {
  home: [0, 1, 1, 0, 0, 1, 0, 1, 0],
  shot: function () {
    let input = document.querySelector('input');
    let result = input.value || 10;
    if (result < 0 && result > 9) {
      result = 10;
    }
    return result;
  },
  game: function () {

    let table = document.createElement('table');
    table.style = 'border-collapse: collapse; margin-bottom: 15px;';

    for (let i = 0; i < 3; i++) {
      let tr = document.createElement('tr');
      for (let j = 0; j < 3; j++) {
        let td = document.createElement('td');
        td.style = 'width: 60px; height: 60px; border: 2px solid #000; text-align: center;';
        switch (i) {
          case 0:
            td.innerHTML = j + 1;
            break;
          case 1:
            td.innerHTML = j + 4;
            break;
          case 2:
            td.innerHTML = j + 7;
            break;
        }
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }

    let body = document.body;
    body.appendChild(table);

    let inp = document.createElement('input');
    inp.placeholder = 'Для выстрела введите число от 0 до 8';
    body.appendChild(inp);

    let tirBtn = document.createElement('button');
    tirBtn.innerHTML = 'Сделать выстрел';

    tirBtn.addEventListener('click', function () {
      let tdAll = document.querySelectorAll('td');
      let shotNew = tir.shot();
      let input = document.querySelector('input');
      if (+shotNew < 0 || +shotNew > 9) {
        input.placeholder = 'Неверный ввод';
        input.value = '';
      } else {
        let i = +shotNew - 1;
        if (tir.home[i] == 1) {
          tdAll[i].style.backgroundColor = 'green';
        } else if (tir.home[i] == 0) {
          tdAll[i].style.backgroundColor = 'red';
        } else {
          console.log(shotNew);
        }
      }
    });
    body.appendChild(tirBtn);
  }
}

tir.game(); */

/* Задача. Створити об’єкт «Авто».

Авто

Поля(властивості)
Марка
Розмір бака
Кількість наявних літрів
Кількість місць
Кількість пасажирів

Методи (дії)
Заправка на вказану кількість літрів
Виведення кількості пасажирів
Додавання пасажирів
Висадка пасажирів
 */

/* let auto = {
  name: 'audi',
  tank: 35,
  petrol: 20,
  place: 5,
  pass: 3,

  ref: function () {
    let addPetrol = 10;
    this.petrol += addPetrol;
  },
  setPass: function () {
    document.write(this.pass);
  },
  addPass: function(){
    let newPass = 1;
    this.pass += newPass;
  },
  subPass: function(){
    let newPass = 2;
    this.pass -= newPass;
  }
}
 */


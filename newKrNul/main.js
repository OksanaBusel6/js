import {view} from './view.js';
import {Module} from './module.js';

const module = new Module();

view.createGame();


document.querySelector('.question__items').addEventListener('click', function(e){
    let num = e.target.dataset.num;
    module.choseNum(num);
});

document.querySelector('.btn-next').addEventListener('click', function(){
  let usersName = module.startGame();
  view.startGame(usersName);
});

document.querySelector('.game__table').addEventListener('click', function(e){
  if (e.target.classList.contains('game__item')) {
    let that = e.target;
    let {win, num, name} = module.clickTd(that);
    if (win) {
      (win > 0) ? view.overGame(that, win, num, name) : view.nextMove(that, num, name);
    } 
  } 
});

document.querySelector('.wrapper').addEventListener('click', (e) => {
  if (e.target.classList.contains('close')) {
    let closeGame = module.closeGame();
    view.closeGame(closeGame);
  }
});

/* let itemsTd = document.querySelectorAll('td');
for (let i = 0; i < itemsTd.length; i++) {
  let itemTd = itemsTd[i];
  itemTd.addEventListener('click', function() {
    let that = this;
    let {win, num, name} = module.clickTd(that);
    if (win) {
      (win > 0) ? view.overGame(that, win, num, name) : view.nextMove(that, num, name);
    } else {
      console.log(num);
    }
  });
} */





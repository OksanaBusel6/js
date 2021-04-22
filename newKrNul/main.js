import {view} from './view.js';
import {module} from './module.js';

view.createGame();


document.querySelector('.question__items').addEventListener('click', function(e){
    let num = e.target.dataset.num;
    module.choseNum(num);
});

document.querySelector('.btn-next').addEventListener('click', function(){
  let usersName = module.startGame();
  view.startGame(usersName);
});

let itemsTd = document.querySelectorAll('td');
for (let i = 0; i < itemsTd.length; i++) {
  let itemTd = itemsTd[i];
  itemTd.addEventListener('click', function() {
    let that = this;
    let {win, num, name} = module.clickTd(that);
    if (win) {
      (win > 0) ? view.overGame(win, name) : view.nextMove(that, num, name);
    } else {
      console.log(num);
    }
  });
  
}


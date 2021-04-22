class Block {
  constructor(classN, selec = 'div'){

    this.tag = selec;
    this.class = classN;
    this.select = '.' + classN;
    this.create(selec);

  }
  create(selec = 'div') {
    let block = document.createElement(selec);
    block.className = this.class;
    this.block = block;
  }
}

class Div extends Block {
  constructor(classN, text = '', selec = 'div') {
    super(classN, selec);
    this.text = text;
    this.innerHtml = this.text;
    this.block.innerHTML = this.innerHtml;
  }
  toStr() {
    return `<${this.tag} class="${this.class}">${this.innerHtml}</${this.tag}>`;
  }
  
}

class Input extends Block {
  constructor(classN, value = '', selec = 'input') {
    super(classN, selec);
    this.value = value;
    this.block.value = this.value;
  }
  toStr() {
    return `<${this.tag} class="${this.class}" type="text" value="${this.value}"/>`;
  }
}

function addToParents(paren, child, plase = 'afterBegin') {
  document.querySelector(paren).insertAdjacentHTML(plase, child);
}




/* ----------------------------------Start---------------------------------------- */

export const view = {
  createGame() {
    createFIrstState();
    createGameState();
  },
  
  startGame(names) {
    if (typeof names != 'object') {
      document.querySelector('.question__title').style.color = 'red';
      return false;
    } else {
      dNone('.question');
      dBlock('.game');
      dBlock('.btn-over')
      let text1 = `Ходит ${names[0]}`;
      addText('.game__text', text1);
    }
  },
  
  nextMove(that, num, name) {
    (num == 1) ? that.innerHTML = 'X' : that.innerHTML = 'O';

    const text = `Ходит ${name}`;
    addText('.game__text', text);

  },

  overGame(win, name) {
    const text = `Выиграл ${name}!`;
    (win == 1) ? addText('.game__text', text) : addText('.game__text', name);
  }

};

function createGameState() {
  let tabInner = new Div('game');
  addToParents('.wrapper', tabInner.toStr());
  
  let tabClose = new Div('game__close', 'X', 'button');
  let gameText =new Div('game__text', '');
  let table = new Div('game__table', '', 'table');
  addToParents(tabInner.select, [tabClose.toStr(), gameText.toStr(), table.toStr()].join(' '));
  
  for (let i = 0; i < 3; i++) {
    let tr = new Div(`game__items` , '', 'tr');
    let tdItems = [];

    for (let j = 0; j < 3; j++) {
      let td = new Div('game__item', '', 'td');
      tdItems.push(td.toStr());
    }
    
    tr.block.innerHTML = tdItems.join(' ');
    document.querySelector('.game__table').appendChild(tr.block);
  }

  let btnOver = new Div('btn-over', 'Начать заново', 'button');
  addToParents('.wrapper', btnOver.toStr(), 'beforeend');
}
  
  function createFIrstState() {
    let wrapper = new Div('wrapper');
    addToParents('body', wrapper.toStr());
    
    let ques = new Div('question');
    addToParents(wrapper.select, ques.toStr());
    
    let quesTitle = new Div('question__title', 'Сделайте выбор для первого игрока');
    let quesItems = new Div('question__items');
    let nameInner = new Div('name');
    let quesBtnNext = new Div('btn-next', 'Начать игру', 'button');
    let itemsQues = [quesTitle.toStr(), quesItems.toStr(), nameInner.toStr(), quesBtnNext.toStr()].join(' ');
    addToParents(ques.select, itemsQues);
    
    
    let quesBtnX = new Div('question__item', 'X', 'button');
    let quesBtnO = new Div('question__item', 'O', 'button');
    let buttons = [quesBtnX.toStr(), quesBtnO.toStr()].join(' ');
    addToParents(quesItems.select, buttons);
    
    let quesButtons = document.querySelectorAll('.question__item');
    quesButtons[0].setAttribute('data-num', 1);
    quesButtons[1].setAttribute('data-num', 2);
    
    
    let nameTitle1 = new Div('name__title', 'Имя первого игрока');
    let nameTitle2 = new Div('name__title', 'Имя второго игрока');
    let userName1 = new Input('name__input');
    let userName2 = new Input('name__input');
    
    let itemsName = [nameTitle1.toStr(), userName1.toStr(), nameTitle2.toStr(), userName2.toStr()].join(' ');
    addToParents(nameInner.select, itemsName);
}

function dBlock(selector) {
  document.querySelector(selector).style.display = 'block';
}

function dNone(selector) {
  document.querySelector(selector).style.display = 'none';
}

function addText(selector, text) {
  document.querySelector(selector).innerHTML = text;
}



















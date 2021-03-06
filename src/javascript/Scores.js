'use strict'

class Scores{

  constructor(ulElement, createHtml) {
    this.storage = window.localStorage;

    this.ulElement = ulElement;
    this.createHtml = createHtml;
  }

  createBoard() {
    this.cleanBoard(this.ulElement);
    this.sortHighest();
  }

  store(pScore, pName) {
    this.storage.setItem(pName, pScore);
  }

  cleanBoard() {
    while (this.ulElement.firstChild){
      this.ulElement.firstChild.remove();
    }
  }

  sortHighest() {
    let keys = Object.keys(this.storage),
    i, len = keys.length;

    const sorted = keys.sort(function(a, b){
      return b.length - a.length || a < b;
    });

    for (i = 0; i < 10; i++) {
      const k = sorted[i];

      this.drawSorted(k, this.storage[k]);
    }
  }

  drawSorted(k, key) {
    const scoreBoard = this.createHtml('<li class="score-row"></li>');
    if (key){
      this.ulElement.appendChild(scoreBoard);
      scoreBoard.innerText = key + ' = ' + k + ' Pts';
    }
  }
}
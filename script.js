const gameboard = (function() {
  let _board = ['','','',
                '','','',
                '','',''];
  
  // cache DOM
  let cells = document.querySelectorAll('.cell');  

  // bins events
  cells.forEach(cell => cell.addEventListener('click', move));

  function _render(item) {
    if (_board[item]) {
      cells[item].classList.add('mdi-close');
    } else {
      cells[item].classList.add('mdi-circle-outline');
    }
  }

  function _checkScore() {
    _board.forEach(row => {
      // if someone win call _endgame
    });
  }

  function _endgame() {}

  function move(e) {
    let i = e.target.dataset.index;
    if (_board[i] === '') console.log(_board[i]);
    _render(i)
    _checkScore();
  }

  return {
    move: move,
  }
})();

const playerFactory = (player, symbol) => {

  const sayPlayer = () => console.log(player);
  const saySymbol = () => console.log(symbol);
  

  return {
    sayPlayer: sayPlayer,
  }
};
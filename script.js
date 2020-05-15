const playerFactory = (player, symbol) => {
  const _score = 0;

  const sayPlayer = () => console.log(player);
  const saySymbol = () => console.log(symbol);
  
  return {
    sayPlayer,
    saySymbol,
  }
};

const gameboard = (function() {
  const _board = ['','','',
                  '','','',
                  '','',''];
  
  function updateBoard(i) {
    _board[i] = '1'; //some stuff
    console.log(_board);
    _checkScore();
  }

  function _checkScore() {}

  return {
    updateBoard,
  }
})();

const match = (function() {

  // cache DOM
  const _player1Name = document.querySelector('.player1Name');
  const _player2Name = document.querySelector('.player2Name');
  const _board = document.querySelectorAll('.cell');

  // bind events
  _board.forEach(cell => cell.addEventListener('click', move));

  const player1 = playerFactory(_player1Name.value,'x');
  const player2 = playerFactory(_player2Name.value,'x');

  function move(e) {
    let i = e.target.dataset.index;
    gameboard.updateBoard(i);
  };

  return {
    move,
  }
})();
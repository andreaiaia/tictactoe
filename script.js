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
  
  // cache DOM
  const _gameGrid = document.querySelectorAll('.cell');

  function _render() {
    _board.forEach(cell => {
      let index = _board.indexOf(cell);
      _gameGrid[index].classList.add(cell);
    });
    
  }
  
  function updateBoard(i, player) {
    if (player) {
      _board[i] = 'mdi-close'; // x
    } else {
      _board[i] = 'mdi-circle-outline'; // o
    }
    _checkScore();
    _render();
  }

  function _checkScore() {
    console.log('hi');
    
  }

  return {
    updateBoard,
  }
})();

const match = (function() {
  let _turn = true; //true = player1, false = player2
  // cache DOM
  const _player1Name = document.querySelector('.player1Name');
  const _player2Name = document.querySelector('.player2Name');
  const _board = document.querySelectorAll('.cell');

  // bind events
  _board.forEach(cell => cell.addEventListener('click', move));

  const player1 = playerFactory((_player1Name.value || 'player1'),'x');
  const player2 = playerFactory((_player2Name.value || 'player2'),'x');

  function move(e) {
    let i = e.target.dataset.index;
    gameboard.updateBoard(i, _turn);
    _turn = !_turn;
  };

  return {
    move,
  }
})();
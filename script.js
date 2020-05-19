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
  const _winComb = ['012', '345', '678',
                    '036', '147', '258',
                    '048', '246'];
  
  // cache DOM
  const _gameGrid = document.querySelectorAll('.cell');

  function _render() {
    for (let i = 0; i < _board.length; i++) {
      if (_board[i] === 'x') {
        _gameGrid[i].classList.add('mdi-close');
      } else if (_board[i] === 'o') {
        _gameGrid[i].classList.add('mdi-circle-outline');
      }
    }

  }
  
  function updateBoard(i, player) {
    if (player && _board[i] === '') {
      _board[i] = 'x'; // x
    } else if (_board[i] === '') {
      _board[i] = 'o'; // o
    }
    _checkScore();
    _render();
  }

  function _checkScore() {
    let xScore = '';
    let oScore = '';
    for (let i = 0; i < _board.length; i++) {
      if (_board[i] === 'x') xScore += i;
      else if (_board[i] === 'o') oScore += i;
    }
    console.log(xScore);
    
    if (_winComb.includes(xScore)) _winning('player1');
    else if (_winComb.includes(oScore)) _winning('player2')
  }

  function _winning(player) {
    console.log(`${player} won!`);
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
  const _human = document.querySelector('#human');
  const _ai = document.querySelector('#ai');
  const _board = document.querySelectorAll('.cell');

  // bind events
  _board.forEach(cell => cell.addEventListener('click', move));

  const player1 = playerFactory((_player1Name.value || 'player1'),'x');
  const player2 = playerFactory((_player2Name.value || 'player2'),'x');

  function move(e) {
    let i = e.target.dataset.index;
    if (e.target.classList.contains('mdi-circle-outline') ||
        e.target.classList.contains('mdi-close')) return;
    gameboard.updateBoard(i, _turn);
    _turn = !_turn;
  };

})();
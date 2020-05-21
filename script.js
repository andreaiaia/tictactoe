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
  const _board = [0,0,0,
                  0,0,0,
                  0,0,0];
  
  // cache DOM
  const _gameGrid = document.querySelectorAll('.cell');

  function _render() {
    for (let i = 0; i < _board.length; i++) {
      if (_board[i] === 1) {
        _gameGrid[i].classList.add('mdi-close');
      } else if (_board[i] === 4) {
        _gameGrid[i].classList.add('mdi-circle-outline');
      }
    }

  }
  
  function updateBoard(i, player) {
    if (player && _board[i] === 0) {
      _board[i] = 1; // x
    } else if (_board[i] === 0) {
      _board[i] = 4; // o
    }
    _checkScore(i, player);
    _render();
  }

  function _checkScore(cell, player) {
    // check Column
    var precCol = +cell - 3 < 0 ? _board.length + +cell - 3 : +cell - 3;
    var succCol = +cell + 3 > 8 ? +cell + 3 - 9 : +cell + 3;
    var colSum = _board[cell] + _board[precCol] + _board[succCol];
    if (colSum === 3 || colSum === 12) _winning(player);

    // check Row
    let rowSum;
    if (0 <= cell && cell < 3) {
      rowSum = _board[0] + _board[1] + _board[2];
    } else if (3 <= cell && cell < 6) {
      rowSum = _board[3] + _board[4] + _board[5];
    } else if (6 <= cell && cell < 9) {
      rowSum = _board[6] + _board[7] + _board[8];
    }
    if (rowSum === 3 || rowSum === 12) _winning(player);

    // check Diag
    if ('02468'.includes(cell)) {
      let diagA = _board[0] + _board[4] + _board[8];
      let diagB = _board[2] + _board[4] + _board[6];
      if (diagA === 3 || diagA === 12 || diagB === 3 || diagB === 12) _winning(player);
    }
  }

  function _winning(player) {
    let name = player ? 'x' : 'o';
    console.log(`${name} won!`);
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
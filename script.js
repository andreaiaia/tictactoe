var gameboard = (function() {
  let _board = ['','','',
                '','','',
                '','',''];
  let _player = true; //true = player1, false = player2
  
  // cache DOM
  let cells = document.querySelectorAll('.cell');  

  // bins events
  cells.forEach(cell => cell.addEventListener('click', move));

  function _render() {
    _board.forEach(cell => {
      console.log(_board);
      
      let i = _board.indexOf(cell);
      if (cell === true) {
        cells[i].classList.add('mdi-close');
      } else if (cell === false){
        cells[i].classList.add('mdi-circle-outline');
      } else {
        return;
      }
    });
  }

  function _checkScore() {
    _board.forEach(row => {
      // if someone win call _endgame
    });
  }

  function _endgame() {}

  function move(e) {
    let i = e.target.dataset.index;
    _board[i] = _player;
    _player = !_player;
    _render()
  }

  return {
    move: move,
  }
})();
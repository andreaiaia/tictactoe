var gameboard = (function() {
  let _board = [];
  
  // cache DOM
  let cells = document.querySelectorAll('.cell');

  // bins events
  cells.forEach(cell => cell.addEventListener('onclick', move))

  function _checkScore() {
    _board.forEach(row => {
      // if someone win call _endgame
    });
  }

  function _endgame() {}

  function move() {
    _board.push('hey');
    console.log(_board);
    
    console.log('move');
  }

  return {
    move: move,
  }
})();
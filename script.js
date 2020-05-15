const playerFactory = (player, symbol) => {
  const _score = 0;

  const sayPlayer = () => console.log(player);
  const saySymbol = () => console.log(symbol);
  
  return {
    sayPlayer,
    saySymbol,
  }
};

const gameboard = function() {
  const _board = ['','','',
                  '','','',
                  '','',''];
};

const match = (function() {

  // chache DOM
  const player1Name = document.querySelector('.player1Name');
  const player2Name = document.querySelector('.player2Name');

  const player1 = playerFactory(player1Name.value,'x');
})();
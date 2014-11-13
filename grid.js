( function() {
  if (typeof Snake === "undefined") {
    window.Snake = {};
  }
  
  var Grid = Snake.Grid = function(size, $el, newSnake) {
    this.grid = makeGrid(size);
    this.snake = newSnake;
  };
  
  function makeGrid(size) {
    var grid = new Array(size);
    for (var i = 0; i < size; i++) {
      grid[i] = new Array(size);
    }
    
    return grid;
  };
  
  
  Grid.prototype.render = function() {
    for (var i = 0; i<this.grid.length; i++) {
      for (var j = 0; j<this.grid.length; j++)
      if (this.grid[i][j] === undefined) {
        console.log(".");
      } else {
        console.log("s");
      }
    }
  };
  
})();
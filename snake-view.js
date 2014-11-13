( function() {
  if (typeof Snake === "undefined") {
    window.Snake = {};
  }

  var View = Snake.View = function ($el, newBoard) {
    var that = this;
    this.$el = $el;
    this.board = newBoard;
    this.setupBoard(20);
    this.bindEvents();
    window.setInterval(that.step.bind(that), 500);
  };
  

  View.prototype.step = function() {
    this.board.snake.move();
  };
  
  View.prototype.bindEvents = function () {
    var that = this;
    this.$el.on("keydown", that.handleKeyEvent.bind(that));
  };

  View.prototype.handleKeyEvent = function (event) {
    if (event.keyCode === 37) {
      this.board.snake.turn("W");
    } else if (event.keyCode === 38) {
      this.board.snake.turn("N");
    } else if (event.keyCode === 39) {
      this.board.snake.turn("E");
    } else if (event.keyCode === 40) {
      this.board.snake.turn("S");
    }
  };

  View.prototype.setupBoard = function (n) {
    for (var i =0 ; i<n; i++) {
      var $outerDiv = $("<div></div>");
      $outerDiv.attr("style", "width: 360; margin-top: -6px;");
      this.$el.append($outerDiv);
     for (var j = 0; j<n; j++) {
       var $innerDiv = $("<div data-pos='" + i + "," + j + "'></div>");
       $innerDiv.attr("style", "display: inline-block; border: 3px solid               black; height: 15px; width: 15px; margin-left: -3px");
       $outerDiv.append($innerDiv);
     }
    }
  };

  
})();
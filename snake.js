( function() {
  if (typeof Snake === "undefined") {
    window.Snake = {};
  }
  
  var Serpent = Snake.Serpent = function ($el)
  {
    this.$el = $el;
    this.dir = "S";
    this.segments = [[10, 10]]; 
  };
  
  Serpent.prototype.move = function () {
    var head_pos = this.segments[0].slice();
    var tail_pos = this.segments.pop();
    var $tail = $("[data-pos='" + tail_pos + "']"); //data-pos=[0, 1]
    $tail.removeClass("snake");
    var coordDelta = coordChange(this.dir);
    head_pos[0] += coordDelta[0];
    head_pos[1] += coordDelta[1];
    this.segments.unshift(head_pos);
    var $head = $("[data-pos='" + head_pos + "']");
    $head.addClass("snake");
  };
  
  Serpent.prototype.turn = function(newDir)  {
    this.dir = newDir;
  };
  
  function coordChange(dir) {
    if (dir === "S") {
      return [1, 0];
    } else if (dir === "N") {
      return [-1, 0];
    } else if (dir === "W") {
      return [0, -1];
    } else {
      return [0, 1];
    }
  };
  
})();
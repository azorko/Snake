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
    var coordDelta = this.coordChange(this.dir);
    head_pos[0] += coordDelta[0];
    head_pos[1] += coordDelta[1];
    this.segments.unshift(head_pos);
    var $head = $("[data-pos='" + head_pos + "']");
    if ($head.hasClass("apple")) {
      $head.removeClass("apple");
      $tail.addClass("snake");
      this.segments.push(tail_pos);
    }
    $head.addClass("snake");
  };
  
  Serpent.prototype.turn = function(newDir)  {
    var opposites = {
      "N": "S",
      "S": "N",
      "E": "W",
      "W": "E"
    };
    if (opposites[this.dir] !== newDir) {
      this.dir = newDir;
    }
  };
  
  Serpent.prototype.isDead = function () {
    if (this.segments[0][0] > 19 || this.segments[0][0] < 0 ||                  this.segments[0][1] > 19 || this.segments[0][1] < 0) {
      return true;
    }
    
    var head = this.segments[0]
    var body = this.segments.slice(1);
    for (var i = 0; i < body.length; i++){
      var xMatch = (body[i][0] === head[0]);
      var yMatch = (body[i][1] === head[1]);
      if (xMatch && yMatch) {
        return true;
      }
    }
    return false;
  };
  
  Serpent.prototype.coordChange = function(dir) {
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
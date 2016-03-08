var makeDaveDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node.addClass('dave');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

makeDaveDancer.prototype = Object.create(makeDancer.prototype);
makeDaveDancer.prototype.constructor = makeDaveDancer;

makeDaveDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};


makeDaveDancer.prototype.myMoves = function() {
  this.twirl();
  //this.sway();
};

// Line david up very quickly
makeDaveDancer.prototype.lineUp = function(newTopPosition, newLeftPosition) {
  this.$node.animate({
    top: newTopPosition + "px",
    left: newLeftPosition + 'px'
  });
  // // var elem = document.getElementsByClassName('dave');
  // var elem = this;
  // var top = elem.style.top;
  // var left = elem.style.left;

  // var id = setInterval(frame, 5);

  // var frame = function () {
  //   if (top === newTopPosition && left === newLeftPosition) {
  //     clearInterval(id);
  //   } else {
  //     if (top !== newTopPosition) {
  //       top++;
  //       elem.style.top = top + 'px'; 
  //     }
  //     if (left !== newLeftPosition) {
  //       left++;
  //       elem.style.left = left + 'px'; 
  //     }
  //   }
  // };
};

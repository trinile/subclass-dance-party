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


var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, arguments);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  this.oldStep = this.step;
  // return blinkyDancer;
};


makeBlinkyDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    var oldStep = this.OldStep;
    oldStep.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // blinkyDancer.$node.toggle();
  };



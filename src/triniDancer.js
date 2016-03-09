var makeTriniDancer = function(top, left, timeBetweenSteps) {
  var height = 550;
  // var width = $("body").width() / 3;
  makeDancer.call(this, height, left, timeBetweenSteps);
  this.$node.addClass('trini');
    // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.specialMove();
};

makeTriniDancer.prototype = Object.create(makeDancer.prototype);
makeTriniDancer.prototype.constructor = makeTriniDancer;

makeTriniDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};

makeTriniDancer.prototype.specialMove = function() {
  var that = this;
  $(that.$node).click(function() {
    that.removeMoves();
    $(that.$node)
      .css({ position: 'relative', left: 100 })
      .rotate({ count: 2, easing: 'ease-in', animate: { left: 120 } })
      .fadeTo(400, 0.1)
      .fadeTo(300, 1)
      .delay(200)
      .rotate({ endDeg: -360, count: 1, easing: 'ease-out', animate: { left: 0 } });
  });

};

makeTriniDancer.prototype.myMoves = function() {
  this.electricSlide();
};

// 
makeTriniDancer.prototype.lineUp = function(newTopPosition, newLeftPosition) {
  this.$node.animate({
    top: newTopPosition + 'px',
    left: newLeftPosition + 'px'});  
};
var makeTriniDancer = function(top, left, timeBetweenSteps) {
  var height = $("body").height() / 1.5;
  var width = $("body").width() / 2;
  // var height = 50%;
  // var width: 50%;
  makeDancer.call(this, height, width, timeBetweenSteps);
  this.$node.addClass('trini');
  this.electricSlide();
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.animate({
    transform: 'translate(3em,0)'
  });
};

makeTriniDancer.prototype = Object.create(makeDancer.prototype);
makeTriniDancer.prototype.constructor = makeTriniDancer;

makeTriniDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // var text = '+=' + this.left + 100 + 'px';
  // this.$node.animate({
  //       left: '+=100px',
  //       // height: '+=150px',
  //       // width: '+=150px'
  //   }, 10000);

  //  this.$node.animate({
  //       left: '-=100px',
  //       // height: '+=150px',
  //       // width: '+=150px'
  //   }, "slow");

};

makeTriniDancer.prototype.specialMove = function() {
  var obj = this;

};


var makeTriniDancer = function(top, left, timeBetweenSteps) {
  var height = $("body").height() / 1.5;
  var width = $("body").width() / 2;
  makeDancer.call(this, height, width, timeBetweenSteps);
  this.$node.addClass('trini');
  this.electricSlide();
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
  // var text = '+=' + this.left + 100 + 'px';
  // this.$node.animate({
  //       left: '+=100px',
  // //       // height: '+=150px',
  // //       // width: '+=150px'
  //   }, 10000);

  //  this.$node.animate({
  //       left: '-=100px',
  // //       // height: '+=150px',
  // //       // width: '+=150px'
  //   }, "slow");
  //  var obj = this;
   // var fn = this.specialMove
  
  // setTimeout(function() {
  //   fn.call(obj);
  // }, 5000);
};

makeTriniDancer.prototype.specialMove = function() {
  var obj = this.$node;
    $(obj).click(function() {
    $(this)
      .css({ position:'relative', left:0 })
      .rotate({ count:2, easing:'ease-in', animate:{ left:120 } })
      .fadeTo(400, 0.1)
      .fadeTo(300, 1)
      .delay(200)
      .rotate({ endDeg:-360, count:2, easing:'ease-out', animate:{ left:0 } });
  });

};


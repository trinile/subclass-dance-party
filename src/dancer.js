// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.step();
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.movesArr = [];
  this.setPosition(top, left);
  this.specialMove();
  this.myMoves();
};

makeDancer.prototype.step = function() {
  var obj = this;
  var fn = this.step;
  setTimeout(function() {
    fn.call(obj);
  }, this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.electricSlide = function() {
  this.$node.addClass('electricSlide');
  this.movesArr.push('electricSlide');
};

makeDancer.prototype.sway = function() {
  this.$node.addClass('sway');
  this.movesArr.push('sway');
};

makeDancer.prototype.twirl = function() {
  this.$node.addClass('twirl');
  this.movesArr.push('twirl');
};

// Unique move for the dancer
makeDancer.prototype.specialMove = function() {

};

// List of moves the dancer will perform
makeDancer.prototype.myMoves = function() {

};

// Remove the current moves applied to the dancer's class from the dancer
makeDancer.prototype.removeMoves = function() {
  this.movesArr.forEach(function(item) {
    this.$node.removeClass(item);
  });
};

// Line up dancer to the same position on the dance floor
makeDancer.prototype.lineUp = function() {
  //
};

describe('triniDancer', function() {

  var triniDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    triniDancer = new makeTriniDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(triniDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should initialize height for each instance', function() {
    var triniDancer2 = new makeTriniDancer(100, 200, timeBetweenSteps);
    expect(triniDancer.top).to.be.equal(triniDancer2.top);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(triniDancer, 'step');
      expect(triniDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(triniDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(triniDancer.step.callCount).to.be.equal(2);
    });

    it('should call my moves and add the electric slide to span', function () {
      expect(triniDancer.movesArr.indexOf('electricSlide')).to.not.be.equal(-1);
    });
  });
});

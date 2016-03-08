describe('daveDancer', function() {

  var daveDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    daveDancer = new makeDaveDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(daveDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(daveDancer.$node, 'toggle');
    daveDancer.step();
    expect(daveDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(daveDancer, 'step');
      expect(daveDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(daveDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(daveDancer.step.callCount).to.be.equal(2);
    });
  });
});

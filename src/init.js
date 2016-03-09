$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    //add each dancer created to windows.dancers array
    window.dancers.push(dancer);

    //get distance between two dancers and returns distance
    var getDistance = function(currentDancerPosition, neighborPosition) {
      //returns the square root of squared difference of x-coordinate + squared-difference of y-coordinate
      //x-difference of dancers
      var xDiff = currentDancerPosition.left - neighborPosition.left;
      //y-difference of dancers
      var yDiff = currentDancerPosition.top - neighborPosition.top;
      return Math.sqrt( Math.pow(xDiff, 2) + Math.pow(yDiff, 2) );
    };

    //When mouse moves over dancer, find nearest partner and dance together
    //then call getPartner method
    dancer.$node.on('mouseover', function() {
      //find position of current dancer
      var myPosition = dancer.$node.position(); // { top : #, left : #}
      var closestDancer = { dancer: null, distance: null };
      //iterate through all dancers and find nearest neighbor by distance.
      window.dancers.forEach(function(neighbor) {
        if (neighbor !== dancer) {
          var neighborPosition = neighbor.$node.position(); 
          //determine distance between current dancer and neighbor
          var distance = getDistance(myPosition, neighborPosition);
          if (closestDancer.distance === null || distance < closestDancer.distance) {
            closestDancer.distance = distance;
            closestDancer.dancer = neighbor;
          }
        }
      }); 
      if (closestDancer.dancer !== null) {
        dancer.getPartner(closestDancer.dancer);
      }
    });


    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function (event) {
    event.preventDefault();
    var initialPositionTop = 400;
    var initialPositionLeft = 50;

    window.dancers.forEach(function (dancer) {
      // call lineup for dancer and provide new lineup position
      dancer.lineUp(initialPositionTop, initialPositionLeft);
      initialPositionLeft += 100;
    });

  });
});

